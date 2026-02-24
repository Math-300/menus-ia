// AI Service - OpenRouter Integration
// This file provides client-side functions that call the API routes

// Predefined responses for demo fallback
const FALLBACK_RESPONSES = [
    "¡Excelente pregunta! Te recomiendo nuestro Truffle Smash, es el favorito de la casa.",
    "Para maridar, te sugiero un Malbec Reserva que complementa perfectamente nuestros platos fuertes.",
    "Tenemos opciones vegetarianas deliciosas como el Goddess Buddha Bowl.",
    "Nuestro chef recomienda el Wagyu Steak para una experiencia premium.",
    "El Volcán de Chocolate es perfecto para los amantes del dulce.",
];

// Función para usar desde el cliente (llama a la API route)
export async function sendChatMessage(message: string, tenantSlug?: string): Promise<string> {
    try {
        const response = await fetch('/api/ai/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, tenantSlug }),
        });

        if (!response.ok) {
            // Fallback to mock response on error
            console.warn('Chat API failed, using fallback response');
            return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
        }

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Chat error:', error);
        return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    }
}

// Función para generar descripciones de platos
export async function generateDishDescriptionClient(
    dishName: string,
    ingredients: string[],
    cuisine?: string
): Promise<string> {
    try {
        const response = await fetch('/api/ai/generate-description', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ dishName, ingredients, cuisine }),
        });

        if (!response.ok) {
            // Fallback description
            return `Una deliciosa creación culinaria que destaca por sus sabores únicos y presentación exquisita. ${dishName} es perfecto para los amantes de la buena mesa.`;
        }

        const data = await response.json();
        return data.description;
    } catch (error) {
        console.error('Generate description error:', error);
        return `Una deliciosa creación culinaria que destaca por sus sabores únicos y presentación exquisita. ${dishName} es perfecto para los amantes de la buena mesa.`;
    }
}

// Legacy interface for backward compatibility
interface ChatHistory {
    role: 'user' | 'model';
    parts: { text: string }[];
}

// Legacy function - now calls the API
export async function chatWithConcierge(
    message: string,
    _history: ChatHistory[],
    _thinking: boolean = false
): Promise<string> {
    return sendChatMessage(message);
}

// Legacy function for recommendations
export async function getRecommendations(likedItems: string[], allItems: string[]): Promise<string[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const available = allItems.filter(item => !likedItems.includes(item));
    return available.slice(0, 3);
}

// Legacy function for dish description
export async function generateDishDescription(name: string, tags: string): Promise<string> {
    return generateDishDescriptionClient(name, tags.split(',').map(t => t.trim()));
}

// Mock functions for image generation (not yet migrated)
export async function generateDishImage(prompt: string, size: "1K" | "2K" | "4K"): Promise<string | null> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Return placeholder image
    return `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80`;
}

export async function editDishImage(imageUrl: string, instruction: string): Promise<string | null> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return imageUrl; // Return same image for mock
}

export async function analyzeMenuHealth(menuSummary: string): Promise<{ score: number; suggestions: string[] }> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
        score: 85,
        suggestions: [
            'Considera agregar más opciones vegetarianas',
            'Los precios son competitivos para el segmento',
            'Buena variedad en categorías de bebidas',
            'Podrías expandir la sección de postres'
        ]
    };
}
