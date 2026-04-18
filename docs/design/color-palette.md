# Color Palette

This document defines the core color system for the site. It is based on the approved palette reference in `.context/attachments/image-v5.png`.

## Intent

The palette should make the site feel:

- editorial rather than templated
- warm and approachable rather than sterile
- opinionated and memorable without becoming loud

The overall balance is a soft cream canvas, deep plum typography, coral-red emphasis, and a muted sage-grey supporting surface.

## Core Palette

| Name | Hex | Role |
| --- | --- | --- |
| Midnight Violet | `#331832` | Primary ink, structural color, high-contrast UI |
| Raspberry Red | `#D81E5B` | Sharp secondary accent for labels, active states, and focus |
| Cinnabar | `#F0544F` | Primary highlight and CTA accent |
| Ash Grey | `#C6D8D3` | Alternate surface and muted supporting background |
| Papaya Whip | `#FDF0D5` | Primary page background |

## Token Mapping

Use semantic tokens instead of hard-coding raw hex values in components.

```css
:root {
  --color-bg: #fdf0d5;
  --color-ink: #331832;
  --color-accent: #f0544f;
  --color-accent-strong: #d81e5b;
  --color-surface-alt: #c6d8d3;
}
```

Recommended extended tokens:

```css
:root {
  --color-border: color-mix(in srgb, var(--color-ink) 16%, var(--color-bg));
  --color-muted-text: color-mix(in srgb, var(--color-ink) 68%, var(--color-bg));
  --color-soft-fill: color-mix(in srgb, var(--color-surface-alt) 55%, var(--color-bg));
  --color-cta-hover: color-mix(in srgb, var(--color-accent) 86%, var(--color-ink));
  --color-focus: var(--color-accent-strong);
}
```

## Usage Rules

### 1. Background and Layout

- Use `Papaya Whip` as the default page canvas.
- Use `Ash Grey` only for selected bands, panels, or section breaks.
- Avoid alternating every section between tinted surfaces. One or two `Ash Grey` sections per page is enough.

### 2. Typography

- Use `Midnight Violet` for headings, body text, nav, icons, and most borders.
- Prefer tinted or mixed variants of `Midnight Violet` for subdued copy instead of neutral gray.
- Do not use pure black for large text blocks.

### 3. Accents and Calls to Action

- Use `Cinnabar` as the main highlight color.
- Use it for the emphasized hero word, key inline links, arrows, and important interaction states.
- Use `Raspberry Red` more sparingly than `Cinnabar`.
- Reserve `Raspberry Red` for section labels, active navigation states, badges, and focus outlines.

### 4. Buttons

- Primary button: `Midnight Violet` background with `Papaya Whip` text.
- Secondary button: `Papaya Whip` or transparent background, `Midnight Violet` border, `Midnight Violet` text.
- Destructive or highly urgent states should use `Raspberry Red`, not `Cinnabar`.

### 5. Tags, Pills, and Metadata

- Use softened `Ash Grey` fills for technology tags and metadata pills.
- Keep tag text in `Midnight Violet`.
- Avoid brightly colored chips unless they carry specific meaning.

## Distribution

The palette should be applied with restraint:

- 70% `Papaya Whip` and other light neutrals
- 20% `Midnight Violet`
- 8% `Cinnabar`
- 2% `Raspberry Red`

`Ash Grey` functions as a support surface, not a headline color.

## Accessibility Notes

- Default text should remain `Midnight Violet` on `Papaya Whip`.
- Do not place white text on `Cinnabar` or `Raspberry Red` without verifying contrast.
- Focus rings should use `Raspberry Red` only if they remain clearly visible against both light and tinted surfaces.
- Color should not be the only indicator of state; pair it with labels, icons, or text treatment.

## Component Guidance

### Hero

- Background: `Papaya Whip`
- Headline: `Midnight Violet`
- Highlighted word: `Cinnabar`
- Availability pill: soft `Ash Grey` fill with `Midnight Violet` text

### Work Section

- Keep project rows mostly neutral
- Use `Cinnabar` for arrows, hover lines, or small emphasis details
- Use `Ash Grey` for tech tags or alternating row treatments

### Blog Section

- Use `Raspberry Red` for editorial labels such as category tags
- Keep article titles in `Midnight Violet`
- Use muted `Midnight Violet` variants for date and read-time metadata

### About Section

- If a section needs visual separation, use a broad `Ash Grey` surface instead of individual cards
- Keep the copy mostly neutral and let color support hierarchy rather than dominate it

### Footer

- Use `Midnight Violet` as the footer background
- Use `Papaya Whip` for text and icons
- Use `Cinnabar` or `Raspberry Red` only for hover and active states

## Do / Do Not

### Do

- keep the palette warm and slightly literary
- let most of the page breathe in light tones
- use color to signal hierarchy and interaction
- prefer one accent moment per viewport over many competing accents

### Do Not

- flood large page areas with `Cinnabar` or `Raspberry Red`
- introduce unrelated blues, purples, or gradients
- use flat gray UI primitives when `Midnight Violet` mixes can do the job
- make every section colorful, which would flatten hierarchy

## Implementation Note

When the palette is wired into the UI, all component styling should reference semantic tokens such as `--color-bg`, `--color-ink`, and `--color-accent` instead of raw hex values. That keeps future refinements contained to the token layer.
