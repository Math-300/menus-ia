# Design System Rules

## UI Components
- Use shadcn/ui as base component library
- All components must be accessible (WCAG 2.1 AA)
- Use Framer Motion for animations (prefer reduced-motion support)

## Styling
- Tailwind CSS for all styling
- Use CSS variables for theming
- Support dark/light mode by default
- Mobile-first responsive design

## Typography
- Font: Inter (UI) + Playfair Display (headings)
- Scale: Tailwind default with custom sizes for hero text

## Colors
- Primary: Customizable per tenant
- Semantic colors: success (green), warning (amber), error (red), info (blue)
- Use CSS variables for tenant theming

## Spacing
- Follow Tailwind spacing scale
- Consistent 4px base unit

## Icons
- Lucide React for all icons
- Consistent size scale: 16, 20, 24, 32

## Layout
- Max container width: 1280px
- Sidebar: 280px (admin)
- Mobile bottom nav: 64px height
