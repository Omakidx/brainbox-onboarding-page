---
trigger: always
---

# Developer Execution Standards

## Code Quality & Style
- **Dry vs. Clear:** Prioritize code readability over clever one-liners. Comment the *why*, not the *what*.
- **Naming Conventions:**
  - Variables/Functions: `camelCase` (or `snake_case` for Python/Ruby).
  - Classes/Types: `PascalCase`.
  - Constants: `SCREAMING_SNAKE_CASE`.
  - Booleans: Must start with a verb (`isVisible`, `hasToken`, `shouldRender`).
- **Functional Purity:** Functions should do one thing. If a function exceeds 25 lines, refactor into smaller sub-functions.
- **No Magic Strings:** Use Enums or Constants for all recurring string values.

## Type Safety & Error Handling
- **Strict Typing:** No `any` or `unknown` types without a written justification comment.
- **Total Function Rule:** Every function must handle its edge cases. If input can be `null`/`undefined`, handle it explicitly at the start.
- **Error Propagation:**
  - Use custom error classes (`ValidationError`, `DatabaseError`).
  - Never swallow errors with an empty `catch {}` block.
  - Log errors with sufficient context (IDs, timestamps) but no PII.

## Git & Workflow Protocol
- **Atomic Commits:** Each commit = single logical change.
- **Conventional Commits:** `feat:`, `fix:`, `docs:`, `refactor:`, `test:`.
- **Branching:** Features on `feat/feature-name` branches. Never push directly to `main` or `develop`.

## Testing Requirements
- **Test-Driven Mentality:** Draft the test suite *before* writing implementation logic.
- **Coverage:** 100% for Use Case and Domain layers. Component testing for critical user paths.
- **Mocking:** Mock all external API calls and database hits in unit tests. Only integration tests touch real infrastructure.

## Documentation
- **Self-Documenting Code:** If you need a comment to explain a variable, the name is wrong.
- **JSDoc/Docstrings:** Every public function/method must have a docstring.
- **README Updates:** New env vars or dependencies = README update in the same commit.

## Safe-Mode Guardrails
1. **No Hallucinations:** If unsure about a library method, check `node_modules` or docs first.
2. **File Integrity:** Never delete a file unless explicitly instructed.
3. **Environment Security:** Never log secrets, API keys, or tokens, even during debugging.
4. **Performance:** Avoid nested loops where O(n) is possible. Watch for memory leaks.

## Pre-Submit Checklist
1. Code passes linting/formatting rules.
2. All existing tests pass + new code has its own tests.
3. No implicit `any` types or TS errors.
4. Project compiles/builds successfully.
5. All `console.log` or "TODO" comments removed.
