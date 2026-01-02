# Cleanup Workflow - Quick Reference

## Command

```bash
@ORCHESTRATOR /cleanup
```

## What It Does

Moves unused, old, or legacy files to trash folder:
- ✅ Completion documents (`-COMPLETE.md`)
- ✅ Old test results (> 30 days)
- ✅ Duplicate files
- ✅ Legacy scripts
- ✅ Empty files

## Options

```bash
/cleanup                    # Standard cleanup
/cleanup --dry-run         # Preview only
/cleanup --aggressive      # Include review-needed files
/cleanup --category [name] # Specific category
```

## Categories

| Category | Confidence | Action |
|----------|-----------|--------|
| **A: Safe** | High | Auto-move to trash |
| **B: Review** | Medium | User confirmation |
| **C: Keep** | High | Never move |

## Category A: Safe to Move

- `-COMPLETE.md`, `-SUMMARY.md` files
- Old test results (> 30 days)
- Empty/duplicate files
- Deprecated scripts
- Migration reports

## Category B: Review Needed

- Old sprint artifacts (> 3 sprints)
- Legacy configs
- Demo projects
- Outdated docs

## Category C: Keep

- Active documentation
- Current code
- Recent artifacts (< 1 sprint)
- Knowledge base entries

## Process

1. **Analyze** → Scan for legacy files
2. **Categorize** → Sort by confidence
3. **Confirm** → Get user approval
4. **Execute** → Move to trash
5. **Verify** → Check for broken links

## Output

- Files moved to `trash/` directory
- `trash/CLEANUP-SUMMARY.md` created
- Documentation updated
- Broken links fixed

## Recovery

```bash
# List trash
dir trash/

# Recover file
move trash/[file] [location]/
```

## When to Use

✅ After major reorganizations  
✅ Before releases  
✅ During sprint cleanup  
✅ When workspace cluttered  
✅ Weekly maintenance  

## When NOT to Use

❌ Files still in use  
❌ Unsure what's legacy  
❌ Active development  
❌ Mid-sprint  

## Integration

- Part of `/housekeeping`
- Can run independently
- Documents patterns via `/compound`

## Example

```bash
# Basic cleanup
@ORCHESTRATOR /cleanup

# Preview first
@ORCHESTRATOR /cleanup --dry-run

# Aggressive cleanup
@ORCHESTRATOR /cleanup --aggressive

# Specific category
@ORCHESTRATOR /cleanup --category completion-docs
```

## Success Criteria

- ✅ Legacy files moved to trash
- ✅ No broken references
- ✅ Project still works
- ✅ Cleanup summary created
- ✅ User satisfied

## Related

- `/housekeeping` - Full maintenance
- `/compound` - Document patterns
- `/audit` - Verify health

#cleanup #quick-reference

