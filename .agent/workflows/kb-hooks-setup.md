# 🎣 Knowledge Base Hooks Setup

## Purpose
Configure agent hooks to automatically trigger knowledge base learning at key workflow points.

---

## 📋 Available Hooks

### Hook 1: Post-Commit Knowledge Check
**Trigger:** After git commit  
**Action:** Check if commit qualifies for KB entry

```json
{
  "name": "kb-post-commit-check",
  "trigger": "on_git_commit",
  "condition": "commit_message contains 'fix' OR 'bug' OR 'issue'",
  "action": {
    "type": "agent_message",
    "message": "Check if this commit qualifies for knowledge base entry. Commit: {{commit_message}}"
  }
}
```

---

### Hook 2: Bug Fix Knowledge Capture
**Trigger:** When bug tag is used  
**Action:** Prompt for KB entry creation

```json
{
  "name": "kb-bug-fix-capture",
  "trigger": "on_message_sent",
  "condition": "message contains '#fixbug-'",
  "action": {
    "type": "agent_message",
    "message": "Bug fix detected. Create knowledge base entry:\n1. Document problem and root cause\n2. Include solution with code\n3. Add prevention measures\n4. Update KB index"
  }
}
```

---

### Hook 3: Sprint End KB Review
**Trigger:** Manual (button click)  
**Action:** Review all KB entries from sprint

```json
{
  "name": "kb-sprint-review",
  "trigger": "manual",
  "action": {
    "type": "agent_message",
    "message": "Review knowledge base for current sprint:\n1. List all KB entries created\n2. Verify completeness\n3. Update cross-references\n4. Generate learning metrics\n5. Identify knowledge gaps"
  }
}
```

---

### Hook 4: Pre-Task KB Search
**Trigger:** When starting new task  
**Action:** Search KB for relevant entries

```json
{
  "name": "kb-pre-task-search",
  "trigger": "on_message_sent",
  "condition": "message contains 'start' OR 'begin' OR 'implement'",
  "action": {
    "type": "agent_message",
    "message": "Before starting, search knowledge base:\n1. Extract keywords from task\n2. Search KB index\n3. Review relevant entries\n4. Adapt approach based on KB"
  }
}
```

---

### Hook 5: Multiple Attempts Detection
**Trigger:** When same file modified 3+ times  
**Action:** Suggest KB entry creation

```json
{
  "name": "kb-multiple-attempts",
  "trigger": "on_file_save",
  "condition": "file_save_count >= 3 within 1 hour",
  "action": {
    "type": "agent_message",
    "message": "Multiple attempts detected on {{file_path}}. Consider creating KB entry to document:\n1. What was challenging\n2. What approaches were tried\n3. What finally worked\n4. How to avoid in future"
  }
}
```

---

### Hook 6: Security Issue KB Entry
**Trigger:** Security tag used  
**Action:** Create security KB entry

```json
{
  "name": "kb-security-issue",
  "trigger": "on_message_sent",
  "condition": "message contains '#security-review' OR '#vulnerability'",
  "action": {
    "type": "agent_message",
    "message": "Security issue detected. Create KB entry in security/:\n1. Document vulnerability\n2. Assess impact\n3. Document fix\n4. Add detection strategy\n5. Add prevention measures"
  }
}
```

---

### Hook 7: Performance Optimization KB
**Trigger:** Performance tag used  
**Action:** Document optimization

```json
{
  "name": "kb-performance-optimization",
  "trigger": "on_message_sent",
  "condition": "message contains '#performance' OR 'optimization'",
  "action": {
    "type": "agent_message",
    "message": "Performance optimization detected. Create KB entry:\n1. Document bottleneck\n2. Measurement before/after\n3. Optimization technique\n4. Code changes\n5. Best practices"
  }
}
```

---

### Hook 8: Deployment Issue KB
**Trigger:** Deployment or rollback tag  
**Action:** Document deployment issue

```json
{
  "name": "kb-deployment-issue",
  "trigger": "on_message_sent",
  "condition": "message contains '#deployed-' OR '#rollback'",
  "action": {
    "type": "agent_message",
    "message": "Deployment event detected. Create KB entry if issues occurred:\n1. Document what went wrong\n2. Environment details\n3. Impact assessment\n4. Resolution steps\n5. Prevention checklist"
  }
}
```

---

### Hook 9: Weekly KB Maintenance
**Trigger:** Every Friday  
**Action:** Run KB maintenance tasks

```json
{
  "name": "kb-weekly-maintenance",
  "trigger": "schedule",
  "schedule": "0 17 * * 5",
  "action": {
    "type": "agent_message",
    "message": "Weekly KB maintenance:\n1. Review all auto-generated entries\n2. Verify completeness\n3. Add missing details\n4. Update cross-references\n5. Archive duplicates\n6. Generate weekly metrics"
  }
}
```

---

### Hook 10: Monthly KB Report
**Trigger:** Last day of month  
**Action:** Generate monthly learning report

```json
{
  "name": "kb-monthly-report",
  "trigger": "schedule",
  "schedule": "0 17 L * *",
  "action": {
    "type": "agent_message",
    "message": "Generate monthly KB report:\n1. Analyze learning metrics\n2. Identify knowledge gaps\n3. Consolidate similar entries\n4. Update categories\n5. Share insights with team"
  }
}
```

---

## 🚀 Setup Instructions

### Method 1: Using Kiro Hook UI
1. Open Command Palette (Ctrl+Shift+P)
2. Search for "Open Kiro Hook UI"
3. Click "Create New Hook"
4. Copy hook configuration from above
5. Save and enable

### Method 2: Using Explorer View
1. Open Explorer
2. Find "Agent Hooks" section
3. Click "+" to add new hook
4. Paste hook configuration
5. Save and enable

### Method 3: Manual Configuration
1. Create `.kiro/hooks/` directory
2. Create JSON file for each hook
3. Restart Kiro to load hooks

---

## 🎯 Recommended Hook Combinations

### For Developers
Enable these hooks:
- ✅ Post-Commit Knowledge Check
- ✅ Bug Fix Knowledge Capture
- ✅ Multiple Attempts Detection
- ✅ Pre-Task KB Search

### For DevOps
Enable these hooks:
- ✅ Deployment Issue KB
- ✅ Performance Optimization KB
- ✅ Pre-Task KB Search

### For Security Analysts
Enable these hooks:
- ✅ Security Issue KB Entry
- ✅ Pre-Task KB Search

### For Reporters
Enable these hooks:
- ✅ Sprint End KB Review
- ✅ Weekly KB Maintenance
- ✅ Monthly KB Report

---

## 📊 Hook Effectiveness Metrics

Track these metrics to measure hook effectiveness:

| Hook | Triggers/Week | KB Entries Created | Time Saved |
|------|---------------|-------------------|------------|
| Post-Commit Check | [number] | [number] | [hours] |
| Bug Fix Capture | [number] | [number] | [hours] |
| Multiple Attempts | [number] | [number] | [hours] |
| Pre-Task Search | [number] | N/A | [hours] |

---

## 🔧 Customization

### Adjust Trigger Conditions
Modify conditions to match your workflow:

```json
// More strict: Only critical/high bugs
"condition": "message contains '#fixbug-critical' OR '#fixbug-high'"

// More lenient: Any bug mention
"condition": "message contains 'bug' OR 'error' OR 'issue'"

// Specific components
"condition": "message contains 'auth' AND 'bug'"
```

### Adjust Actions
Customize what happens when triggered:

```json
// Just notify
"action": {
  "type": "notification",
  "message": "Consider creating KB entry"
}

// Run command
"action": {
  "type": "command",
  "command": "grep -r 'similar-error' .agent/knowledge-base/"
}

// Agent message with context
"action": {
  "type": "agent_message",
  "message": "Search KB for: {{extracted_keywords}}"
}
```

---

## 🎓 Best Practices

### 1. Start Small
Begin with 2-3 hooks:
- Pre-Task KB Search
- Bug Fix Knowledge Capture
- Weekly KB Maintenance

### 2. Monitor Effectiveness
Track which hooks are most valuable:
- Which create most KB entries?
- Which save most time?
- Which are ignored?

### 3. Iterate
Adjust hooks based on team feedback:
- Too many notifications? Increase threshold
- Missing captures? Broaden conditions
- Wrong timing? Adjust triggers

### 4. Team Alignment
Ensure team understands:
- Why hooks exist
- How to respond
- When to disable temporarily

---

## 🚨 Troubleshooting

### Hook Not Triggering
- Check condition syntax
- Verify trigger type is supported
- Check hook is enabled
- Review logs for errors

### Too Many Notifications
- Increase trigger threshold
- Add more specific conditions
- Combine similar hooks
- Add cooldown period

### Missing KB Entries
- Lower trigger threshold
- Broaden conditions
- Add more hook types
- Manual review process

---

## 📚 Additional Resources

- **Hook Documentation:** Check Kiro docs for latest hook features
- **Examples:** `.agent/workflows/` for more examples
- **Community Hooks:** Share and discover hooks with team

---

#hooks #automation #knowledge-base #workflow

