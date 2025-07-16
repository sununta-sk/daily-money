# CRUD Functions – Minimal Requirements by Domain

This document defines the essential CRUD operations for each main domain in the app. Use this as a guide to keep hooks and utilities focused and minimal.

---

## 1. Card Items (incomes, expenses, goals)

- **Add Card Item**: Create a new card item (income, expense, or goal).
- **Update Card Item**: Update an existing card item.
- **Delete Card Item**: Remove a card item.
- **Pull Card Items**: Fetch all card items for the current user and tab.

> No bulk update, no partial field patching, no extra logic. Only these four operations are needed.

---

## 2. Card Order (groupOrder)

- **Pull Card Order**: Fetch the current card/group order for the active tab.
- **Save Card Order**: Save the entire card/group order array for the active tab.

> No per-item update, no field-level patching, no insert-at-index. Only full save and full pull.

---

## 3. User Settings

- **Pull User Settings**: Fetch all user settings for the current user.
- **Save/Update User Settings**: Save or update user settings (can be per-field or whole object).

> No delete operation for user settings. Only pull and save/update.

---

## Summary Table

| Domain        | Add | Update | Delete | Pull | Save |
| ------------- | --- | ------ | ------ | ---- | ---- |
| Card Items    | ✔️  | ✔️     | ✔️     | ✔️   |      |
| Card Order    |     |        |        | ✔️   | ✔️   |
| User Settings |     | ✔️     |        | ✔️   | ✔️   |

---

**Principle:**

- Each hook should only expose the minimal set of operations for its domain.
- No hook should do more than what is listed here.
- This keeps the codebase clean, predictable, and easy to maintain.
