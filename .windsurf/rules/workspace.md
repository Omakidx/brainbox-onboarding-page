---
trigger: always
---

# Workspace Rules

## Environment Parity
- All configuration must be driven by environment variables.
- `.env` files must be in `.gitignore`.
- No hardcoded secrets, URLs, or port numbers.

## Project Layout Constraints
- New top-level folders require explicit permission from the user.
- Source code lives in `/src/` with sub-directories: `/core/`, `/shared/`, `/modules/`.
- Tests mirror `/src/` structure in `/tests/`.
- Governance lives in `/.antigravity/` and `/.windsurf/`.

## Mandatory Guardrails
- **Zero-Trust:** Every external payload must be validated at the boundary.
- **Zero-Leak:** Hardcoding secrets or API keys triggers immediate rejection.
- **Atomic Execution:** Mutations must be atomic with a clear rollback strategy.

## Governance Files
- Changes to core standards must be reflected in governance files (`.antigravity/` or `.windsurf/`) before implementation in source code.
- Live project state is tracked in `.antigravity/states/project_state.md`.
- System knowledge graph is in `.antigravity/states/knowledge_graph.md`.
- Temporary working memory uses `.antigravity/states/scratchpad.md`.
