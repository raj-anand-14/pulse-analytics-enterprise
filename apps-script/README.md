# Pulse Analytics Enterprise (Phoenix)

> **Enterprise Analytics. Modern Architecture. Built on Google Workspace.**

Phoenix is a production-focused analytics platform built with **Google Apps Script**, designed to provide an enterprise-grade user experience, clean architecture, and maintainable code.

---

## Vision

Build a scalable analytics platform that combines:

- Enterprise UI
- Layered backend architecture
- Google Workspace integration
- Reusable components
- Comprehensive documentation
- Production-ready engineering practices

---

## Current Status

| Property | Value |
|----------|-------|
| Project | Pulse Analytics Enterprise |
| Codename | Phoenix |
| Version | v0.2.0 |
| Status | Active Development |
| Sprint | Sprint 2 |

For detailed progress, see:

- `docs/STATUS.md`
- `docs/ROADMAP.md`
- `docs/CHANGELOG.md`

---

## Repository Structure

```text
Phoenix/
├── apps-script/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── core/
│   └── utilities/
│
├── src/
│   ├── Layout.html
│   ├── Theme.html
│   ├── Components.html
│   ├── Header.html
│   ├── Sidebar.html
│   ├── Footer.html
│   ├── Dashboard.html
│   └── App.html
│
├── docs/
├── assets/
├── releases/
├── scripts/
└── README.md
```

> During development, HTML templates live in `src/`. Before deployment to Google Apps Script they are synchronized to the Apps Script project root to satisfy template loading requirements.

---

## Technology Stack

- Google Apps Script
- HTML5
- CSS3
- JavaScript (ES6+)
- Google Sheets
- Google Drive
- Gmail
- clasp
- Git & GitHub

---

## Engineering Principles

- Existing files are the source of truth.
- No regressions.
- One complete file per release.
- Documentation evolves with the code.
- Architecture before implementation.
- Version every release.

---

## Documentation

| Document | Purpose |
|----------|---------|
| STATUS.md | Project progress |
| ROADMAP.md | Planned milestones |
| CHANGELOG.md | Release history |
| ARCHITECTURE.md | System design |
| CODING_STANDARD.md | Development standards |
| DECISIONS.md | Architecture decisions |
| CONTRIBUTING.md | Contribution workflow |

---

## Sprint 2 Backlog

- Layout.html v0.2.1
- Components.html
- Header.html
- Sidebar.html
- Footer.html
- Dashboard.html
- App.html

---

## Getting Started

1. Clone the repository.
2. Install and authenticate `clasp`.
3. Open the project in your editor.
4. Develop under `src/` and `apps-script/`.
5. Sync to the Apps Script project before deployment.
6. Push changes and update documentation.

---

## License

Choose a license before the first public release (MIT or Apache-2.0 are common choices).

---

## Author

**Anand Raj**

Built as an enterprise-quality Google Apps Script application with a documentation-first engineering workflow.
