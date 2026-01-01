# 🔒 Security Analyst - Knowledge Base Guide

## Role: @SECA (Security Analyst)

---

## 🎯 Your Auto-Learning Responsibilities

As SECA, you capture knowledge about:
- Security vulnerabilities and fixes
- Attack patterns and prevention
- Security best practices
- Compliance issues
- Authentication/authorization patterns
- Data protection strategies

---

## 🔄 Auto-Learning Triggers for SECA

### Mandatory KB Entry Creation

| Trigger | When | Category | Example |
|---------|------|----------|---------|
| **Vulnerability Found** | Any security vulnerability | Security | KB-[date]-###-vulnerability |
| **Security Incident** | Security breach or attempt | Security | KB-[date]-###-security-incident |
| **Auth Issue** | Authentication/authorization bug | Security | KB-[date]-###-auth-issue |
| **Data Leak** | Data exposure vulnerability | Security | KB-[date]-###-data-leak |
| **Injection Attack** | SQL/XSS/CSRF vulnerability | Security | KB-[date]-###-injection-vuln |
| **Compliance Issue** | GDPR/HIPAA/PCI violation | Security | KB-[date]-###-compliance-issue |
| **Crypto Issue** | Encryption/hashing problem | Security | KB-[date]-###-crypto-issue |
| **Access Control** | Privilege escalation bug | Security | KB-[date]-###-access-control |

---

## 📝 KB Entry Template for SECA

```markdown
# KB-[YYYY-MM-DD]-[###] - [Security Issue Title]

## Document Info
| Field | Value |
|-------|-------|
| ID | KB-[YYYY-MM-DD]-[###] |
| Date | [YYYY-MM-DD] |
| Author | @SECA |
| Category | Security |
| Severity | [Critical/High/Medium/Low] |
| Auto-Generated | Yes |
| Source Task | [Task ID] |
| Sprint | [N] |
| Tags | #security #vulnerability #auto-learned |

---

## Security Issue Description

### Vulnerability Type
- **Type:** [SQL Injection/XSS/CSRF/Auth Bypass/etc.]
- **CWE ID:** [CWE-###]
- **CVSS Score:** [Score] ([Severity])

### Issue
[Clear description of the security vulnerability]

### Attack Vector
[How the vulnerability can be exploited]

### Proof of Concept
```bash
# Example attack
[PoC code or commands]
```

---

## Impact Assessment

### Severity Analysis
- **Confidentiality:** [None/Low/High]
- **Integrity:** [None/Low/High]
- **Availability:** [None/Low/High]

### Business Impact
- **Data at Risk:** [Type and amount]
- **Users Affected:** [Number/Percentage]
- **Compliance Impact:** [GDPR/HIPAA/PCI/etc.]
- **Reputation Risk:** [Low/Medium/High]

### Technical Impact
- **Systems Affected:** [List]
- **Data Exposed:** [Type]
- **Privilege Level:** [User/Admin/System]

---

## Context

### Affected Components
- **Component:** [Component name]
- **File Path:** [Path]
- **Technology:** [Framework/Library]
- **Version:** [Version number]

### Vulnerable Code
```javascript
// Vulnerable code
[code snippet showing vulnerability]
```

### Discovery Method
- **Method:** [Security scan/Code review/Penetration test/Bug report]
- **Tool Used:** [If applicable]
- **Discovered By:** [Person/Team]

---

## Root Cause Analysis

### Why Vulnerability Exists
[Detailed explanation of root cause]

### Contributing Factors
- [Factor 1]
- [Factor 2]
- [Factor 3]

### Security Principles Violated
- [Principle 1: e.g., Least Privilege]
- [Principle 2: e.g., Defense in Depth]

---

## Solution Applied

### Fix Strategy
[Explanation of security fix approach]

### Secure Implementation
```javascript
// Fixed code
[code snippet showing secure implementation]
```

### Security Controls Added
- [Control 1: e.g., Input validation]
- [Control 2: e.g., Output encoding]
- [Control 3: e.g., Access control]

### Verification
```bash
# Security test to verify fix
[test commands or code]
```

---

## Prevention Measures

### Secure Coding Guidelines
```markdown
## [Vulnerability Type] Prevention

### Do's
- ✅ [Best practice 1]
- ✅ [Best practice 2]

### Don'ts
- ❌ [Anti-pattern 1]
- ❌ [Anti-pattern 2]
```

### Security Checklist Updates
- [ ] [New security check 1]
- [ ] [New security check 2]
- [ ] [New security check 3]

### Automated Security Tests
```javascript
// Security test
describe('Security: [Vulnerability Type]', () => {
  it('should prevent [attack]', () => {
    // Test implementation
  });
});
```

### Security Tools Configuration
```yaml
# Security scanner config
rules:
  - id: [rule-id]
    pattern: [pattern to detect]
    severity: [severity]
    message: [message]
```

---

## Detection Strategy

### How to Detect
- [Detection method 1]
- [Detection method 2]

### Monitoring & Alerts
```yaml
# Security alert configuration
alerts:
  - name: [Alert name]
    condition: [Condition]
    severity: [Severity]
    action: [Action]
```

### Security Scanning
```bash
# Scan commands
[security scanning commands]
```

---

## Compliance Impact

### Regulations Affected
- **GDPR:** [Impact]
- **HIPAA:** [Impact]
- **PCI DSS:** [Impact]
- **SOC 2:** [Impact]

### Compliance Actions Required
1. [Action 1]
2. [Action 2]
3. [Action 3]

### Audit Trail
- [What needs to be logged]
- [Retention period]
- [Access controls]

---

## Incident Response

### If Exploited
1. **Immediate Actions**
   - [Action 1]
   - [Action 2]

2. **Investigation**
   - [What to check]
   - [Logs to review]

3. **Containment**
   - [How to contain]
   - [Systems to isolate]

4. **Recovery**
   - [Recovery steps]
   - [Verification]

5. **Post-Incident**
   - [Lessons learned]
   - [Process improvements]

---

## Security Testing

### Test Cases
```javascript
// Security test cases
describe('Security Tests', () => {
  it('should prevent SQL injection', () => {
    // Test
  });
  
  it('should sanitize XSS input', () => {
    // Test
  });
  
  it('should validate CSRF token', () => {
    // Test
  });
});
```

### Penetration Test Results
- **Test Date:** [Date]
- **Tester:** [Name]
- **Results:** [Pass/Fail]
- **Findings:** [List]

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

### Security Insights
- [Insight 1]
- [Insight 2]

---

## Related Entries
- KB-[ID]: [Related security issue]
- KB-[ID]: [Related vulnerability]

---

## References
- **CWE:** https://cwe.mitre.org/data/definitions/[###].html
- **OWASP:** [Link to OWASP guide]
- **CVE:** [CVE ID if applicable]
- **Security Advisory:** [Link]

---

#knowledge-base #security #vulnerability #auto-learned
```

---

## 🔍 Pre-Review KB Search

Before security review, search KB for:

```markdown
### SECA KB Search Checklist
- [ ] Similar vulnerabilities in this component
- [ ] Known attack patterns for this technology
- [ ] Previous security issues in this area
- [ ] Compliance requirements
- [ ] Security best practices
- [ ] Common misconfigurations

**Search Keywords:**
- Component name
- Technology/framework
- Vulnerability type
- Attack vector
```

---

## 📊 SECA-Specific Metrics

Track in your Security Review Report:

```markdown
## Security Knowledge Metrics

### Vulnerabilities
- **Total Found:** [X]
- **Critical:** [Y]
- **High:** [Z]
- **KB Entries Created:** [Number]

### Security Improvements
- **Issues Fixed:** [X]
- **Controls Added:** [Y]
- **KB Entries Referenced:** [Z]

### Compliance
- **Compliance Issues:** [X]
- **Resolved:** [Y]
- **KB Entries:** [List KB-IDs]

### Knowledge Reuse
- **Similar Issues Prevented:** [Number]
- **Time Saved:** [Estimate]
```

---

## 🎯 Integration with Security Review Report

Add this section to every Security Review Report:

```markdown
## Knowledge Base Integration

### KB Entries Referenced
| KB-ID | Title | How It Helped |
|-------|-------|---------------|
| KB-[ID] | [Title] | [Description] |

### Security Patterns Applied from KB
1. [Pattern 1 from KB-ID]
2. [Pattern 2 from KB-ID]

### New KB Entries Created
| KB-ID | Title | Vulnerability Type | Severity |
|-------|-------|-------------------|----------|
| KB-[ID] | [Title] | [Type] | [Severity] |

### Vulnerabilities Prevented
| Vulnerability | Source KB | Prevention Method |
|---------------|-----------|-------------------|
| [Vuln] | KB-[ID] | [Method] |
```

---

## 🚀 Quick Actions

### After Finding Vulnerability
```markdown
1. Assess severity (CVSS score)
2. Document immediately
3. Create KB entry (mandatory)
4. Notify @DEV for fix
5. Add security test
6. Update security checklist
```

### After Security Incident
```markdown
1. Contain the incident
2. Document timeline
3. Create KB entry (critical priority)
4. Conduct root cause analysis
5. Implement fixes
6. Update incident response plan
```

### After Compliance Issue
```markdown
1. Document compliance violation
2. Assess impact
3. Create KB entry
4. Implement corrective actions
5. Update compliance checklist
6. Notify stakeholders
```

---

## 📚 Example KB Entries for SECA

### Example 1: SQL Injection
**KB-2026-01-01-050-sql-injection-user-input.md**
- Pattern: Unsanitized user input in SQL query
- Solution: Use parameterized queries
- Prevention: Input validation, ORM usage

### Example 2: XSS Vulnerability
**KB-2026-01-01-051-xss-reflected-search.md**
- Pattern: Reflected XSS in search functionality
- Solution: Output encoding, CSP headers
- Prevention: Sanitize all user input

### Example 3: Auth Bypass
**KB-2026-01-01-052-jwt-signature-bypass.md**
- Pattern: JWT signature not verified
- Solution: Proper JWT validation
- Prevention: Use secure JWT libraries

### Example 4: Data Exposure
**KB-2026-01-01-053-api-data-leak.md**
- Pattern: API returns sensitive data
- Solution: Implement field filtering
- Prevention: Principle of least privilege

---

## 🎓 SECA Best Practices

1. **Search KB Before Review**
   - Check for known vulnerabilities
   - Review security patterns
   - Find similar issues

2. **Document All Vulnerabilities**
   - Create KB entry immediately
   - Include PoC if safe
   - Document fix and prevention

3. **Build Security Knowledge**
   - Track attack patterns
   - Document secure patterns
   - Share with team

4. **Automate Detection**
   - Add security tests
   - Configure scanners
   - Update CI/CD checks

5. **Maintain Compliance**
   - Track compliance issues
   - Document requirements
   - Update checklists

---

## 🔄 Security Review Workflow with KB

```markdown
### KB-Integrated Security Review

1. **Pre-Review**
   - Search KB for similar components
   - Review security patterns
   - Check compliance requirements

2. **During Review**
   - Document vulnerabilities
   - Check against KB patterns
   - Note new attack vectors

3. **Post-Review**
   - Create KB entries
   - Update security checklist
   - Add automated tests

4. **Continuous Monitoring**
   - Track security metrics
   - Update KB with new threats
   - Share security insights
```

---

## 🎯 Success Criteria

### Individual Success
- [ ] Searches KB before reviews
- [ ] Creates KB entries for vulnerabilities
- [ ] Documents security patterns
- [ ] Adds security tests
- [ ] Shares security knowledge

### Team Success
- [ ] Reduced vulnerability recurrence
- [ ] Improved security posture
- [ ] Better compliance
- [ ] Faster security reviews
- [ ] Shared security awareness

---

#seca #security #vulnerability #knowledge-base

