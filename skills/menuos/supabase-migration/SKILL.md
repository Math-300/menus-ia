# Supabase Migration Skill

Generate Supabase migration with RLS policies.

## Trigger
Manual: `/supabase-migration`

## Parameters
- `table_name`: Name of the table
- `columns`: Array of column definitions
  ```typescript
  {
    name: string;
    type: string;        // PostgreSQL type
    nullable?: boolean;
    default?: string;
    references?: string; // Foreign key
  }
  ```
- `rls_policies`: Array of RLS policy definitions
  ```typescript
  {
    name: string;
    operation: 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE' | 'ALL';
    using?: string;      // USING expression
    check?: string;      // WITH CHECK expression
  }
  ```
- `indexes`: Array of index definitions

## Output
```
supabase/migrations/
└── {timestamp}_{table_name}.sql
```

## Generated Migration Includes
1. **Table creation** with all columns
2. **Foreign key constraints**
3. **Indexes** for performance
4. **RLS enablement**
5. **RLS policies** for tenant isolation
6. **Trigger** for updated_at
7. **Comments** for documentation

## Example Usage
```
/supabase-migration
  table_name="orders"
  columns=[
    {name: "id", type: "UUID", default: "gen_random_uuid()"},
    {name: "tenant_id", type: "UUID", references: "tenants(id)"},
    {name: "customer_name", type: "TEXT"},
    {name: "total", type: "DECIMAL(10,2)"},
    {name: "status", type: "TEXT", default: "'pending'"},
    {name: "created_at", type: "TIMESTAMPTZ", default: "now()"}
  ]
  rls_policies=[
    {name: "tenant_select", operation: "SELECT", using: "tenant_id = auth.jwt() ->> 'tenant_id'"},
    {name: "tenant_insert", operation: "INSERT", check: "tenant_id = auth.jwt() ->> 'tenant_id'"}
  ]
  indexes=["tenant_id", "status"]
```

## Generated SQL Example
```sql
-- Create table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  customer_name TEXT NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create indexes
CREATE INDEX idx_orders_tenant_id ON orders(tenant_id);
CREATE INDEX idx_orders_status ON orders(status);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "tenant_select" ON orders
  FOR SELECT USING (tenant_id = auth.jwt() ->> 'tenant_id');

CREATE POLICY "tenant_insert" ON orders
  FOR INSERT WITH CHECK (tenant_id = auth.jwt() ->> 'tenant_id');

-- Updated at trigger
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## Rules Applied
- `rules/supabase-rls.md`
- `rules/data-model.md`
- `rules/security.md`
