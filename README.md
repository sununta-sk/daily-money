# Daily Money App – Refactor & Architecture Guide

## Project Refactor Goals

This project is undergoing a major refactor to improve maintainability, clarity, and scalability. The main goals are:

- **Domain-Driven Structure:** Organize code by clear domains (auth, card items, order/grouping, user settings, utilities).
- **Centralized Path Management:** All Firebase path logic is defined in `src/utils/dataStructure.js`—no path-building logic should exist elsewhere.
- **Domain-Scoped Hooks:** Each domain has a single, focused hook (e.g., `useAuth`, `useCardItemArray`, `useCardItemOrder`, `useUserSettings`). No generic or overlapping hooks.
- **Component Simplicity:** Components receive only the props they need, with state and logic managed by the appropriate domain hook.
- **Local-First State:** UI is responsive and optimistic, with changes reflected locally before syncing to Firebase.
- **Persistent Order & Grouping:** Card order and group structure are saved and loaded from Firebase, using a unified hierarchical order structure.
- **No Redundant Logic:** Remove deprecated hooks, generic CRUD utilities, and any path logic outside `dataStructure.js`.

## Current State

- All Firebase path logic is centralized in `src/utils/dataStructure.js`.
- Hooks are domain-scoped and minimal:
  - `useAuth` – authentication
  - `useCardItemArray` – card items for the current tab
  - `useCardItemOrder` – order/grouping for the current tab
  - `useUserSettings` – user preferences (currency, tab, etc.)
  - Utility hooks: `useClickOutside`, `useCurrency`
- Components are being refactored to use only these hooks and pass clean, minimal props.
- Deprecated hooks and generic database functions have been removed.

## Architectural Principles

1. **Single Source of Truth for Paths:**

   - All Firestore/Firebase paths are defined and managed in `dataStructure.js`.
   - Never build or hardcode paths elsewhere.

2. **Domain-Scoped State & Logic:**

   - Each domain (auth, card items, order, settings) has a single hook responsible for all state and side effects.
   - No overlapping or redundant hooks.

3. **Component Simplicity:**

   - Components are stateless where possible, receiving only the data and callbacks they need.
   - State and logic are managed in hooks, not in component trees.

4. **Local-First, Optimistic UI:**

   - All user actions update local state first, then sync to Firebase.
   - UI remains responsive and fast, even with network delays.

5. **Persistent, Flexible Grouping:**
   - Card order and group structure are unified in a single, hierarchical order array, persisted in Firebase.
   - Group headers are expandable/collapsible, and cards can be nested/indented as needed.

## Next Steps

- Continue refactoring remaining components to use only the new domain hooks.
- Remove any remaining path logic or deprecated code.
- Ensure all CRUD and order/grouping operations use the centralized path helpers.
- Document any new architectural decisions in this README.

---

**If you see a Firebase path error, check that all path logic is using `dataStructure.js` helpers.**

For questions or further refactor plans, see the comments in `dataStructure.js` and the hooks directory.
