# Portfolio Design Bible

**Project:** Personal Portfolio v2
**Version:** 1.0 (Draft)
**Status:** Active

---

# Welcome

This repository contains the complete design specification for the Personal Portfolio project.

It is **not** simply a collection of prompts.

It is the single source of truth governing every design, UX, content, interaction, and implementation decision.

Every AI implementation MUST follow this documentation.

---

# Purpose

The purpose of this documentation is to eliminate ambiguity.

The AI should never invent new design patterns, components, layouts, copy, spacing, animations, or user flows.

If something is not documented, assume it should **not** exist.

---

# Core Philosophy

This portfolio is a product.

Not a resume.

Not a landing page.

Not a Dribbble concept.

Every decision must increase recruiter confidence and reduce hiring friction.

---

# Reading Order

Before making **ANY** code changes, read the following documents **in this exact order**.

1. `01_PRD.md`
2. `02_IA.md`
3. `03_DESIGN_SYSTEM.md`
4. `04_UX_RULES.md`
5. `05_COMPONENT_LIBRARY.md`
6. `06_COPY_GUIDE.md`
7. `07_MOTION.md`
8. `08_DESIGN_DECISIONS.md`

Only after understanding every document should the AI read an implementation specification inside `/prompts`.

---

# Dependency Order

Each document builds upon the previous one.

```
PRD
    ↓
Information Architecture
    ↓
Design System
    ↓
UX Rules
    ↓
Component Library
    ↓
Copy Guide
    ↓
Motion
    ↓
Design Decisions
    ↓
Implementation Prompt
```

Never skip this sequence.

---

# Priority Order

If two documents appear to conflict, resolve them using the following priority.

```
01_PRD.md

↓

02_IA.md

↓

03_DESIGN_SYSTEM.md

↓

04_UX_RULES.md

↓

05_COMPONENT_LIBRARY.md

↓

06_COPY_GUIDE.md

↓

07_MOTION.md

↓

08_DESIGN_DECISIONS.md

↓

Prompt Files
```

The higher document always wins.

Implementation prompts NEVER override strategy documents.

---

# AI Workflow

For every task, follow this workflow.

## Step 1

Read the required documentation.

---

## Step 2

Understand the purpose of the requested section.

---

## Step 3

Implement **only** the requested section.

Do not modify unrelated components.

Do not refactor unrelated code.

Do not introduce new design ideas.

---

## Step 4

Run a self-review using the Review Checklist.

---

## Step 5

Stop.

Wait for user feedback before making additional changes.

---

# Scope Rules

Unless explicitly instructed otherwise, the AI must NOT:

- Redesign unrelated sections.
- Modify typography.
- Change spacing scales.
- Introduce new colors.
- Replace icons.
- Rewrite copy.
- Invent animations.
- Create placeholder statistics.
- Add testimonials.
- Add libraries.
- Create additional pages.

Implement only what was requested.

---

# General Principles

Always optimize for:

- Recruiters
- Hiring Managers
- Startup Founders
- Technical Decision Makers

Never optimize for:

- Design awards
- Fancy animations
- Visual experimentation
- Trendy UI patterns

---

# Definition of Success

The portfolio succeeds when a recruiter immediately understands:

- Who I am.
- What I build.
- Why I am different.
- Why I reduce hiring risk.

Everything else is secondary.

---

# Before Every Task

Ask yourself:

- Does this support the PRD?
- Does this improve recruiter conversion?
- Does this reduce cognitive load?
- Does this increase clarity?
- Am I introducing unnecessary complexity?

If the answer to any of these is **No**, reconsider the implementation.

---

# Review Requirement

Before completing any implementation, the AI MUST read:

`reviews/REVIEW_CHECKLIST.md`

and validate the implementation against every item before considering the task complete.

---

# Golden Rule

When in doubt,

choose **clarity over creativity**.

This project values business outcomes over visual novelty.

# Decision Framework

Whenever making a decision, evaluate options in this order:

1. Does it improve recruiter comprehension?
2. Does it reinforce the portfolio positioning?
3. Does it reduce cognitive load?
4. Does it improve visual hierarchy?
5. Does it improve conversion?
6. Does it maintain consistency?

Never make decisions based solely on aesthetics.