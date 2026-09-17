---
name: exoticmarketpv-design
description: Design system skill for exoticmarketpv. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# exoticmarketpv Design System

You are building UI for **exoticmarketpv**. Dark-themed, neutral palette, sans-serif typography (Instrument Sans), compact density on a 4px grid, expressive motion.

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Homepage

![exoticmarketpv Homepage](screenshots/homepage.png)

> Read `references/DESIGN.md` for full token details.

## Design Philosophy

- **Layered depth** — use shadow tokens to create a sense of physical layering. Each elevation level has a specific shadow.
- **Gradient accents** — gradients are used thoughtfully for emphasis, not decoration.
- **Type pairing** — Instrument Sans for body/UI text, Anton for headings/display. Never introduce a third typeface.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **neutral palette** — the color temperature runs neutral, matching the sans-serif typography.
- **Expressive motion** — animations are an integral part of the experience. Use spring physics and layout animations.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#050505` | Page/app background |
| Surface | `--surface` | `#111111` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#ffffff` | Headings, body text |
| Text Muted | `--text-muted` | `#8a8a8a` | Captions, placeholders |
| Border | `--border` | `#262626` | Dividers, card borders |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Warning | `#c9a227` | Caution states, pending items |
| Danger | `#e01b1b` | Errors, destructive actions |

### Extended Palette

- **color-teal:** `#cfcfcf`
- **color-bone:** `#f2f2f2` — Light surface or highlight color

### CSS Variable Tokens

```css
--color-card: #111;
--color-muted: #8a8a8a;
```

## Typography

### Font Stack

- **Instrument Sans** — Heading 1, Heading 2, Heading 3
- **Anton** — Body, Caption
- **Space Mono** — Code

### Font Sources

```css
@font-face {
  font-family: "Anton";
  src: url("fonts/Anton-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Instrument Sans";
  src: url("fonts/InstrumentSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Instrument Sans";
  src: url("fonts/InstrumentSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Pirata One";
  src: url("fonts/PirataOne-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Space Mono";
  src: url("fonts/SpaceMono-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Space Mono";
  src: url("fonts/SpaceMono-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Instrument Sans | clamp(1rem,3.4vw,2rem) | 700 |
| Heading 2 | Instrument Sans | 16px | 700 |
| Heading 3 | Instrument Sans | 11px | 700 |
| Body | Anton | .6875rem | 400 |
| Caption | Anton | 10px | 400 |
| Code | Space Mono | 14px | 400 |

### Typography Rules

- Body/UI: **Instrument Sans**, Headings: **Anton** — these are the only display fonts
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `inherit`
Default: `inherit`

### Container

Max-width: `1500px`, centered with auto margins.

### Breakpoints

| Name | Value |
|------|-------|
| sm | 40rem |
| md | 48rem |
| lg | 64rem |
| xl | 80rem |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #111111;
  border: 1px solid #262626;
  border-radius: inherit;
  padding: 16px;
  box-shadow: 0 0#e01b1b73;
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #444444;
  color: #ffffff;
  border-radius: inherit;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #262626;
  color: #ffffff;
  border-radius: inherit;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #050505;
  border: 1px solid #262626;
  border-radius: inherit;
  padding: 8px 12px;
  color: #ffffff;
  font-size: 14px;
}
.input:focus { border-color: var(--accent); outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #111111;
  color: #8a8a8a;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #111111;
  border: 1px solid #262626;
  border-radius: inherit;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
  box-shadow: 0 0 0 10px #e01b1b00;
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #8a8a8a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #262626;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #262626;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #262626;
}
.nav-link {
  color: #8a8a8a;
  padding: 8px 12px;
  border-radius: inherit;
  transition: color 150ms;
}
.nav-link:hover { color: #ffffff; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

### Extracted Components

These components were found in the codebase:

**Button** (`html`)

**Card** (`html`)
- Variants: `/75`, `/90`

**Navigation** (`html`)

**Footer** (`html`)

## Page Structure

The following page sections were detected:

- **Navigation** — Top navigation bar (6 items)
- **Hero** — Hero section (detected from heading structure)
- **Faq** — FAQ/accordion section
- **Footer** — Page footer with links and info (8 items)
- **Cards** — Grid of 63 card elements (63 items)

When building pages, follow this section order and structure.

## Animation & Motion

This project uses **expressive motion**. Animations are part of the design language.

### CSS Animations

- `ticker`
- `ticker-rev`
- `rise`
- `floaty`
- `swap`

### Motion Tokens

- **Duration scale:** `.2s`, `.3s`, `.5s`, `.7s`, `300ms`, `350ms`, `600ms`
- **Easing functions:** `cubic-bezier(.16,1,.3,1)`
- **Animated properties:** `opacity`, `transform`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (.2s) for micro-interactions, long (600ms) for page transitions
- **Easing:** Use `cubic-bezier(.16,1,.3,1)` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

### Shadow Tokens

- Raised (cards, buttons): `0 0#e01b1b73`
- Floating (dropdowns, popovers): `0 0 0 10px #e01b1b00`

### Z-Index Scale

`0, 10, 20, 30, 35, 40, 45, 60, 70, 90`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only Instrument Sans and Anton and Space Mono are allowed
- **No opacity for disabled states** — use muted colors instead
- **No pill shapes** — this design doesn't use rounded-full / 9999px radius

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — Instrument Sans, Anton, Space Mono only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — use shadow tokens
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `/favicon.ico`
- **Site URL:** `https://exoticmarketpv.com/`
- **Brand typeface:** Instrument Sans

## Quick Reference

```
Background:     #050505
Surface:        #111111
Text:           #ffffff / #8a8a8a
Accent:         (not extracted)
Border:         #262626
Font:           Instrument Sans
Spacing:        4px grid
Radius:         inherit
Components:     8 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for exoticmarketpv
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "exoticmarketpv" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# exoticmarketpv DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 9 · Fonts: 3 · Components: 8
> Icon library: not detected · State: not detected
> Primary theme: dark · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![exoticmarketpv Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **dark-themed** interface with a neutral tone. Depth is expressed through layered shadows and subtle surface color variation. Typography pairs **Anton** for display/headings with **Instrument Sans** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 4, 8, 12, 16, 20, 24, 28, 32px. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| theme-color | `#050505` | background | Page background, darkest surface |
| color-card | `#111111` | surface | Card and panel backgrounds |
| tw-ring-offset-color | `#ffffff` | text-primary | Headings and body text |
| color-muted | `#8a8a8a` | text-muted | Captions, placeholders, secondary info |
| border | `#262626` | border | Dividers, card borders, outlines |
| color-rojo | `#e01b1b` | danger | Error states, destructive actions |
| color-oro | `#c9a227` | warning | Warning states, caution indicators |
| color-teal | `#cfcfcf` | unknown | Palette color |
| color-bone | `#f2f2f2` | unknown | Palette color |

### CSS Variable Tokens

```css
--tw-border-style: solid;
--color-card: #111;
--color-muted: #8a8a8a;
--tw-border-style: dashed;
```


---

## 3. Typography Rules

**Font Stack:**
- **Instrument Sans** — Heading 1, Heading 2, Heading 3
- **Anton** — Body, Caption
- **Space Mono** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Anton";
  src: url("fonts/Anton-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Instrument Sans";
  src: url("fonts/InstrumentSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Instrument Sans";
  src: url("fonts/InstrumentSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Pirata One";
  src: url("fonts/PirataOne-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Space Mono";
  src: url("fonts/SpaceMono-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Space Mono";
  src: url("fonts/SpaceMono-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Instrument Sans | clamp(1rem,3.4vw,2rem) | 700 |
| Heading 2 | Instrument Sans | 16px | 700 |
| Heading 3 | Instrument Sans | 11px | 700 |
| Body | Anton | .6875rem | 400 |
| Caption | Anton | 10px | 400 |
| Code | Space Mono | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Instrument Sans** for body/UI text, **Anton** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (3)

**Card** — `html`
- Variants: `/75`, `/90`

**Badge** — `html`

**List** — `html`

### Data Input (1)

**Button** — `html`
- Animation: 

### Media (2)

**Image** — `html`

**Icon** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48
- **Border radius:** inherit
- **Max content width:** 1500px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Raised — cards, buttons, interactive elements

- `0 0#e01b1b73`

### Floating — dropdowns, popovers, modals

- `0 0 0 10px #e01b1b00`

### Z-Index Scale

`0, 10, 20, 30, 35, 40, 45, 60, 70, 90`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes ticker`
- `@keyframes ticker-rev`
- `@keyframes rise`
- `@keyframes floaty`
- `@keyframes swap`
- `@keyframes barrido`
- `@keyframes surge`
- `@keyframes pulso`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#050505` as the primary page background
- Pair **Instrument Sans** (body) with **Anton** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: inherit
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Instrument Sans and Anton and Space Mono
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| sm | 40rem | css |
| md | 48rem | css |
| lg | 64rem | css |
| xl | 80rem | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #111111
Border: 1px solid #262626
Radius: inherit
Padding: 16px
Font: Instrument Sans
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border #262626
Padding: 8px 16px
Radius: inherit
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #050505
Max-width: 1500px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #111111
Label: #8a8a8a (muted, 12px, uppercase)
Value: #ffffff (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #050505
Input border: 1px solid #262626
Focus: border-color var(--accent)
Label: #8a8a8a 12px
Spacing: 16px between fields
Radius: inherit
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Instrument Sans, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/Anton-Regular.ttf`
- `fonts/InstrumentSans-Bold.ttf`
- `fonts/InstrumentSans-Medium.ttf`
- `fonts/InstrumentSans-Regular.ttf`
- `fonts/InstrumentSans-SemiBold.ttf`
- `fonts/PirataOne-Regular.ttf`
- `fonts/SpaceMono-Bold.ttf`
- `fonts/SpaceMono-Regular.ttf`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Homepage Screenshots (screenshots/)

![homepage.png](screenshots/homepage.png)

