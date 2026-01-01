# Aider CLI - TeamLifecycle Integration

## Configuration for Aider

Add this to your `.aider.conf.yml` file:

```yaml
# TeamLifecycle SDLC Roles

# Custom commands for Aider
commands:
  pm: "@PM - {message}"
  orchestrator: "@ORCHESTRATOR - {message}"
  po: "@PO - {message}"
  sa: "@SA - {message}"
  uiux: "@UIUX - {message}"
  qa: "@QA - {message}"
  seca: "@SECA - {message}"
  dev: "@DEV - {message}"
  devops: "@DEVOPS - {message}"
  tester: "@TESTER - {message}"
  reporter: "@REPORTER - {message}"
  stakeholder: "@STAKEHOLDER - {message}"
  auto: "@PM - {message} --mode=full-auto"
  semi-auto: "@PM - {message} --mode=semi-auto"

# Context files to always include
read:
  - .agent/rules/global.md
  - .agent/usage.md
```

## Usage

```bash
aider
> /pm Build a CLI tool for file conversion
> /dev Implement JSON to YAML converter
> /kb-search command parsing
```
