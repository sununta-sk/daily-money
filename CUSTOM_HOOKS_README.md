# Custom Hooks - State Watchers

## Props to Components Mapping

| Prop                     | Components                                     |
| ------------------------ | ---------------------------------------------- |
| `activeTab`              | Navbar, AddArea, ItemsList                     |
| `setActiveTab`           | Navbar                                         |
| `currency`               | Navbar                                         |
| `setCurrency`            | Navbar                                         |
| `spendLimit`             | Navbar                                         |
| `setSpendLimit`          | Navbar                                         |
| `moneyInBank`            | Navbar                                         |
| `setMoneyInBank`         | Navbar                                         |
| `tabData`                | ItemsList                                      |
| `clickOutsideMessage`    | ItemsList                                      |
| `setClickOutsideMessage` | Navbar, AddArea, ItemsList                     |
| `setAddedCard`           | AddArea                                        |
| `setEditedCard`          | ItemsList, EditableCard, GoalCard, GroupObject |
| `setDeletedCard`         | ItemsList, EditableCard, GoalCard, GroupObject |
| `setCardItemOrder`       | ItemsList, GroupObject, GroupHeader            |
| `user`                   | Navbar                                         |
| `setUser`                | Navbar                                         |
| `auth`                   | Navbar                                         |
| `setAuth`                | Navbar                                         |

## Hook Details

### useUserSetters

**Watches:** `setActiveTab`, `setCurrency`, `setSpendLimit`, `setMoneyInBank`
**When called:** Syncs to Firebase user settings
**Database functions:** `saveUserSettings()`, `getUserSettings()`
**Purpose:** Keep user preferences in sync

### useCardItemArray

**Watches:** `setAddedCard`, `setEditedCard`, `setDeletedCard`
**When called:** Syncs to Firebase card collections
**Database functions:** `saveIncomeItem()`, `saveExpenseItem()`, `saveGoalItem()`, `updateIncomeItem()`, `updateExpenseItem()`, `updateGoalItem()`, `deleteIncomeItem()`, `deleteExpenseItem()`, `deleteGoalItem()`
**Purpose:** Keep card items in sync

### useCardOrder

**Watches:** `setCardItemOrder`
**When called:** Syncs to Firebase card order
**Database functions:** `getCardOrderArray()`, `saveCardOrderArray()`
**Purpose:** Keep card order/grouping in sync

### useAuthSetters

**Watches:** `setUser`, `setAuth`
**When called:** Syncs to Firebase auth state
**Database functions:** `signInWithGoogle()`
**Purpose:** Handle authentication
