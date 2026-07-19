# Pulse Analytics Enterprise (Phoenix)

> **System Architecture**
>
> This document defines the architectural blueprint for Phoenix. It serves as the technical reference for project structure, design principles, and component interactions.

---

# 1. Architecture Goals

Phoenix is designed to be:

- Modular
- Maintainable
- Scalable
- Testable
- Reusable
- Enterprise-ready

Guiding principles:

- Separation of Concerns
- Single Responsibility Principle
- Layered Architecture
- Progressive Enhancement
- Documentation-first development

---

# 2. High-Level Architecture

```text
                   Browser
                      │
                HTML / CSS / JS
                      │
               Client Application
                      │
              google.script.run
                      │
          ┌──────────────────────┐
          │ Google Apps Script   │
          ├──────────────────────┤
          │ Controllers          │
          │ Services             │
          │ Repositories         │
          │ Utilities            │
          └──────────────────────┘
                      │
          Google Workspace Services
      (Sheets, Drive, Gmail, Calendar)
```

---

# 3. Repository Structure

```text
Phoenix/
│
├── docs/
│   ├── STATUS.md
│   ├── ROADMAP.md
│   ├── CHANGELOG.md
│   ├── ARCHITECTURE.md
│   ├── CODING_STANDARD.md
│   └── DECISIONS.md
│
├── src/
│   ├── html/
│   ├── css/
│   ├── js/
│   └── assets/
│
├── apps-script/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── core/
│   └── utilities/
│
└── scripts/
```

> Note: Apps Script HTML templates may be stored at the project root when required by the Apps Script runtime.

---

# 4. Backend Layers

## Controller Layer
Responsibilities:
- Receive UI requests
- Validate input
- Coordinate services
- Return responses

## Service Layer
Responsibilities:
- Business logic
- Workflow orchestration
- Data transformation

## Repository Layer
Responsibilities:
- Read/write Google Sheets
- Access Drive
- Gmail integration
- External storage abstraction

## Utility Layer
Responsibilities:
- Logging
- Configuration
- Validation
- Shared helpers

---

# 5. UI Architecture

Primary layout:

- Theme
- Layout
- Components
- Header
- Sidebar
- Footer
- Dashboard
- App

Design objectives:

- Responsive
- Accessible
- Reusable
- Component-driven

---

# 6. Data Flow

```text
User Action
      │
      ▼
Client UI
      │
      ▼
google.script.run
      │
      ▼
Controller
      │
      ▼
Service
      │
      ▼
Repository
      │
      ▼
Google Workspace APIs
```

---

# 7. Design Principles

- Existing files are the source of truth.
- One complete file per release.
- No regressions.
- Version every release.
- Documentation evolves with implementation.
- Review before modification.

---

# 8. Future Expansion

Planned modules:

- Authentication
- Notifications
- Reporting
- Audit logs
- Analytics engine
- Plugin framework
- Theme customization

---

# 9. Quality Gates

Every module should satisfy:

- Architecture review
- Naming consistency
- Accessibility (UI)
- Responsive validation
- Documentation update
- Regression review
- Release note entry

---

_Last Updated: 2026-07-19_
