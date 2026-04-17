---
description: Create an atomic task ticket for implementation. Use when breaking down a tech design into implementable units of work.
---

# Create Ticket Workflow

## Steps

1. Read the active Tech Design from `.antigravity/tech_design.md`.

2. Read `.antigravity/templates/ticket.md` for the canonical ticket template.

3. Read `.antigravity/states/project_state.md` to determine the next Ticket ID and current sprint context.

4. Ask the user which specific piece of the tech design this ticket covers.

5. Populate the ticket with:
   - **Ticket Context** (ID, Priority, Related PRD, Related Design, Assigned Agent)
   - **Task Description** (Specific problem or feature this ticket addresses)
   - **Implementation Steps** (Concrete technical steps as a checklist)
   - **Acceptance Criteria** (Definition of Done as verifiable conditions)
   - **Technical Constraints** (Layer restrictions, Testing requirements, Security)
   - **Validation & Testing** (Automated test commands, Manual verification steps, Review trigger)

6. Enforce boundaries:
   - **What MUST be done** is explicit and scoped.
   - **What MUST NOT be done** prevents scope creep.
   - Ticket is small enough for a single atomic commit.

7. Save to `.antigravity/ticket.md`.

8. Update `.antigravity/states/project_state.md` ticket queue with the new task.
