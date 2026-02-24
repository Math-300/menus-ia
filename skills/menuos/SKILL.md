# MenuOS Skills

This directory contains project-specific skills for MenuOS development.

## Available Skills

| Skill | Description |
|-------|-------------|
| `generate-screen` | Generate complete diner-facing screen |
| `generate-admin-module` | Generate admin panel module |
| `menu-catalog` | CRUD operations for menu catalog |
| `stories-highlights` | Stories and highlights feature |
| `supabase-migration` | Create migration with RLS policies |
| `tenant-onboarding` | New restaurant onboarding flow |
| `wompi-payment` | Wompi payment integration (Colombia) |
| `ai-content` | Generate AI content/copy |
| `pwa-audit` | Performance and accessibility audit |

## Usage

Skills are triggered manually by referencing them:
- Type the skill name with `/` prefix
- Or describe what you need and the appropriate skill will be suggested

## Skill Structure

Each skill follows this pattern:
```
skills/menuos/
├── SKILL.md          # This file - index
├── generate-screen/  # Skill directory
│   └── SKILL.md      # Skill definition
└── ...
```

## Rules Integration

All skills automatically load relevant rules from `/rules/`:
- Global rules: Always loaded
- Context rules: Loaded based on file paths being modified
