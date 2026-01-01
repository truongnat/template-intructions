---
inclusion: manual
---

# Knowledge Base Management

## When to Create Knowledge Entries

Create knowledge base entries for:
- **Bugs Fixed** - Document root cause and solution
- **Architecture Decisions** - Record why certain patterns were chosen
- **Performance Optimizations** - Document what was optimized and results
- **Security Fixes** - Record vulnerabilities and mitigations
- **Platform-Specific Issues** - Document OS/environment-specific solutions

## Knowledge Base Structure

```
.agent/knowledge-base/
├── architecture/    # Architecture decisions and patterns
├── bugs/           # Bug fixes and root causes
├── features/       # Feature implementation notes
├── performance/    # Performance optimizations
├── security/       # Security fixes and best practices
└── platform-specific/ # OS/environment-specific solutions
```

## Entry Format

```markdown
# [Title]

**Date:** YYYY-MM-DD
**Sprint:** [N]
**Related Issues:** #[issue-numbers]

## Problem
[Description of the problem or decision needed]

## Solution
[What was implemented or decided]

## Rationale
[Why this approach was chosen]

## Impact
[What changed as a result]

## References
- [Links to relevant documentation]
- [Related GitHub Issues]
```

## Auto-Learning

The system can automatically create knowledge entries from:
- Bug fixes with `#fixbug-*` tags
- Architecture decisions in design specs
- Performance improvements
- Security fixes

See `.agent/rules/auto-learning.md` for details.
