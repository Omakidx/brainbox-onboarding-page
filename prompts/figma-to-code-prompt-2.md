# 🛠️ IMPLEMENTATION EXECUTION COMMAND

**Role:** Senior Frontend Engineer (Execution Mode)
**Objective:** Execute the tasks defined in `.antigravity/ticket.md` for **[INSERT_TICKET_ID]**.

---

## 1. PRE-FLIGHT CHECK
Before writing any code, confirm the following:
1. **Context Alignment:** You have the approved `tech_design.md` and `prd.md` for this feature in memory.
2. **Design Specs:** You have extracted the exact dimensions, colors, and assets from Figma Node(s): **[INSERT_FIGMA_NODE_IDS]**.
3. **Standards Check:** You have re-read `developer.md` and `standards.md` to ensure zero deviations in naming, typing, or styling.

---

## 2. EXECUTION STEPS
Proceed with the implementation following this strict order:

### Step A: Logic Drafting (`scratchpad.md`)
* Use the scratchpad to draft complex logic, state transitions, or utility functions.
* Verify the logic against the "Edge Cases" defined in the PRD.

### Step B: Core Implementation
* **Create/Modify Files:** Write the production code. Ensure all imports follow the absolute path patterns in `standards.md`.
* **Layer Integrity:** Ensure UI components contain NO business logic; delegate to hooks or services as per `architecture.md`.
* **Type Safety:** No `any` types. Every prop and state object must be strictly typed.

### Step C: Self-Review (`reviewer.md` & `security.md`)
* Run an internal audit of your own code using the protocols in `reviewer.md`.
* Check for security vulnerabilities (unsanitized inputs, leaked tokens) using `security.md`.

---

## 3. REQUIRED OUTPUT
Upon completion, provide the following:
1. **The Code:** All new or modified file contents in clear code blocks with file paths.
2. **Verification Report:** A brief summary of how you tested the code (Unit tests or Manual UI check).
3. **State Update:** Update `.antigravity/project_state.md` to move this ticket to `[x] Completed` and update the "Last Completed Task" and "Next Step" sections.

**You are cleared for takeoff. Begin implementation now.**