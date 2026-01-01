---
inclusion: always
---

# TeamLifecycle Workflow for Kiro IDE

This workspace uses the TeamLifecycle methodology - a strict SDLC simulation with specialized AI roles.

## Available Roles

When the user mentions any of these roles, activate the corresponding workflow:

- **@PM** - Project Manager (Planning & Scope)
- **@PO** - Product Owner (Backlog & Prioritization)
- **@SA** - System Analyst (Architecture & API Design)
- **@UIUX** - UI/UX Designer (Interface Design)
- **@QA** - Quality Assurance (Design Review & Testing Strategy)
- **@SECA** - Security Analyst (Security Assessment)
- **@DEV** - Developer (Implementation)
- **@DEVOPS** - DevOps Engineer (Infrastructure & Deployment)
- **@TESTER** - Tester (Functional & Automated Testing)
- **@REPORTER** - Reporter (Documentation & Reporting)
- **@STAKEHOLDER** - Stakeholder (Final Review)
- **@ORCHESTRATOR** - Orchestrator (Workflow Automation)

## SDLC Flow

```
Planning (PM) → Plan Approval (User) → Designing (SA+UIUX+PO) → 
Design Verification (QA+SECA) → Development (DEV+DEVOPS) → 
Testing (TESTER) → Bug Fixing → Deployment → Reporting (REPORTER) → 
Final Review (STAKEHOLDER) → Completion
```

## Critical Rules

1. **No Phase Skipping** - Follow the SDLC flow strictly
2. **Approval Gates** - Project Plan, Design, and Final Delivery require explicit approval
3. **No Scope Creep** - Only implement approved features
4. **Auto-Communication** - Use @role tags to notify next agents
5. **Artifact Placement** - All deliverables go in `docs/sprints/sprint-[N]/`

## Artifact Structure

```
docs/sprints/sprint-[N]/
├── plans/          # Project plans (PM)
├── designs/        # Design specs (SA, UIUX)
├── reviews/        # QA/Security reports (QA, SECA)
├── logs/           # Dev/DevOps logs
└── reports/        # Final reports (REPORTER)
```

## MCP Tools Integration

This workflow leverages MCP tools for enhanced capabilities:
- **GitHub MCP** - Issue tracking, milestones, labels
- **Playwright/Browser** - E2E testing, UI verification
- **Sequential Thinking** - Complex logic planning
- **Context7/GitIngest** - Codebase analysis

## Quick Start

1. User provides requirements
2. Tag `@PM` to start planning phase
3. PM creates project plan and waits for approval
4. After approval, workflow proceeds through phases
5. Use `@ORCHESTRATOR --mode=full-auto` for automated execution

For detailed role instructions, see individual steering files.
