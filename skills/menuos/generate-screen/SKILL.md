# Generate Screen Skill

Generate a complete diner-facing screen with all necessary components.

## Trigger
Manual: `/generate-screen`

## Parameters
- `screen_name`: Name of the screen (e.g., "menu", "order-status", "profile")
- `features`: Array of features to include
  - `search`: Search functionality
  - `filters`: Category/dietary filters
  - `cart`: Cart integration
  - `ai_chat`: AI Concierge integration
  - `stories`: Stories carousel

## Output Structure
```
app/(tenant)/[slug]/{screen_name}/
├── page.tsx              # Main page component
├── loading.tsx           # Loading state
├── error.tsx             # Error state
└── _components/          # Screen-specific components
    ├── {ScreenName}Hero.tsx
    ├── {ScreenName}Content.tsx
    └── {ScreenName}Sidebar.tsx
```

## Generated Code Includes
1. **Server Component** for data fetching
2. **Client Components** for interactivity
3. **Suspense boundaries** for streaming
4. **Error handling** with error.tsx
5. **SEO metadata** generation
6. **Accessibility** features

## Example Usage
```
/generate-screen screen_name="menu" features=["search", "filters", "cart", "ai_chat"]
```

## Rules Applied
- `rules/design-system.md`
- `rules/performance.md`
- `rules/ux-patterns.md`
- `rules/security.md`

## Checklist
- [ ] Page component created
- [ ] Loading state implemented
- [ ] Error boundary added
- [ ] Components follow naming conventions
- [ ] Responsive design implemented
- [ ] Accessibility verified
- [ ] SEO metadata added
