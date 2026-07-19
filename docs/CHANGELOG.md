# Pulse Analytics Enterprise (Phoenix)

> **CHANGELOG**
>
> All notable changes to this project are recorded in this document.

This project follows a versioned release approach where every release is documented and traceable.

---

# Release History

## v0.2.0 — UI Foundation *(Current Development)*

**Status:** 🟡 In Progress

### Added
- Initial Git repository structure.
- Apps Script project initialized with `clasp`.
- Core server modules:
  - Pulse.gs
  - Application.gs
  - AppRouter.gs
  - AppConfig.gs
  - AppLogger.gs
- Enterprise documentation workflow established.
- Initial UI shell architecture.

### Changed
- Standardized HTML include strategy for Apps Script templates.
- Adopted complete-file release workflow.
- Existing files designated as the source of truth.

### Fixed
- Resolved `.github` exclusion caused by `.gitignore`.
- Corrected HTML template include behavior.
- Identified and documented CSS placement issues for future cleanup.

### Documentation
- Created `STATUS.md`
- Created `ROADMAP.md`
- Started project engineering standards.

---

## Planned Releases

### v0.2.1
**Target**
- Components.html
- Header.html
- Sidebar.html
- Footer.html

### v0.3.0
**Target**
- Client application framework
- Routing
- State management

### v0.4.0
**Target**
- Repository layer
- Service layer
- Controller layer

### v0.5.0
**Target**
- Dashboard
- Charts
- KPI widgets

### v1.0.0
**Target**
- Production-ready enterprise release

---

# Release Process

Each release must include:

- Updated STATUS.md
- Updated CHANGELOG.md
- Version increment
- Validation checklist
- Regression review
- Release notes

---

# Versioning

Format:

Major.Minor.Patch

Example:

- v0.2.0
- v0.2.1
- v0.3.0
- v1.0.0

Rules:

- Major → Breaking architectural milestone.
- Minor → New features or modules.
- Patch → Fixes, refinements, documentation, or non-breaking improvements.

---

# Contributors

| Role | Responsibility |
|------|----------------|
| Product Owner | Vision, priorities, acceptance |
| Technical Lead | Architecture, implementation guidance, quality standards |

---

_Last Updated: 2026-07-19_
