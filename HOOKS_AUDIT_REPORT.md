# Hooks Audit Report

## Current Hook Analysis

### 1. `useCardItemArray` ✅ GOOD

**What it does:**

- Pulls card items (via `useCollection`)
- addCardItem, updateCardItem, deleteCardItem
- Loading/error state

**Assessment:** Minimal and focused. Only does what's needed for card item CRUD.

---

### 2. `useCardItemOrder` ✅ REFACTORED

**What it does:**

- Pulls card order
- setCardItemOrder (save entire order)
- Loading/error state

**Assessment:** Now minimal. All array manipulation removed - components handle this locally.

---

### 3. `useUserSettings` ❓ NEEDS REVIEW

**What it does:**

- Pulls user settings
- Saves/updates settings
- Loading/error state

**Assessment:** Need to verify it's not doing too much.

---

### 4. `useAuth` ✅ GOOD

**What it does:**

- Authentication state
- Sign in/out operations

**Assessment:** Minimal and focused.

---

### 5. `useClickOutside` ✅ GOOD

**What it does:**

- Utility for detecting clicks outside elements

**Assessment:** Simple utility hook, no excess logic.

---

### 6. `useCurrency` ✅ GOOD

**What it does:**

- Currency conversion utilities

**Assessment:** Simple utility hook, no excess logic.

---

## Principle: Not All Hooks Need Complex Logic

**Minimal CRUD Hooks (should be simple):**

- `useCardItemArray` - just CRUD operations
- `useCardItemOrder` - just pull and save
- `useUserSettings` - just pull and save/update

**Complex Logic Hooks (can have more):**

- `useAuth` - handles authentication flow
- `useClickOutside` - handles DOM events
- `useCurrency` - handles API calls and conversions

**Key Insight:**

- Data hooks should be minimal and focused
- Utility hooks can have more logic if needed
- Business logic should live in components, not data hooks

---

## Recommendations

1. **Review `useUserSettings`** - ensure it's not doing too much
2. **Keep data hooks minimal** - only CRUD operations
3. **Let components handle business logic** - array manipulation, validation, etc.
4. **Utility hooks can be more complex** - if they're truly utilities

---

## Summary

Most hooks are now properly minimal. The key is distinguishing between:

- **Data hooks** (should be simple CRUD)
- **Utility hooks** (can have more logic)

This keeps the codebase clean and maintainable.
