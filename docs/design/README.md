# Design Docs

This folder defines the design system and content direction for the site.

The docs are written to support implementation, not just inspiration. Each file should help answer a practical question during build-out.

## Documents

- [color-palette.md](./color-palette.md): Approved color palette, semantic token mapping, and usage rules
- [design-principles.md](./design-principles.md): Core product and aesthetic principles that should guide design decisions
- [typography.md](./typography.md): Type pairings, scale, hierarchy, and editorial rules
- [layout-and-spacing.md](./layout-and-spacing.md): Containers, section rhythm, alignment, and responsive behavior
- [components.md](./components.md): Reusable UI patterns, states, and interaction guidelines
- [page-blueprints.md](./page-blueprints.md): Page-level structure for home, work, blog, and about
- [voice-and-content.md](./voice-and-content.md): Voice, copy style, and content framing rules

## Design Summary

The site should feel like a personal software studio with a strong editorial point of view:

- minimal, but not empty
- warm, but not soft or whimsical
- technical, but not dressed up as a generic developer portfolio
- confident, but not performative

The core position is simple: build useful software by removing unnecessary complexity.

## Implementation Priority

When translating these docs into code, work in this order:

1. Color tokens
2. Typography system
3. Layout shell and section spacing
4. Shared components
5. Page composition
6. Content refinement

That order prevents downstream visual drift and keeps the build consistent.
