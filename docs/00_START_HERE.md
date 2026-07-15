# Data Source Rules

The portfolio is data-driven.

The AI must treat `resume.ts` as the single source of truth for all portfolio content.

This includes, but is not limited to:

- Hero copy
- Projects
- Experiences
- Skills
- Metrics
- Contact Information
- Resume URLs
- Featured Projects
- Images
- Videos
- Technologies

The AI must NEVER duplicate portfolio content inside Astro components.

Components are responsible only for presentation.

All business data must remain inside `resume.ts`.

When new projects, experiences, or metrics are added, updating `resume.ts` should automatically update the UI without requiring component modifications.

Never hardcode portfolio content.