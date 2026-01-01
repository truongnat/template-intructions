# 🧪 Tester - Knowledge Base Guide

## Role: @TESTER (Quality Assurance Tester)

---

## 🎯 Your Auto-Learning Responsibilities

As TESTER, you capture knowledge about:
- Test failure patterns and edge cases
- Regression bug patterns
- Test automation challenges
- Performance bottlenecks
- Integration testing issues
- E2E testing strategies

---

## 🔄 Auto-Learning Triggers for TESTER

### Mandatory KB Entry Creation

| Trigger | When | Category | Example |
|---------|------|----------|---------|
| **Test Failure** | Test fails 3+ times | Bugs | KB-[date]-###-test-failure-pattern |
| **Edge Case Found** | Unexpected behavior discovered | Bugs | KB-[date]-###-edge-case-discovery |
| **Regression Bug** | Previously fixed bug reappears | Bugs | KB-[date]-###-regression-pattern |
| **Flaky Test** | Test intermittently fails | Features/Testing | KB-[date]-###-flaky-test-fix |
| **Performance Issue** | Performance below threshold | Performance | KB-[date]-###-performance-bottleneck |
| **Automation Challenge** | Test automation difficulty | Features/Testing | KB-[date]-###-automation-solution |
| **Integration Failure** | Component integration fails | Bugs | KB-[date]-###-integration-issue |
| **Browser Compatibility** | Cross-browser issue found | Platform/Web | KB-[date]-###-browser-compatibility |

---

## 📝 KB Entry Template for TESTER

```markdown
# KB-[YYYY-MM-DD]-[###] - [Test Issue Title]

## Document Info
| Field | Value |
|-------|-------|
| ID | KB-[YYYY-MM-DD]-[###] |
| Date | [YYYY-MM-DD] |
| Author | @TESTER |
| Category | Bugs / Features / Performance / Platform |
| Severity | [Critical/High/Medium/Low] |
| Auto-Generated | Yes |
| Source Task | [Task ID] |
| Sprint | [N] |
| Tags | #testing #bug-pattern #edge-case #auto-learned |

---

## Test Failure Description

### Test Case
**Test Name:** [Test case name]  
**Test Type:** [Unit/Integration/E2E/Performance]  
**Test File:** [Path to test file]

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happened]

### Failure Frequency
- **First Occurrence:** [Date]
- **Total Failures:** [Number]
- **Failure Rate:** [Percentage]
- **Flaky:** [Yes/No]

---

## Context

### Environment
- **Platform:** [Web/Mobile/Desktop/API]
- **Browser/Device:** [If applicable]
- **OS:** [Operating system]
- **Test Framework:** [Jest/Playwright/Cypress/etc.]

### Component Under Test
- **Component:** [Component name]
- **File Path:** [Path]
- **Dependencies:** [List]

### Test Data
```json
{
  "input": "test data used",
  "expected": "expected output",
  "actual": "actual output"
}
```

---

## Root Cause Analysis

### Investigation Steps
1. [Step 1 - What was checked]
2. [Step 2 - What was found]
3. [Step 3 - Root cause identified]

### Root Cause
[Detailed explanation of why test failed]

### Contributing Factors
- [Factor 1]
- [Factor 2]

### Code Issue (if applicable)
```javascript
// Problematic code
[code snippet]
```

---

## Solution Applied

### Fix Approach
[How the issue was resolved]

### Code Changes
```javascript
// Fixed code
[code snippet]
```

### Test Updates
```javascript
// Updated test
[test code]
```

### Verification Steps
1. [Step 1]
2. [Step 2]
3. [Step 3]

---

## Regression Prevention

### Regression Test Added
```javascript
// New regression test
describe('[Test Suite]', () => {
  it('should prevent regression of [issue]', () => {
    // Test implementation
  });
});
```

### Test Coverage
- **Before:** [X]%
- **After:** [Y]%
- **Improvement:** [Z]%

### Automated Checks
- [ ] Unit test added
- [ ] Integration test added
- [ ] E2E test added
- [ ] Performance test added
- [ ] CI/CD pipeline updated

---

## Edge Cases Documented

### Edge Case 1
- **Scenario:** [Description]
- **Test:** [How to test]
- **Expected:** [Expected behavior]

### Edge Case 2
- **Scenario:** [Description]
- **Test:** [How to test]
- **Expected:** [Expected behavior]

---

## Prevention Measures

### Testing Checklist Updates
- [ ] [New test scenario to always check]
- [ ] [New edge case to consider]
- [ ] [New validation to add]

### Test Strategy Updates
- [Update to test strategy]
- [New testing approach]

### Code Review Checklist
- [ ] [Check for similar patterns]
- [ ] [Validate edge cases]
- [ ] [Verify error handling]

---

## Performance Impact (if applicable)

### Metrics
- **Response Time:** [Before] → [After]
- **Memory Usage:** [Before] → [After]
- **CPU Usage:** [Before] → [After]

### Performance Test
```javascript
// Performance test
[test code]
```

---

## Browser/Platform Compatibility (if applicable)

### Tested Platforms
| Platform | Version | Status | Notes |
|----------|---------|--------|-------|
| Chrome | [version] | ✅/❌ | [notes] |
| Firefox | [version] | ✅/❌ | [notes] |
| Safari | [version] | ✅/❌ | [notes] |
| Edge | [version] | ✅/❌ | [notes] |

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

### Testing Best Practices
- [Best practice 1]
- [Best practice 2]

---

## Related Entries
- KB-[ID]: [Related test pattern]
- KB-[ID]: [Related bug fix]

---

## References
- Test Report: [Link]
- Bug Report: [Link]
- Documentation: [Link]

---

#knowledge-base #testing #bug-pattern #edge-case #auto-learned
```

---

## 🔍 Pre-Testing KB Search

Before starting testing, search KB for:

```markdown
### TESTER KB Search Checklist
- [ ] Similar component test patterns
- [ ] Known edge cases for this feature type
- [ ] Common test failures in this area
- [ ] Browser compatibility issues
- [ ] Performance benchmarks
- [ ] Flaky test patterns

**Search Keywords:**
- Component name
- Feature type (auth, payment, etc.)
- Technology (React, API, etc.)
- Test type (E2E, integration, etc.)
```

---

## 📊 TESTER-Specific Metrics

Track in your Test Reports:

```markdown
## Testing Knowledge Metrics

### Test Execution
- **Total Tests:** [X]
- **Passed:** [Y]
- **Failed:** [Z]
- **Flaky:** [W]
- **KB Entries Created:** [Number]

### Bug Discovery
- **Bugs Found:** [X]
- **Edge Cases:** [Y]
- **Regressions:** [Z]
- **KB Entries:** [List KB-IDs]

### Test Coverage
- **Coverage Before:** [X]%
- **Coverage After:** [Y]%
- **Improvement:** [Z]%

### Knowledge Reuse
- **KB Entries Referenced:** [Number]
- **Time Saved:** [Estimate]
- **Issues Prevented:** [Number]
```

---

## 🎯 Integration with Test Report

Add this section to every Test Report:

```markdown
## Knowledge Base Integration

### KB Entries Referenced
| KB-ID | Title | How It Helped Testing |
|-------|-------|----------------------|
| KB-[ID] | [Title] | [Description] |

### Test Patterns Applied from KB
1. [Pattern 1 from KB-ID]
2. [Pattern 2 from KB-ID]

### New KB Entries Created
| KB-ID | Title | Category | Severity |
|-------|-------|----------|----------|
| KB-[ID] | [Title] | [Category] | [Severity] |

### Edge Cases from KB
| Edge Case | Source KB | Test Added |
|-----------|-----------|------------|
| [Case] | KB-[ID] | [Yes/No] |
```

---

## 🚀 Quick Actions

### After Test Failure
```markdown
1. Check if similar failure in KB
2. If 3+ failures, create KB entry
3. Document edge case
4. Add regression test
5. Update test strategy
```

### After Finding Edge Case
```markdown
1. Document edge case immediately
2. Create KB entry
3. Add test coverage
4. Notify @DEV
5. Update test checklist
```

### After Regression Bug
```markdown
1. Search KB for original fix
2. Create KB entry linking to original
3. Add regression test
4. Update CI/CD checks
5. Review test coverage gaps
```

---

## 🧪 Testing with MCP Tools

### Using Playwright MCP
```markdown
### Playwright Test Pattern
1. Search KB for similar E2E tests
2. Use Playwright MCP for browser automation
3. Document any browser-specific issues
4. Create KB entry if complex scenario
5. Add to regression suite
```

### Browser Automation KB Entry
```markdown
## KB Entry for Browser Test
- **Tool:** Playwright MCP
- **Test Type:** E2E
- **Scenario:** [Description]
- **Selectors:** [CSS/XPath used]
- **Challenges:** [What was difficult]
- **Solution:** [How it was solved]
```

---

## 📚 Example KB Entries for TESTER

### Example 1: Flaky Test Fix
**KB-2026-01-01-020-flaky-test-race-condition.md**
- Pattern: Test fails intermittently due to race condition
- Solution: Add explicit waits, use data-testid
- Prevention: Always wait for elements, avoid timeouts

### Example 2: Edge Case Discovery
**KB-2026-01-01-021-empty-state-edge-case.md**
- Pattern: App crashes with empty data array
- Solution: Add null/empty checks
- Prevention: Always test empty states

### Example 3: Browser Compatibility
**KB-2026-01-01-022-safari-date-picker-issue.md**
- Pattern: Date picker fails in Safari
- Solution: Use native input type="date"
- Prevention: Test all browsers, use polyfills

### Example 4: Performance Bottleneck
**KB-2026-01-01-023-slow-list-rendering.md**
- Pattern: List with 1000+ items renders slowly
- Solution: Implement virtual scrolling
- Prevention: Performance test with large datasets

---

## 🎓 TESTER Best Practices

1. **Search KB Before Testing**
   - Check for known issues
   - Review edge cases
   - Find test patterns

2. **Document Edge Cases Immediately**
   - Don't wait until end of sprint
   - Include reproduction steps
   - Add test coverage

3. **Track Flaky Tests**
   - Create KB entry after 3 failures
   - Document root cause
   - Fix or remove flaky tests

4. **Build Regression Suite**
   - Every bug gets regression test
   - Link test to KB entry
   - Update CI/CD pipeline

5. **Share Test Patterns**
   - Document reusable patterns
   - Create test utilities
   - Update test strategy

---

## 🔄 Test Automation Workflow

```markdown
### Automated Testing with KB

1. **Pre-Test Search**
   - Search KB for component
   - Review test patterns
   - Check edge cases

2. **Test Execution**
   - Run automated tests
   - Monitor for failures
   - Track flaky tests

3. **Failure Analysis**
   - Investigate root cause
   - Check if known issue
   - Document if new pattern

4. **KB Entry Creation**
   - If 3+ failures
   - If edge case found
   - If regression detected

5. **Regression Prevention**
   - Add test to suite
   - Update KB entry
   - Share with team
```

---

## 🎯 Success Criteria

### Individual Success
- [ ] Searches KB before testing
- [ ] Creates KB entries for test failures
- [ ] Documents edge cases
- [ ] Adds regression tests
- [ ] Shares test patterns

### Team Success
- [ ] Reduced regression rate
- [ ] Improved test coverage
- [ ] Faster bug detection
- [ ] Better test automation
- [ ] Shared test knowledge

---

#tester #testing #quality-assurance #knowledge-base #automation

