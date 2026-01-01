# 🔗 Git Workflow + Knowledge Base Integration

## Purpose
Integrate auto-learning with git workflow to automatically capture knowledge from commits, branches, and pull requests.

---

## 🎯 Git-Triggered Auto-Learning

### Commit-Based Learning

#### Bug Fix Commits
When commit message contains `fix:` or `#fixbug-`:

```markdown
### Auto-Learn Trigger
**Commit:** `fix: resolve null pointer in auth service (#43)`

**Actions:**
1. Extract bug information from commit
2. Check if medium+ priority
3. Create KB entry if qualified
4. Link KB entry to commit hash
5. Update KB index
```

#### Feature Commits
When commit message contains `feat:`:

```markdown
### Auto-Learn Trigger
**Commit:** `feat: implement OAuth login (#42)`

**Actions:**
1. Check if complex feature (3+ commits)
2. Review commit history
3. Create KB entry if qualified
4. Document implementation approach
5. Link to GitHub issue
```

---

## 📝 Enhanced Commit Messages with KB

### Standard Format
```
<type>: <description> (#issue) [KB-###]

[optional body with KB references]
```

### Examples

#### Bug Fix with KB Reference
```
fix: resolve hydration mismatch in Astro components (#43) [KB-2026-01-01-001]

Root cause: Using Date.now() for IDs during SSR
Solution: Switched to React 18's useId() hook
Prevention: Added ESLint rule to prevent Date.now() in components

References KB-2026-01-01-001 for similar SSR issues
```

#### Feature with KB Learning
```
feat: implement OAuth token refresh (#42) [KB-2026-01-01-030]

Implemented automatic token refresh using interceptor pattern.
Took 3 attempts to get race condition handling right.

Created KB-2026-01-01-030 documenting:
- Token refresh race condition
- Interceptor pattern
- Testing strategy
```

#### Refactor with KB Pattern
```
refactor: extract validation logic to separate module [KB-2026-01-01-015]

Applied validation pattern from KB-2026-01-01-015
Improved code reusability and testability
```

---

## 🌿 Branch-Based Learning

### Feature Branches
Track learning opportunities in feature branches:

```markdown
### Feature Branch Analysis
**Branch:** `feature/oauth-login`
**Commits:** 8
**Duration:** 3 days
**Attempts:** Multiple refactors

**Auto-Learn Criteria:**
- [ ] 3+ commits on same file
- [ ] Multiple refactors
- [ ] Complex implementation
- [ ] Integration challenges

**Action:** Create KB entry when merging
```

### Bug Fix Branches
```markdown
### Bug Fix Branch Analysis
**Branch:** `fix/auth-null-pointer`
**Commits:** 5
**Duration:** 4 hours
**Severity:** High

**Auto-Learn Criteria:**
- [x] High severity bug
- [x] Multiple attempts (5 commits)
- [x] Complex root cause

**Action:** Create KB entry before merge
```

---

## 🔄 Pull Request Integration

### PR Template with KB Section

```markdown
## Pull Request: [Title]

### Description
[Description of changes]

### Type of Change
- [ ] Bug fix (fix:)
- [ ] New feature (feat:)
- [ ] Refactoring (refactor:)
- [ ] Documentation (docs:)

### Knowledge Base Integration

#### KB Entries Referenced
- KB-[ID]: [How it helped]

#### New KB Entry Required?
- [ ] Yes - Complex implementation (3+ attempts)
- [ ] Yes - Bug fix (medium+ severity)
- [ ] Yes - New pattern/approach
- [ ] No - Simple change

#### If Yes, KB Entry Details:
- **Category:** [Bugs/Features/Architecture/Security/Performance]
- **Severity:** [Critical/High/Medium/Low]
- **Title:** [KB entry title]
- **Key Learnings:** [Brief summary]

### Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

### Checklist
- [ ] Code follows project conventions
- [ ] No syntax/type/lint errors
- [ ] Atomic commits with proper messages
- [ ] GitHub Issue referenced
- [ ] KB entry created (if required)
- [ ] KB index updated (if entry created)
```

---

## 🤖 Automated KB Entry from Git

### Git Hook: Pre-Commit
```bash
#!/bin/bash
# .git/hooks/pre-commit

# Check if commit qualifies for KB entry
COMMIT_MSG=$(cat .git/COMMIT_EDITMSG)

if [[ $COMMIT_MSG =~ "fix:" ]] || [[ $COMMIT_MSG =~ "#fixbug-" ]]; then
  echo "⚠️  Bug fix detected. Consider creating KB entry."
  echo "   Use: KB-$(date +%Y-%m-%d)-###-[title].md"
fi

if git log --oneline | grep -c "$(git diff --cached --name-only)" | grep -q "[3-9]"; then
  echo "⚠️  Multiple commits on same file. Consider creating KB entry."
fi
```

### Git Hook: Post-Commit
```bash
#!/bin/bash
# .git/hooks/post-commit

# Extract commit info
COMMIT_HASH=$(git rev-parse HEAD)
COMMIT_MSG=$(git log -1 --pretty=%B)
FILES_CHANGED=$(git diff-tree --no-commit-id --name-only -r HEAD)

# Check for KB reference
if [[ $COMMIT_MSG =~ \[KB-[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{3}\] ]]; then
  KB_ID=$(echo $COMMIT_MSG | grep -oP 'KB-[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{3}')
  echo "✅ KB entry referenced: $KB_ID"
  
  # Update KB entry with commit hash
  KB_FILE=".agent/knowledge-base/**/$KB_ID*.md"
  if [ -f "$KB_FILE" ]; then
    echo "- Commit: $COMMIT_HASH" >> "$KB_FILE"
  fi
fi
```

---

## 📊 Git-Based KB Metrics

### Commit Analysis
```markdown
## Git + KB Metrics

### Commits This Sprint
- **Total Commits:** [X]
- **Bug Fixes:** [Y]
- **Features:** [Z]
- **KB Entries Created:** [W]

### KB Coverage
- **Commits with KB Reference:** [X]%
- **Bug Fixes with KB:** [Y]%
- **Features with KB:** [Z]%

### Learning Velocity
- **KB Entries per Sprint:** [X]
- **Avg Time to KB Entry:** [Y] hours
- **KB Reuse Rate:** [Z]%
```

---

## 🎯 Workflow Integration

### Developer Workflow
```markdown
### Git + KB Workflow

1. **Start Work**
   - Create branch: `feature/[name]` or `fix/[name]`
   - Search KB for similar work
   - Reference KB entries in commits

2. **During Development**
   - Make atomic commits
   - Track attempts (commit count)
   - Note challenges in commit messages

3. **Before Merge**
   - Check auto-learn criteria
   - Create KB entry if needed
   - Update KB index
   - Reference KB in PR

4. **After Merge**
   - Verify KB entry linked to commits
   - Update KB with final insights
   - Share with team
```

---

## 📚 Example Git + KB Workflow

### Example 1: Bug Fix with KB

```bash
# 1. Create branch
git checkout -b fix/hydration-mismatch

# 2. Search KB
grep -r "hydration" .agent/knowledge-base/

# 3. Make changes (multiple attempts)
git commit -m "fix: attempt 1 - try synchronizing timestamps"
git commit -m "fix: attempt 2 - use localStorage for IDs"
git commit -m "fix: resolve hydration mismatch using useId hook (#43)

Root cause: Date.now() creates different IDs on server vs client
Solution: Use React 18's useId() hook for stable IDs
Prevention: Added ESLint rule

Created KB-2026-01-01-001"

# 4. Create KB entry
cp .agent/templates/Knowledge-Entry-Template.md \
   .agent/knowledge-base/bugs/medium/KB-2026-01-01-001-hydration-mismatch.md

# 5. Update KB index
# Edit .agent/knowledge-base/index.md

# 6. Commit KB entry
git add .agent/knowledge-base/
git commit -m "docs: add KB entry for hydration mismatch [KB-2026-01-01-001]"

# 7. Create PR with KB reference
gh pr create --title "Fix: Resolve hydration mismatch" \
             --body "Fixes #43. See KB-2026-01-01-001 for details."
```

### Example 2: Feature with KB

```bash
# 1. Create branch
git checkout -b feature/oauth-login

# 2. Search KB
grep -r "oauth\|authentication" .agent/knowledge-base/

# 3. Implement (complex, multiple attempts)
git commit -m "feat: add OAuth provider configuration"
git commit -m "feat: implement token exchange"
git commit -m "feat: add token refresh logic (attempt 1)"
git commit -m "feat: fix token refresh race condition (attempt 2)"
git commit -m "feat: implement OAuth login with token refresh (#42)

Implemented OAuth 2.0 login with automatic token refresh.
Took 4 attempts to handle race conditions correctly.

Created KB-2026-01-01-030 documenting:
- Token refresh interceptor pattern
- Race condition handling
- Testing strategy"

# 4. Create KB entry
# ... (similar to bug fix example)

# 5. Create PR
gh pr create --title "Feature: OAuth Login" \
             --body "Implements #42. Complex implementation documented in KB-2026-01-01-030."
```

---

## 🎓 Best Practices

### 1. Reference KB in Commits
```bash
# Good
git commit -m "fix: resolve auth issue (#43) [KB-2026-01-01-020]"

# Better
git commit -m "fix: resolve auth issue using pattern from KB-2026-01-01-015 (#43)

Applied JWT validation pattern from KB.
Created KB-2026-01-01-020 for this specific case."
```

### 2. Create KB Before Merge
```markdown
### Pre-Merge Checklist
- [ ] Code complete and tested
- [ ] Atomic commits with proper messages
- [ ] KB entry created (if qualified)
- [ ] KB entry linked in commits
- [ ] KB index updated
- [ ] PR references KB entry
```

### 3. Link Commits to KB
```markdown
### In KB Entry
## Related Commits
- [abc123] - Initial implementation
- [def456] - Fix race condition
- [ghi789] - Add tests

## Pull Request
- PR #42: Feature: OAuth Login
```

### 4. Update KB from Git History
```bash
# Find all commits related to a topic
git log --all --grep="oauth" --oneline

# Check if KB entry exists
grep -r "oauth" .agent/knowledge-base/

# Create KB entry if missing
# Document patterns from commit history
```

---

## 🔄 Continuous Improvement

### Weekly Git + KB Review
```markdown
## Weekly Review Checklist

1. **Analyze Commits**
   - Review all commits from week
   - Identify missing KB entries
   - Check KB reference rate

2. **Update KB**
   - Create missing KB entries
   - Link commits to KB entries
   - Update KB index

3. **Metrics**
   - Calculate KB coverage
   - Track learning velocity
   - Identify patterns

4. **Share**
   - Highlight valuable KB entries
   - Share git + KB best practices
   - Celebrate good examples
```

---

## 🎯 Success Metrics

### Git + KB Integration Success
- [ ] 80%+ bug fix commits reference KB
- [ ] 50%+ feature commits reference KB
- [ ] All complex features have KB entries
- [ ] KB entries linked to commits
- [ ] Team uses KB in PRs

---

#git #knowledge-base #workflow #integration #automation

