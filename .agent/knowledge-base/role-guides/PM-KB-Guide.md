# 📋 Project Manager - Knowledge Base Guide

## Role: @PM (Project Manager)

---

## 🎯 Your Auto-Learning Responsibilities

As PM, you capture knowledge about:
- Planning patterns and estimation accuracy
- Scope management challenges
- Stakeholder communication strategies
- Requirements gathering techniques
- Risk identification and mitigation

---

## 🔄 Auto-Learning Triggers for PM

### Mandatory KB Entry Creation

| Trigger | When | Category | Example |
|---------|------|----------|---------|
| **Scope Creep** | Unplanned features requested | Architecture | KB-[date]-###-scope-management |
| **Estimation Error** | Actual vs estimated >30% variance | Architecture | KB-[date]-###-estimation-pattern |
| **Requirements Change** | Major requirement revision | Architecture | KB-[date]-###-requirement-change |
| **Stakeholder Conflict** | Conflicting priorities resolved | Architecture | KB-[date]-###-stakeholder-alignment |
| **Risk Materialized** | Identified risk became issue | Architecture | KB-[date]-###-risk-pattern |
| **Planning Mistake** | Planning approach failed | Architecture | KB-[date]-###-planning-lesson |

---

## 📝 KB Entry Template for PM

```markdown
# KB-[YYYY-MM-DD]-[###] - [Planning Pattern Title]

## Document Info
| Field | Value |
|-------|-------|
| ID | KB-[YYYY-MM-DD]-[###] |
| Date | [YYYY-MM-DD] |
| Author | @PM |
| Category | Architecture |
| Severity | [High/Medium/Low] |
| Auto-Generated | Yes |
| Source Task | [Task ID] |
| Sprint | [N] |
| Tags | #planning #project-management #auto-learned |

---

## Planning Challenge

### Description
[What planning issue occurred]

### Context
- **Project Phase:** [Planning/Execution/Closure]
- **Stakeholders Involved:** [List]
- **Timeline Impact:** [Days/weeks affected]
- **Budget Impact:** [If applicable]

### Symptoms
- [How the issue manifested]
- [What signals were missed]
- [When it was discovered]

---

## Root Cause Analysis

### What Happened
[Detailed explanation of the planning issue]

### Why It Happened
- [Root cause 1]
- [Root cause 2]
- [Contributing factors]

### Warning Signs Missed
- [Early indicator 1]
- [Early indicator 2]

---

## Solution Applied

### Approach
[How the issue was resolved]

### Actions Taken
1. [Action 1]
2. [Action 2]
3. [Action 3]

### Stakeholder Communication
[How stakeholders were informed and aligned]

### Timeline Adjustment
[How schedule was revised if needed]

---

## Prevention Measures

### Planning Checklist Updates
- [ ] [New checklist item 1]
- [ ] [New checklist item 2]

### Early Warning Indicators
- [Indicator 1 to watch for]
- [Indicator 2 to watch for]

### Stakeholder Management
- [Communication strategy]
- [Alignment approach]

### Risk Register Updates
- [New risk to track]
- [Mitigation strategy]

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

---

## Related Entries
- KB-[ID]: [Related planning pattern]

---

#knowledge-base #planning #project-management #auto-learned
```

---

## 🔍 Pre-Planning KB Search

Before creating a project plan, search KB for:

```markdown
### PM KB Search Checklist
- [ ] Similar project types
- [ ] Common estimation patterns
- [ ] Known scope creep triggers
- [ ] Stakeholder management strategies
- [ ] Risk patterns for this domain

**Search Keywords:**
- Project type (web, mobile, API, etc.)
- Technology stack
- Team size
- Timeline constraints
```

---

## 📊 PM-Specific Metrics

Track in your Phase Reports:

```markdown
## Planning Knowledge Metrics

### Estimation Accuracy
- **Planned:** [X] hours/days
- **Actual:** [Y] hours/days
- **Variance:** [Z]%
- **KB Entry Created:** [Yes/No - KB-ID]

### Scope Management
- **Original Scope:** [X] features
- **Scope Changes:** [Y] changes
- **Scope Creep:** [Z] unplanned features
- **KB Entries:** [List KB-IDs]

### Risk Management
- **Risks Identified:** [X]
- **Risks Materialized:** [Y]
- **KB Entries:** [List KB-IDs]
```

---

## 🎯 Integration with Project Plan

Add this section to every Project Plan:

```markdown
## Knowledge Base Integration

### KB Entries Referenced
| KB-ID | Title | How It Informed Planning |
|-------|-------|-------------------------|
| KB-[ID] | [Title] | [Description] |

### Planning Assumptions Based on KB
1. [Assumption 1 from KB-ID]
2. [Assumption 2 from KB-ID]

### Risk Register from KB
| Risk | Source KB | Mitigation |
|------|-----------|------------|
| [Risk] | KB-[ID] | [Strategy] |
```

---

## 🚀 Quick Actions

### After Requirements Gathering
```bash
# Search for similar projects
grep -r "similar-domain" .agent/knowledge-base/architecture/

# Check estimation patterns
grep -r "estimation" .agent/knowledge-base/architecture/
```

### After Scope Change
```markdown
1. Document scope change reason
2. Create KB entry if pattern emerges
3. Update risk register
4. Notify team via @tags
```

### After Sprint Completion
```markdown
1. Compare planned vs actual
2. If variance >30%, create KB entry
3. Document lessons learned
4. Update estimation models
```

---

## 📚 Example KB Entries for PM

### Example 1: Scope Creep Pattern
**KB-2026-01-01-010-scope-creep-feature-requests.md**
- Pattern: Stakeholder requests features mid-sprint
- Solution: Implement change request process
- Prevention: Weekly stakeholder alignment meetings

### Example 2: Estimation Error
**KB-2026-01-01-011-underestimated-integration-complexity.md**
- Pattern: Third-party integrations take 2x longer
- Solution: Add 100% buffer for integrations
- Prevention: Technical spike before estimation

### Example 3: Risk Materialized
**KB-2026-01-01-012-dependency-delay-risk.md**
- Pattern: External dependency caused 2-week delay
- Solution: Parallel work streams, mock dependencies
- Prevention: Identify critical path dependencies early

---

## 🎓 PM Best Practices

1. **Search KB Before Planning**
   - Review similar projects
   - Check estimation patterns
   - Identify common risks

2. **Document Planning Decisions**
   - Why certain approaches chosen
   - What alternatives considered
   - What assumptions made

3. **Track Variance**
   - Planned vs actual always
   - Create KB entry if >30% variance
   - Update estimation models

4. **Share Lessons**
   - Add to KB immediately
   - Tag relevant roles
   - Update planning templates

---

#pm #project-manager #knowledge-base #planning

