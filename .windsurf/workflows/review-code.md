---
description: Run a full code review on recent changes using the Reviewer Protocol. Use when code is ready for review, before merging, or when the user asks for a code audit.
---

# Code Review Workflow

## Steps

1. Read `.windsurf/rules/reviewer.md` to load the full Reviewer Protocol.

2. Read `.windsurf/rules/architecture.md` and `.windsurf/rules/security.md` for compliance reference.

3. Identify the files that changed (ask the user or check recent git diff).

4. Run the **Architectural Audit:**
   - Check for layer violations (DB models in UI, circular dependencies).
   - Verify file placement matches the directory hierarchy.
   - Confirm abstractions are used instead of direct library coupling.

5. Run the **Logic & Robustness Audit:**
   - Edge cases: `null`, `undefined`, empty arrays, 0.
   - Error handling: no naked `try/catch`, errors logged with context.
   - Resource leaks: unclosed streams, missing cleanups.
   - Race conditions in async code.

6. Run the **Security & Privacy Audit:**
   - Scan for hardcoded credentials, tokens, or file paths.
   - Check for injection risks (SQL, XSS, command injection).
   - Verify API responses don't over-expose data.
   - Confirm input validation at the boundary.

7. Run the **Performance Audit:**
   - Flag O(n^2) loops, N+1 queries, unnecessary library additions.
   - Check memory management for large datasets.

8. Categorize all findings as: **BLOCKER**, **WARNING**, **SUGGESTION**, or **NITPICK**.

9. Check **Rejection Triggers** (any one = automatic rejection):
   - Existing tests failing.
   - New code with 0% test coverage.
   - Build fails.
   - Secrets in the diff.
   - Bypasses architecture rules.

10. Present the review summary to the user with categorized findings and a pass/fail verdict.
