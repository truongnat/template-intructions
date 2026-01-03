---
description: Unified Git and Task Workflow (Branching, Committing, Merging)
---
# Git & Task Management Workflow
**Requirement:** All tasks and artifacts must follow the **Branch-Based Workflow** with explicit merge gates.
## A. Branching Strategy (MANDATORY)
❌ **NEVER** commit directly to main or master. This applies to ALL ROLES (@PM, @BA, @SA, @DEV, etc.) and ALL FILE TYPES (Code, Docs, Logs).
### Branch Naming Convention
| Type | Prefix | Use Case |
|------|--------|----------|
| **Planning** | plan/ | Project plans, product backlogs (PM/BA) |
| **Design** | design/ | Architecture schematics, UI specs (SA/UIUX/SECA) |
| **Feature** | feat/ | New functionality (DEV) |
| **Fix** | fix/ | Bug fixes (DEV) |
| **Hotfix** | hotfix/ | Critical production fixes (DEV/DEVOPS) |
| **Docs** | docs/ | General documentation updates (REPORTER) |
**Format:** prefix/TASK-ID-short-name (e.g., plan/SPRINT-2-setup, feat/LP-001-hero-section)
### Pre-Operation Safety Checks (STRICT)
- **Before Checkout/Switch:** ALWAYS run git status. Ensure working directory is clean.
  - If changes exist: Stash or Commit them first.
- **Before Merge:** ALWAYS run git status. Ensure you are on the correct target branch and it is clean.
### Workflow
1. **Start:** git checkout -b prefix/TASK-ID-name from main.
2. **Work:** Create artifacts or code.
3. **Push:** git push -u origin prefix/TASK-ID-name.
4. **Docs-as-Code:** Treat documentation exactly like code. It must be version controlled and reviewed.
## B. Atomic Commit Rule
- **Frequency:** Commit for every logical unit of work.
- **Message Format:** [TASK-ID] <type>: <description>
  - Types: feat, fix, plan, design, docs, test, chore.
  - Example: [LP-001] plan: draft sprint 2 project plan
## C. Pull Request & Merging (The Quality Gate)
- **Initiation:** Create PR when work block is ready for review.
- **Review Gate:**
  - **Planning/Docs:** Reviewed by Team/Stakeholders.
  - **Code:** Reviewed by SA/DEV.
  - **QA:** Verified by TESTER.
- **Merge Authority:** DEVOPS or SA merges after Approval.
## D. Definition of Done (DoD)
A task is "Done" ONLY when:
1. [ ] Branch created and artifacts implemented.
2. [ ] Commits linked in Development-Log.
3. [ ] Pull Request created.
4. [ ] **Approved/Verified** by designated reviewer.
5. [ ] Merged into main.
#git-workflow #branching #atomic-commits #merging #dod #docs-as-code
