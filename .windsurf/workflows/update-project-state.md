---
description: Update the live project state after completing a task, hitting a blocker, or ending a session. Use to maintain the ground truth of the project.
---

# Update Project State Workflow

## Steps

1. Read `.antigravity/states/project_state.md` to understand current state.

2. Ask the user (or infer from context) what changed:
   - Task completed?
   - New blocker encountered?
   - Sprint phase changed?
   - Session ending (handover)?

3. Update the relevant sections:
   - **Section 2 (Ticket Queue):** Move completed tasks to `[x]`, update active tasks to `[/]`, add new tasks as `[ ]`.
   - **Section 3 (Milestones):** Add the latest completion with today's date.
   - **Section 4 (Blockers):** Document any impediments with description, required info, and status.
   - **Section 5 (Tech Debt):** Log any "quick fixes" that need proper refactoring later.
   - **Section 6 (Handover Notes):** Write a concise memo for the next session with current context and next steps.

4. Update `.antigravity/states/knowledge_graph.md` if any new modules, services, or data relationships were introduced.

5. Update `.antigravity/states/scratchpad.md` if there is active brainstorming or drafting in progress.

6. Run the State Integrity Checklist:
   - Section 2 ticket statuses are accurate.
   - Latest milestone logged in Section 3.
   - Any blockers documented in Section 4.
   - Handover note written in Section 6.
