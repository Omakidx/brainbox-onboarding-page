---
trigger: always
---

# Security & Compliance Protocol

Security is non-negotiable. Never optimize for speed or functionality at the expense of these constraints.

## Zero-Trust Policy
- **External Inputs:** Treat all data from APIs, Databases, User Inputs, or File Systems as malicious until validated.
- **Least Privilege:** Use minimum permissions required. No `sudo`, `root`, or `admin` scopes unless documented as a requirement.
- **Internal Isolation:** Components must not access data they don't need. Keep the blast radius small.

## Secret Management (Hard Rules)
- **Zero Leakage:** Never hardcode API keys, passwords, tokens, or private IDs.
- **`.env` Protection:** Ensure `.env` files are in `.gitignore`. If a secret is in a tracked file, move it to an env var and scrub git history immediately.
- **Scanning:** Before every commit, scan the diff for high-entropy strings (e.g., `sk_`, `ghp_`, long Hex/Base64 strings).

## Input & Output Sanitization
- **SQL Injection:** Use parameterized queries or ORMs. String concatenation for SQL is a Blocker.
- **XSS:** All user-generated content must be escaped before rendering in UI.
- **Command Injection:** Never pass raw user input into shell commands (`exec()`, `spawn()`, `system()`).
- **Dependency Security:** Check for known vulnerabilities (`npm audit`, `snyk`). Use specific versions, not "latest" tags.

## Authentication & Authorization
- **Auth-First:** Every protected endpoint must check authentication at the top of the function.
- **RBAC:** Check specific permissions, not just "logged in" status.
- **Session Safety:** Secure, HTTP-only, SameSite cookies. JWTs with short TTL and strong signing secret.

## Agent-Specific Guardrails
1. **Forbidden:** `rm -rf /`, `chmod 777`, or any command disabling firewalls/security logging.
2. **PII Masking:** Redact emails, names, phone numbers, credit cards when logging for debugging.
3. **Audit Trail:** Security-sensitive changes (Auth, Middleware, DB schemas) must be flagged with `SEC:` commit prefix.

## Pre-Flight Security Checklist
1. Diff checked for accidentally included API keys or `.env` values.
2. Every new input field validated against a strict schema.
3. New features have corresponding permission checks.
4. New libraries are from trusted sources at stable versions.
5. No sensitive user data or system secrets in logs.

## Incident Response
If a pre-existing vulnerability is detected:
1. Do not attempt to fix it quietly.
2. Create a high-priority Security Alert ticket.
3. Document the vulnerability and suggest a patch.
