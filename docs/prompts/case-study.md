# Case Study Specification

Version: 2.0
Status: Draft

---

# Purpose

Case Studies are the primary storytelling component of the portfolio.

Every case study expands upon a project displayed inside the Projects section.

Its purpose is to demonstrate business thinking, technical execution, product thinking, and measurable outcomes.

A recruiter should leave every case study understanding:

- What problem existed.
- Why it mattered.
- What I did.
- Why I chose that approach.
- What measurable impact was created.

---

# Source of Truth

All project content originates from:

resume.ts

The Case Study component is presentation only.

Never duplicate project information.

Never hardcode project content.

---

# Existing Data Model

The existing Project interface inside resume.ts is the authoritative data model.

The AI may extend the interface only when absolutely necessary.

Existing fields must never be renamed or removed.

Backward compatibility is mandatory.

The UI must gracefully handle missing optional fields.

---

# Recruiter Question

How does this person approach solving business problems?

---

# Primary Goal

Demonstrate structured thinking.

---

# Secondary Goals

Increase recruiter confidence.

Demonstrate product thinking.

Highlight technical decision-making.

Show measurable business outcomes.

---

# Architecture

resume.ts

↓

Projects Section

↓

Selected Project

↓

Case Study Component

↓

Rendered UI

Components should never contain business data.

---

# Opening a Case Study

A Case Study may be displayed as

- Modal
- Dedicated Page
- Expandable Card

The presentation layer should be interchangeable.

---

# Layout

Case Study Hero

↓

Overview

↓

Business Problem

↓

Solution

↓

Execution

↓

Business Impact

↓

Technology

↓

Lessons Learned

↓

Future Improvements

↓

Related Projects

---

# Hero

Display

Project Title

Category

Role

Duration (if available)

Primary Metric

Cover Image / Video

Technology Preview

---

# Overview

Maximum three paragraphs.

Describe

- What the project is.
- Who it serves.
- Why it exists.

Avoid implementation details.

---

# Business Problem

If available.

Explain

- Existing workflow
- Pain points
- Business need

Skip section if no data exists.

---

# Solution

Describe

- Overall approach
- Product thinking
- High-level implementation

Focus on reasoning.

Not code.

---

# Execution

Describe

Planning

Implementation

Testing

Deployment

Iteration

Include screenshots where appropriate.

---

# Business Impact

Highest priority section.

Examples

Revenue generated

Operational efficiency

Automation

Community growth

Campaign performance

User adoption

Every metric must include context.

Never display standalone numbers.

---

# Technology

Render technology chips from resume.ts.

Group when appropriate.

Examples

Frontend

Backend

Infrastructure

Marketing

Automation

Analytics

Hide if unavailable.

---

# Media

Support

Images

Videos

GIFs

Interactive demos

PDFs

GitHub

Live websites

The layout must adapt automatically.

---

# Lessons Learned

If available.

Explain

What worked.

What didn't.

What would be improved today.

---

# Future Improvements

If available.

Display

Scalability

Technical debt

Roadmap

Potential features

---

# Related Projects

Display up to three related projects.

Based on

Category

Technology

Business domain

Do not hardcode relationships.

---

# Data Rules

Each Case Study should progressively enhance the existing data available.

Priority

Required

- Title
- Description
- Media

Optional

- Problem
- Solution
- Impact
- Deliverables
- Gallery
- Repository
- Live Demo
- Lessons Learned
- Future Improvements

If optional fields do not exist, collapse the layout naturally.

Never display empty headings.

---

# Motion

Smooth page transition.

Fade media.

Lazy load heavy assets.

Respect prefers-reduced-motion.

---

# Accessibility

Semantic headings.

Keyboard navigation.

Alt text.

Accessible media controls.

---

# Performance

Lazy load media.

Only load active project.

Optimize images.

Code split large case studies.

---

# AI Implementation Rules

Never hardcode project content.

Always render from resume.ts.

Support future fields without major refactoring.

Separate presentation from data.

Design reusable components.

Avoid project-specific layouts.

---

# Common Mistakes

Never

- Duplicate project data.
- Hardcode metrics.
- Design around one project.
- Show empty sections.
- Prioritize technology over business impact.
- Create project-specific components.

---

# Success Criteria

A recruiter should understand

✓ The business problem.

✓ The proposed solution.

✓ The implementation approach.

✓ The measurable outcome.

✓ My contribution.

within three minutes.

---

# Acceptance Criteria

□ Fully data-driven.

□ resume.ts remains the single source of truth.

□ Components are reusable.

□ Missing fields do not break layouts.

□ Business outcomes are prioritized.

□ New projects require only resume.ts updates.

□ No component modifications required when adding projects.

# Data Rule

Before introducing new data structures, check whether the information already exists inside resume.ts.

Prefer extending existing exports over creating new ones.

Avoid duplicate sources of truth.