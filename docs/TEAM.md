# MenuOS - Team Documentation

## 1. Team Structure

### Current Team
| Role | Responsibilities | Focus Areas |
|------|------------------|-------------|
| **Dev A (Backend)** | Database, API, Services | Supabase, AI integration, Billing |
| **Dev B (Frontend)** | UI, Components, Pages | React, Styling, UX |

### Future Roles (Post-MVP)
- DevOps Engineer
- Product Designer
- QA Engineer
- Customer Success

---

## 2. Division of Responsibilities

### Dev A: Backend/Services

#### Primary Ownership
```
lib/
├── supabase/          # Database clients, queries
├── ai/                # AI service integrations
├── wompi/             # Billing logic
├── algolia/           # Search configuration
└── redis/             # Caching layer

app/api/               # All API routes
supabase/              # Migrations, RLS policies
```

#### Responsibilities
- Database schema design
- RLS policy implementation
- API route development
- AI prompt engineering
- Third-party integrations
- Performance optimization (backend)
- Security implementation

#### Branch Prefix
- `feat/be-*` for backend features
- `contract/*` for API changes

---

### Dev B: Frontend/UI

#### Primary Ownership
```
components/
├── ui/                # Base components
├── diner/             # Customer-facing
└── admin/             # Admin panel

app/
├── (tenant)/          # Diner pages
├── admin/             # Admin pages
└── layout.tsx         # Root layout

hooks/                 # Custom React hooks
utils/                 # Client utilities
```

#### Responsibilities
- Component development
- Page layouts and routing
- State management (Zustand)
- Data fetching (TanStack Query)
- Styling and theming
- Animations (Framer Motion)
- Accessibility
- Performance optimization (frontend)

#### Branch Prefix
- `feat/fe-*` for frontend features

---

## 3. Shared Responsibilities

### Both Devs Collaborate On
- Type definitions (`types/`)
- Contract definitions (`contracts/`)
- Documentation (`docs/`)
- Testing strategy
- Code reviews

### Code Review Rules
- Dev A reviews Dev B's API usage
- Dev B reviews Dev A's API contracts
- Both review shared code

---

## 4. Communication Protocol

### Daily Sync
- Async update in Slack/Discord
- Blockers highlighted
- Progress on current tasks

### Weekly Planning
- Sprint planning on Mondays
- Demo on Fridays
- Retrospective bi-weekly

### Contract Changes
1. Dev creates PR in `contracts/`
2. Both devs review and approve
3. Update mocks if needed
4. Implement changes

---

## 5. Development Workflow

### Branch Strategy
```
main
├── develop
│   ├── feat/fe-dish-card
│   ├── feat/be-auth-system
│   └── contract/menu-api-v2
└── hotfix/*
```

### Commit Convention
```
feat(fe): add dish card component
feat(be): implement menu items API
fix(fe): resolve cart quantity bug
fix(be): fix RLS policy for tenants
contract: update menu item schema
docs: update API documentation
```

### PR Template
```markdown
## Description
[What does this PR do?]

## Type of Change
- [ ] Feature
- [ ] Bug fix
- [ ] Contract change
- [ ] Documentation

## Testing
- [ ] Unit tests added
- [ ] Integration tests added
- [ ] Manual testing done

## Screenshots (if UI)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

---

## 6. Definition of Done

### Feature Complete
- [ ] Code implemented
- [ ] Unit tests passing
- [ ] Integration tests passing
- [ ] Code reviewed and approved
- [ ] Documentation updated
- [ ] QA verified (if applicable)
- [ ] Deployed to staging

### Sprint Complete
- [ ] All DoD items for each feature
- [ ] Demo prepared
- [ ] Release notes written
- [ ] Deployed to production

---

## 7. Tools & Services

### Development
- **GitHub** - Code repository, PRs, Issues
- **VS Code** - Primary IDE
- **Supabase CLI** - Local development

### Communication
- **Slack/Discord** - Team chat
- **Notion** - Documentation, planning
- **Figma** - Design collaboration

### Monitoring (Post-MVP)
- **Sentry** - Error tracking
- **Vercel Analytics** - Performance
- **Supabase Dashboard** - Database metrics

---

## 8. Onboarding Checklist

### New Developer Setup
- [ ] Clone repository
- [ ] Install dependencies (`pnpm install`)
- [ ] Setup Supabase local (`npx supabase start`)
- [ ] Copy `.env.example` to `.env.local`
- [ ] Run development server (`pnpm dev`)
- [ ] Read CLAUDE.md
- [ ] Read relevant rules in `rules/`
- [ ] Review PRD documents
- [ ] Complete first "good first issue"

---

## 9. Emergency Procedures

### Production Incident
1. Alert in team channel
2. Create incident branch from main
3. Fix and test locally
4. Deploy hotfix
5. Post-mortem within 24h

### Security Issue
1. Do NOT discuss publicly
2. Direct message to team lead
3. Prioritize immediately
4. Silent fix and deploy
5. Disclosure after fix verified
