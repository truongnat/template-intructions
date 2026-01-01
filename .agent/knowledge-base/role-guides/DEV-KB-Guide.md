# 💻 Developer - Knowledge Base Guide

## Role: @DEV (Developer)

---

## 🎯 Your Auto-Learning Responsibilities

As DEV, you capture knowledge about:
- Bug fixes and root causes
- Complex feature implementations
- Code patterns and anti-patterns
- Integration challenges
- Performance optimizations
- Refactoring lessons

---

## 🔄 Auto-Learning Triggers for DEV

### Mandatory KB Entry Creation

| Trigger | When | Category | Example |
|---------|------|----------|---------|
| **Bug Fixed** | Any medium+ priority bug | Bugs | KB-[date]-###-bug-fix |
| **3+ Attempts** | Task required 3+ attempts | Features | KB-[date]-###-complex-implementation |
| **Integration Issue** | Third-party integration problem | Features/Integration | KB-[date]-###-api-integration |
| **Performance Fix** | Performance optimization applied | Performance | KB-[date]-###-optimization |
| **Refactoring** | Major code refactoring | Architecture | KB-[date]-###-refactoring-pattern |
| **Error Pattern** | Same error occurred 2+ times | Bugs | KB-[date]-###-error-pattern |
| **Complex Logic** | Logic required 4+ hours | Features | KB-[date]-###-complex-logic |
| **Security Fix** | Security vulnerability fixed | Security | KB-[date]-###-security-fix |

---

## 📝 KB Entry Template for DEV

```markdown
# KB-[YYYY-MM-DD]-[###] - [Bug/Feature Title]

## Document Info
| Field | Value |
|-------|-------|
| ID | KB-[YYYY-MM-DD]-[###] |
| Date | [YYYY-MM-DD] |
| Author | @DEV |
| Category | Bugs / Features / Performance / Security |
| Severity | [Critical/High/Medium/Low] |
| Auto-Generated | Yes |
| Source Task | [Task ID] |
| Sprint | [N] |
| Tags | #bug-fix #feature #performance #auto-learned |

---

## Problem Description

### Issue
[Clear description of the bug or challenge]

### Error Message (if applicable)
```
[Exact error message]
```

### Context
- **Component:** [Component name]
- **File Path:** [Path to file]
- **Technology:** [React/Node/Python/etc.]
- **Environment:** [Dev/Staging/Production]

### Symptoms
- [How the issue manifested]
- [User impact]
- [System behavior]

---

## Root Cause Analysis

### Investigation Process
1. [Step 1 - What was checked]
2. [Step 2 - What was found]
3. [Step 3 - Root cause identified]

### Root Cause
[Detailed technical explanation]

### Why It Happened
- [Reason 1]
- [Reason 2]
- [Contributing factors]

### Problematic Code
```javascript
// Before - Problematic code
[code snippet showing the issue]
```

---

## Solution Applied

### Approach
[Explanation of solution strategy]

### Implementation
```javascript
// After - Fixed code
[code snippet showing the fix]
```

### Changes Made
- **Files Modified:** [List files]
- **Lines Changed:** [Number]
- **Dependencies Added:** [If any]

### Testing
```javascript
// Test to verify fix
[test code]
```

### Verification Steps
1. [Step 1]
2. [Step 2]
3. [Step 3]

---

## Attempts History

### Attempt 1
- **Approach:** [What was tried]
- **Result:** [Why it failed]
- **Time Spent:** [Hours]

### Attempt 2
- **Approach:** [What was tried]
- **Result:** [Why it failed]
- **Time Spent:** [Hours]

### Attempt 3 (Final)
- **Approach:** [What worked]
- **Result:** [Success]
- **Time Spent:** [Hours]

---

## Prevention Measures

### Code Review Checklist
- [ ] [Check for similar patterns]
- [ ] [Validate edge cases]
- [ ] [Verify error handling]
- [ ] [Check performance impact]

### Best Practices
- [Best practice 1]
- [Best practice 2]

### Linting/Static Analysis
```json
// ESLint rule to prevent this
{
  "rules": {
    "[rule-name]": "error"
  }
}
```

### Unit Tests Added
```javascript
// Regression test
describe('[Component]', () => {
  it('should handle [edge case]', () => {
    // Test implementation
  });
});
```

---

## Performance Impact (if applicable)

### Metrics
- **Before:** [Metric value]
- **After:** [Metric value]
- **Improvement:** [Percentage]

### Profiling Results
```
[Profiling data or screenshots]
```

---

## Code Patterns

### Pattern to Avoid (Anti-pattern)
```javascript
// ❌ Don't do this
[anti-pattern code]
```

### Recommended Pattern
```javascript
// ✅ Do this instead
[recommended code]
```

---

## Dependencies & Compatibility

### Dependencies Updated
- [Package name]: [Old version] → [New version]

### Breaking Changes
- [Change 1]
- [Change 2]

### Migration Steps
1. [Step 1]
2. [Step 2]

---

## Lessons Learned

### What Worked Well
- [Success 1]
- [Success 2]

### What Didn't Work
- [Failed approach 1]
- [Failed approach 2]

### Key Takeaways
1. [Takeaway 1]
2. [Takeaway 2]

### Technical Insights
- [Insight 1]
- [Insight 2]

---

## Related Entries
- KB-[ID]: [Related bug fix]
- KB-[ID]: [Related feature]

---

## References
- Documentation: [Link]
- Stack Overflow: [Link]
- GitHub Issue: [Link]
- Pull Request: [Link]

---

#knowledge-base #development #bug-fix #feature #auto-learned
```

---

## 🔍 Pre-Development KB Search

Before starting development, search KB for:

```markdown
### DEV KB Search Checklist
- [ ] Similar bugs in this component
- [ ] Known issues with this technology
- [ ] Integration patterns for this API
- [ ] Performance considerations
- [ ] Security vulnerabilities
- [ ] Code patterns to follow/avoid

**Search Keywords:**
- Error message (if fixing bug)
- Component name
- Technology/library name
- Feature type
```

---

## 📊 DEV-Specific Metrics

Track in your Development Log:

```markdown
## Development Knowledge Metrics

### Bug Fixes
- **Bugs Fixed:** [X]
- **Average Resolution Time:** [Y] hours
- **KB Entries Created:** [Z]
- **KB Entries Referenced:** [W]

### Feature Implementation
- **Features Completed:** [X]
- **Complex Features:** [Y]
- **KB Entries Created:** [Z]

### Code Quality
- **Refactorings:** [X]
- **Performance Optimizations:** [Y]
- **KB Entries:** [List KB-IDs]

### Knowledge Reuse
- **Time Saved by KB:** [Estimate]
- **Issues Prevented:** [Number]
- **Patterns Applied:** [List]
```

---

## 🎯 Integration with Development Log

Add this section to every Development Log:

```markdown
## Knowledge Base Integration

### KB Entries Referenced
| KB-ID | Title | How It Helped |
|-------|-------|---------------|
| KB-[ID] | [Title] | [Description] |

### Code Patterns Applied from KB
1. [Pattern 1 from KB-ID]
2. [Pattern 2 from KB-ID]

### New KB Entries Created
| KB-ID | Title | Category | Trigger |
|-------|-------|----------|---------|
| KB-[ID] | [Title] | [Category] | [3+ attempts/Bug fix/etc.] |

### Anti-Patterns Avoided
| Anti-Pattern | Source KB | Alternative Used |
|--------------|-----------|------------------|
| [Pattern] | KB-[ID] | [Solution] |
```

---

## 🚀 Quick Actions

### After Bug Fix
```markdown
1. Check severity: [critical/high/medium/low]
2. If medium+: Create KB entry
3. Document root cause
4. Add regression test
5. Update code review checklist
```

### After 3+ Attempts
```markdown
1. Document all attempts
2. Create KB entry immediately
3. Explain what didn't work
4. Document final solution
5. Add prevention measures
```

### After Integration
```markdown
1. Document integration approach
2. Note any challenges
3. Create KB entry if complex
4. Add integration tests
5. Update documentation
```

---

## 💡 Code Patterns Library

### Common Patterns to Document

#### Error Handling Pattern
```javascript
// KB-worthy error handling
try {
  await riskyOperation();
} catch (error) {
  logger.error('Operation failed', { error, context });
  // Proper error recovery
}
```

#### Async Pattern
```javascript
// KB-worthy async pattern
const results = await Promise.allSettled(
  items.map(item => processItem(item))
);
// Handle both successes and failures
```

#### State Management Pattern
```javascript
// KB-worthy state pattern
const [state, setState] = useState(initialState);
useEffect(() => {
  // Proper cleanup
  return () => cleanup();
}, [dependencies]);
```

---

## 📚 Example KB Entries for DEV

### Example 1: React Hydration Bug
**KB-2026-01-01-001-react-hydration-mismatch.md**
- Pattern: SSR/CSR mismatch with dynamic IDs
- Solution: Use React 18's useId() hook
- Prevention: Avoid Date.now() in initial render

### Example 2: API Integration
**KB-2026-01-01-030-oauth-token-refresh.md**
- Pattern: OAuth token expires during long sessions
- Solution: Implement token refresh interceptor
- Prevention: Always handle token expiration

### Example 3: Performance Optimization
**KB-2026-01-01-031-list-virtualization.md**
- Pattern: Slow rendering with 1000+ items
- Solution: Implement virtual scrolling
- Prevention: Performance test with large datasets

### Example 4: Memory Leak
**KB-2026-01-01-032-event-listener-leak.md**
- Pattern: Event listeners not cleaned up
- Solution: Use cleanup in useEffect
- Prevention: Always return cleanup function

---

## 🎓 DEV Best Practices

1. **Search KB Before Coding**
   - Check for similar bugs
   - Review code patterns
   - Find integration examples

2. **Document While Coding**
   - Don't wait until end
   - Capture failed attempts
   - Note why solutions work

3. **Create KB After 3 Attempts**
   - Mandatory for complex issues
   - Include all attempts
   - Explain reasoning

4. **Add Regression Tests**
   - Every bug fix gets test
   - Link test to KB entry
   - Update test suite

5. **Share Code Patterns**
   - Document reusable patterns
   - Create utility functions
   - Update style guide

---

## 🔄 Development Workflow with KB

```markdown
### KB-Integrated Development Flow

1. **Pre-Development**
   - Search KB for similar work
   - Review relevant patterns
   - Check for known issues

2. **During Development**
   - Track attempts (1, 2, 3+)
   - Note what doesn't work
   - Document challenges

3. **After Development**
   - Check auto-learn triggers
   - Create KB entry if needed
   - Add tests
   - Update documentation

4. **Code Review**
   - Reference KB entries
   - Check for anti-patterns
   - Verify best practices

5. **Deployment**
   - Monitor for issues
   - Update KB if problems found
   - Share lessons learned
```

---

## 🎯 Success Criteria

### Individual Success
- [ ] Searches KB before coding
- [ ] Creates KB entries for bugs
- [ ] Documents complex features
- [ ] Adds regression tests
- [ ] Shares code patterns

### Team Success
- [ ] Reduced bug recurrence
- [ ] Faster development
- [ ] Better code quality
- [ ] Shared knowledge
- [ ] Consistent patterns

---

#dev #developer #knowledge-base #coding #bug-fix

