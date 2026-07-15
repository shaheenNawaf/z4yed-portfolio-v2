# Timeline Section Specification

Version: 1.0
Status: Draft

---

# Purpose

The Timeline section demonstrates professional growth through measurable business outcomes rather than a traditional resume format.

Its purpose is to show that I have consistently delivered value across multiple roles, industries, and disciplines.

This section should reinforce that I can successfully wear multiple hats without overwhelming the recruiter.

---

# Recruiter Question

Has this person consistently delivered results in professional environments?

---

# Primary Goal

Increase recruiter confidence.

---

# Secondary Goals

Demonstrate career progression.

Show versatility.

Support resume downloads.

Reduce hiring risk.

---

# Information Hierarchy

Timeline

↓

Company

↓

Role

↓

Business Impact

↓

Responsibilities

↓

Technologies

↓

Achievements

---

# Layout

Desktop

Vertical timeline.

Newest position first.

Cards alternate left and right (optional).

One expanded card at a time.

---

Tablet

Single centered timeline.

---

Mobile

Single column.

Cards stacked vertically.

---

# Section Header

Title

Experience

Subtitle

A track record of shipping products, driving growth, and delivering measurable business outcomes.

Maximum two lines.

---

# Timeline Structure

Each experience should be represented as a single expandable timeline card.

Collapsed by default.

Expandable on click.

Only one card expanded at a time.

---

# Timeline Card

Collapsed State

Company

Role

Employment Type

Duration

Location (Optional)

Primary Achievement

Expand Icon

---

# Expanded State

Company Overview

Responsibilities

Key Achievements

Business Impact

Technologies Used

Related Projects

Downloadable Resume Link (optional)

---

# Responsibilities

Maximum five bullets.

Focus on ownership.

Begin each bullet with an action verb.

Examples

Built

Developed

Led

Designed

Implemented

Optimized

Managed

Avoid generic responsibility lists.

---

# Achievements

Maximum five bullets.

Every achievement should follow the XYZ format.

Accomplished X by implementing Y resulting in Z.

Examples

Generated $355K+ in campaign volume by optimizing acquisition funnels.

Built a Flutter SaaS platform reducing manual operations by 60%.

Managed 25+ macro creators generating over 8M combined reach.

---

# Business Impact

Always visually separated.

Examples

Revenue Generated

Community Growth

Operational Efficiency

Conversion Rate Improvement

Customer Acquisition

Automation Savings

Business impact should receive higher visual priority than responsibilities.

---

# Technologies

Compact chips.

Examples

Flutter

Supabase

Riverpod

Firebase

Meta Ads

Canva

Airtable

Google Workspace

Notion

Maximum ten chips.

---

# Related Projects

Display any matching projects from the Projects section.

Example

GymEasy

StaySafe

Gamatek

Clicking should navigate directly to that project's case study.

---

# Visual Hierarchy

Role

↓

Company

↓

Business Impact

↓

Responsibilities

↓

Technologies

---

# Timeline Indicators

Use subtle timeline connectors.

Do not dominate the layout.

Current role may have a highlighted indicator.

---

# Motion

Expand / Collapse

Height animation.

Fade content.

Duration

200–300ms.

Smooth easing.

No bouncing.

No rotations.

---

# Accessibility

Keyboard accessible.

Proper heading hierarchy.

ARIA support for expandable cards.

Visible focus indicators.

---

# Performance

Render collapsed state first.

Lazy render expanded content.

Optimize animations.

---

# Future Expansion

Timeline should support

Promotions

Multiple roles at one company

Awards

Certifications

Recommendations

Without redesigning the component.

---

# Common Mistakes

Never

- Display walls of text.
- Show full job descriptions immediately.
- List every responsibility.
- Prioritize technologies over outcomes.
- Use progress bars.
- Add company logos larger than role titles.
- Display multiple expanded cards simultaneously.

---

# Success Criteria

A recruiter should understand within 30 seconds

✓ Career progression.

✓ Business impact.

✓ Technical depth.

✓ Marketing experience.

✓ Leadership and ownership.

---

# Acceptance Criteria

□ Easy to scan.

□ Business outcomes prioritized.

□ Expandable details.

□ Responsibilities remain concise.

□ Technologies support—not dominate—the content.

□ Timeline reinforces the portfolio positioning.

# Data Rule

Before introducing new data structures, check whether the information already exists inside resume.ts.

Prefer extending existing exports over creating new ones.

Avoid duplicate sources of truth.