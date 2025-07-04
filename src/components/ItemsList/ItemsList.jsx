import React, { useState, useEffect, useRef } from "react";
import EditableCard from "./EditableCard";
import { formatDate } from "../../utils/formatters";
import { getCurrencySymbol, CURRENCIES } from "../../utils/currency";
import {
  calculateTotalMoney,
  calculateRecurringIncome,
  calculateMonthlyExpenses,
  calculateDailyFreeMoney,
  calculateHowLongYouCanLive,
  getSortedItems,
} from "../../utils/calculations";

const ItemsList = ({
  activeTab,
  incomes,
  costs,
  goals,
  moneyInBank,
  setMoneyInBank,
  spendLimit,
  setSpendLimit,
  sortOrder,
  setSortOrder,
  selectedCurrency,
  onUpdateItem,
  onDeleteItem,
  onSaveMoneyInBank,
  onSaveSpendLimit,
}) => {
  const [editingItem, setEditingItem] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editPeriod, setEditPeriod] = useState("monthly");
  const [editPrice, setEditPrice] = useState("");
  const [editContribution, setEditContribution] = useState("");
  const [editIsExternal, setEditIsExternal] = useState(true);
  const [localMoneyInBank, setLocalMoneyInBank] = useState(moneyInBank);
  const [localSpendLimit, setLocalSpendLimit] = useState(spendLimit);
  const [focusTarget, setFocusTarget] = useState("name"); // Track which element to focus
  const [isEditingMoneyInBank, setIsEditingMoneyInBank] = useState(false);
  const [isEditingSpendLimit, setIsEditingSpendLimit] = useState(false);

  // Sync local state with props
  useEffect(() => {
    setLocalMoneyInBank(moneyInBank);
  }, [moneyInBank]);

  useEffect(() => {
    setLocalSpendLimit(spendLimit);
  }, [spendLimit]);

  // Helper function to format currency for display
  const formatCurrencyForDisplay = (value, currency) => {
    if (!value || value === "") return "";
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "";

    const symbol = getCurrencySymbol(currency);
    const currencyInfo = CURRENCIES[currency];
    const decimals = currencyInfo?.decimals ?? 2;

    return `${symbol}${numValue.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}`;
  };

  // Helper function to parse currency input
  const parseCurrencyInput = (value) => {
    if (!value) return "";
    // Remove currency symbol and commas, keep only numbers and decimal point
    return value.replace(/[^\d.]/g, "");
  };

  // Visual indicator states and refs
  const [hasMoneyInBank, setHasMoneyInBank] = useState(false);
  const [hasSpendLimit, setHasSpendLimit] = useState(false);

  // Refs for focus management
  const nameInputRef = useRef(null);
  const amountInputRef = useRef(null);
  const periodSelectRef = useRef(null);
  const priceInputRef = useRef(null);
  const contributionInputRef = useRef(null);

  // Update validation states when values change
  useEffect(() => {
    setHasMoneyInBank(
      moneyInBank &&
        !isNaN(parseFloat(moneyInBank)) &&
        parseFloat(moneyInBank) > 0
    );
    setHasSpendLimit(
      spendLimit && !isNaN(parseFloat(spendLimit)) && parseFloat(spendLimit) > 0
    );
  }, [moneyInBank, spendLimit]);

  // Focus effect when entering edit mode
  useEffect(() => {
    if (editingItem && focusTarget) {
      setTimeout(() => {
        switch (focusTarget) {
          case "name":
            nameInputRef.current?.focus();
            break;
          case "amount":
            amountInputRef.current?.focus();
            break;
          case "period":
            periodSelectRef.current?.focus();
            break;
          case "price":
            priceInputRef.current?.focus();
            break;
          case "contribution":
            contributionInputRef.current?.focus();
            break;
          default:
            nameInputRef.current?.focus();
        }
      }, 100);
    }
  }, [editingItem, focusTarget]);

  const handleEdit = (item, focusElement = "name") => {
    // If already editing this item, save and close
    if (editingItem === item.id) {
      handleSave();
      return;
    }

    // Otherwise, start editing
    setEditingItem(item.id);
    setEditName(item.name || "");
    setEditAmount(item.amount?.toString() || item.price?.toString() || "");
    setEditPeriod(item.period || "monthly");
    setEditPrice(item.price?.toString() || "");
    setEditContribution(item.dailyContribution?.toString() || "");
    setEditIsExternal(item.isExternal !== false); // Default to true if undefined
    setFocusTarget(focusElement);
  };

  const handleSave = async () => {
    if (!editingItem || !onUpdateItem) return;

    const updatedData = {
      name: editName,
      amount: editAmount,
      period: editPeriod,
      price: editPrice,
      dailyContribution: editContribution,
      ...(activeTab === "income" && { isExternal: editIsExternal }),
    };

    await onUpdateItem(editingItem, updatedData);

    setEditingItem(null);
    setEditName("");
    setEditAmount("");
    setEditPeriod("monthly");
    setEditPrice("");
    setEditContribution("");
    setEditIsExternal(true);
  };

  const handleCancel = () => {
    setEditingItem(null);
    setEditName("");
    setEditAmount("");
    setEditPeriod("monthly");
    setEditPrice("");
    setEditContribution("");
    setEditIsExternal(true);
  };

  const handleDelete = async (id) => {
    if (onDeleteItem) {
      await onDeleteItem(id);
    }
  };

  // Generate display data based on active tab
  const getDisplayData = () => {
    switch (activeTab) {
      case "income":
        return {
          title: "Your Income",
          items: getSortedItems(incomes, sortOrder).map((item) => ({
            ...item,
            formattedAmount: formatCurrencyForDisplay(
              item.amount,
              selectedCurrency
            ),
            formattedTimestamp: item.timestamp
              ? formatDate(item.timestamp)
              : null,
            periodOptions: [
              { value: "daily", label: "Daily" },
              { value: "weekly", label: "Weekly" },
              { value: "monthly", label: "Monthly" },
              { value: "yearly", label: "Yearly" },
              { value: "one-off", label: "One-off" },
            ],
          })),
          showSort: true,
        };
      case "expenses":
        return {
          title: "Your Expenses",
          items: getSortedItems(costs, sortOrder).map((item) => ({
            ...item,
            formattedAmount: formatCurrencyForDisplay(
              item.amount,
              selectedCurrency
            ),
            formattedTimestamp: item.timestamp
              ? formatDate(item.timestamp)
              : null,
            periodOptions: [
              { value: "daily", label: "Daily" },
              { value: "weekly", label: "Weekly" },
              { value: "monthly", label: "Monthly" },
              { value: "yearly", label: "Yearly" },
              { value: "one-off", label: "One-off" },
            ],
          })),
          showSort: true,
        };
      case "goals":
        return {
          title: "Your Goals",
          items: getSortedItems(goals, sortOrder).map((item) => {
            const price = item.price || 0;
            const dailyContribution = item.dailyContribution || 0;
            const days =
              dailyContribution > 0
                ? Math.ceil(price / dailyContribution)
                : Infinity;
            const targetDate =
              dailyContribution > 0
                ? new Date(
                    Date.now() + days * 24 * 60 * 60 * 1000
                  ).toLocaleDateString()
                : "Never";

            return {
              ...item,
              formattedPrice: formatCurrencyForDisplay(price, selectedCurrency),
              formattedContribution: formatCurrencyForDisplay(
                dailyContribution,
                selectedCurrency
              ),
              targetDate,
              days: days === Infinity ? "∞" : days.toString(),
              periodOptions: [
                { value: "daily", label: "Daily" },
                { value: "weekly", label: "Weekly" },
                { value: "monthly", label: "Monthly" },
                { value: "yearly", label: "Yearly" },
                { value: "one-off", label: "One-off" },
              ],
            };
          }),
          showSort: true,
        };
      case "report": {
        const totalMoney = calculateTotalMoney(incomes, costs, moneyInBank);
        const recurringIncome = calculateRecurringIncome(incomes);
        const totalExpenses = calculateMonthlyExpenses(costs);
        const dailyFreeMoney = calculateDailyFreeMoney(incomes, costs);
        const survivalTime = calculateHowLongYouCanLive(
          incomes,
          costs,
          moneyInBank
        );

        const reportItems = [
          {
            id: "money-in-bank",
            name: "Money in Bank",
            amount: parseFloat(moneyInBank) || 0,
            subtitle: "Current bank balance",
            formattedAmount: formatCurrencyForDisplay(
              parseFloat(moneyInBank) || 0,
              selectedCurrency
            ),
          },
          {
            id: "total-money",
            name: "Total Money Available",
            amount: totalMoney,
            subtitle: "Bank + all income sources",
            formattedAmount: formatCurrencyForDisplay(
              totalMoney,
              selectedCurrency
            ),
          },
          {
            id: "recurring-income",
            name: "Monthly Recurring Income",
            amount: recurringIncome,
            subtitle: "Regular income streams only",
            formattedAmount: formatCurrencyForDisplay(
              recurringIncome,
              selectedCurrency
            ),
          },
          {
            id: "total-expenses",
            name: "Total Monthly Expenses",
            amount: totalExpenses,
            subtitle: "Including spend limits",
            formattedAmount: formatCurrencyForDisplay(
              totalExpenses,
              selectedCurrency
            ),
          },
          {
            id: "daily-free-money",
            name: "Daily Free Money",
            amount: dailyFreeMoney,
            subtitle: "Available daily after expenses",
            formattedAmount: formatCurrencyForDisplay(
              dailyFreeMoney,
              selectedCurrency
            ),
          },
          {
            id: "survival-time",
            name: "How Long You Can Live",
            amount:
              survivalTime === Infinity
                ? "Forever"
                : `${Math.round(survivalTime)} days`,
            subtitle: "Based on current income and expenses",
            isText: true,
            formattedAmount:
              survivalTime === Infinity
                ? "Forever"
                : `${Math.round(survivalTime)} days`,
          },
        ];

        return {
          title: "Financial Report",
          items: reportItems,
          showSort: false,
        };
      }
      default:
        return {
          title: "Items",
          items: [],
          showSort: false,
        };
    }
  };

  const { title, items, showSort } = getDisplayData();

  return (
    <div className="p-3 border rounded-2xl bg-white/70 backdrop-blur-md shadow-md flex-1 flex flex-col min-h-0 w-full">
      {/* Header Section - Fixed */}
      <div className="flex flex-col mb-4 flex-shrink-0">
        {/* Title Line */}
        <div className="flex justify-start mb-2">
          <h2 className="text-xl font-semibold text-gray-700 drop-shadow-sm m-0">
            {title}
          </h2>
        </div>

        {/* Special Input and Sort Line */}
        <div className="flex justify-between items-center">
          {/* Special Input - Left Side */}
          {activeTab === "income" || activeTab === "expenses" ? (
            <div className="flex items-center gap-1 relative">
              <input
                type="text"
                placeholder="Available funds"
                value={
                  isEditingMoneyInBank
                    ? localMoneyInBank
                    : formatCurrencyForDisplay(
                        localMoneyInBank,
                        selectedCurrency
                      )
                }
                onChange={(e) =>
                  setLocalMoneyInBank(parseCurrencyInput(e.target.value))
                }
                onFocus={() => setIsEditingMoneyInBank(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsEditingMoneyInBank(false);
                    setMoneyInBank(localMoneyInBank);
                    onSaveMoneyInBank(localMoneyInBank);
                  }
                }}
                onBlur={() => {
                  setIsEditingMoneyInBank(false);
                  setMoneyInBank(localMoneyInBank);
                  onSaveMoneyInBank(localMoneyInBank);
                }}
                title="Estimated amount you could access if needed"
                className={`border rounded-lg px-2 py-1 text-xs w-32 bg-white/80 shadow ${
                  (activeTab === "income" || activeTab === "expenses") &&
                  !hasMoneyInBank
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
            </div>
          ) : activeTab === "goals" ? (
            <div className="flex items-center gap-1 relative">
              <input
                type="text"
                placeholder="Monthly limit"
                value={
                  isEditingSpendLimit
                    ? localSpendLimit
                    : formatCurrencyForDisplay(
                        localSpendLimit,
                        selectedCurrency
                      )
                }
                onChange={(e) =>
                  setLocalSpendLimit(parseCurrencyInput(e.target.value))
                }
                onFocus={() => setIsEditingSpendLimit(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsEditingSpendLimit(false);
                    setSpendLimit(localSpendLimit);
                    onSaveSpendLimit(localSpendLimit);
                  }
                }}
                onBlur={() => {
                  setIsEditingSpendLimit(false);
                  setSpendLimit(localSpendLimit);
                  onSaveSpendLimit(localSpendLimit);
                }}
                title="Maximum amount you want to spend per month"
                className={`border rounded-lg px-2 py-1 text-xs w-32 bg-white/80 shadow ${
                  activeTab === "goals" && !hasSpendLimit
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
            </div>
          ) : (
            <div></div>
          )}

          {/* Sort - Right Side */}
          {showSort && (
            <div className="flex items-center gap-1">
              <label className="text-xs font-medium text-gray-600">Sort:</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-300 rounded-lg px-1 py-1 text-xs bg-white/80 shadow"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Items Container - Scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {items.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            {activeTab === "goals"
              ? "No goals yet. Add your first goal above!"
              : activeTab === "income"
              ? "No income sources yet. Add your first income above!"
              : activeTab === "expenses"
              ? "No expenses yet. Add your first expense above!"
              : "No items to display"}
          </div>
        ) : (
          <div className="grid gap-1 w-full">
            {items.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg bg-white/80 shadow-sm w-full"
              >
                <EditableCard
                  item={item}
                  activeTab={activeTab}
                  selectedCurrency={selectedCurrency}
                  isEditing={activeTab !== "report" && editingItem === item.id}
                  onEdit={
                    activeTab !== "report"
                      ? () => handleEdit(item, "name")
                      : undefined
                  }
                  onCancel={handleCancel}
                  onDelete={() => handleDelete(item.id)}
                  // Edit state props
                  editName={editName}
                  setEditName={setEditName}
                  editAmount={editAmount}
                  setEditAmount={setEditAmount}
                  editPeriod={editPeriod}
                  setEditPeriod={setEditPeriod}
                  editPrice={editPrice}
                  setEditPrice={setEditPrice}
                  editContribution={editContribution}
                  setEditContribution={setEditContribution}
                  editIsExternal={editIsExternal}
                  setEditIsExternal={setEditIsExternal}
                  // Refs
                  nameInputRef={nameInputRef}
                  amountInputRef={amountInputRef}
                  periodSelectRef={periodSelectRef}
                  priceInputRef={priceInputRef}
                  contributionInputRef={contributionInputRef}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsList;
