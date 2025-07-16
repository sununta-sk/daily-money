# Load Data Requirements Report

## What Data is Needed to Display the App

### 1. User Settings ✅ REQUIRED

**Purpose:** App configuration and user preferences
**Data needed:**

- `activeTab` - which tab is currently active (incomes/expenses/goals)
- `currency` - user's preferred currency
- `moneyInBank` - user's bank balance
- `spendLimit` - user's spending limit
- `sortOrder` - how to sort items (newest/oldest)

**Load method:** `getUserSettings(userId)`
**Hook:** `useUserSettings`

---

### 2. Card Item Array ✅ REQUIRED

**Purpose:** The actual card items to display
**Data needed:**

- All card items for the current tab (incomes/expenses/goals)
- Each item: `id`, `name`, `amount`, `period`, `isExternal`, etc.

**Load method:** `useCollection` (real-time) or `getIncomes/Expenses/Goals(userId)`
**Hook:** `useCardItemArray`

---

### 3. Card Order ✅ REQUIRED

**Purpose:** How to arrange and group the cards
**Data needed:**

- Order array showing which cards come first
- Group structure (if any cards are grouped)
- Indentation/grouping information

**Load method:** `getCardOrder(activeTab, userId)`
**Hook:** `useCardItemOrder`

---

## Display Logic

### What Happens When App Loads:

1. **Load user settings** → Get `activeTab` and other preferences
2. **Load card items** → Get all items for the current `activeTab`
3. **Load card order** → Get the order/grouping for the current `activeTab`
4. **Combine and display** → Merge card items with order to show the final layout

### The Original Problem:

The error `users/{userId}/incomes/data has 4 segments` suggests that somewhere in this loading process, an extra "data" segment is being added to the path.

**Most likely culprit:** One of these three data loading operations is using an incorrect path.

---

## Verification Checklist

### ✅ User Settings Loading

- [ ] `useUserSettings` calls `getUserSettings(userId)`
- [ ] `getUserSettings` uses `buildSettingsPath(userId)` from `dataStructure.js`
- [ ] Path is correct: `users/{userId}/settings/preferences`

### ✅ Card Item Array Loading

- [ ] `useCardItemArray` uses `useCollection` with correct path
- [ ] Path helpers: `getIncomesPath`, `getExpensesPath`, `getGoalsPath`
- [ ] Paths are correct: `users/{userId}/incomes`, `users/{userId}/expenses`, `users/{userId}/goals`

### ✅ Card Order Loading

- [ ] `useCardItemOrder` calls `getCardOrder(activeTab, userId)`
- [ ] `getCardOrder` uses `buildOrderPath(userId, activeTab)` from `dataStructure.js`
- [ ] Path is correct: `users/{userId}/{activeTab}/groupOrder`

---

## Conclusion

**Yes, you're correct - only these 3 data loads are needed:**

1. User Settings (for app config)
2. Card Item Array (for the actual data)
3. Card Order (for layout/grouping)

**The original Firebase error is likely coming from one of these three loading operations using an incorrect path with an extra "data" segment.**

**Next step:** Verify that all three loading operations use only the centralized path helpers from `dataStructure.js` and never append "data" or any extra segments.
