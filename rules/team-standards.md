# Team Standards

## Code Style
- TypeScript strict mode enabled
- Use ESLint + Prettier with project config
- Named exports preferred over default exports
- Descriptive variable names (no single letters except loops)

## File Naming
- Components: PascalCase (e.g., `DishCard.tsx`)
- Utilities: camelCase (e.g., `formatCurrency.ts`)
- Types: PascalCase with descriptive names
- Pages: lowercase with dashes (e.g., `menu-items/`)

## Component Structure
```tsx
// 1. Imports (sorted: React, external, internal, types)
// 2. Types/interfaces
// 3. Constants
// 4. Component
// 5. Sub-components
// 6. Exports
```

## Git Conventions
### Branch Names
- `feat/fe-*` - Frontend features
- `feat/be-*` - Backend features
- `fix/*` - Bug fixes
- `contract/*` - API contract changes
- `docs/*` - Documentation

### Commit Messages
```
type(scope): description

[optional body]

[optional footer]
```

Types: feat, fix, docs, style, refactor, test, chore

## Code Review
- All PRs require at least 1 approval
- PRs must pass CI checks
- No direct commits to main
- Use PR template

## Testing
- Unit tests for utilities and hooks
- Integration tests for API routes
- E2E tests for critical flows
- Minimum 70% coverage for new code
