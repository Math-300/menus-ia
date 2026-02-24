# Security Rules

## Authentication
- Use Supabase Auth for all authentication
- Never store passwords or sensitive tokens in localStorage
- Use httpOnly cookies for session management
- Implement CSRF protection on all mutations

## API Keys & Secrets
- NEVER expose API keys in client-side code
- All AI calls must go through API routes
- Use environment variables for all secrets
- Rotate keys regularly

## Row Level Security (RLS)
- Enable RLS on ALL tables
- Every table must have tenant_id for isolation
- Use Supabase policies for data access control
- Never bypass RLS in client code

## Input Validation
- Validate all user input with Zod schemas
- Sanitize HTML content
- Use parameterized queries (Supabase client does this)
- Rate limit all API routes

## Data Protection
- Encrypt sensitive data at rest
- Use HTTPS everywhere
- Implement proper CORS policies
- Log security events

## Multi-tenancy
- Isolate tenant data at database level
- Validate tenant access on every request
- Never trust client-provided tenant_id
