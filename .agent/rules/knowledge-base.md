---
description: Knowledge Base System Rules
---

# Knowledge Base System Rules

## Purpose
The Knowledge Base stores lessons learned, bug patterns, difficult features, and solutions that required multiple attempts. This serves as project memory for future reference.

## When to Create Entry
Create a knowledge entry when:
- Bug required 3+ attempts to fix
- Feature implementation was particularly challenging
- Solution was non-obvious or counter-intuitive
- Issue is likely to recur in similar projects
- Root cause analysis revealed important insights

## Entry Naming
**Format:** `KB-[YYYY-MM-DD]-[###]-[short-title].md`

**Location:** `.agent/knowledge-base/[category]/[severity]/`

## Categories
| Category | Folder | Description |
|----------|--------|-------------|
| Bugs | `knowledge-base/bugs/[severity]/` | Bug patterns and fixes |
| Features | `knowledge-base/features/[type]/` | Complex feature implementations |
| Architecture | `knowledge-base/architecture/` | Architecture decisions |
| Security | `knowledge-base/security/` | Security issues and solutions |
| Performance | `knowledge-base/performance/` | Performance optimizations |
| Platform | `knowledge-base/platform-specific/[platform]/` | Platform-specific issues |

## Workflow
1. **Create Entry:** Use `Knowledge-Entry-Template.md`
2. **Document:** Include problem, root cause, solution, prevention
3. **Tag:** Add appropriate tags for searchability
4. **Update Index:** Add to `knowledge-base/index.md`
5. **Notify:** Tag @REPORTER for review

## Search Before Starting
Before implementing complex features or fixing bugs:
1. Check `knowledge-base/index.md`
2. Search by keywords, technology, or error messages
3. Review similar entries
4. Adapt solutions to current context
