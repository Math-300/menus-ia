const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

interface OpenRouterMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

interface OpenRouterResponse {
    id: string;
    choices: {
        message: {
            role: string;
            content: string;
        };
        finish_reason: string;
    }[];
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
}

export async function chatCompletion(
    messages: OpenRouterMessage[],
    options?: {
        model?: string;
        temperature?: number;
        maxTokens?: number;
    }
): Promise<string> {
    const model = options?.model || process.env.OPENROUTER_DEFAULT_MODEL || 'glm-5';

    const response = await fetch(OPENROUTER_API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
            'X-Title': 'MenuOS',
        },
        body: JSON.stringify({
            model,
            messages,
            temperature: options?.temperature ?? 0.7,
            max_tokens: options?.maxTokens ?? 1024,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`OpenRouter API error: ${error}`);
    }

    const data: OpenRouterResponse = await response.json();
    return data.choices[0]?.message?.content || '';
}

export async function generateDishDescription(
    dishName: string,
    ingredients: string[],
    cuisine?: string
): Promise<string> {
    const systemPrompt = `You are a culinary expert writing for a restaurant menu.
Generate an appetizing description for the following dish.
Requirements:
- 2-3 sentences
- Highlight key flavors and textures
- Use sensory language
- Avoid clichés and superlatives
- Be accurate to the ingredients`;

    const userMessage = `Dish: ${dishName}
Ingredients: ${ingredients.join(', ')}
${cuisine ? `Cuisine: ${cuisine}` : ''}`;

    return chatCompletion([
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
    ]);
}

export async function chatWithConcierge(
    userMessage: string,
    context: {
        menuItems: { name: string; description?: string; price: number; dietary: string[] }[];
        tenantName: string;
    }
): Promise<string> {
    const systemPrompt = `You are an AI Concierge for ${context.tenantName}, a restaurant.
Your role is to help diners explore the menu and make recommendations.

Menu items available:
${context.menuItems.map(item => `- ${item.name}: $${item.price} ${item.dietary.length > 0 ? `(${item.dietary.join(', ')})` : ''}`).join('\n')}

Guidelines:
- Be friendly and helpful
- Make personalized recommendations based on preferences
- Mention dietary restrictions when relevant
- Keep responses concise (2-3 sentences)
- If asked about something not on the menu, politely redirect to available options`;

    return chatCompletion([
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
    ]);
}
