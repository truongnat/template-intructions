# CLI Usage Examples

Complete guide with examples for `create-instructions` CLI tool.

---

## 📦 Installation

```bash
# Install globally
npm install -g template-instructions

# Or use with npx (no installation needed)
npx template-instructions <command>
```

---

## 🚀 Quick Start

### 1. Create New Project (Recommended)

```bash
# Create a new project with everything set up
create-instructions create my-awesome-project

# Navigate to project
cd my-awesome-project

# Setup IDE integration
create-instructions ide cursor

# Start building
# Open IDE and type: /pm Build a todo app
```

**Output:**
```
🚀 Creating Project: my-awesome-project

→ Creating project directory...
→ Installing instructions...
→ Setting up project structure...
✓ Project created successfully!

Location: /path/to/my-awesome-project

Next Steps:
  cd my-awesome-project
  create-instructions ide cursor
  • Review .gemini/instructions/usage.md
  • Initialize git repository
  • Start: /pm Build your project

ℹ Completed in 0.85s
```

---

### 2. Install in Existing Project

```bash
# Navigate to your existing project
cd my-existing-project

# Install instructions
create-instructions install

# Setup IDE
create-instructions ide cursor
```

**Output:**
```
🚀 Installing Template Instructions

→ Validating environment...
→ Checking for existing installation...
→ Copying template files...
✓ Installation complete!

Location: /path/to/my-existing-project/.gemini

Next Steps:
  • Setup IDE: create-instructions ide cursor
  • Review: .gemini/instructions/usage.md
  • Start: /pm Build your project

ℹ Completed in 0.42s
```

---

## 🔧 IDE Integration

### Setup Single IDE

```bash
# Cursor IDE
create-instructions ide cursor

# GitHub Copilot
create-instructions ide copilot

# Windsurf Cascade
create-instructions ide windsurf

# Cline Extension
create-instructions ide cline

# Aider CLI
create-instructions ide aider
```

**Example Output (Cursor):**
```
🔧 Setting up CURSOR Integration

→ Installing Cursor IDE...
✓ Cursor IDE installed

Location: /path/to/project/.cursorrules

Next Steps:
  • Restart Cursor IDE
  • Type / in chat to see commands
  • Try: /pm Build a todo app

ℹ Completed in 0.15s
```

---

### Setup All IDEs at Once

```bash
create-instructions ide all
```

**Output:**
```
🔧 Setting up ALL Integration

→ Installing Cursor IDE...
✓ Cursor IDE installed
→ Installing GitHub Copilot...
✓ GitHub Copilot installed
→ Installing Windsurf Cascade...
✓ Windsurf Cascade installed
→ Installing Cline Extension...
✓ Cline Extension installed
→ Installing Aider CLI...
✓ Aider CLI installed
✓ All IDE integrations installed!

Next Steps:
  • Restart your IDE
  • Type / in chat to see available commands
  • Try: /pm Build a todo app

ℹ Completed in 0.68s
```

---

## 🧠 Knowledge Base

### Initialize Knowledge Base

```bash
create-instructions init-kb
```

**Output:**
```
🧠 Initializing Knowledge Base

→ Creating directory structure...
✓ Knowledge base initialized!

Location: /path/to/project/.gemini/instructions/knowledge-base

Next Steps:
  • Read: .gemini/instructions/knowledge-base/README.md
  • Use template: Knowledge-Entry-Template.md
  • Search: Check index.md

ℹ Completed in 0.23s
```

---

## 📋 List Available Resources

```bash
create-instructions list
```

**Output:**
```
📋 Available Templates & Roles

Roles (12):
  • orchestrator
  • pm
  • po
  • sa
  • designer
  • qa
  • seca
  • dev
  • devops
  • tester
  • reporter
  • stakeholder

Templates (16):
  • Project-Plan-Template
  • Product-Backlog-Template
  • System-Design-Spec-Template
  • UIUX-Design-Spec-Template
  • Design-Verification-Report-Template
  • Security-Review-Report-Template
  • Development-Log-Template
  • DevOps-Plan-Template
  • Test-Report-Template
  • Phase-Report-Template
  • Master-Documentation-Template
  • Final-Project-Report-Template
  • Final-Approval-Report-Template
  • Knowledge-Entry-Template
  • definition-of-done
  • incident-response

Total: 12 roles, 16 templates
```

---

## 🎯 Real-World Workflows

### Workflow 1: Start Fresh Project

```bash
# Step 1: Create project
create-instructions create wedding-website
cd wedding-website

# Step 2: Setup IDE
create-instructions ide cursor

# Step 3: Initialize git
git init
git add .
git commit -m "Initial commit with TeamLifecycle"

# Step 4: Start building (in IDE)
# Type: /pm Build a wedding website with photo gallery and RSVP form
```

---

### Workflow 2: Add to Existing Project

```bash
# Step 1: Navigate to project
cd my-existing-app

# Step 2: Install instructions
create-instructions install

# Step 3: Setup IDE (all at once)
create-instructions ide all

# Step 4: Initialize knowledge base
create-instructions init-kb

# Step 5: Commit changes
git add .
git commit -m "Add TeamLifecycle SDLC system"

# Step 6: Start using (in IDE)
# Type: /pm Review and improve current architecture
```

---

### Workflow 3: Team Setup

```bash
# Team lead sets up template
create-instructions create team-project
cd team-project

# Setup all IDE integrations for team
create-instructions ide all

# Initialize knowledge base for shared learning
create-instructions init-kb

# Commit to repo
git init
git add .
git commit -m "Setup TeamLifecycle for team"
git remote add origin <repo-url>
git push -u origin main

# Team members clone and start
# git clone <repo-url>
# cd team-project
# Open IDE and type: /pm [their task]
```

---

## 🔄 Options & Flags

### Force Overwrite

```bash
# Overwrite existing installation
create-instructions install --force

# Overwrite existing project
create-instructions create my-project --force

# Overwrite IDE config
create-instructions ide cursor --force
```

---

### Quiet Mode

```bash
# Minimal output
create-instructions install --quiet

# Useful for scripts
create-instructions ide all -q
```

---

### Verbose Mode

```bash
# Detailed output with file counts
create-instructions install --verbose

# See all operations
create-instructions create my-project --verbose
```

---

### Combined Options

```bash
# Force + Verbose
create-instructions install -f --verbose

# Quiet + Force (for automation)
create-instructions ide all -q -f
```

---

## 📚 Help & Version

### Show Help

```bash
create-instructions --help
create-instructions -h
create-instructions help
```

---

### Show Version

```bash
create-instructions --version
create-instructions -v
create-instructions version
```

**Output:**
```
create-instructions v1.1.4
Simulating a complete Software Development Lifecycle (SDLC) with specialized AI Agents.
```

---

## 🎨 Using Slash Commands (After Setup)

### In Cursor / Copilot / Windsurf

```bash
# Start new project
/pm Build a REST API for task management with authentication

# Full automation
/auto Create a mobile fitness tracking app for iOS and Android

# Specific roles
/sa Design database schema for e-commerce platform
/uiux Create mobile-first dashboard with dark mode
/dev Implement OAuth2 authentication flow
/devops Setup CI/CD pipeline with GitHub Actions
/tester Run E2E tests for checkout flow

# Knowledge base
/kb-search React hydration error
/kb-add Solution for Next.js caching issue
```

---

## 🐛 Troubleshooting

### Command Not Found

```bash
# If installed globally but not found
npm install -g template-instructions

# Or use npx
npx template-instructions install
```

---

### Permission Denied

```bash
# On Unix/Mac, use sudo for global install
sudo npm install -g template-instructions

# Or install without sudo using nvm
nvm use node
npm install -g template-instructions
```

---

### Already Exists Error

```bash
# Use --force to overwrite
create-instructions install --force
create-instructions create my-project --force
```

---

### IDE Commands Not Working

```bash
# Re-run IDE setup
create-instructions ide cursor --force

# Restart your IDE after setup

# Check file was created
ls -la .cursorrules  # For Cursor
ls -la .github/copilot-instructions.md  # For Copilot
```

---

## 📊 Project Structure After Setup

```
my-project/
├── .gemini/
│   └── instructions/
│       ├── global.md
│       ├── usage.md
│       ├── roles/              # 12 role definitions
│       ├── templates/          # 16 templates
│       ├── knowledge-base/     # Knowledge base system
│       └── ide-integration/    # IDE configs
├── docs/
│   ├── sprints/
│   │   └── sprint-1/
│   │       ├── plans/
│   │       ├── designs/
│   │       ├── reviews/
│   │       ├── logs/
│   │       ├── tests/
│   │       └── reports/
│   └── global/
│       └── reports/
├── .cursorrules                # Cursor IDE config
├── .github/
│   └── copilot-instructions.md # Copilot config
├── .gitignore
├── package.json
└── README.md
```

---

## 🎓 Learning Path

### Day 1: Setup
```bash
create-instructions create learning-project
cd learning-project
create-instructions ide cursor
# Read: .gemini/instructions/usage.md
```

### Day 2: First Project
```bash
# In IDE: /pm Build a simple todo app
# Follow the workflow, approve plans
# Let orchestrator handle the rest
```

### Day 3: Manual Control
```bash
# In IDE: /pm Build a blog platform --mode=manual
# Tag each role manually to learn the flow
# /sa, /uiux, /qa, /dev, etc.
```

### Day 4: Knowledge Base
```bash
create-instructions init-kb
# Document learnings as you encounter challenges
# /kb-add [topic] when you solve difficult problems
```

### Day 5: Team Collaboration
```bash
# Share project with team
# Everyone uses same slash commands
# Knowledge base grows with team experience
```

---

## 💡 Pro Tips

### 1. Use Aliases
```bash
# Add to ~/.bashrc or ~/.zshrc
alias ci='create-instructions'
alias ci-new='create-instructions create'
alias ci-ide='create-instructions ide'

# Usage
ci install
ci-new my-project
ci-ide cursor
```

---

### 2. Project Templates
```bash
# Create your own project template
create-instructions create template-project
cd template-project
# Customize .gemini/instructions/
# Use as base for future projects
```

---

### 3. Automation Scripts
```bash
#!/bin/bash
# setup-new-project.sh

PROJECT_NAME=$1

create-instructions create $PROJECT_NAME
cd $PROJECT_NAME
create-instructions ide all
create-instructions init-kb
git init
git add .
git commit -m "Initial setup with TeamLifecycle"

echo "✓ Project $PROJECT_NAME ready!"
```

---

### 4. CI/CD Integration
```yaml
# .github/workflows/setup.yml
name: Setup TeamLifecycle
on: [push]
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install -g template-instructions
      - run: create-instructions install --quiet
      - run: create-instructions ide all --quiet
```

---

## 📞 Support

- **Documentation:** `.gemini/instructions/usage.md`
- **Issues:** https://github.com/yourusername/template-instructions/issues
- **Examples:** This file!

---

## 🎉 Success Stories

### Example 1: Solo Developer
```bash
create-instructions create saas-platform
cd saas-platform
create-instructions ide cursor
# Used /auto mode, completed MVP in 2 days
```

### Example 2: Team of 5
```bash
create-instructions create team-app
create-instructions ide all
create-instructions init-kb
# Shared knowledge base, consistent workflow
# Reduced onboarding time by 70%
```

### Example 3: Open Source Project
```bash
create-instructions install
create-instructions ide copilot
# Contributors use same workflow
# Consistent documentation and quality
```

---

**Happy Building! 🚀**
