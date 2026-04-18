# Layout and Spacing

The layout system should feel composed, breathable, and deliberate. It should create rhythm without relying on heavy card treatments.

## General Direction

The site should be:

- left-aligned by default
- spacious without becoming sparse
- structured by rhythm, not by stacking boxes

The layout should guide the eye through a reading sequence rather than present every section as an interchangeable module.

## Core Container Rules

Use a narrow-to-wide system instead of a single rigid width.

Suggested containers:

- `content`: for blog prose and longer text
- `default`: for normal sections and lists
- `wide`: for hero and selected work sections

Suggested starting widths:

```css
:root {
  --container-content: 44rem;
  --container-default: 72rem;
  --container-wide: 84rem;
}
```

## Section Rhythm

Vertical spacing should expand and contract with intent:

- generous spacing between major sections
- tighter spacing within section internals
- compact grouping between labels and headings

Do not give every block the same top and bottom padding.

## Grid Behavior

### Desktop

- Hero should feel asymmetrical and open
- Work should use stacked rows rather than uniform cards
- Blog preview can use a 3-column layout if the cards remain light
- About should favor two-column composition only when the content benefits from it

### Tablet

- Reduce negative space before shrinking text too aggressively
- Keep project rows readable before forcing them into dense cards

### Mobile

- Collapse to a single-column reading flow
- Preserve section order
- Avoid hiding metadata that helps context

## Alignment Rules

- Align text blocks, dividers, and lists to a clear left edge
- Avoid center alignment except for very short UI elements
- Buttons in hero sections can sit inline on desktop and stack on mobile

## Surfaces

- Most sections should live directly on the page background
- Use `Ash Grey` as a wide surface band, not a default card fill
- Use borders and spacing before introducing more containers

## Borders and Dividers

Dividers should be thin, warm, and structural.

- Use them to separate sections or rows
- Avoid boxing every item
- Prefer one strong horizontal rule over multiple nested outlines

## Spacing Scale

Use a restrained spacing scale with fluid behavior.

Suggested starting points:

```css
:root {
  --space-2xs: clamp(0.25rem, 0.5vw, 0.375rem);
  --space-xs: clamp(0.5rem, 0.75vw, 0.75rem);
  --space-sm: clamp(0.75rem, 1vw, 1rem);
  --space-md: clamp(1rem, 1.4vw, 1.5rem);
  --space-lg: clamp(1.5rem, 2vw, 2.5rem);
  --space-xl: clamp(2.5rem, 4vw, 4rem);
  --space-2xl: clamp(4rem, 6vw, 7rem);
}
```

## Page-Specific Layout Notes

### Home

- Hero should occupy meaningful vertical space without becoming oversized theater
- Work rows should feel like a curated list
- Writing preview should sit as an editorial companion, not as a secondary app grid

### Work

- Use a repeating row format with clear title, summary, tags, and a directional affordance
- Detail pages should use a readable case-study rhythm with short sections and clear subheads

### Blog

- Index pages should emphasize title and excerpt over metadata chrome
- Article pages should use a narrow text measure and generous margins

### About

- Use composition to balance biography, principles, and links
- Do not turn the page into a dense CV wall

## Responsive Principle

Responsive design here means adapting composition, not merely shrinking it. The site should still feel designed on mobile, with intentional stacking, spacing, and sequencing.
