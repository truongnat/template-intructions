---
title: "Cleanup Workflow - Project Maintenance"
version: 1.0.0
inclusion: manual
keywords: cleanup, trash, legacy, maintenance, housekeeping
---

# Cleanup Workflow

Quick reference for the `/cleanup` workflow. Full documentation: `.agent/workflows/cleanup.md`

## Quick Start

```
@ORCHESTRATOR /cleanup
```

## What It Does

Systematically identifies and moves unused, old, or legacy files to trash folder:
- Completion/summary documents
- Duplicate files
- Old test results
- Legacy scripts
- Outdated artifacts

## When to Use

- After major reorganizations
- Before releases
- During sprint cleanup
- When workspace feels cluttered
- Weekly maintenance

## Cleanup Categories

**Category A: Safe to Move**
- `-COMPLETE.md`, `-SUMMARY.md` files
- Old test results (> 30 days)
- Empty/duplicate files
- Deprecated scripts

**Category B: Review Needed**
- Old sprint artifacts
- Legacy configs
- Demo projects

**Category C: Keep**
- Active documentation
- Current code
- Recent artifacts (< 1 sprint)

## Process

1. **Analyze** - Scan for legacy files
2. **Categorize** - Sort by confidence level
3. **Confirm** - Get user approval
4. **Execute** - Move to trash folder
5. **Verify** - Check for broken links

## Output

- Files moved to `trash/` directory
- `trash/CLEANUP-SUMMARY.md` created
- Documentation updated
- Broken links fixed

## Recovery

All files preserved in `trash/` directory:
```bash
# Recover file
move trash/[filename] [original-location]/
```

## Options

```
/cleanup                    # Standard cleanup
/cleanup --dry-run         # Show what would be moved
/cleanup --aggressive      # Include Category B files
/cleanup --category [name] # Specific category only
```

## Integration

- Part of `/housekeeping` workflow
- Can run independently
- Documents patterns in KB via `/compound`

## Best Practices

1. Always create trash folder (don't delete)
2. Document what was moved
3. Get user confirmation for uncertain files
4. Verify project works after cleanup
5. Update documentation and fix links

## Related Commands

- `/housekeeping` - Full maintenance workflow
- `/compound` - Document cleanup patterns
- `/audit` - Verify project health

#cleanup #maintenance #trash #legacy

