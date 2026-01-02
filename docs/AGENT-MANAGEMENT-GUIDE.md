# Agent Management Guide

Quick reference for managing `.agent/` directory items.

## Overview

The `tools/agent/manage.py` script helps you create, list, validate, and manage items in the `.agent/` directory.

## Quick Start

### List Items

```bash
# List all roles
npm run agent:list role

# List all workflows
npm run agent:list workflow

# List all templates
npm run agent:list template

# List all rules
npm run agent:list rule
```

### Create New Items

```bash
# Create a new role
npm run agent:create role architect

# Create a new workflow
npm run agent:create workflow deploy

# Create a new template
npm run agent:create template api-spec

# Create a new rule
npm run agent:create rule deployment
```

### Validate Items

```bash
# Validate a role
npm run agent:validate role dev

# Validate a workflow
npm run agent:validate workflow cycle
```

### Show Item Info

```bash
# Show role information
npm run agent:info role pm

# Show workflow information
npm run agent:info workflow cycle
```

## Item Types

### Roles
- **Location:** `.agent/roles/`
- **Naming:** `role-{name}.md`
- **Purpose:** Define AI agent roles

### Workflows
- **Location:** `.agent/workflows/`
- **Naming:** `{name}.md`
- **Purpose:** Define workflow processes

### Templates
- **Location:** `.agent/templates/`
- **Naming:** `{name}.md`
- **Purpose:** Document templates

### Rules
- **Location:** `.agent/rules/`
- **Naming:** `{name}.md`
- **Purpose:** Define rules and constraints

## Common Tasks

### Create a New Role

```bash
# 1. Create the role
npm run agent:create role architect

# 2. Edit the file
# Open .agent/roles/role-architect.md and customize

# 3. Validate it
npm run agent:validate role architect

# 4. Add to Kiro steering (optional)
# Create .kiro/steering/role-architect.md as reference
```

### Create a New Workflow

```bash
# 1. Create the workflow
npm run agent:create workflow deploy

# 2. Edit the file
# Open .agent/workflows/deploy.md and customize

# 3. Validate it
npm run agent:validate workflow deploy

# 4. Create supporting script (optional)
# Create tools/workflows/deploy.py if needed
```

### Audit All Items

```bash
# List all items
npm run agent:list role
npm run agent:list workflow
npm run agent:list template
npm run agent:list rule

# Validate critical items
npm run agent:validate role pm
npm run agent:validate role dev
npm run agent:validate workflow cycle
npm run agent:validate workflow emergency
```

## Templates

Each item type has a template with:

### Role Template
- Identity and responsibilities
- Workflow steps
- Deliverables
- Integration points
- Commands and examples

### Workflow Template
- Purpose and trigger
- Prerequisites
- Step-by-step process
- Decision points
- Success criteria

### Template Template
- Document information
- Content sections
- Guidelines
- Next steps

### Rule Template
- Scope and priority
- Individual rules
- Rationale
- Enforcement
- Exceptions

## Integration

### With npm

Already configured in `package.json`:
```json
{
  "scripts": {
    "agent:list": "python tools/agent/manage.py list",
    "agent:create": "python tools/agent/manage.py create",
    "agent:validate": "python tools/agent/manage.py validate",
    "agent:info": "python tools/agent/manage.py info"
  }
}
```

### With Kiro IDE

Create custom commands or hooks to trigger agent management.

### Direct Python

```bash
python tools/agent/manage.py list role
python tools/agent/manage.py create role architect
python tools/agent/manage.py validate workflow cycle
python tools/agent/manage.py info template project-plan
```

## Validation Checks

### All Items
- ✅ File exists and not empty
- ✅ Has markdown headers
- ✅ Has tags

### Role-Specific
- ✅ Has @ROLE mention
- ✅ Has Responsibilities section
- ✅ Has Workflow section

### Workflow-Specific
- ✅ Has Steps section
- ✅ Has Success Criteria

## Best Practices

1. **Always validate** after creating or editing
2. **Use templates** as starting point
3. **Follow naming conventions** for consistency
4. **Add tags** for searchability
5. **Cross-reference** related items
6. **Document integration** with other roles/workflows

## Examples

### Example 1: Add New Role

```bash
# Create architect role
npm run agent:create role architect

# Edit .agent/roles/role-architect.md
# Add responsibilities, workflow, deliverables

# Validate
npm run agent:validate role architect

# Create Kiro steering reference
echo "See .agent/roles/role-architect.md" > .kiro/steering/role-architect.md
```

### Example 2: Create Deployment Workflow

```bash
# Create workflow
npm run agent:create workflow deploy

# Edit .agent/workflows/deploy.md
# Define steps, decision points, success criteria

# Validate
npm run agent:validate workflow deploy

# Create supporting script
# Create tools/workflows/deploy.py if automation needed
```

### Example 3: Add API Spec Template

```bash
# Create template
npm run agent:create template api-spec

# Edit .agent/templates/api-spec.md
# Define sections and guidelines

# Validate
npm run agent:validate template api-spec

# Use in workflow
# Reference in role documentation
```

## Troubleshooting

### "Unknown item type"
- Use: `role`, `workflow`, `template`, or `rule`

### "Already exists"
- Item with that name already exists
- Use different name or edit existing

### "Not found"
- Check spelling
- Use `list` command to see available items

### Validation fails
- Review required sections
- Check for proper markdown formatting
- Ensure tags are present

## See Also

- **Detailed Documentation:** `tools/agent/README.md`
- **Agent Directory:** `.agent/README.md`
- **Tools Overview:** `tools/README.md`

---

**Version:** 1.0.0  
**Created:** 2026-01-02  
**Purpose:** Quick reference for agent management
