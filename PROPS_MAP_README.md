# Props Map - Complete Prop Drilling Paths

## Navbar

| Prop                     | Path         |
| ------------------------ | ------------ |
| `activeTab`              | App → Navbar |
| `setActiveTab`           | App → Navbar |
| `currency`               | App → Navbar |
| `setCurrency`            | App → Navbar |
| `user`                   | App → Navbar |
| `setClickOutsideMessage` | App → Navbar |

## AddArea

| Prop                     | Path          |
| ------------------------ | ------------- |
| `activeTab`              | App → AddArea |
| `setAddedCard`           | App → AddArea |
| `setClickOutsideMessage` | App → AddArea |

## ItemsList

| Prop                     | Path            |
| ------------------------ | --------------- |
| `activeTab`              | App → ItemsList |
| `tabData`                | App → ItemsList |
| `spendLimit`             | App → ItemsList |
| `setSpendLimit`          | App → ItemsList |
| `moneyInBank`            | App → ItemsList |
| `setMoneyInBank`         | App → ItemsList |
| `setClickOutsideMessage` | App → ItemsList |
| `setCardItemOrder`       | App → ItemsList |
| `setEditedCardId`        | App → ItemsList |
| `setDeletedCard`         | App → ItemsList |
| `setUpdatedCard`         | App → ItemsList |
| `setEditedGoalCardId`    | App → ItemsList |
| `setDeletedGoalCard`     | App → ItemsList |
| `setUpdatedGoalCard`     | App → ItemsList |

## EditableCard

| Prop              | Path                                         |
| ----------------- | -------------------------------------------- |
| `setEditedCardId` | App → ItemsList → GroupObject → EditableCard |
| `setDeletedCard`  | App → ItemsList → GroupObject → EditableCard |
| `setUpdatedCard`  | App → ItemsList → GroupObject → EditableCard |

## GoalCard

| Prop                  | Path                                     |
| --------------------- | ---------------------------------------- |
| `setEditedGoalCardId` | App → ItemsList → GroupObject → GoalCard |
| `setDeletedGoalCard`  | App → ItemsList → GroupObject → GoalCard |
| `setUpdatedGoalCard`  | App → ItemsList → GroupObject → GoalCard |

## GroupObject

| Prop                      | Path                          |
| ------------------------- | ----------------------------- |
| `groupData`               | App → ItemsList → GroupObject |
| `setCardItemOrder`        | App → ItemsList → GroupObject |
| `setTemporaryGroupObject` | App → ItemsList → GroupObject |
| `setEditedCardId`         | App → ItemsList → GroupObject |
| `setDeletedCard`          | App → ItemsList → GroupObject |
| `setUpdatedCard`          | App → ItemsList → GroupObject |
| `setEditedGoalCardId`     | App → ItemsList → GroupObject |
| `setDeletedGoalCard`      | App → ItemsList → GroupObject |
| `setUpdatedGoalCard`      | App → ItemsList → GroupObject |

## GroupHeader

| Prop               | Path                                        |
| ------------------ | ------------------------------------------- |
| `setCardItemOrder` | App → ItemsList → GroupObject → GroupHeader |

## MiniReport

| Prop            | Path             |
| --------------- | ---------------- |
| `cardItemArray` | App → MiniReport |
| `activeTab`     | App → MiniReport |
| `currency`      | App → MiniReport |
