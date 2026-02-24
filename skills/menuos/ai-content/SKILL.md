# AI Content Skill

Generate AI-powered content for menus using OpenRouter.

## Trigger
Manual: `/ai-content`

## AI Provider
This skill uses **OpenRouter** as the AI gateway, supporting multiple models:
- `glm-5` (default) - Fast and cost-effective
- `anthropic/claude-3.5-sonnet` - High-quality creative writing
- `openai/gpt-4` - Advanced reasoning

## Parameters
- `type`: Content type
  - `description`: Dish description
  - `translation`: Menu translation
  - `allergens`: Allergen detection
  - `pairing`: Wine/beer pairing
  - `social`: Social media copy
- `input`: Input data (dish name, ingredients, etc.)
- `language`: Target language for translations

## Output Structure
```
lib/
└── ai/
    ├── client.ts               # AI client setup
    ├── prompts.ts              # Prompt templates
    ├── descriptions.ts         # Description generation
    ├── translations.ts         # Translation functions
    ├── allergens.ts            # Allergen detection
    └── pairings.ts             # Pairing suggestions

app/api/ai/
├── description/
│   └── route.ts               # Generate description
├── translate/
│   └── route.ts               # Translate content
├── allergens/
│   └── route.ts               # Detect allergens
└── pairing/
    └── route.ts               # Get pairings
```

## Prompt Templates
```typescript
// lib/ai/prompts.ts
export const PROMPTS = {
  dishDescription: `
You are a culinary expert writing for a restaurant menu.
Generate an appetizing description for the following dish.

Dish: {{name}}
Ingredients: {{ingredients}}
Cuisine: {{cuisine}}

Requirements:
- 2-3 sentences
- Highlight key flavors and textures
- Use sensory language
- Avoid clichés and superlatives
- Be accurate to the ingredients
`,
  
  translation: `
Translate the following menu content to {{language}}.
Maintain the appetizing tone and culinary terminology.

Content: {{content}}

Requirements:
- Natural, fluent translation
- Preserve formatting
- Use local culinary terms where appropriate
`,

  allergenDetection: `
Analyze the following dish for common allergens.

Dish: {{name}}
Ingredients: {{ingredients}}

List any of these allergens present:
- Gluten/Wheat
- Dairy
- Eggs
- Fish
- Shellfish
- Tree Nuts
- Peanuts
- Soy
- Sesame

Format: Return a JSON array of detected allergens.
`,

  winePairing: `
Suggest wine pairings for the following dish.

Dish: {{name}}
Description: {{description}}
Main ingredients: {{ingredients}}

Provide:
- 2-3 wine suggestions
- Brief explanation for each pairing
- Price range indication (budget, mid, premium)
`
};
```

## Example Usage
```
/ai-content type="description" name="Grilled Salmon" ingredients="salmon, lemon, herbs"
/ai-content type="translation" language="Spanish" content="Grilled Atlantic salmon..."
/ai-content type="allergens" name="Caesar Salad" ingredients="lettuce, parmesan, croutons"
/ai-content type="pairing" name="Ribeye Steak"
```

## Rate Limiting
- Starter: 50 generations/month
- Pro: 500 generations/month
- Enterprise: Unlimited

## OpenRouter Implementation
```typescript
// lib/ai/openrouter.ts
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function generateContent(prompt: string, model?: string) {
  const response = await fetch(OPENROUTER_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL,
    },
    body: JSON.stringify({
      model: model || process.env.OPENROUTER_DEFAULT_MODEL || 'glm-5',
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!response.ok) {
    throw new Error(`OpenRouter API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}
```

## Rules Applied
- `rules/ai-integration.md`
- `rules/security.md`
