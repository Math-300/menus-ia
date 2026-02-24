# Data Model Rules

## Naming Conventions
- Tables: snake_case, plural (e.g., `menu_items`)
- Columns: snake_case (e.g., `created_at`)
- Foreign keys: `{table}_id` (e.g., `tenant_id`)
- Indexes: `idx_{table}_{columns}`

## Required Columns (All Tables)
```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid()
tenant_id UUID NOT NULL REFERENCES tenants(id)
created_at TIMESTAMPTZ DEFAULT now()
updated_at TIMESTAMPTZ DEFAULT now()
```

## Data Types
- UUIDs for all primary keys
- TIMESTAMPTZ for all timestamps
- JSONB for flexible data (metadata, settings)
- TEXT over VARCHAR (no length limits)
- DECIMAL for monetary values

## Indexes
- Index all foreign keys
- Index frequently queried columns
- Composite indexes for common query patterns
- GIN indexes for JSONB

## Relationships
- Use foreign keys with appropriate ON DELETE
- Soft deletes for user data (deleted_at column)
- Cascade deletes only for internal data

## Multi-tenancy Pattern
```sql
-- Every table must have tenant_id
-- RLS policy for isolation
CREATE POLICY "tenant_isolation" ON table_name
  FOR ALL USING (tenant_id = current_setting('app.current_tenant')::uuid);
```

## Migration Pattern
- All schema changes via Supabase migrations
- Reversible migrations (up and down)
- Seed data separate from schema
- Version control all migrations
