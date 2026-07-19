# Pulse Analytics Enterprise (Phoenix)

> **CONTRIBUTING GUIDE**
>
> This document describes how contributions should be made to the Phoenix project to keep the codebase consistent, maintainable, and production-ready.

---

# Project Philosophy

Every contribution should:

- Preserve existing functionality.
- Improve maintainability where possible.
- Follow the documented architecture.
- Update documentation when behavior changes.
- Leave the project in a better state than it was found.

---

# Repository Structure

```text
Phoenix/
├── docs/
├── src/
├── apps-script/
├── assets/
└── scripts/
```

Documentation belongs in `docs/`.
Application code belongs in `src/` and `apps-script/`.

---

# Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Stable production-ready code |
| `develop` | Integration branch |
| `feature/<name>` | New features |
| `bugfix/<name>` | Non-critical fixes |
| `hotfix/<name>` | Urgent production fixes |

---

# Commit Message Convention

Use Conventional Commits whenever practical.

Examples:

```text
feat(ui): add enterprise sidebar
fix(layout): resolve responsive overflow
docs: update architecture guide
refactor(service): simplify dashboard loading
```

---

# Development Workflow

1. Review the current implementation.
2. Create an improvement plan.
3. Implement the change.
4. Verify no regressions.
5. Update documentation if required.
6. Record the release in `CHANGELOG.md`.

---

# Code Review Checklist

Before merging:

- [ ] Existing functionality preserved
- [ ] No duplicate logic introduced
- [ ] Coding standards followed
- [ ] Responsive behavior verified
- [ ] Accessibility considered
- [ ] Documentation updated
- [ ] Version information updated where applicable

---

# Definition of Ready

A task should have:

- Clear objective
- Acceptance criteria
- Identified dependencies
- No unresolved blockers

---

# Definition of Done

A task is complete only when:

- Implementation finished
- Self-review completed
- Documentation updated
- STATUS.md reviewed
- CHANGELOG.md updated
- Quality checklist passed

---

# Release Workflow

Every release should include:

1. Complete file(s)
2. Version increment
3. STATUS update
4. CHANGELOG entry
5. Validation review

---

# Collaboration Principles

- Discuss architecture before major changes.
- Prefer evolution over replacement.
- Keep changes focused and reviewable.
- Record significant architectural choices in `DECISIONS.md`.

---

_Last Updated: 2026-07-19_
