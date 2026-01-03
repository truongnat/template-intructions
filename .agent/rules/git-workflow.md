---
description: Unified Git and Task Workflow (Branching, Committing, Merging)
---
# Git & Task Management Workflow
**Requirement:** All tasks and artifacts must follow the **Branch-Based Workflow**.
## A. Branching Strategy (MANDATORY)
❌ **NEVER** commit directly to main or master.
### Branch Naming Convention
| Type | Prefix | Use Case |
|------|--------|----------|
| **Planning** | plan/ | Project plans, product backlogs |
| **Design** | design/ | Architecture schematics, UI specs |
| **Feature** | eat/ | New functionality |
| **Fix** | ix/ | Bug fixes |
| **Docs** | docs/ | General documentation |
**Format:** prefix/TASK-ID-short-name (e.g., plan/SPRINT-2-setup)
### Workflow
1. **Start:** git checkout -b prefix/TASK-ID-name from main.
2. **Work:** Create artifacts or code.
3. **Push:** git push -u origin prefix/TASK-ID-name.
4. **Docs-as-Code:** Treat documentation exactly like code.
## B. Definition of Done (DoD)
1. Branch created.
2. Artifacts implemented.
3. Pull Request created & merged.
