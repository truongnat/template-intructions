---
description: Unified Git and Task Workflow
---

# Git & Task Management Workflow

**Requirement:** All tasks must be tracked with Jira-like precision and committed atomically.

## A. Task Board Logic
- All `Product-Backlog` items (User Stories) must be broken down into **Tasks** in the `Development-Log`.
- **Status Columns:** `Todo` | `In Progress` | `Review` | `Done`.
- **Assignal:** Every task must have an owner (e.g., `@DEV`, `@SA`).
- **Tracing:** Every completed task must link to a **Git Commit Hash**.

## B. Atomic Commit Rule
- ⚠️ **DO NOT** commit all changes at once at the end of a sprint.
- **Workflow:**
  1. Pick a task from `Development-Log` (Mark as `In Progress`)
  2. Implement the code
  3. Verify locally
  4. **COMMIT IMMEDIATELY:** `git commit -m "[Task-ID] <Description>"`
  5. Update `Development-Log` (Mark as `Done` and add Commit Hash)
- This ensures a clean, traceable history and prevents "big bang" integration issues.

## C. Definition of Done (DoD)
A feature/task is "Done" when ALL of the following are true:

### For Development Tasks:
- [ ] Code implemented according to approved design specs
- [ ] Code follows project coding standards
- [ ] Local testing passed
- [ ] Evidence captured (screenshots/logs)
- [ ] Tagged with `#development`
- [ ] **Git Commit created and linked in Log**
- [ ] Handoff to TESTER completed

### For Testing:
- [ ] All test cases executed
- [ ] No critical/high bugs open
- [ ] Evidence documented in Test-Report
- [ ] Tagged with `#testing`

### For Deployment:
- [ ] CI/CD pipeline passing
- [ ] Staging environment verified
- [ ] Security checklist completed
- [ ] Tagged with `#deployed-staging` or `#deployed-production`

### For Project Completion:
- [ ] All Must-Have features verified
- [ ] STAKEHOLDER approved
- [ ] Final documentation complete
- [ ] User notified

## D. Automated Changelog Updates
- **Requirement:** Every commit MUST be followed by an update to CHANGELOG.md.
- **Format:**
  ```markdown
  - [YYYY-MM-DD] [Commit-Hash] [Type]: [Description] (@Author)
  ```
- **Types:** Feature, Fix, Refactor, Docs, Chore, Test.

## E. Release Summary Generation
- **Requirement:** After a feature is marked as 'Done' in the board or a 'Release' is triggered, the @REPORTER or @DEV MUST update the CHANGELOG.md with a summary of the version release.
- **Action:** Consolidate all atomic commits into a cohesive release entry.
