# IDE Integration Guide

This folder contains configuration files to integrate TeamLifecycle roles as slash commands in various IDE agent chats.

---

## 📁 Files

| File | IDE | Description |
|------|-----|-------------|
| `vscode-commands.json` | VS Code | Command definitions for VS Code extensions |
| `cursor-rules.md` | Cursor | Custom instructions for Cursor IDE |
| `github-copilot-instructions.md` | GitHub Copilot | Instructions for Copilot Chat |
| `windsurf-cascade.md` | Windsurf | Configuration for Cascade multi-agent |
| `cline-config.json` | Cline | Slash commands for Cline extension |
| `aider-commands.md` | Aider | Command aliases for Aider CLI |

---

## 🚀 Quick Setup by IDE

### 1. Cursor IDE

**Installation:**
```bash
# Copy to project root
cp .agent/ide-integration/cursor-rules.md .cursorrules
```

**Usage:**
```
/pm Build a todo app
/auto Create mobile fitness app
/dev Implement authentication
```

---

### 2. GitHub Copilot (VS Code/JetBrains)

**Installation:**
```bash
# Create .github folder if not exists
mkdir -p .github

# Copy instructions
cp .agent/ide-integration/github-copilot-instructions.md .github/copilot-instructions.md
```

**Usage:**
```
/pm Design a REST API
/sa Create database schema
/kb-search React hooks
```

---

### 3. Windsurf Cascade

**Installation:**
```bash
# Copy to project root
cp .agent/ide-integration/windsurf-cascade.md .windsurfrules
```

**Usage:**
```
/orchestrator Enable full-auto mode
/pm Build SaaS platform
/dev Implement payment gateway
```

**Cascade Multi-Agent:**
Windsurf's Cascade will automatically spawn multiple agents in parallel for roles like SA + UIUX + PO.

---

### 4. Cline (VS Code Extension)

**Installation:**
1. Install Cline extension in VS Code
2. Open Cline settings
3. Import `cline-config.json`

**Usage:**
```
/pm Create project plan
/dev Fix authentication bug
/tester Run E2E tests
```

---

### 5. Aider (CLI)

**Installation:**
```bash
# Add to ~/.aider.conf.yml or project .aider.conf.yml
cat .agent/ide-integration/aider-commands.md >> .aider.conf.yml
```

**Usage:**
```bash
aider
> /pm Build a CLI tool for file conversion
> /dev Implement JSON to YAML converter
> /kb-search command line parsing
```

---

## 🎯 Available Slash Commands

### Core Roles
| Command | Role | Description |
|---------|------|-------------|
| `/pm` | Project Manager | Planning, scope management |
| `/orchestrator` | Orchestrator | Workflow automation |
| `/po` | Product Owner | Backlog, prioritization |
| `/sa` | System Analyst | Architecture, API design |
| `/uiux` | UI/UX Designer | Interface, user experience |
| `/qa` | Quality Assurance | Design review, testing |
| `/seca` | Security Analyst | Security assessment |
| `/dev` | Developer | Implementation |
| `/devops` | DevOps | CI/CD, deployment |
| `/tester` | Tester | Testing, bug detection |
| `/reporter` | Reporter | Documentation, reports |
| `/stakeholder` | Stakeholder | Final approval |

### Quick Actions
| Command | Description |
|---------|-------------|
| `/auto [requirements]` | Start with full automation |
| `/semi-auto [requirements]` | Start with semi-automation |
| `/kb-search [query]` | Search knowledge base |
| `/kb-add [topic]` | Add knowledge entry |

---

## 🔧 Custom Configuration

### Adding New Commands

Edit the appropriate config file and add:

**For JSON configs (VS Code, Cline):**
```json
{
  "command": "/custom",
  "description": "Custom command",
  "prompt": "@ROLE - ",
  "category": "TeamLifecycle"
}
```

**For Markdown configs (Cursor, Copilot, Windsurf):**
```markdown
- `/custom` → @ROLE - Custom command description
```

### Modifying Existing Commands

1. Open the config file for your IDE
2. Find the command definition
3. Update description or prompt
4. Restart IDE or reload configuration

---

## 💡 Usage Examples

### Starting a New Project
```
/pm Build a wedding website with:
- Photo gallery
- RSVP form
- Countdown timer
Platform: Web (Next.js)
```

### Full Automation
```
/auto Create a mobile expense tracking app for iOS and Android with:
- Receipt scanning
- Category management
- Budget alerts
- Export to CSV
```

### Development Tasks
```
/dev Implement OAuth2 authentication with Google and GitHub providers
/devops Setup CI/CD pipeline with GitHub Actions
/tester Create E2E tests for authentication flow
```

### Knowledge Base
```
/kb-search React hydration mismatch
/kb-add Solution for Next.js API route caching issue
```

---

## 🔄 Workflow Integration

### Manual Mode
```
/pm [requirements]
[Review plan]
"Approved"
/sa Begin backend design
/uiux Design UI
/qa Review designs
...
```

### Semi-Auto Mode
```
/semi-auto [requirements]
[Review plan]
"Approved"
→ Auto-executes design phase
[Review results]
/orchestrator Continue to development
→ Auto-executes development
```

### Full-Auto Mode
```
/auto [requirements]
[Review plan]
"Approved"
→ Auto-executes entire workflow
→ Stops only for critical decisions
[Make decisions when prompted]
"✅ Project complete"
```

---

## 🐛 Troubleshooting

### Commands Not Working

**Cursor:**
- Ensure `.cursorrules` is in project root
- Restart Cursor IDE
- Check file is not ignored by `.gitignore`

**GitHub Copilot:**
- Ensure `.github/copilot-instructions.md` exists
- Restart VS Code
- Check Copilot is enabled

**Windsurf:**
- Ensure `.windsurfrules` is in project root
- Restart Windsurf
- Check Cascade is enabled

### Commands Not Autocompleting

- Type `/` and wait for suggestions
- Check IDE agent chat is active
- Verify config file syntax is correct

### Role Not Loading

- Check role file exists: `.agent/workflows/[role].md`
- Verify file permissions
- Check IDE has access to project files

---

## 📚 Additional Resources

- **Global Rules:** `.agent/rules/global.md`
- **Usage Guide:** `.agent/usage.md`
- **Role Definitions:** `.agent/workflows/`
- **Templates:** `.agent/templates/`
- **Knowledge Base:** `.agent/knowledge-base/`

---

## 🤝 Contributing

To add support for a new IDE:

1. Create config file: `[ide-name]-config.[ext]`
2. Define slash commands mapping to roles
3. Add installation instructions to this README
4. Test commands in the IDE
5. Submit PR with examples

---

#ide-integration #slash-commands #automation
