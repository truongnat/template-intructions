# Windsurf Cascade - TeamLifecycle Integration

## Custom Instructions for Windsurf Cascade

Add this to your project's `.windsurfrules` or Cascade settings:

```markdown
# TeamLifecycle SDLC Roles for Cascade

## Slash Commands

Cascade should recognize these slash commands as role invocations:

### Team Roles
- `/pm` - Project Manager (@PM)
- `/orchestrator` - Workflow Automation (@ORCHESTRATOR)
- `/po` - Product Owner (@PO)
- `/sa` - System Analyst (@SA)
- `/uiux` - UI/UX Designer (@UIUX)
- `/qa` - Quality Assurance (@QA)
- `/seca` - Security Analyst (@SECA)
- `/dev` - Developer (@DEV)
- `/devops` - DevOps Engineer (@DEVOPS)
- `/tester` - Tester (@TESTER)
- `/reporter` - Reporter (@REPORTER)
- `/stakeholder` - Stakeholder (@STAKEHOLDER)

### Automation
- `/auto` - Full automation mode
- `/semi-auto` - Semi-automation mode

### Knowledge Base
- `/kb-search` - Search knowledge base
- `/kb-add` - Add knowledge entry

## Command Behavior

When a slash command is used:

1. Load role definition from `.agent/workflows/[role].md`
2. Execute according to role responsibilities
3. Create artifacts in `docs/sprints/sprint-[N]/`
4. Follow global rules from `.agent/rules/global.md`
5. Use templates from `.agent/templates/`

## Multi-Agent Flow

Cascade's multi-agent capability maps perfectly to TeamLifecycle:

```
User → /pm → Planning Agent
     → /auto → Orchestrator Agent
            → Design Agents (SA, UIUX, PO in parallel)
            → Review Agents (QA, SecA in parallel)
            → Development Agents (DEV, DevOps in parallel)
            → Testing Agent (TESTER)
            → Reporting Agent (REPORTER)
            → Approval Agent (STAKEHOLDER)
```

## Cascade-Specific Features

### Parallel Execution
Use Cascade's multi-agent feature for parallel roles:
```
/orchestrator Enable full-auto mode
→ Cascade spawns: SA Agent + UIUX Agent + PO Agent (parallel)
→ Then spawns: QA Agent + SecA Agent (parallel)
```

### Context Sharing
All agents share context through:
- Artifacts in `docs/sprints/sprint-[N]/`
- Knowledge base in `.agent/knowledge-base/`
- Global rules in `.agent/rules/global.md`

### Agent Handoff
Each agent tags the next agent using @tags:
```
SA Agent completes → Tags @QA @SECA
→ Cascade spawns QA Agent + SecA Agent
```

## Examples

```
/pm Build a SaaS platform for project management
/auto Create an e-commerce mobile app
/dev Implement Stripe payment integration
/kb-search database connection pooling
```

## Configuration

Add to Cascade settings or `.windsurfrules`:

```json
{
  "customCommands": {
    "pm": {
      "description": "Project Manager",
      "action": "loadRole",
      "rolePath": ".agent/workflows/pm.md"
    },
    "orchestrator": {
      "description": "Workflow Automation",
      "action": "loadRole",
      "rolePath": ".agent/workflows/orchestrator.md"
    },
    "auto": {
      "description": "Full Auto Mode",
      "action": "executeWorkflow",
      "mode": "full-auto"
    }
  }
}
```
```

## Installation

1. Create `.windsurfrules` in project root
2. Copy configuration above
3. Restart Windsurf
4. Use `/` commands in Cascade chat
