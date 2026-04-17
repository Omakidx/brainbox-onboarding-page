---
description: Generate design system rules from a Figma file. Use when the user says "create design system rules", "generate rules for my project", "set up design rules", or wants to establish project-specific conventions for Figma-to-code workflows.
---

# Figma Design System Rules Workflow

## Steps

1. Call the Figma MCP tool `create_design_system_rules` to initialize the project context and template.

2. Audit the current codebase for:
   - Component structure (e.g., `src/components/ui`, `src/shared/`).
   - Styling framework (Tailwind v4, CSS Modules, etc.).
   - Design token locations (CSS variables, `@theme` blocks in `globals.css`).

3. Generate comprehensive rules for:
   - **Token-Driven Styling:** Every color, spacing, and font must resolve to an existing design token. Never hardcode hex values in utility classes.
   - **Component Naming & Export patterns** matching the codebase conventions in `.windsurf/rules/standards.md`.
   - **Asset Handling:** Use localhost sources provided by Figma MCP. Do not use placeholders or external CDNs.
   - **Implementation Flow:** `get_design_context` -> `get_screenshot` -> Implementation.

4. Translate the Figma MCP output (often React+Tailwind) into the project's specific conventions:
   - Map Figma node styles to CSS variables via `@theme` blocks (Tailwind v4).
   - Do not import new icon packages; use assets from the Figma payload.

5. Validate the generated rules:
   - Rules point to the correct component and token directories.
   - No overlapping or redundant instructions.
   - Every rule is a directive, not a suggestion.
   - No Figma API tokens or secrets hardcoded.

6. Save the generated rules to `.antigravity/figma-design-system-rules.md`.

7. Test with a sample component to verify 1:1 visual parity with the Figma source.
