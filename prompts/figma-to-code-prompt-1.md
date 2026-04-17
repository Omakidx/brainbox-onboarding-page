# 🚀 THE ANTIGRAVITY X FIGMA MASTER PROMPT

**Role:** You are a Senior Frontend Engineer and Autonomous AI Agent.
**Context:** Our project is strictly governed by the rules and structures defined in the `.windsurf/` folder.
**Goal:** Build the **[Brainbox-onboarding-page]** exactly as designed in the provided Figma file, achieving 1:1 visual parity in layout and behavior.

---

## 1. INITIALIZATION & CONTEXT LOADING
Before taking any action, you must:
1. **MCP Connection:** Read `mcp-config.json` in the project root. You must always use this configuration to link the MCP to the browser and connect the Figma file. No exceptions.
2. **Read & Internalize:** Scan all files in `.windsurf/` (specifically `architecture.md`, `standards.md`, `developer.md`, `workspace.md`, and `figma-design-system-rules.md`).
3. **Design Context Loading:** Use the Figma MCP tool's `get_figma_data` to fetch structured representation of the Figma UI. URL snippet: **[https://www.figma.com/design/iCO1DGcvlerKH9EqC3wwnl/Untitled?node-id=1-2&m=dev]**.
4. **Visual Reference Validation:** Always use the Figma MCP's screenshot capability for visual validation before proceeding. No exceptions.
5. **Asset Download:** Use the Figma MCP tool's `download_figma_images` to download **ALL** graphical assets from the design. Save to:
   - **Images** (`IMAGE` fill types, like photos and complex logos) → `client/public/assets/images/` as **PNG** (`requiresImageDimensions: true` if applicable).
   - **Icons** (`IMAGE-SVG` fill types, like ui-icons) → `client/public/assets/icons/` as **SVG**.
   - Do **NOT** invent arbitrary icon clusters (e.g. "fake social icons"). Only download what explicitly exists.
   - When downloading, use the actual Figma `nodeId` from the payload. Give files descriptive names (e.g., `footer-logo.png`, `icon-post.svg`).
6. **Design Token Extraction:** Extract exact hex colors, font families, font sizes, line heights, letter spacing, and layout dimensions from the `globalVars.styles` section of the Figma data. Map each `fill_*` to a CSS variable in `globals.css`. Do NOT guess colors — use the exact values.
7. **Architectural Alignment:** Verify that extracted tokens match the constants defined in `globals.css` and `standards.md`. If discrepancies exist, update `globals.css` to match Figma, not the other way around.

---

## 2. MANDATORY EXECUTION WORKFLOW
You must follow these steps in order. Do not generate implementation code until Step 3 is approved.

### Step 1: Requirements Definition (`prd.md`)
* Draft a new feature entry in `.windsurf/prd.md`.
* Define User Stories, Functional Requirements, and Edge Cases (e.g., loading states, empty states, error handling) based on the Figma design.

### Step 2: Technical Strategy (`tech_design.md`)
* Create a detailed plan in `.windsurf/tech_design.md`.
* Map out the component hierarchy, required Props, and State Management.
* Reference specific Figma Node IDs for dimensions and styles.

### Step 3: Atomic Tasking (`ticket.md`)
* Create a `.windsurf/ticket.md` for the first logical unit of work (e.g., "Implement Layout Shell" or "Build Primary Navigation").

### Step 4: Logic Drafting (`scratchpad.md`)
* Use the scratchpad to plan logic. Translate the Figma MCP output (often React+Tailwind) into the project's specific CSS variables or styling conventions. Map Figma attributes to tokens.

---

## 3. RIGID CONSTRAINTS & TRANSLATION RULES
* **Schema-First Translation:** Map Figma nodes directly to defined system schemas (Tailwind config, CSS variables).
* **Token-Driven Styling:** Never hardcode visual properties. Every color, spacing, and font must resolve to an existing design token in `globals.css`.
* **Exact Typography:** Use the exact `fontFamily`, `fontSize`, `lineHeight`, `letterSpacing`, and `textCase` values from the Figma `style_*` entries. The project uses **Newsreader** (serif) and **Inter** (sans-serif).
* **Component Reuse:** Prioritize the use of existing UI primitives over the creation of new ones. A new component is a last resort.
* **Local Assets & Iconography:** Reference images from `client/public/assets/images/` and icons from `client/public/assets/icons/`. Do not use placeholders, placeholder colors, or external CDNs. Do not import new icon packages; use the assets downloaded from the Figma payload.
* **No Hardcoding Logic:** Reference `security.md`. Do not use placeholder data; use the DTO patterns defined in `architecture.md`.
* **Naming:** Strictly follow `kebab-case` for files and `camelCase` for variables as per `standards.md`.
* **Purity:** Keep business logic out of the UI components. Use the Layered Hierarchy.
* **Next.js Image:** Always use `next/image` `<Image>` component for images. Use `fill` + `object-cover` for responsive images inside relative containers.

---

## 4. DESIGN TOKEN REFERENCE (Current Palette)
These are the active design tokens in `globals.css`. Use these class names in your Tailwind markup:

| Token | Hex | Figma Fill | Usage |
|:---|:---|:---|:---|
| `bg-base` | `#FFFFFF` | `fill_35H6OR` | Pure white backgrounds |
| `bg-surface` | `#F8F9FA` | `fill_T3R16A` | Main content area bg |
| `bg-sidebar` | `#F3F4F5` | `fill_0321OY` | Sidebar, tonal shift bg |
| `bg-muted` | `#EDEEEF` | `fill_DJ9Y9I` | Card image backgrounds |
| `bg-badge` | `#E7E8E9` | `fill_QP1V9C` | Tag badges |
| `bg-header` | `rgba(248, 249, 250, 0.8)` | `fill_QA7D4H` | Top header bg (+ blur) |
| `text-primary` | `#191C1D` | `fill_755AME` | Headings, primary text |
| `text-body` | `#45474C` | `fill_4TAVKT` | Body paragraphs |
| `text-muted` | `#76777D` | `fill_43XJAJ` | Metadata, timestamps |
| `text-nav` | `#525F73` | `fill_U184XC` | Nav links |
| `text-sidebar` | `#64748B` | `fill_IK6EWC` | Sidebar nav links |
| `text-categories` | `#94A3B8` | `fill_DA64P2` | Categories heading |
| `text-black` | `#000000` | `fill_77H0DH` | Logo, CTA buttons |
| `text-placeholder` | `rgba(118, 119, 125, 0.5)` | `fill_C7XP25` | Input placeholders |
| `border` | `rgba(0,0,0,0.05)` | `fill_BNLG79` | Borders, dividers |
| `border-card` | `rgba(0,0,0,0.03)` | `fill_IFVBFQ` | Card borders |
| `border-sidebar` | `rgba(198,198,205,0.1)` | `fill_6Y9CLS` | Sidebar borders |
| `divider` | `rgba(198,198,205,0.3)` | `fill_80R0GB` | Decorative dividers |

---

## 5. ASSET DIRECTORY STRUCTURE
```
client/public/assets/
├── images/       # All Figma raster images (PNG)
│   ├── hero-featured-*.png
│   ├── essay-*.png
│   └── bento-*.png
└── icons/        # All Figma vector icons (SVG)
    ├── icon-politics.svg
    ├── icon-culture.svg
    ├── icon-search.svg
    ├── icon-profile.svg
    ├── icon-post.svg
    ├── footer-social-icons.svg
    └── ...
```

---

## 6. COMPLETENESS VERIFICATION PROTOCOL (CVP)

> [!IMPORTANT]
> **These checks are MANDATORY before submitting any component as "done".** Failure to complete CVP is a rejection-on-sight offense.

### 6.1 — Node Traversal Completeness
Before writing any code, you **MUST** enumerate every **top-level child node** of the page frame (e.g., `Header`, `Sidebar`, `Editorial Grid`, `Footer`). Create a checklist in the scratchpad, and confirm that each node has a corresponding component in the implementation. **No node may be skipped or deferred.**

Example output:
```
✅ 204:1293 — Header-TopNavBar → TopHeader.tsx
✅ 205:250 — Aside-SideNavBar → SidebarNav.tsx
✅ 204:1110 — Editorial Grid → HeroSection + WeeklyDiscourse + BentoGrid
✅ 204:1246 — Footer Editorial Status → FooterEditorial.tsx
✅ 205:317 — Observer Prime branding → page.tsx top bar
✅ 205:320 — Header right actions → TopHeader.tsx (Post + Profile)
```

### 6.2 — Interactive Element Manifest
For every **header, footer, and navigation area**, you must explicitly list:
- Every **button** (text, icon, action)
- Every **input** (type, placeholder text)
- Every **icon** (SVG node, position)
- Every **link** (text, destination)

Then confirm each is implemented in code. **If a Figma node exists for it, code must exist for it.**

### 6.3 — Layout Position Verification
For any grid or multi-column layout, you **MUST**:
1. Read the `locationRelativeToParent` values for each sibling node.
2. Determine the correct visual ordering (left-to-right, top-to-bottom).
3. Verify that the CSS grid/flexbox ordering matches the Figma coordinate ordering.

**Example:** If `Large Square` has `x: 0` and `Horizontal` has `x: 560`, the Large Square must appear on the LEFT in the CSS grid — not the right.

### 6.4 — Typography Audit Table
Before moving to the next component, log a comparison table for every `textStyle` reference found:

| Figma Style ID | Font | Weight | Size | Line-Height | Letter-Spacing | CSS Class Applied |
|:---|:---|:---|:---|:---|:---|:---|
| `style_2XTU9P` | Newsreader | 400 | 48px | 1.1em | -2.5% | `font-serif text-[48px] leading-[1.1] tracking-[-0.025em]` |
| `style_1SVS2Y` | Inter | 400 | 10px | 1.5em | 10% | `font-sans text-[10px] tracking-[0.1em] uppercase` |

Any mismatch must be corrected before proceeding.

### 6.5 — Spacing & Padding Extraction Rule
Padding, gap, and margin values **MUST** be extracted from the `layout_*` entries in `globalVars.styles`:
- `padding: 48px` → `p-12`
- `gap: 64px` → `gap-16`
- `padding: 0px 32px` → `px-8`

**Do NOT approximate.** If Figma says `gap: 16px`, use `gap-4`, not `gap-3`.

### 6.6 — Zero-Radius Default Policy (Brutalism Constraint)
Unless the Figma attributes *explicitly* specify a `borderRadius` property on a node, you **must not** apply Tailwind rounded corners (`rounded-sm`, `rounded-lg`). Buttons, cards, and inputs default to sharp, unrounded brutalist shapes.

### 6.7 — Asset Exclusivity Check
Every graphical icon or image must be sourced directly via local `client/public/assets`. Under no circumstances should you fake/guess icon SVG vectors, borrow from a UI library, or use font-awesome icons. You must trigger an explicit MCP layer image extraction for every `IMAGE` or `IMAGE-SVG` fill type node.

---

## 7. REQUIRED FIRST OUTPUT
Do not write the full application code yet. Your first response must include:
1. A **Design Audit Summary** (listing Node IDs, Colors, and Typography found via Figma MCP `get_figma_data`).
2. A **Node Traversal Checklist** (Section 6.1 — every top-level node enumerated).
3. An **Interactive Element Manifest** (Section 6.2 — for header, footer, and nav areas).
4. A **Draft PRD** for this specific screen.
5. A **Confirmation** that you have read and will abide by the `.windsurf` rules and Figma Design System rules.

**Awaiting your analysis. Start by inspecting the Figma URL provided using `get_figma_data`.**