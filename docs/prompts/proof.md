# Proof Section Specification

Version: 1.0
Status: Draft

---

# Purpose

The Proof section validates every major claim made throughout the portfolio using measurable business outcomes.

Its purpose is to establish credibility immediately after reviewing selected work.

This section answers the question:

"Can I trust this person's results?"

---

# Recruiter Question

Has this person consistently delivered measurable business outcomes?

---

# Primary Goal

Increase recruiter confidence.

---

# Secondary Goals

Support the portfolio positioning.

Encourage project exploration.

Increase interview conversions.

---

# Information Hierarchy

Headline

↓

Supporting Copy

↓

Featured Metrics

↓

Supporting Achievements

↓

CTA

---

# Layout

Desktop

Large featured metric.

Supporting metric grid underneath.

2-column layout.

Large whitespace.

---

Tablet

2 columns.

---

Mobile

Single column.

Featured metric remains first.

---

# Section Header

Title

Impact

Subtitle

Results speak louder than claims.

Every number below represents measurable business impact.

Maximum two lines.

---

# Featured Metric

One metric should dominate visually.

Examples

$355K+

Campaign Volume Generated

OR

22,000+

Community Members Built

Choose whichever best represents overall business impact.

---

# Supporting Metrics

Render proof metrics directly from hubStats inside resume.ts.

Never duplicate metrics inside Astro components.

Each metric card should support

value

label

sub

accent

The component must adapt automatically when metrics are added or removed.

---

# Metric Card

Contains

Large Number

↓

Context

↓

Supporting Description

Example

25+

Macro Creators Managed

Across gaming, SaaS and consumer brands.

---

# Supporting Achievements

Optional.

Short highlight list.

Examples

Built Flutter SaaS applications.

Managed cross-functional teams.

Designed growth systems.

Implemented CRM automations.

Optimized onboarding funnels.

Maximum six items.

---

# CTA

View Selected Work

Links directly to Projects.

---

# Visual Hierarchy

Featured Metric dominates.

Supporting metrics equal weight.

Achievements visually secondary.

CTA last.

---

# Motion

Fade.

Count-up animation.

Animation triggers once.

Never loops.

Duration

800ms maximum.

---

# Accessibility

Numbers remain readable.

Animations respect prefers-reduced-motion.

High contrast.

---

# Performance

Count-up runs only once.

Avoid expensive animations.

---

# Future Expansion

Metrics should support

Revenue

Growth

Engineering

Marketing

Operations

Community

No redesign required.

---

# Common Mistakes

Never

- Inflate statistics.
- Use vague metrics.
- Display percentages without context.
- Mix unrelated metrics.
- Add decorative charts.
- Use pie charts.
- Use radar charts.
- Create dashboards.

This is evidence.

Not analytics software.

---

# Success Criteria

A recruiter should immediately understand

✓ Business impact

✓ Scale

✓ Consistency

✓ Credibility

within 10 seconds.

---

# Acceptance Criteria

□ Every metric has context.

□ The AI should visually emphasize the first metric unless a future
featuredMetric field exists inside resume.ts.

□ Reading effort is minimal.

□ Results are visually prioritized.

□ Section reinforces trust.

□ No meaningless statistics.

# Data Rule

Before introducing new data structures, check whether the information already exists inside resume.ts.

Prefer extending existing exports over creating new ones.

Avoid duplicate sources of truth.