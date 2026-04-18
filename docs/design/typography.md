# Typography

Typography is a primary brand signal for this site. It should carry more of the visual identity than decoration or illustration.

## Font Pairing

Use a two-family system:

- Display and headings: `Cabinet Grotesk`
- Body, UI, and supporting text: `Instrument Sans`

Fallbacks should preserve a clean sans-serif tone, but the design should be built around the primary pairing rather than around the fallback stack.

## Tone

The typography should feel:

- assertive in headings
- calm in body copy
- editorial rather than product-marketing

Avoid type that feels too geometric, too futuristic, or too friendly.

## Hierarchy

### Display Heading

Used for the homepage hero and major page headers.

- weight: bold or extra bold
- tracking: slightly tight
- line-height: compressed
- case: sentence case
- max line length: 2 to 3 short lines on desktop

### Section Heading

Used for sections such as Featured Work, Latest Writing, and About.

- weight: semibold or bold
- tracking: normal to slightly tight
- line-height: compact

### Eyebrow / Label

Used for section labels, categories, or small editorial markers.

- size: small
- weight: semibold
- letter-spacing: slightly expanded
- case: uppercase when used as a section marker
- color: `Raspberry Red` or muted `Midnight Violet`, depending on emphasis

### Body Copy

Used for descriptions, About text, and blog content.

- weight: regular
- line-height: comfortable, not airy
- max line length: 60 to 72 characters in article contexts

### Metadata

Used for dates, read time, role labels, and tech labels.

- smaller than body
- lower contrast than body
- never lighter than accessibility allows

## Type Scale

Use a fluid scale with `clamp()` rather than fixed breakpoints.

Suggested starting points:

```css
:root {
  --text-display: clamp(3.5rem, 7vw, 6.25rem);
  --text-h1: clamp(2.5rem, 4vw, 4rem);
  --text-h2: clamp(1.75rem, 2.4vw, 2.5rem);
  --text-h3: clamp(1.25rem, 1.7vw, 1.75rem);
  --text-body: clamp(1rem, 1.1vw, 1.125rem);
  --text-small: clamp(0.875rem, 0.9vw, 0.95rem);
}
```

## Usage Rules

### Home Hero

- Use the display size only once on the homepage.
- Keep the supporting paragraph visibly smaller and looser.
- Highlight only one word or phrase in accent color.

### Project Titles

- Keep project titles strong and direct.
- Avoid decorative all-caps or novelty treatments.

### Blog Titles

- Let titles read like strong article headlines, not link labels.
- Preserve enough scale contrast from metadata and excerpts so the eye lands on the title first.

### About Copy

- Use shorter paragraphs than in blog posts.
- Let line breaks create pacing rather than stuffing the section into dense blocks.

## Editorial Rules

- Sentence case by default
- Use italics sparingly
- Avoid excessive bolding inside body copy
- Do not center long blocks of text
- Do not rely on color alone to create hierarchy

## Accessibility

- Body text should remain highly legible on `Papaya Whip`
- Avoid ultra-light weights
- Keep sufficient contrast between metadata and background
- Test long-form blog content on both laptop and mobile widths

## Implementation Notes

- Headings and body text should be driven by semantic tokens or utility classes, not one-off font-size declarations
- Blog prose styles should be documented and reused, not handcrafted per post
