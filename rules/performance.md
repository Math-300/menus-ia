# Performance Rules

## Trigger
- `**/components/**` directory
- `**/app/**` directory

## React Performance

### Server Components (Default)
- Use Server Components by default
- Only use 'use client' when necessary:
  - Event handlers (onClick, onChange)
  - useState, useEffect, useRef
  - Browser APIs
  - Third-party libraries that use client features

### Data Fetching
- Use TanStack Query for client-side fetching
- Prefetch data in Server Components
- Use Suspense for loading states
- Implement streaming for slow data

### Code Splitting
```tsx
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false
});
```

### Image Optimization
- Use Next.js Image component
- Specify width and height
- Use blur placeholder for LCP images
- Use priority for above-fold images

## Database Performance

### Query Optimization
- Select only needed columns
- Use indexes for WHERE clauses
- Avoid N+1 queries
- Use pagination for lists

### Caching Strategy
- Use Redis for frequently accessed data
- Cache tenant config in memory
- Use stale-while-revalidate pattern
- Implement cache invalidation on updates

## Bundle Size
- Track bundle size with `@next/bundle-analyzer`
- Keep page bundles under 100KB
- Lazy load non-critical components
- Use tree-shakeable imports

## Core Web Vitals Targets
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- TTFB: < 600ms
