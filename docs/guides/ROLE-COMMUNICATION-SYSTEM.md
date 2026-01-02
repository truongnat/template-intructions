# Role Communication System (Project Brain Chat)

The Role Communication System is a **SQLite-backed chat interface** that allows different AI roles (PM, DEV, QA, etc.) to communicate, persist context, and maintain a shared history throughout the project lifecycle. This ensures that "hand-offs" between roles are documented and that no context is lost.

## 🚀 Overview

- **Storage**: `tools/communication/chat.db` (SQLite)
- **Interface**: CLI Tool (`tools/communication/cli.py`)
- **Key Concepts**:
  - **Channels**: Broad topics (e.g., `general`, `sprint-1`)
  - **Threads**: Specific tasks or features (e.g., `Implement-Login`, `Fix-Bug-123`)
  - **Roles**: The identity sending the message (e.g., `PM`, `DEV`, `BRAIN`)

## 🛠️ Usage Guide

### 1. Sending Messages (Logging Work)
Roles use this command to announce start of work, completion, or important decisions.

```bash
# General Syntax
python tools/communication/cli.py send --channel <CHANNEL> --thread <THREAD> --role <ROLE> --content "<MESSAGE>"

# Example: PM announcing a plan
python tools/communication/cli.py send --channel general --thread "Sprint-1-Planning" --role PM --content "Drafting Project Plan for Sprint 1."
```

### 2. Checking History (Context Awareness)
Before starting any task, a role **must** check the recent history to understand the state of the world.

```bash
# General Syntax
python tools/communication/cli.py history --channel <CHANNEL> --thread <THREAD> --limit <N>

# Example: DEV checking what to build
python tools/communication/cli.py history --channel general --thread "Feature-Login" --limit 5
```

### 3. Listing Active Threads
To discover what is currently being discussed or worked on.

```bash
python tools/communication/cli.py threads --channel general
```

## 🧠 Integration Standards

All roles in `workflows/*.md` have been updated to include mandatory **Brain Communication** steps:

1.  **Pre-Work Check**: verify context before acting.
2.  **Activity Log**: announce actions to the team.

### Example Workflow Integration (DEV Role)

```markdown
### 0.0 Brain Communication (Pre-Work):
   - **Check History:** `python tools/communication/cli.py history --channel general --limit 5`
   - **Announce Start:** `python tools/communication/cli.py send --channel general --thread "Development" --role DEV --content "Starting implementation..."`
```

## 💾 Database Schema

The system uses a simple relational schema:

- **channels**: `id`, `name`, `description`
- **threads**: `id`, `channel_id`, `title`
- **messages**: `id`, `thread_id`, `role_id`, `content`, `timestamp`, `metadata`
- **roles**: `id`, `description` (Pre-seeded: PM, DEV, QA, SA, DEVOPS, UIUX, USER, BRAIN)

## 🔧 Maintenance

The database is automatically initialized on the first run of the `ChatManager` class. If you need to reset the chat history, you can delete the `tools/communication/chat.db` file.
