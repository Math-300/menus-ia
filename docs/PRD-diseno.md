# MenuOS - Design Requirements Document

## 1. Design Philosophy

**"Make every interaction delightful, every dish irresistible."**

### Core Principles
1. **Mobile-First** - 80%+ of users access via phone
2. **App-Like Experience** - Smooth animations, instant feedback
3. **Appetite Appeal** - Food photography is hero
4. **Accessibility** - WCAG 2.1 AA compliance
5. **Brand Flexibility** - Customizable per tenant

---

## 2. Visual Identity

### Typography
```
Primary Font: Inter (UI text)
- Clean, modern, highly legible
- Weights: 400 (body), 500 (medium), 600 (semibold), 700 (bold)

Secondary Font: Playfair Display (headings)
- Elegant, editorial feel
- Used for: Restaurant name, section headers, dish names
```

### Color System
```css
/* Base Colors */
--white: #FFFFFF;
--black: #000000;
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;

/* Semantic Colors */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;

/* Tenant Customizable */
--primary: var(--tenant-primary, #2563EB);
--secondary: var(--tenant-secondary, #7C3AED);
--accent: var(--tenant-accent, #F59E0B);
```

### Spacing Scale
```
4px  - xs (tight spacing)
8px  - sm (compact elements)
12px - md (default spacing)
16px - lg (comfortable spacing)
24px - xl (section spacing)
32px - 2xl (major sections)
48px - 3xl (page sections)
```

### Border Radius
```
sm: 4px   - buttons, inputs
md: 8px   - cards
lg: 12px  - modals
xl: 16px  - featured elements
full: 9999px - pills, avatars
```

---

## 3. Component Specifications

### 3.1 Dish Card
```
┌─────────────────────────────┐
│ ┌─────────────────────────┐ │
│ │                         │ │
│ │     Hero Image          │ │
│ │     400x300             │ │
│ │                         │ │
│ └─────────────────────────┘ │
│                             │
│ Dish Name                   │
│ $XX.XX            [Add +]   │
│ Short description...        │
│ 🌱 🌶️ ⚡                    │
└─────────────────────────────┘

States:
- Default: Full opacity
- Unavailable: 50% opacity, "Unavailable" badge
- Hover: Subtle lift, shadow increase
- Added to cart: Green border, quantity indicator
```

### 3.2 Category Navigation
```
Mobile:
┌────────────────────────────────────┐
│ ← [Search...]                  🔍  │
├────────────────────────────────────┤
│ [All] [Starters] [Mains] [Desserts]│ ← Horizontal scroll
└────────────────────────────────────┘

Desktop:
┌────────────────────────────────────┐
│ [Search entire menu...]       🔍   │
├────────────────────────────────────┤
│ All  |  Starters  |  Mains  | ...  │ ← Centered tabs
└────────────────────────────────────┘
```

### 3.3 AI Concierge Chat
```
┌────────────────────────────────────┐
│ 🤖 AI Concierge               [X]  │
├────────────────────────────────────┤
│                                    │
│ 🤖 Hi! I'm your dining assistant.  │
│    What are you in the mood for?   │
│                                    │
│    ┌──────────────────────────┐    │
│    │ Something vegetarian     │    │
│    └──────────────────────────┘    │
│    ┌──────────────────────────┐    │
│    │ Spicy recommendations    │    │
│    └──────────────────────────┘    │
│    ┌──────────────────────────┐    │
│    │ Chef's specials          │    │
│    └──────────────────────────┘    │
│                                    │
│ 👤 I want something light and      │
│    vegetarian                      │
│                                    │
│ 🤖 Great choice! I recommend:      │
│    • Mediterranean Salad          │
│    • Grilled Vegetable Wrap       │
│    • Quinoa Buddha Bowl           │
│                                    │
├────────────────────────────────────┤
│ [Type your question...]       [→]  │
└────────────────────────────────────┘
```

### 3.4 Order Summary Modal
```
┌────────────────────────────────────┐
│ Your Order                    [X]  │
├────────────────────────────────────┤
│                                    │
│ ┌────────────────────────────────┐ │
│ │ 🖼️ Grilled Salmon        $28.00│ │
│ │     x1  [−] 1 [+]              │ │
│ │     No lemon, extra herbs      │ │
│ └────────────────────────────────┘ │
│                                    │
│ ┌────────────────────────────────┐ │
│ │ 🖼️ Caesar Salad          $14.00│ │
│ │     x2  [−] 2 [+]              │ │
│ │     Dressing on side           │ │
│ └────────────────────────────────┘ │
│                                    │
├────────────────────────────────────┤
│ Subtotal                    $56.00 │
│ Tax (10%)                    $5.60 │
│ ─────────────────────────────────  │
│ Total                       $61.60 │
├────────────────────────────────────┤
│ [Add more items]                   │
│ [🟢 Order via WhatsApp]            │
└────────────────────────────────────┘
```

---

## 4. Screen Flows

### 4.1 Diner Journey
```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  Scan   │───▶│  Menu   │───▶│  Dish   │───▶│  Cart   │
│   QR    │    │  Home   │    │ Detail  │    │ Review  │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
                    │                              │
                    ▼                              ▼
               ┌─────────┐                   ┌─────────┐
               │   AI    │                   │WhatsApp │
               │Concierge│                   │ Checkout│
               └─────────┘                   └─────────┘
```

### 4.2 Admin Journey
```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  Login  │───▶│Dashboard│───▶│  Menu   │───▶│ Orders  │
│         │    │  Home   │    │  CRUD   │    │  List   │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
                    │
                    ▼
               ┌─────────┐
               │Analytics│
               │         │
               └─────────┘
```

---

## 5. Responsive Breakpoints

```css
/* Mobile First */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Layout Adaptations
| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Dish Grid | 1 col | 2 cols | 3 cols |
| Navigation | Bottom bar | Top bar | Top bar |
| AI Chat | Full screen | Side panel | Side panel |
| Cart | Bottom sheet | Side panel | Side panel |

---

## 6. Animation Guidelines

### Timing
- Fast: 150ms (hover, tap feedback)
- Normal: 300ms (modal open, page transitions)
- Slow: 500ms (complex animations)

### Easing
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Animations
1. **Page Transitions** - Fade + slide
2. **Modal Open** - Scale up + fade
3. **Card Hover** - Subtle lift + shadow
4. **Add to Cart** - Fly to cart icon
5. **Loading States** - Skeleton pulse

---

## 7. Accessibility Requirements

### Color Contrast
- Text: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Interactive elements: Clear focus indicators

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to activate
- Escape to close modals
- Arrow keys for navigation

### Screen Reader Support
- Semantic HTML structure
- ARIA labels where needed
- Live regions for dynamic content
- Alt text for all images

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Design Assets

### Required Assets per Tenant
- Logo (SVG preferred)
- Hero image (1920x600)
- Favicon (32x32, 180x180)
- Brand colors (primary, secondary, accent)

### Required Assets per Dish
- Hero image (800x600 minimum)
- Optional: Gallery images
- Optional: Video

### Icon Library
- Lucide React (consistent style)
- Custom icons for: dietary restrictions, cuisines
