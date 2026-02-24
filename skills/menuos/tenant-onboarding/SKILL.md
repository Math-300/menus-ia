# Tenant Onboarding Skill

Generate new restaurant onboarding flow.

## Trigger
Manual: `/tenant-onboarding`

## Parameters
- `step`: Specific step to generate (optional)
  - `all`: Complete flow
  - `signup`: Sign up form
  - `profile`: Restaurant profile
  - `menu`: Initial menu setup
  - `theme`: Theme customization
  - `launch`: Launch checklist

## Output for Complete Flow
```
app/(auth)/signup/
├── page.tsx                    # Signup form
└── _components/
    ├── SignupForm.tsx
    └── SocialAuth.tsx

app/onboarding/
├── page.tsx                    # Onboarding root
├── profile/
│   └── page.tsx               # Restaurant profile
├── menu/
│   └── page.tsx               # Initial menu setup
├── theme/
│   └── page.tsx               # Theme customization
├── launch/
│   └── page.tsx               # Launch checklist
└── _components/
    ├── OnboardingProgress.tsx
    ├── RestaurantProfileForm.tsx
    ├── MenuImporter.tsx
    ├── ThemeCustomizer.tsx
    └── LaunchChecklist.tsx

lib/
└── onboarding/
    ├── steps.ts
    ├── validation.ts
    └── actions.ts
```

## Onboarding Steps

### 1. Sign Up
- Email/password or OAuth
- Email verification
- Create auth user

### 2. Restaurant Profile
- Restaurant name
- Slug selection (URL)
- Cuisine type
- Address
- Contact info
- Logo upload

### 3. Initial Menu
- Import from CSV (optional)
- Add first 5 items
- Set categories
- Upload images

### 4. Theme Customization
- Primary color
- Font selection
- Logo position
- Background style

### 5. Launch Checklist
- [ ] Menu has at least 5 items
- [ ] Logo uploaded
- [ ] Theme customized
- [ ] Test order completed
- [ ] WhatsApp number verified
- [ ] Terms accepted

## Database Schema
```sql
CREATE TABLE onboarding_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id),
  current_step INT DEFAULT 1,
  completed_steps INT[] DEFAULT '{}',
  data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);
```

## Example Usage
```
/tenant-onboarding step="all"
/tenant-onboarding step="profile"
```

## Rules Applied
- `rules/security.md`
- `rules/ux-patterns.md`
- `rules/design-system.md`
