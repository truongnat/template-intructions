---
inclusion: always
---

# TeamLifecycle Global Rules

These rules apply to ALL roles in the TeamLifecycle workflow.

## Core Principles

1. **No Phase Skipping** - Follow SDLC flow strictly
2. **Approval Gates** - Wait for explicit approval at critical points
3. **No Scope Creep** - Only implement approved features
4. **Auto-Communication** - Use @role tags to notify next agents
5. **Transparency** - Provide verifiable artifacts and evidence

## Approval Gates

| Gate | Approver | Required Artifact |
|------|----------|-------------------|
| Project Plan | User | Project-Plan-v*.md |
| Design | QA + SECA | Design-Verification-Report, Security-Review-Report |
| Final Delivery | STAKEHOLDER | Final-Approval-Report.md |

## Artifact Placement Rules

**CRITICAL:** All deliverables MUST go in `docs/sprints/sprint-[N]/`

```
docs/sprints/sprint-[N]/
├── plans/          # PM, PO artifacts
├── designs/        # SA, UIUX artifacts
├── reviews/        # QA, SECA artifacts
├── logs/           # DEV, DEVOPS, ORCHESTRATOR artifacts
└── reports/        # REPORTER, STAKEHOLDER artifacts
```

**NEVER place artifacts in `.agent/` directory**

## Bug Priority Classification

| Priority | Tag | Criteria |
|----------|-----|----------|
| Critical | `#fixbug-critical` | Breaks core functionality, data loss, security exploit |
| High | `#fixbug-high` | Major feature broken, serious UX issue |
| Medium | `#fixbug-medium` | Works but with wrong behavior or poor UX |
| Low | `#fixbug-low` | Cosmetic, minor inconsistency |

## Handoff Template

End every artifact with:

```markdown
### Next Step:
- @ROLE - [Clear action item]
- [Additional tags as needed]

#appropriate-tags
```

## Cycle Repeat Triggers

Workflow repeats if:
- ❌ Unresolved critical/high bugs
- ❌ Rejected design or security review
- ❌ Stakeholder rejection
- ❌ Incomplete requirements coverage

Action: Tag @PM with reason → PM engages user → New plan version
