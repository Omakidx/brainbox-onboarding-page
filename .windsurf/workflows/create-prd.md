---
description: Create a new Product Requirements Document for a feature or milestone. Use when starting a new feature, defining requirements, or scoping a milestone.
---

# Create PRD Workflow

## Steps

1. Ask the user for: **Feature Name**, **Problem Statement**, **Target Audience**.

2. Read `.antigravity/templates/prd.md` for the canonical template structure.

3. Read `.antigravity/states/project_state.md` to understand current sprint context.

4. Read `.windsurf/rules/architecture.md` to ensure alignment with architectural constraints.

5. Populate the PRD template with the following sections:
   - **Executive Summary** (Feature Name, Problem Statement, Objective, Target Audience)
   - **User Stories** (As a [User], I want to [Action] so that [Value])
   - **Functional Requirements** (ID, Requirement, Description, Priority table)
   - **Non-Functional Requirements** (Performance, Scalability, Security, Accessibility)
   - **UX Flow** (Happy Path, UI Components, Edge Cases)
   - **Technical Constraints** (Architecture alignment, DB changes, External deps, Security)
   - **Out of Scope** (Items excluded to prevent scope creep)
   - **Success Metrics** (Measurable impact indicators)

6. Run the PRD Compliance Checklist:
   - Every functional requirement is specific and testable.
   - Does not contradict any rules in `architecture.md`.
   - Out of Scope section is clear.
   - Edge cases and security risks addressed.

7. Save the PRD to `.antigravity/prd.md` (overwriting or creating a new versioned file as appropriate).

8. Update `.antigravity/states/project_state.md` to reflect the new feature in the ticket queue.
