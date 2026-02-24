# Supabase RLS Rules

## Trigger
- `*.sql` files
- `**/db/**` directory
- `**/supabase/**` directory

## RLS Policy Patterns

### Basic Tenant Isolation
```sql
-- Enable RLS
ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;

-- Tenant isolation policy
CREATE POLICY "tenant_isolation" ON table_name
  FOR ALL USING (tenant_id = auth.jwt() ->> 'tenant_id');
```

### Role-Based Access
```sql
-- Admin full access
CREATE POLICY "admin_full_access" ON table_name
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid()
      AND role = 'admin'
    )
  );

-- Public read, authenticated write
CREATE POLICY "public_read" ON table_name
  FOR SELECT USING (true);

CREATE POLICY "authenticated_write" ON table_name
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');
```

## Best Practices
- Always use `auth.uid()` for user identification
- Use `auth.jwt()` for tenant_id extraction
- Create policies for each operation (SELECT, INSERT, UPDATE, DELETE)
- Test policies with `SET ROLE` and `SET app.current_tenant`
- Use `EXPLAIN ANALYZE` to verify policy performance

## Common Patterns

### Soft Delete
```sql
CREATE POLICY "soft_delete" ON table_name
  FOR UPDATE USING (deleted_at IS NULL);
```

### Owner Only
```sql
CREATE POLICY "owner_only" ON table_name
  FOR ALL USING (owner_id = auth.uid());
```

## Migration Checklist
- [ ] Enable RLS on table
- [ ] Create SELECT policy
- [ ] Create INSERT policy
- [ ] Create UPDATE policy
- [ ] Create DELETE policy
- [ ] Test with different roles
- [ ] Add indexes for policy columns
