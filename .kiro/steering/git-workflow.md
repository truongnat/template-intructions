---
inclusion: fileMatch
fileMatchPattern: "**/*.git*"
---

# Git Workflow Rules

## Atomic Commit Rules

Every commit must be:
- **Atomic** - One logical change per commit
- **Descriptive** - Clear commit message
- **Referenced** - Include GitHub Issue number if applicable

## Conventional Commit Format

```
<type>: <description> (#issue-number)

[optional body]
```

### Types:
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code refactoring
- `docs:` - Documentation changes
- `test:` - Test additions/changes
- `chore:` - Build/tooling changes
- `style:` - Code style changes (formatting)

### Examples:
```
feat: implement user login (#42)
fix: resolve null pointer in auth service (#43)
refactor: extract validation logic to separate module
docs: update API documentation for auth endpoints
```

## Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches
- `hotfix/*` - Emergency production fixes

## Definition of Done

A task is complete when:
- ✅ Code is written and tested locally
- ✅ No syntax/type/lint errors (use getDiagnostics)
- ✅ Atomic commits with proper messages
- ✅ GitHub Issue referenced in commits
- ✅ Code follows project conventions
- ✅ Ready for testing by @TESTER
