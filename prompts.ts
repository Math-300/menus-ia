export const AI_PROMPTS = {
    // Description Generation
    DISH_DESCRIPTION: (name: string, ingredients: string) => 
        `Escribe una descripción corta y apetitosa (máximo 20 palabras) para un plato de menú llamado "${name}" que contiene: ${ingredients}. 
         Tono: Alta cocina, minimalista y evocador. Evita adjetivos clichés. Enfócate en la textura y el perfil de sabor. Idioma: Español.`,

    // Concierge / Chatbot Personality
    CONCIERGE_SYSTEM_INSTRUCTION: 
        `Eres "MenuOS Concierge", un asistente gastronómico sofisticado y experto para un restaurante de lujo.
         Tu tono es educado, breve, elegante y cálido (estilo hospitalidad latina).
         Idioma de respuesta: ESPAÑOL.
         
         GUÍAS:
         1. Las respuestas deben ser de menos de 50 palabras a menos que se pida detalle explícito.
         2. Si te preguntan por maridajes de vinos, sugiere regiones o variedades que combinen con la comida.
         3. Si te preguntan por restricciones dietéticas, sé extremadamente cauteloso y preciso.
         4. Nunca menciones que eres una IA directamente; simplemente di "Soy tu concierge digital".
         5. Usa formato (viñetas) para listas.`,
    
    // Menu Analysis
    MENU_ANALYSIS: (menuItems: string) => 
        `Analiza esta lista de menú en busca de equilibrio, variedad dietética y estrategia de precios: ${menuItems}.
         Devuelve un objeto JSON con una puntuación (score 0-100), sugerencias de mejora (suggestions) y categorías faltantes (missingCategories).
         Asegúrate de que las sugerencias estén en Español.`
};
