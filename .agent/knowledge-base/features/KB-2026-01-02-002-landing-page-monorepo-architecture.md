---
title: "Landing Page Updated with Monorepo Architecture Features"
category: feature
priority: medium
sprint: N/A
date: 2026-01-02
tags: [landing-page, monorepo, architecture, diagram, astro, svg]
related_files: [projects/landing-page/src/components/Architecture.astro, projects/landing-page/src/components/Features.astro, projects/landing-page/src/pages/index.astro]
time_saved: "2 hours"
---

## Problem

Landing page needed to showcase the new monorepo architecture with Brain system. Required:
1. Visual diagram showing Brain and Projects relationship
2. Updated features highlighting monorepo benefits
3. Clear explanation of shared intelligence model

## Solution

### 1. Created Architecture Component

**File:** `projects/landing-page/src/components/Architecture.astro`

**Features:**
- SVG diagram showing Brain → Projects architecture
- Visual representation of shared workflows, tools, and KB
- 4 key benefits cards (Shared Intelligence, Shared Tools, Faster Development, Compound Learning)
- "How It Works" 3-step process
- CTA to architecture documentation

**Why SVG instead of Mermaid:**
- Mermaid.js caused build issues with Astro
- SVG is static, faster to load, no external dependencies
- Full control over styling and responsiveness
- Works perfectly with Tailwind CSS

### 2. Updated Features Component

**File:** `projects/landing-page/src/components/Features.astro`

**Changes:**
- Reordered features to highlight monorepo first
- Added "Monorepo Brain" as primary feature
- Updated "Knowledge Base" to "Compound Learning" with monorepo context
- Added "Shared Tools" feature highlighting Neo4j, research agent
- Kept core features (12 AI Roles, Auto Workflow, All Platforms)

### 3. Updated Page Structure

**File:** `projects/landing-page/src/pages/index.astro`

**Changes:**
- Added Architecture component after Features
- Maintains flow: Hero → Features → Architecture → Use Cases

## Implementation Details

### SVG Diagram Structure

```svg
<!-- Brain (Root) Box -->
<rect fill="#e1f5ff" stroke="#01579b"/>
  <!-- Components inside -->
  <rect>.agent/</rect>
  <rect>tools/</rect>

<!-- Projects Box -->
<rect fill="#f3e5f5" stroke="#4a148c"/>
  <!-- Project items -->
  <rect>todo-app</rect>
  <rect>landing-page</rect>
  <rect>[your-project]</rect>

<!-- Arrows showing shared relationships -->
<line stroke-dasharray="5,5"/>
```

### Key Design Decisions

1. **SVG over Mermaid:**
   - Avoids build complexity
   - Better performance
   - Easier to customize

2. **Component Placement:**
   - After Features to provide context
   - Before Use Cases to show architecture first

3. **Visual Hierarchy:**
   - Brain in blue (primary)
   - Projects in purple (secondary)
   - Dashed arrows for "shared" concept

## Testing

```bash
cd projects/landing-page
npx astro build
# ✓ Built successfully in 3.20s
```

## Benefits

### For Users
- Clear visual understanding of monorepo architecture
- See how Brain benefits all projects
- Understand compound learning concept

### For Development
- Reusable Architecture component
- Easy to update diagram
- No external dependencies

## Related Patterns

- **Monorepo Architecture:** `docs/MONOREPO-ARCHITECTURE.md`
- **SVG Diagrams:** Use SVG for static diagrams in Astro
- **Component Organization:** Architecture sections after Features

## Prevention

**Avoid Mermaid.js in Astro:**
- Causes build issues with PostCSS
- Use SVG for static diagrams
- Use Mermaid only in markdown docs

**Component Structure:**
- Keep diagrams simple and clear
- Use Tailwind for styling
- Test build after adding new components

## Files Modified

1. `projects/landing-page/src/components/Architecture.astro` - NEW
2. `projects/landing-page/src/components/Features.astro` - Updated features list
3. `projects/landing-page/src/pages/index.astro` - Added Architecture component

## Next Steps

1. Add interactive diagram (optional)
2. Create more project examples
3. Add animation to diagram
4. Consider adding video walkthrough

---

#landing-page #monorepo #architecture #diagram #astro #svg #compound-learning
