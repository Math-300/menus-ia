# PWA Audit Skill

Run performance and accessibility audit on the application.

## Trigger
Manual: `/pwa-audit`

## Parameters
- `type`: Audit type
  - `full`: Complete audit
  - `performance`: Performance only
  - `accessibility`: Accessibility only
  - `seo`: SEO only
  - `pwa`: PWA compliance
- `url`: Specific URL to audit (optional)
- `format`: Output format
  - `report`: Detailed report
  - `checklist`: Checklist format
  - `json`: JSON output

## Output
```
docs/
└── audits/
    └── {date}_audit.md        # Audit report
```

## Audit Categories

### Performance
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] TTFB < 600ms
- [ ] Bundle size < 100KB per page
- [ ] Images optimized
- [ ] Lazy loading implemented
- [ ] Caching strategy in place

### Accessibility
- [ ] Color contrast WCAG AA
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Focus indicators
- [ ] Alt text for images
- [ ] Form labels
- [ ] Error messages
- [ ] Skip links

### SEO
- [ ] Meta tags present
- [ ] Open Graph tags
- [ ] Structured data
- [ ] Sitemap
- [ ] Robots.txt
- [ ] Canonical URLs
- [ ] Mobile-friendly

### PWA
- [ ] Manifest.json
- [ ] Service worker
- [ ] Offline support
- [ ] Install prompt
- [ ] Push notifications (optional)
- [ ] Background sync (optional)

## Generated Report Format
```markdown
# MenuOS Audit Report

**Date:** {date}
**URL:** {url}

## Summary

| Category | Score | Status |
|----------|-------|--------|
| Performance | 92 | ✅ Pass |
| Accessibility | 88 | ⚠️ Needs Work |
| SEO | 95 | ✅ Pass |
| PWA | 75 | ⚠️ Needs Work |

## Performance Issues

### Critical
- None

### Warnings
- Image at /hero.jpg could be smaller (2.5MB)
- Consider lazy loading below-fold images

### Suggestions
- Preconnect to cdn.cloudinary.com

## Accessibility Issues

### Critical
- [ ] Missing alt text on 3 images

### Warnings
- [ ] Color contrast on secondary button (3.8:1, needs 4.5:1)

## Recommendations

1. Add missing alt texts
2. Improve button contrast
3. Implement service worker for offline support
```

## Example Usage
```
/pwa-audit type="full"
/pwa-audit type="performance" url="/r/demo-grill"
/pwa-audit type="accessibility" format="checklist"
```

## Rules Applied
- `rules/performance.md`
- `rules/design-system.md`
