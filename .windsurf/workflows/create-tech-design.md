---
description: Create a Technical Design Document for an approved PRD. Use when planning implementation details, data architecture, or component hierarchy before writing code.
---

# Create Tech Design Workflow

## Steps

1. Read the active PRD from `.antigravity/prd.md` to understand the feature requirements.

2. Read `.antigravity/templates/tech_design.md` for the canonical template structure.

3. Read `.windsurf/rules/architecture.md` to ensure the design follows the Clean Rule and layered hierarchy.

4. Read `.antigravity/states/knowledge_graph.md` to understand module relationships and blast radius.

5. Populate the Tech Design template with:
   - **Implementation Overview** (Feature reference, System impact, High-level approach)
   - **Data Architecture & Schema** (New/modified tables, Migrations, Type/Interface definitions)
   - **API & Service Contracts** (Endpoints, Request/Response DTOs, Error formats)
   - **Component Architecture** (UI hierarchy, Props/State, Dependency graph)
   - **Testing Strategy** (Unit tests, Integration tests, Critical paths)
   - **Migration & Rollback Plan** (Deploy steps, Rollback procedure)

6. Verify:
   - Design follows the Clean Rule (dependencies point inward only).
   - All external inputs have schema validation defined.
   - Error handling strategy uses custom error classes.
   - No new circular dependencies introduced.

7. Save to `.antigravity/tech_design.md`.

8. Present the design to the user for approval before any code is written.
