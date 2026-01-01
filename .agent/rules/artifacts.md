---
description: Artifact and Naming Conventions
---

# Artifact & Naming Conventions

## Artifact Naming Convention
Use versioned names attached to the current Sprint:
| Artifact | Owner |
|----------|-------|
| `Project-Plan-Sprint-[N]-v*.md` | PM |
| `Product-Backlog-Sprint-[N]-v*.md` | PO |
| `UIUX-Design-Spec-Sprint-[N]-v*.md` | UIUX |
| `System-Design-Spec-Sprint-[N]-v*.md` | SA |
| `Design-Verification-Report-Sprint-[N]-v*.md` | QA |
| `Security-Review-Report-Sprint-[N]-v*.md` | SecA |
| `Development-Log-Sprint-[N]-v*.md` | DEV |
| `DevOps-Plan-and-Log-Sprint-[N]-v*.md` | DevOps |
| `Test-Report-Sprint-[N]-v*.md` | TESTER |
| `Phase-Report-Sprint-[N]-v*.md` | REPORTER |
| `Master-Documentation.md` | REPORTER |
| `Final-Project-Report.md` | REPORTER |
| `Final-Approval-Report.md` | STAKEHOLDER |

## ⚠️ CRITICAL LOCATION RULE
ALL project artifacts MUST be created in the project workspace with organized structure based on **Sprint**:

**Base Directory:** `docs/sprints/sprint-[N]/`

| Category | Folder Path | Content Example | Owner |
|----------|-------------|-----------------|-------|
| Plans | `docs/sprints/sprint-[N]/plans/` | `Project-Plan-Sprint-[N]-v*.md`, `Product-Backlog-Sprint-[N]-v*.md` | PM, PO |
| Designs | `docs/sprints/sprint-[N]/designs/` | `System-Design-Spec-Sprint-[N]-v*.md`, `UIUX-Design-Spec-Sprint-[N]-v*.md` | SA, UIUX |
| Reviews | `docs/sprints/sprint-[N]/reviews/` | `Design-Verification-Report-Sprint-[N]-v*.md`, `Security-Review-Report-Sprint-[N]-v*.md` | QA, SecA |
| Logs | `docs/sprints/sprint-[N]/logs/` | `Development-Log-Sprint-[N]-v*.md`, `DevOps-Plan-and-Log-Sprint-[N]-v*.md` | DEV, DevOps |
| Tests | `docs/sprints/sprint-[N]/tests/` | `Test-Report-Sprint-[N]-v*.md` | TESTER |
| Reports | `docs/sprints/sprint-[N]/reports/` | `Phase-Report-Sprint-[N]-v*.md` | REPORTER |
| Global | `docs/global/reports/` | `Final-Project-Report.md`, `Final-Approval-Report.md` | REPORTER, STAKEHOLDER |
| Global | `docs/global/` | `Master-Documentation.md` | REPORTER |

**FORBIDDEN:** `.agent/` directory (reserved for instructions only)

## Mandatory Documentation Tags
Every action must be tagged with appropriate hashtags:

| Category | Tags |
|----------|------|
| **Planning** | `#planning`, `#product-owner`, `#backlog` |
| **Design** | `#designing`, `#uiux-design` |
| **Verification** | `#verify-design`, `#security-review` |
| **Development** | `#development`, `#devops` |
| **Testing** | `#testing` |
| **Bug Fixes** | `#fixbug-critical`, `#fixbug-high`, `#fixbug-medium`, `#fixbug-low` |
| **Status** | `#blocked`, `#hotfix`, `#rollback` |
| **Deployment** | `#deployed-staging`, `#deployed-production` |
| **Research** | `#searching` |
| **Reporting** | `#reporting`, `#stakeholder-review` |
| **Knowledge** | `#knowledge-base`, `#lessons-learned` |
