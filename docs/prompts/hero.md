# Hero Section Specification

Version: 1.1
Status: Draft

---

# Purpose

The Hero section is the single most important section on the website.

Its purpose is to immediately communicate my positioning, differentiate me from traditional software engineers and marketers, and convince recruiters to continue scrolling.

A visitor should understand my value proposition within 5 seconds.

---

# Recruiter Question

Who is this person and why should I keep reading?

---

# Primary Objective

Increase scroll depth.

---

# Secondary Objectives

Increase resume downloads.

Increase LinkedIn clicks.

Increase project exploration.

Increase recruiter confidence.

---

# Key Message

I am a Growth Marketer with Software Engineering depth.

I don't just market products.

I build products that convert.

---

# Information Hierarchy

The Hero must communicate information in this exact order.

1. Name

2. Position

3. Value Proposition

4. Primary CTA

5. Secondary CTAs

6. Supporting Metrics

7. Professional Portrait

Nothing else.

---

# Layout

Desktop

Two-column layout.

Left column carries the argument.

Right column carries the proof (portrait + depth layer).

Desktop ratio: 55 / 45

Left

- Name (small, muted — above the headline)
- Headline
- Supporting Copy
- CTA Group
- Metrics Row

Right

- Portrait card (framed, not floating)
- Ambient depth layer behind portrait
- No floating tech badges

---

Tablet

Portrait moves below headline.

Buttons remain side-by-side.

Metrics wrap naturally.

---

Mobile

Portrait first.

Headline.

Supporting copy.

CTA.

Metrics.

Everything vertically stacked.

---

# Name Treatment

Render the name small and muted above the headline.

fontSize: 13–14px.

color: low opacity white or orange accent.

letterSpacing: 0.08em.

textTransform: uppercase.

Acts as an eyebrow label, not a heading.

---

# Headline

Large. Maximum two lines.

Current: "Growth Marketer × Software Engineer"

The × operator is intentional — it signals intersection, not a list.

Avoid buzzwords.

Avoid clever marketing copy.

Clarity wins.

---

# Supporting Copy

Maximum three lines.

Must answer: why is this combination rare and valuable?

Good direction: "Most marketers can't ship. Most engineers can't sell."

Communicate

- The rarity of the combination
- Execution capability
- Business impact

Avoid life story.

Avoid mission statements.

Avoid "passionate about" language.

---

# CTA Group

Primary button

- Label: Book a Call
- Style: solid orange fill, white text, pill shape
- Links to: #contact

Secondary links (below or beside primary, visually subordinate)

- LinkedIn — ghost/text link with ↗ arrow
- SWE Resume — ghost/text link with ↓ arrow
- MKT Resume — ghost/text link with ↓ arrow

Secondary links must be smaller and more muted than the primary.

Never render primary and secondary at equal visual weight.

Never add more than one solid button.

---

# Metrics Row

Maximum four metrics.

Sits below the CTA group.

Separated from CTA group by a thin top border or 24–32px gap.

Rendered as a single horizontal row on desktop.

Each metric: large number, small muted label below it.

Dividers between metrics: 1px vertical line, low opacity.

Examples

- $355K+ Campaign Volume
- 4:1 ROAS
- 22K+ Community Members
- 25+ SEA Creator Partnerships

Metrics read as evidence, not decoration.

Never dominate the Hero.

---

# Portrait

Professional. High contrast. No busy background.

Rendered inside a dark framed card, not floating freely.

Card: subtle border (1px, low opacity), rounded corners (12–16px), dark background slightly lighter than page.

Portrait fills the card. No excessive padding.

The card grounds the portrait visually.

---

# Right Column Depth Layer

The right column must not be a flat surface.

Apply one ambient element behind the portrait card.

Options (pick one, implement subtly)

- Radial gradient using orange accent at 4–6% opacity, centered behind the card
- Faint dot grid or noise texture clipped to the column
- Very low opacity geometric shape (circle or blob) in orange or white

The depth layer must not be distracting.

It exists to add perceived depth, not to decorate.

Do not animate it.

---

# Motion

Stagger the left column reveals in this order.

1. Name eyebrow — fade in
2. Headline — fade + translateY(12px → 0)
3. Supporting copy — fade + translateY(12px → 0), 80ms delay
4. CTA group — fade, 160ms delay
5. Metrics — staggered per item, 20ms apart, 240ms start delay

Portrait

- Fade in only, no translate
- Slight delay (100ms) so text leads

Depth layer

- Static. No animation.

Duration: 400ms per element.

Easing: ease-out.

Avoid excessive animation.

Respect prefers-reduced-motion.

---

# Accessibility

Proper heading hierarchy.

Keyboard accessible buttons.

Descriptive alt text on portrait.

Readable contrast on all text.

Secondary links must have visible focus states.

---

# Performance

Portrait optimized (WebP, correct dimensions).

Lazy load depth layer decorative asset if any.

Avoid blocking animations.

---

# Success Criteria

A recruiter should understand within five seconds:

✓ Who I am.

✓ What I do.

✓ Why I am different.

✓ Where to click next.

---

# Common Mistakes

Do NOT

- Add rotating text.
- Add typing animations.
- Add carousels.
- Add more than one solid CTA button.
- Add walls of text.
- Add decorative statistics with no context.
- Add social media icons.
- Add technology logo strips.
- Add unnecessary badges.
- Float the portrait with no frame or context.
- Make the secondary links the same visual weight as the primary CTA.
- Animate the depth layer.

---

# Data Rule

Before introducing new data structures, check whether the information already exists inside resume.ts.

Prefer extending existing exports over creating new ones.

Avoid duplicate sources of truth.