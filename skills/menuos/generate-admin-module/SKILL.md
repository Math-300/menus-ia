# Generate Admin Module Skill

Generate a complete admin panel module with CRUD operations.

## Trigger
Manual: `/generate-admin-module`

## Parameters
- `module_name`: Name of the module (e.g., "menu-items", "orders", "customers")
- `entity`: Entity type being managed
- `fields`: Array of field definitions
  ```typescript
  {
    name: string;
    type: 'text' | 'number' | 'select' | 'multiselect' | 'image' | 'toggle';
    required?: boolean;
    options?: string[]; // for select/multiselect
  }
  ```
- `features`: Array of features
  - `create`: Add new items
  - `edit`: Modify existing items
  - `delete`: Remove items
  - `search`: Search functionality
  - `filters`: Filter by fields
  - `export`: Export data
  - `bulk_actions`: Bulk operations

## Output Structure
```
app/admin/{module_name}/
├── page.tsx                    # List view
├── new/page.tsx               # Create view
├── [id]/page.tsx              # Edit view
├── _components/
│   ├── {Module}Table.tsx      # Data table
│   ├── {Module}Form.tsx       # Create/Edit form
│   ├── {Module}Filters.tsx    # Filter controls
│   └── {Module}Actions.tsx    # Action buttons
└── _actions/
    └── {module}Actions.ts     # Server actions
```

## Generated Code Includes
1. **List view** with data table
2. **Create/Edit forms** with validation
3. **Server actions** for mutations
4. **Optimistic updates**
5. **Toast notifications**
6. **Confirmation dialogs**

## Example Usage
```
/generate-admin-module 
  module_name="menu-items" 
  entity="MenuItem"
  fields=[
    {name: "name", type: "text", required: true},
    {name: "price", type: "number", required: true},
    {name: "category", type: "select", options: ["Starters", "Mains", "Desserts"]},
    {name: "image", type: "image"},
    {name: "available", type: "toggle"}
  ]
  features=["create", "edit", "delete", "search", "filters"]
```

## Rules Applied
- `rules/design-system.md`
- `rules/security.md`
- `rules/team-standards.md`
