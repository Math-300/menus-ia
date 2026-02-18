import { GoogleGenAI, Type } from "@google/genai";
import { AI_PROMPTS } from "../prompts";

// Helper for error logging
const logError = (context: string, error: any) => {
    console.error(`[MenuOS AI Error] Context: ${context}`, error);
};

// Helper to strip Markdown if present (e.g., ```json ... ```)
const cleanJson = (text: string): string => {
    let clean = text.trim();
    if (clean.startsWith('```json')) {
        clean = clean.replace(/^```json/, '').replace(/```$/, '');
    } else if (clean.startsWith('```')) {
        clean = clean.replace(/^```/, '').replace(/```$/, '');
    }
    return clean.trim();
};

// 1. Generate Description for a Menu Item
export const generateDishDescription = async (dishName: string, ingredients: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: AI_PROMPTS.DISH_DESCRIPTION(dishName, ingredients),
    });
    return response.text || "Delicious and fresh.";
  } catch (error) {
    logError("Generate Description", error);
    return "A delightful culinary experience.";
  }
};

// 2. Generate Image for a Menu Item
export const generateDishImage = async (prompt: string, size: "1K" | "2K" | "4K" = "1K"): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          imageSize: size,
          aspectRatio: "4:3",
        }
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    logError("Generate Image", error);
    return null;
  }
};

// 3. Edit Image
export const editDishImage = async (base64Image: string, instruction: string): Promise<string | null> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    {
                        inlineData: {
                            data: base64Image.replace(/^data:image\/\w+;base64,/, ""),
                            mimeType: 'image/png'
                        }
                    },
                    { text: instruction }
                ]
            }
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
              return `data:image/png;base64,${part.inlineData.data}`;
            }
        }
        return null;
    } catch (error) {
        logError("Edit Image", error);
        return null;
    }
}


// 4. Chat with Menu Concierge (with Grounding Sources)
export const chatWithConcierge = async (
  message: string, 
  history: { role: string, parts: { text: string }[] }[],
  useThinking: boolean = false
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const modelName = useThinking ? 'gemini-3-pro-preview' : 'gemini-3-flash-preview';
    
    // Tools configuration
    const config: any = {
      tools: [{ googleSearch: {} }],
      systemInstruction: AI_PROMPTS.CONCIERGE_SYSTEM_INSTRUCTION
    };

    if (useThinking) {
      config.thinkingConfig = { thinkingBudget: 2048 }; 
    }

    const chat = ai.chats.create({
      model: modelName,
      config: config,
      history: history
    });

    const response = await chat.sendMessage({ message });
    
    let finalText = response.text || "I apologize, but I am unable to process your request at this moment.";

    // Extract Grounding Chunks (Sources) if available
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks && chunks.length > 0) {
        const sources = chunks
            .map((chunk: any) => chunk.web ? `• [${chunk.web.title}](${chunk.web.uri})` : null)
            .filter(Boolean);
        
        if (sources.length > 0) {
            finalText += "\n\n**Sources:**\n" + sources.join("\n");
        }
    }

    return finalText;
  } catch (error) {
    logError("Concierge Chat", error);
    return "I'm currently unable to connect to the kitchen services. Please try again shortly.";
  }
};

// 5. Menu Analysis
export const analyzeMenuHealth = async (menuItems: string): Promise<any> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: AI_PROMPTS.MENU_ANALYSIS(menuItems),
      config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                score: { type: Type.NUMBER },
                suggestions: { type: Type.ARRAY, items: { type: Type.STRING }},
                missingCategories: { type: Type.ARRAY, items: { type: Type.STRING }}
            }
        }
      }
    });
    
    // Sanitize and parse
    const rawText = response.text || '{}';
    return JSON.parse(cleanJson(rawText));

  } catch (error) {
    logError("Menu Analysis", error);
    return { score: 0, suggestions: ["System error analyzing menu. Please check logs."] };
  }
};

// 6. Get Personal Recommendations
export const getRecommendations = async (
  likedItems: string[],
  allItems: string[]
): Promise<string[]> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `
      Act as a sommelier and head waiter.
      Context: High-end restaurant menu.
      The user has selected or shown interest in: ${likedItems.join(', ')}.
      Available Menu Items: ${allItems.join(', ')}.
      
      Task: Recommend 4 distinct items from the Available Menu that complement the user's selection. 
      Prioritize variety (e.g., if they picked a main, suggest a starter, drink, or dessert).
      Do not recommend items the user has already selected.
      
      Output: Return ONLY a JSON Array of strings containing the exact names of the recommended items.
    `;
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
       config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
        }
      }
    });

    const rawText = response.text || '[]';
    return JSON.parse(cleanJson(rawText));
  } catch (error) {
    logError("Get Recommendations", error);
    // Fallback: Return empty array so frontend uses defaults
    return [];
  }
};
