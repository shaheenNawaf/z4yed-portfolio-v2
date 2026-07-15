# Projects Section Specification

Version: 1.0
Status: Draft

---

# Purpose

The Projects section is the primary trust-building section of the portfolio.

Its purpose is to prove that I can solve real business problems through software, marketing, and systems thinking.

Projects should feel like shipped products—not portfolio thumbnails.

---

# Recruiter Question

Can this person actually build products that create business value?

---

# Primary Goal

Demonstrate real-world execution.

---

# Secondary Goals

Increase project exploration.

Increase recruiter confidence.

Encourage resume downloads.

Increase interview requests.

---

# Information Hierarchy

Projects

↓

Business Problem

↓

Solution

↓

Business Impact

↓

Technology

↓

Detailed Case Study

---

# Layout

Desktop

Section Header

↓

Category Switcher

↓

Project Grid

↓

Expanded Project (optional)

Desktop Grid

2 Columns

Large cards.

Consistent heights.

Generous spacing.

---

Tablet

2 Columns

Reduced spacing.

---

Mobile

Single Column

Category switcher scrollable horizontally.

---

# Section Header

Title

Selected Work

Subtitle

Real products.
Real business impact.
Built with measurable outcomes.

Maximum two lines.

---

# Category Switcher

Style

Segmented Control

Categories

Software

Growth Marketing

Systems

Only one category visible at a time.

Animated underline.

Remember selected tab.

---

# Project Card

Each Project Card should adapt to the available data inside resume.ts.

Render only fields that exist.

Priority Order

1. media
2. title
3. results OR impact
4. description
5. tags
6. deliverables (optional)
7. CTA

Never render empty placeholders.

Cards should gracefully support incomplete projects without breaking the layout.

Hover Interaction

Cards must prioritize visuals over text.

---

# Hero Image

Large.

16:9 preferred.

High quality.

Rounded corners.

Optional autoplay preview video.

Never use tiny screenshots.

---

# Project Name

Maximum one line.

Examples

GymEasy

Gamatek

StaySafe

Inventory Management System

---

# Description

Maximum three lines.

Describe

Problem

Solution

Outcome

Never describe features only.

---

# Business Result

Always visible.

Examples

Reduced onboarding time by 60%

Generated $355K+ campaign volume

Managed 25+ macro creators

Built Flutter application with Supabase backend

Results should stand out visually.

---

# Technology Stack

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

Maximum eight chips.

---

# Primary CTA

View Case Study

Never

Learn More

Read More

Discover

---

# Case Study

Expand inline or open modal.

Contains

Overview

Problem

Constraints

Research

Solution

Technical Architecture

Marketing Strategy

Challenges

Outcome

Lessons Learned

Screenshots

Videos

Metrics

Future Improvements

---

# Visual Hierarchy

Image dominates.

Result second.

Title third.

Technology fourth.

Description last.

---

# Motion

Hover

Slight elevation.

Image zoom 1.02x.

Border highlight.

Click

Expand smoothly.

No rotations.

No flips.

No dramatic scaling.

---

# Accessibility

Entire card keyboard accessible.

Visible focus state.

Alt text for all images.

Proper heading structure.

---

# Performance

Lazy load images.

Lazy load videos.

Preload first project only.

Compress media.

---

# Empty State

If no projects exist

Display

"More projects are currently in development."

Never leave blank.

---

# Future Support

Cards should support

Images

Videos

Interactive demos

GitHub

Live Website

Figma

Documentation

PDF Case Studies

Without redesigning the layout.

---

# Common Mistakes

Never

- Use tiny screenshots.
- Overload cards with text.
- Show technology before impact.
- Hide results.
- Use generic descriptions.
- Use equal visual weight everywhere.
- Make every card the same height if content naturally varies significantly.
- Display more than six projects per category.

---

# Acceptance Criteria

□ Projects are visually dominant.

□ Business impact is immediately visible.

□ Every project tells a story.

□ Categories are easy to switch.

□ Cards are responsive.

□ Case studies require minimal effort to access.

□ Recruiters can understand a project within 20 seconds.

# Data Rule

Before introducing new data structures, check whether the information already exists inside resume.ts.

Prefer extending existing exports over creating new ones.

Avoid duplicate sources of truth.