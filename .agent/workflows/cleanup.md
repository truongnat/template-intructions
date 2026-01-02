---
title: "/cleanup - Project Cleanup Workflow"
version: 1.0.0
category: workflow
priority: medium
phase: maintenance
---

# Cleanup Workflow

## Purpose
Systematically identify and move unused, old, or legacy files to a trash folder for project cleanup and maintenance.

## When to Use

Use `/cleanup` when:
- Project has accumulated completion/summary documents
- Legacy files are cluttering the workspace
- After major reorganizations or migrations
- Before major releases
- During sprint cleanup
- When documentation drift is detected

## Workflow Activation

```
@ORCHESTRATOR /cleanup
@DEV /cleanup
@REPORTER /cleanup
```

## Cleanup Process

### Phase 1: Analysis
1. **Scan for completion documents**
   - Files ending in `-COMPLETE.md`, `-SUMMARY.md`, `-RESULTS.md`
   - Files with "PLAN" in name that reference completed work
   - Integration/migration completion reports

2. **Identify duplicate files**
   - Multiple versions of same file (v1, v2, improved, etc.)
   - Empty or placeholder files
   - Backup files (`.bak`, `.old`, etc.)

3. **Find legacy artifacts**
   - Old sprint folders (> 3 sprints old with no active work)
   - Deprecated scripts or tools
   - Outdated configuration files
   - Old test results or reports

4. **Check for unused directories**
   - Empty directories
   - Demo/example projects no longer needed
   - Old build artifacts

### Phase 2: Categorization

Classify files into categories:

**Category A: Safe to Move (High Confidence)**
- Completion/summary documents
- Old test results
- Deprecated scripts with replacements
- Empty files
- Duplicate files

**Category B: Review Needed (Medium Confidence)**
- Old sprint artifacts
- Legacy configuration files
- Outdated documentation
- Demo projects

**Category C: Keep (Do Not Move)**
- Active documentation
- Current configuration
- Active code
- Recent artifacts (< 1 sprint old)

### Phase 3: User Confirmation

Present findings to user:

```markdown
## Cleanup Analysis

### Safe to Move (Category A) - [N] files
- [List files with brief description]

### Review Needed (Category B) - [N] files
- [List files with brief description]

### Keeping (Category C) - [N] files
- [List files with brief description]

**Recommendation:** Move Category A files to trash folder.

Would you like to:
1. Move all Category A files
2. Review Category B files individually
3. Cancel cleanup
```

### Phase 4: Execution

1. **Create trash folder** (if not exists)
   ```bash
   mkdir trash
   ```

2. **Move files to trash**
   ```bash
   move [file] trash/
   ```

3. **Create cleanup summary**
   - Document what was moved
   - Explain rationale
   - Provide recovery instructions

4. **Update documentation**
   - Remove references to moved files
   - Update indexes
   - Clean up broken links

### Phase 5: Verification

1. **Check for broken references**
   - Search for links to moved files
   - Update or remove broken links

2. **Verify project still works**
   - Run health check
   - Test key workflows
   - Verify documentation builds

3. **Create cleanup report**
   - Summary of actions taken
   - Files moved count
   - Space saved
   - Next steps

## Cleanup Patterns

### Pattern 1: Completion Documents
**Identify:**
- Files ending in `-COMPLETE.md`
- Files with "Implementation Complete" in title
- Migration/reorganization summaries

**Action:** Move to trash (safe)

### Pattern 2: Duplicate Files
**Identify:**
- Multiple versions: `file.md`, `file-v2.md`, `file-improved.md`
- Backup files: `file.bak`, `file.old`
- Empty files with same name as populated file

**Action:** Keep latest, move others to trash

### Pattern 3: Old Sprint Artifacts
**Identify:**
- Sprint folders > 3 sprints old
- No recent modifications (> 30 days)
- Marked as "archived" or "completed"

**Action:** Review with user, then move or archive

### Pattern 4: Legacy Scripts
**Identify:**
- Scripts with "old", "legacy", "deprecated" in name
- Scripts replaced by newer versions
- Scripts not referenced in package.json or docs

**Action:** Verify not in use, then move to trash

### Pattern 5: Test Results
**Identify:**
- Files ending in `-RESULTS.md`, `-REPORT.md`
- Old test output files
- Benchmark results > 30 days old

**Action:** Move to trash (keep recent results)

## Cleanup Rules

### Always Move
- ✅ Completion/summary documents
- ✅ Empty or duplicate files
- ✅ Old test results (> 30 days)
- ✅ Deprecated scripts with replacements
- ✅ Migration/reorganization reports

### Review Before Moving
- ⚠️ Old sprint artifacts
- ⚠️ Legacy configuration files
- ⚠️ Demo/example projects
- ⚠️ Outdated documentation

### Never Move
- ❌ Active documentation
- ❌ Current configuration files
- ❌ Active code
- ❌ Recent artifacts (< 1 sprint)
- ❌ Knowledge base entries

## Cleanup Template

```markdown
# Cleanup Summary

**Date:** [Date]
**Action:** Project cleanup - moved legacy files to trash

## Files Moved to Trash

### [Category Name] ([N] files)
[Description of category]

1. `[filename]` - [Brief description]
2. `[filename]` - [Brief description]
...

## Rationale

[Explain why these files were moved]

## Current Clean State

[Describe the cleaned structure]

## Benefits

1. [Benefit 1]
2. [Benefit 2]
...

## Recovery

Files can be recovered from `trash/` directory.

## Next Steps

[Suggested follow-up actions]

---

**Status:** ✅ Cleanup Complete
**Files Moved:** [N]
**Files Deleted:** [N]
**Trash Location:** `trash/`
```

## Integration with Other Workflows

### With `/housekeeping`
- `/housekeeping` includes cleanup as one step
- `/cleanup` is focused cleanup only
- Can be run independently or as part of housekeeping

### With `/compound`
- Document cleanup patterns in KB
- Track time saved by cleanup
- Build cleanup automation

### With `/cycle`
- Run cleanup at end of cycle
- Keep workspace clean between tasks

## Automation Opportunities

### Auto-Cleanup Triggers
- After sprint completion
- Before major releases
- Weekly maintenance
- When disk space low

### Smart Detection
- Use file modification dates
- Check git history
- Analyze file references
- Track file usage patterns

## Metrics

Track cleanup effectiveness:
- **Files Moved:** Count of files moved to trash
- **Space Saved:** Disk space freed
- **Time Saved:** Time saved by cleaner workspace
- **Cleanup Frequency:** How often cleanup is needed

## Example Usage

### Basic Cleanup
```
@ORCHESTRATOR /cleanup
```

### Aggressive Cleanup
```
@ORCHESTRATOR /cleanup --aggressive
# Includes Category B files with user confirmation
```

### Dry Run
```
@ORCHESTRATOR /cleanup --dry-run
# Show what would be moved without moving
```

### Specific Category
```
@ORCHESTRATOR /cleanup --category completion-docs
# Only cleanup completion documents
```

## Output Artifacts

1. **Cleanup Summary** - `trash/CLEANUP-SUMMARY.md`
2. **Moved Files** - All files in `trash/` directory
3. **Updated Documentation** - Fixed broken links
4. **Cleanup Report** - Added to KB if significant

## Success Criteria

- ✅ All identified legacy files moved to trash
- ✅ No broken references in active documentation
- ✅ Project still builds and runs correctly
- ✅ Cleanup summary created
- ✅ User satisfied with cleanup

## Recovery Process

If files need to be recovered:

```bash
# List files in trash
dir trash/

# Recover specific file
move trash/[filename] [original-location]/

# Recover all files
move trash/* ./
```

## Best Practices

1. **Always create trash folder** - Don't delete permanently
2. **Document what was moved** - Create cleanup summary
3. **Get user confirmation** - For Category B files
4. **Verify after cleanup** - Run health checks
5. **Update documentation** - Fix broken links
6. **Keep recent artifacts** - Don't move files < 1 sprint old

## Related Workflows

- `/housekeeping` - Comprehensive maintenance
- `/compound` - Document cleanup patterns
- `/audit` - Verify project health after cleanup

#cleanup #maintenance #housekeeping #trash

