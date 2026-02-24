# MenuOS - Project Context Index

> Last updated: 2026-02-20
> Stack: Next.js 15 + Supabase
> Status: Migration from Vite + React 19 in progress

---

## 🎯 Project Overview

MenuOS is a SaaS platform for digital menus with AI for modern restaurants.

**Core Features:**
- Interactive digital menus with mobile-app-like design
- AI Concierge powered by OpenRouter (GLM-5, Claude, GPT-4)
- Multi-tenant system for multiple restaurants
- Admin panel with AI tools
- WhatsApp order integration
- Real-time order tracking

---

## 🏗️ Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js (App Router + RSC) | 15.x |
| Language | TypeScript (strict) | 5.x |
| Database | Supabase (PostgreSQL + Auth + Realtime + RLS) | Latest |
| Styling | Tailwind CSS + shadcn/ui + Framer Motion | Latest |
| State | Zustand + TanStack Query | Latest |
| Media | Cloudinary | Latest |
| Billing | Wompi (Colombia) | Latest |
| Search | Algolia | Latest |
| Cache | Redis (Upstash) | Latest |
| AI | OpenRouter (GLM-5, Claude, GPT-4) | Latest |

---

## 📁 Project Structure

```
menuos/
├── app/                      # Next.js App Router
│   ├── (tenant)/[slug]/      # Dynamic tenant routes
│   ├── admin/                # Admin panel
│   ├── api/                  # API routes
│   └── layout.tsx
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── diner/                # Customer-facing components
│   └── admin/                # Admin components
├── lib/
│   ├── supabase/             # Supabase clients
│   ├── wompi/                # Wompi integration
│   └── ai/                   # AI services
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript definitions
├── utils/                    # Utility functions
├── rules/                    # Development rules
├── docs/                     # Documentation
└── skills/                   # Project skills
```

---

## 📜 Rules (Always Active)

These rules are loaded for every context:

- [rules/design-system.md](rules/design-system.md) - UI/UX standards
- [rules/security.md](rules/security.md) - Security best practices
- [rules/team-standards.md](rules/team-standards.md) - Code conventions
- [rules/data-model.md](rules/data-model.md) - Database schema patterns

---

## 🎯 Context-Based Rules (Auto-load)

| Rule | Trigger Paths |
|------|---------------|
| [rules/supabase-rls.md](rules/supabase-rls.md) | `*.sql`, `**/db/**`, `**/supabase/**` |
| [rules/performance.md](rules/performance.md) | `**/components/**`, `**/app/**` |
| [rules/wompi-billing.md](rules/wompi-billing.md) | `**/billing/**`, `**/payment/**`, `**/wompi/**` |
| [rules/cloudinary.md](rules/cloudinary.md) | `**/media/**`, `**/upload/**` |
| [rules/ux-patterns.md](rules/ux-patterns.md) | `**/app/(tenant)/**` |
| [rules/ai-integration.md](rules/ai-integration.md) | `**/ai/**`, `**/api/ai/**` |

---

## 🛠️ Skills Available

| Skill | Description | Trigger |
|-------|-------------|---------|
| `/generate-screen` | Generate complete diner screen | Manual |
| `/generate-admin-module` | Generate admin panel module | Manual |
| `/menu-catalog` | CRUD for menu catalog | Manual |
| `/stories-highlights` | Stories and highlights feature | Manual |
| `/supabase-migration` | Create migration with RLS | Manual |
| `/tenant-onboarding` | New restaurant onboarding flow | Manual |
| `/wompi-payment` | Wompi payment integration | Manual |
| `/ai-content` | Generate AI content/copy | Manual |
| `/pwa-audit` | Performance and accessibility audit | Manual |

---

## 🔌 MCP Tools

### Context7 (Documentation Lookup)
Use context7 MCP to fetch up-to-date documentation for libraries and frameworks:

- `context7_resolve-library-id` - Find library documentation ID
- `context7_get-library-docs` - Fetch documentation snippets

**Usage Pattern:**
1. First resolve the library ID: `context7_resolve-library-id("next.js")`
2. Then fetch docs: `context7_get-library-docs(id, topic="app-router")`

**Common Libraries:**
- Next.js
- Supabase
- Tailwind CSS
- shadcn/ui
- Framer Motion
- TanStack Query
- Wompi

---

## 📚 Source Documents

Reference documents (load on demand, not by default):

- [docs/PRD-producto.md](docs/PRD-producto.md) - Product Requirements
- [docs/PRD-diseno.md](docs/PRD-diseno.md) - Design Specifications
- [docs/TEAM.md](docs/TEAM.md) - Team conventions

---

## 🔑 Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# AI - OpenRouter
OPENROUTER_API_KEY=
OPENROUTER_DEFAULT_MODEL=glm-5

# Wompi (Colombia)
NEXT_PUBLIC_WOMPI_PUBLIC_KEY=        # pub_test_ or pub_prod_
WOMPI_PRIVATE_KEY=                    # prv_test_ or prv_prod_
WOMPI_INTEGRITY_SECRET=               # test_integrity_ or prod_integrity_
WOMPI_EVENTS_SECRET=                  # test_events_ or prod_events_
WOMPI_WEBHOOK_SECRET=                 # Para verificar webhooks

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_SECRET=

# Algolia
NEXT_PUBLIC_ALGOLIA_APP_ID=
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=
ALGOLIA_ADMIN_KEY=

# Redis
REDIS_URL=
REDIS_TOKEN=
```

---

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Setup Supabase
npx supabase init
npx supabase start

# Run development
pnpm dev

# Run migrations
npx supabase db push
```

---

## 📊 Multi-Tenancy Architecture

Each restaurant is a tenant with:
- Unique slug: `menuos.app/r/[slug]`
- Custom theme and branding
- Isolated data via RLS policies
- Separate billing subscription

```sql
-- RLS Policy Pattern
CREATE POLICY "tenant_isolation" ON table_name
  FOR ALL USING (tenant_id = auth.jwt() ->> 'tenant_id');
```

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
