# Pulse Analytics Enterprise (Phoenix)

> **Coding Standards**
>
> This document defines the coding conventions for the Phoenix project. All source files should follow these standards unless an approved architectural decision states otherwise.

---

# 1. Core Principles

- Readability over cleverness.
- Consistency over personal preference.
- Reuse before duplication.
- Existing files are the source of truth.
- No regressions.
- One complete file per release.

---

# 2. HTML Standards

## Structure

- Use semantic HTML5 elements (`header`, `main`, `nav`, `section`, `footer`).
- Include ARIA attributes where appropriate.
- Keep markup accessible and responsive.
- Avoid inline styles and inline JavaScript.

## Templates

- Apps Script templates should use shared include functions.
- Keep reusable UI in dedicated template files.

---

# 3. CSS Standards

- Prefer CSS variables for colors, spacing, typography and sizing.
- Organize styles by component.
- Mobile-first responsive design.
- Avoid duplicated selectors.
- Keep specificity low.

Recommended order:

1. CSS Variables
2. Base styles
3. Layout
4. Components
5. Utilities
6. Responsive rules

---

# 4. JavaScript Standards

- Use `const` by default; `let` only when reassignment is required.
- Prefer small reusable functions.
- Avoid global variables.
- Use async callbacks where supported.
- Centralize application state.

---

# 5. Google Apps Script Standards

Project layers:

- Controller
- Service
- Repository
- Utility

Rules:

- Controllers coordinate requests.
- Services contain business logic.
- Repositories interact with Google services.
- Utilities provide shared helpers.

Logging should use the project's logger instead of ad-hoc `Logger.log()` calls in production code.

---

# 6. Naming Conventions

## Files

- PascalCase for major templates (`Header.html`)
- Descriptive names for modules (`DashboardService.gs`)

## Functions

- camelCase
- Verb-first names (`loadDashboard`, `saveEvent`)

## Constants

- UPPER_SNAKE_CASE

## CSS

- Kebab-case class names
- Utility classes prefixed consistently if introduced

---

# 7. Documentation

Each production file should include:

- File name
- Purpose
- Version
- Status
- Dependencies
- Revision history (when appropriate)

Public functions should include concise documentation comments.

---

# 8. Review Checklist

Before marking a file as Stable:

- [ ] No regressions
- [ ] Responsive review
- [ ] Accessibility review
- [ ] Naming conventions followed
- [ ] Documentation updated
- [ ] Version updated
- [ ] Existing functionality preserved

---

# 9. Definition of Done

A feature is complete only when:

- Code is implemented.
- Documentation is updated.
- Review checklist passes.
- STATUS.md is updated.
- CHANGELOG.md is updated.

---

_Last Updated: 2026-07-19_
