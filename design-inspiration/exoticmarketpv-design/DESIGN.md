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
  src: url("https://exoticmarketpv.com/_next/static/media/0e7b7e0b829e3eb9-s.2j75_l12byk_u.woff2?dpl=dpl_7CM9jF9vCdvf3fymgbdndcvdUgxb");
  font-weight: 400;
}
@font-face {
  font-family: "Instrument Sans";
  src: url("https://exoticmarketpv.com/_next/static/media/c7f47671e39f7787-s.0klc_mi0-5f4_.woff2?dpl=dpl_7CM9jF9vCdvf3fymgbdndcvdUgxb");
  font-weight: 400;
}
@font-face {
  font-family: "Pirata One";
  src: url("https://exoticmarketpv.com/_next/static/media/5442ff27cc27860f-s.1ob-80akcszzt.woff2?dpl=dpl_7CM9jF9vCdvf3fymgbdndcvdUgxb");
  font-weight: 400;
}
@font-face {
  font-family: "Space Mono";
  src: url("https://exoticmarketpv.com/_next/static/media/4ba802ed8e67eac5-s.0fuxtgzazslqx.woff2?dpl=dpl_7CM9jF9vCdvf3fymgbdndcvdUgxb");
  font-weight: 400;
}
@font-face {
  font-family: "Space Mono";
  src: url("https://exoticmarketpv.com/_next/static/media/b8f2b92a9960dd69-s.0we3rzhp_h228.woff2?dpl=dpl_7CM9jF9vCdvf3fymgbdndcvdUgxb");
  font-weight: 700;
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
