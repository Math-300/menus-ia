# AI Integration Rules

## Trigger
- `**/ai/**` directory
- `**/api/ai/**` directory

## API Route Pattern

### Secure AI Calls
```typescript
// app/api/ai/generate-description/route.ts
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function POST(req: Request) {
  // 1. Verify authentication
  const user = await verifyAuth(req);
  if (!user) return unauthorized();

  // 2. Validate input
  const { dishName, ingredients, cuisine } = await req.json();
  if (!dishName) return badRequest('Dish name required');

  // 3. Rate limit check
  const canProceed = await checkRateLimit(user.id);
  if (!canProceed) return rateLimited();

  // 4. Generate content via OpenRouter
  const response = await fetch(OPENROUTER_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_DEFAULT_MODEL || 'glm-5',
      messages: [{ role: 'user', content: prompt }]
    })
  });

  const result = await response.json();

  // 5. Log usage
  await logAIUsage(user.tenant_id, 'description', result.usage);

  return Response.json({ description: result.choices[0].message.content });
}
```

## Prompt Engineering

### System Prompts Location
- Store in `lib/ai/prompts.ts`
- Version control all prompts
- Use templates with variables

### Prompt Template
```typescript
export const DISH_DESCRIPTION_PROMPT = `
You are a culinary expert writing for a restaurant menu.
Generate an appetizing description for:

Dish: {{dishName}}
Ingredients: {{ingredients}}
Cuisine: {{cuisine}}

Requirements:
- 2-3 sentences
- Highlight key flavors
- Use sensory language
- Avoid clichés
`;
```

## Error Handling
- Graceful fallbacks for AI failures
- Retry with exponential backoff
- Log errors for monitoring
- User-friendly error messages

## Cost Management
- Track token usage per tenant
- Implement quotas by plan
- Cache common responses
- Use smaller models when possible

## Supported Operations
- Dish description generation
- Menu translation
- Allergen detection
- Wine pairing suggestions
- Customer response drafting
