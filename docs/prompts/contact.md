# Contact Section Specification

Version: 1.0
Status: Draft

---

# Purpose

The Contact section converts recruiter interest into action.

By the time visitors reach this section, they should already understand my experience, projects, and measurable business impact.

This section should remove every possible barrier between interest and conversation.

---

# Recruiter Question

How do I get in touch with this person?

---

# Primary Goal

Generate recruiter outreach.

---

# Secondary Goals

Increase Google Appointment bookings.

Increase LinkedIn connections.

Increase resume downloads.

Provide alternative contact methods.

---

# Information Hierarchy

Headline

↓

Supporting Copy

↓

Primary CTA

↓

Contact Form

↓

Alternative Contact Methods

---

# Layout

Desktop

Two-column layout.

Left

Headline

Supporting copy

Quick contact methods

Availability

Right

Contact form

Primary CTA

---

Tablet

Single column.

---

Mobile

Everything stacked vertically.

Primary CTA remains visible above the form.

---

# Section Header

Title

Let's Build Something Great

Subtitle

Whether you're hiring, building a startup, or exploring opportunities, I'd love to hear what you're working on.

Maximum three lines.

---

# Primary CTA

Book a Discovery Call

This should be the highest-priority action.

Use Google Appointments.

Open in a new tab.

---

# Secondary Actions

Download Resume

View LinkedIn

Send Email

View GitHub

Keep these visually secondary.

---

# Contact Form

Fields

Name

Email

Company (Optional)

Role (Optional)

Message

Submit Button

Maximum five fields.

Reduce friction.

---

# Form Validation

Validate in real time.

Show clear inline errors.

Preserve entered values after validation errors.

---

# Success State

Display confirmation message.

Explain expected response time.

Offer additional links while waiting.

---

# Availability

Optional information.

Example

Currently open to

• Remote Software Engineering

• Product Engineering

• Growth Marketing

• Startup Consulting

---

# Response Time

Display expected reply window.

Example

Usually replies within 24–48 hours.

---

# Visual Hierarchy

Headline

↓

Book Call CTA

↓

Form

↓

Alternative Links

---

# Motion

Fade into view.

Buttons have subtle hover elevation.

Inputs highlight on focus.

No excessive animation.

---

# Accessibility

Keyboard accessible.

Proper labels.

ARIA-compliant form fields.

Visible focus states.

Error messages announced appropriately.

---

# Performance

No unnecessary validation requests.

Fast submission.

Minimal dependencies.

---

# Common Mistakes

Never

- Require unnecessary fields.
- Ask for phone numbers.
- Hide contact methods.
- Add CAPTCHA unless required.
- Display social media feeds.
- Add unnecessary illustrations.
- Force users to fill long forms.

---

# Success Criteria

A recruiter should be able to

✓ Book a call.

✓ Send a message.

✓ Download my resume.

✓ Visit my LinkedIn.

within 60 seconds.

---

# Acceptance Criteria

□ Low-friction form.

□ Primary CTA is obvious.

□ Multiple contact methods.

□ Mobile friendly.

□ Accessible.

□ Encourages conversation rather than form completion.

# Data Rule

Before introducing new data structures, check whether the information already exists inside resume.ts.

Prefer extending existing exports over creating new ones.

Avoid duplicate sources of truth.