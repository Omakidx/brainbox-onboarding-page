---
trigger: always
---

# Technical Standards & Conventions

Consistency is the highest priority. Replicate dominant codebase patterns. Do not introduce creative naming or folder structures.

## Naming Conventions
| Entity | Convention | Example |
| :--- | :--- | :--- |
| Directories | `kebab-case` | `src/auth-provider/` |
| Files | `kebab-case` | `user-controller.ts` |
| Variables/Methods | `camelCase` | `getUserData()` |
| Classes/Types/Interfaces | `PascalCase` | `UserInterface` |
| Constants/Env Vars | `SCREAMING_SNAKE_CASE` | `MAX_RETRY_COUNT` |
| CSS Classes | `kebab-case` (BEM preferred) | `btn--primary` |
| Database Tables | `snake_case` (Plural) | `user_profiles` |

## Project Directory Structure
- `/.antigravity/` & `/.windsurf/`: Agent instructions and governance.
- `/src/`: All source code.
  - `/core/`: Business logic, entities, and interfaces.
  - `/shared/`: Utility functions and reusable components.
  - `/modules/`: Feature-specific logic (Vertical Slicing).
- `/tests/`: Mirroring the `/src` structure for unit and integration tests.
- `/docs/`: Technical manuals and PRDs.
- `/scripts/`: Automation, migration, and build scripts.
- `/assets/`: Static files (images, icons, fonts).

## Documentation Standards
- **Public API:** Every exported function, class, or interface must have a JSDoc/Docstring block.
- **The "Why" Comment:** Explain *why* a non-obvious approach was taken, not *what* the code does.
- **READMEs:** Every major module directory must contain a `README.md`.
- **Types as Docs:** Use descriptive type names. Prefer `UserId` over `string`.

## Formatting & Linting
- **Indentation:** 2 spaces (soft tabs).
- **Line Length:** Max 100 characters.
- **Trailing Commas:** Mandatory in arrays and objects.
- **Semicolons:** Required (unless language forbids them).
- **Imports:** Group by: 1. Built-in modules, 2. External libraries, 3. Internal absolute paths, 4. Relative paths.

## Versioning & Releases
- **SemVer:** `MAJOR.MINOR.PATCH`.
- **Changelog:** All user-facing changes logged in `CHANGELOG.md` using Keep a Changelog format.

## Async & Error Patterns
- **Promises:** Always use `async/await` over raw `.then()` chains.
- **Return Types:** Methods that can fail must return `{ data, error }` or throw a Custom Error Class. Never return `null` for errors.
- **Timeouts:** All external network requests must have a mandatory timeout (default: 5000ms).
