# Navbar Specification

Version: 1.1
Status: Draft

---

# Purpose

The navigation exists to help recruiters quickly navigate after understanding the Hero.

The navbar should remain invisible while the Hero is fully visible.

It should appear only after the Hero scrolls out of view.

---

# Primary Goal

Reduce navigation friction.

Increase section discoverability.

---

# Behavior

Hidden on page load.

Appears after Hero exits viewport.

Sticky.

Light backdrop blur.

Thin border.

Smooth transition.

Hide on downward scroll.

Reveal on upward scroll.

---

# Height

64-72px.

Never exceed 80px.

---

# Layout

Desktop

-------------------------------------------------

Logo       [Projects  Experience  Resume  LinkedIn]       Book a Call

-------------------------------------------------

Logo always left.

Nav links grouped inside a single pill cluster, centered.

Primary CTA always right.

---

# Mobile

Hamburger.

Slide-over menu.

Primary CTA pinned at bottom of slide-over.

---

# Logo

Minimal wordmark.

No large icon.

Click returns to Hero.

---

# Navigation Items

Projects

Experience

Resume

LinkedIn

Book Call

No more than five navigation items.

---

# Pill Cluster

All nav links sit inside a single container styled as a pill.

Container background: low-opacity white fill (e.g. rgba(255,255,255,0.04)).

Container border: subtle (e.g. rgba(255,255,255,0.08)), border-radius 999px.

Individual link padding: 5px 14px, border-radius 999px.

Active link: slightly brighter background (e.g. rgba(255,255,255,0.08)), full white text.

Inactive links: muted (e.g. 45% white opacity).

Hover: smooth color transition, 150ms.

---

# CTA

Label: Book a Call.

Style: solid orange fill, white text, pill shape (border-radius 999px).

Always visually dominant.

Hover: slight opacity reduction.

---

# Surface

Background: rgba(10,10,10,0.80) or equivalent dark translucent.

Backdrop filter: blur(12px).

Bottom border: 1px, low opacity.

---

# Motion

Fade + translateY(-8px) on hide.

Fade + translateY(0) on reveal.

Duration: 200ms.

Easing: ease-out.

---

# Active State

Track active section via IntersectionObserver.

Apply active styles to the matching pill link.

---

# Accessibility

Keyboard navigation.

Visible focus states.

ARIA labels on logo, nav, hamburger, and CTA.

aria-current="page" on active nav link.

---

# Common Mistakes

Never

- Show navbar immediately.
- Add social icons.
- Add dark shadows.
- Add more than five links.
- Use oversized logos.
- Float nav links loosely — always wrap in the pill cluster container.

---

# Data Rule

Before introducing new data structures, check whether the information already exists inside resume.ts.

Prefer extending existing exports over creating new ones.

Avoid duplicate sources of truth.