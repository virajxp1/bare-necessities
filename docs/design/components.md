# Components

This document defines the reusable UI patterns for the site. The system should stay intentionally small.

## Principles

- Build fewer components, but make them precise
- Prefer composition over variant explosion
- Keep components visually light and text-forward
- Avoid adding decorative wrappers where layout can do the work

## Global Navigation

### Structure

- Site mark on the left
- Primary nav on the right
- Optional external action such as `GitHub` or `Let’s talk`

### Behavior

- Always readable at a glance
- No oversized sticky nav effects
- Active state should be clear but restrained

### Style

- Thin bottom border or clean separation from the page
- `Midnight Violet` as the default ink
- `Raspberry Red` reserved for the active or hovered emphasis state

## Buttons

Only two button styles should exist by default.

### Primary Button

- background: `Midnight Violet`
- text: `Papaya Whip`
- use for the main call to action in hero or page headers

### Secondary Button

- background: transparent or `Papaya Whip`
- border: subtle `Midnight Violet`
- text: `Midnight Violet`
- use for lower-emphasis navigation actions

### Rules

- Do not place multiple primary buttons next to each other
- Keep button copy short and direct
- Hover states should feel responsive, not animated for show

## Availability Pill

Used near the hero to communicate availability or current status.

- soft fill using `Ash Grey` mixed with background
- small type
- light border if needed
- should read as a signal, not as a badge collection

## Project Row

This is a core component of the portfolio.

### Content

- title
- year
- one-sentence summary
- technology tags
- directional arrow or link affordance

### Behavior

- whole row can be clickable if accessibility is handled cleanly
- hover state should slightly sharpen emphasis, not dramatically transform

### Style

- strong title
- supporting copy in muted ink
- tags understated
- divider-led layout preferred over full card chrome

## Article Preview Card

Used on the homepage blog preview and blog index.

### Content

- category
- read time
- title
- excerpt
- date

### Style

- light surface treatment
- thin borders if needed
- keep typography doing most of the work

### Rules

- Do not overload with author avatars, cover images, or social metadata
- Excerpts should stay short enough to preserve scanability

## Section Header

Used for major homepage and index sections.

### Content

- optional eyebrow label
- main heading
- optional trailing action such as `View all`

### Rules

- action link should not overpower the heading
- label color can use `Raspberry Red` if used sparingly across the page

## Tag

Used for project stacks, topics, or metadata.

- low visual weight
- compact spacing
- muted surface fill
- never the main focal point

## Footer

The footer should behave like a clean closing statement.

### Content

- site mark
- short signoff line
- social/contact links

### Style

- strong dark base using `Midnight Violet`
- concise spacing
- no multi-column sitemap unless content grows substantially

## Motion

Motion should stay purposeful and rare.

Allowed:

- subtle fade and translate on initial reveal
- arrow movement on hover
- color shifts for interactive states

Avoid:

- floating animations
- bounce effects
- parallax
- scroll gimmicks used without narrative reason

## States

Every interactive component should define:

- hover
- focus-visible
- active
- disabled, when relevant

Focus states should be visible and use a clear accent treatment without overwhelming the component.
