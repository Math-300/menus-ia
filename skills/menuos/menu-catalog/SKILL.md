# Menu Catalog Skill

Generate CRUD operations for menu catalog with categories, items, and modifiers.

## Trigger
Manual: `/menu-catalog`

## Parameters
- `operation`: Type of operation
  - `setup`: Initial catalog setup
  - `add-category`: Add new category
  - `add-item`: Add new menu item
  - `add-modifier`: Add modifier group
  - `migrate`: Migrate from mock data

## Output for Setup
```
app/admin/menu/
├── page.tsx                    # Menu overview
├── categories/
│   ├── page.tsx               # Category list
│   └── _components/
├── items/
│   ├── page.tsx               # Items list
│   ├── new/page.tsx           # Add item
│   ├── [id]/page.tsx          # Edit item
│   └── _components/
│       ├── ItemForm.tsx
│       ├── ItemImage.tsx
│       └── ItemModifiers.tsx
└── modifiers/
    ├── page.tsx               # Modifier groups
    └── _components/

lib/
└── menu/
    ├── queries.ts             # Database queries
    ├── mutations.ts           # Server mutations
    └── validation.ts          # Zod schemas
```

## Database Schema Generated
```sql
-- categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id),
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  display_order INT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- menu_items table
CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id),
  category_id UUID REFERENCES categories(id),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  available BOOLEAN DEFAULT true,
  dietary JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- modifier_groups table
CREATE TABLE modifier_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id),
  item_id UUID REFERENCES menu_items(id),
  name TEXT NOT NULL,
  required BOOLEAN DEFAULT false,
  min_select INT DEFAULT 0,
  max_select INT DEFAULT 1
);

-- modifiers table
CREATE TABLE modifiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID REFERENCES modifier_groups(id),
  name TEXT NOT NULL,
  price_adjustment DECIMAL(10,2) DEFAULT 0
);
```

## Example Usage
```
/menu-catalog operation="setup"
/menu-catalog operation="add-item" category="mains"
```

## Rules Applied
- `rules/data-model.md`
- `rules/supabase-rls.md`
- `rules/cloudinary.md`
