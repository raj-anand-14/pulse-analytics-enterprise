# Pulse Analytics Enterprise (Phoenix)

> **Architecture Decision Record (ADR)**
>
> This document records the important architectural and engineering decisions made during the Phoenix project. Each decision includes the reasoning behind it so future work remains consistent.

---

# ADR-001 — Documentation First

**Status:** Accepted

## Decision

Create and maintain core project documentation before large-scale feature development.

## Rationale

Clear documentation reduces ambiguity, improves consistency, and makes long-term maintenance easier.

---

# ADR-002 — Existing Files Are the Source of Truth

**Status:** Accepted

## Decision

When improving a file, always start from the current production version.

## Rationale

This prevents accidental loss of functionality and avoids regressions.

---

# ADR-003 — One Complete File Per Release

**Status:** Accepted

## Decision

Every deliverable is a complete file rather than patches or partial snippets.

## Rationale

Complete files are easier to review, test, version, and deploy.

---

# ADR-004 — Layered Backend Architecture

**Status:** Accepted

## Decision

Adopt a Controller → Service → Repository → Utility architecture.

## Rationale

Separating responsibilities improves maintainability, testing, and future expansion.

---

# ADR-005 — Documentation Evolves with Code

**Status:** Accepted

## Decision

Every release updates project documentation alongside implementation.

## Rationale

Documentation should reflect the current system, not become an afterthought.

---

# ADR-006 — Apps Script Template Strategy

**Status:** Accepted

## Decision

Use reusable HTML templates while respecting Apps Script's template engine limitations. HTML template files may reside at the project root if required.

## Rationale

This balances modularity with platform constraints and avoids broken template rendering.

---

# ADR-007 — Versioned Releases

**Status:** Accepted

## Decision

Track releases using semantic versioning (Major.Minor.Patch).

## Rationale

Versioning provides traceability and predictable release management.

---

# ADR-008 — Release Gates

**Status:** Accepted

## Decision

A file is considered **Stable** only after review, validation, and documentation updates.

## Validation Checklist

- Architecture reviewed
- Existing functionality preserved
- Responsive validation completed
- Accessibility reviewed
- Documentation updated
- Changelog updated

## Rationale

Quality is determined by verification, not by code completion alone.

---

# Future ADRs

Future decisions should follow this format:

- Decision ID
- Status
- Context
- Decision
- Alternatives Considered
- Consequences
- Rationale
- Date

---

_Last Updated: 2026-07-19_
