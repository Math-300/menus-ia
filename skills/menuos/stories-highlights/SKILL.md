# Stories & Highlights Skill

Generate stories and highlights feature for menu items.

## Trigger
Manual: `/stories-highlights`

## Parameters
- `operation`: Type of operation
  - `setup`: Initial setup
  - `add-story`: Add new story
  - `add-highlight`: Add highlight
  - `viewer`: Generate story viewer component

## Output for Setup
```
app/(tenant)/[slug]/
└── _components/
    ├── StoryRail.tsx          # Stories carousel
    ├── StoryViewer.tsx        # Full screen viewer
    └── StoryProgress.tsx      # Progress indicator

app/admin/stories/
├── page.tsx                    # Story management
├── new/page.tsx               # Create story
└── _components/
    ├── StoryEditor.tsx
    └── StoryPreview.tsx

lib/
└── stories/
    ├── queries.ts
    ├── mutations.ts
    └── types.ts
```

## Database Schema
```sql
CREATE TABLE stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id),
  title TEXT,
  media_url TEXT NOT NULL,
  media_type TEXT CHECK (media_type IN ('image', 'video')),
  duration INT DEFAULT 5000, -- milliseconds
  link_url TEXT,             -- Optional CTA link
  link_text TEXT,
  active BOOLEAN DEFAULT true,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE story_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  story_id UUID REFERENCES stories(id),
  session_id TEXT,            -- Anonymous tracking
  viewed_at TIMESTAMPTZ DEFAULT now()
);
```

## Features
1. **Story Creation**
   - Image/video upload
   - Duration setting
   - Optional CTA link
   - Expiration date

2. **Story Viewer**
   - Tap to pause/resume
   - Swipe navigation
   - Progress indicator
   - Auto-advance

3. **Analytics**
   - View count
   - Completion rate
   - CTA click rate

## Example Usage
```
/stories-highlights operation="setup"
/stories-highlights operation="add-story" type="image"
```

## Rules Applied
- `rules/ux-patterns.md`
- `rules/performance.md`
- `rules/cloudinary.md`
