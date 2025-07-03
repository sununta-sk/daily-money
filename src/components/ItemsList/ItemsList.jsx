import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import EditableCard from "./EditableCard";
import { capitalizeFirstLetter } from "../../utils/formatters";
import { formatCurrency } from "../../utils/currency";
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
  isAddAreaOpen,
}) => {
  const [editingItem, setEditingItem] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editPeriod, setEditPeriod] = useState("monthly");
  const [editPrice, setEditPrice] = useState("");
  const [editContribution, setEditContribution] = useState("");
  const [editIsExternal, setEditIsExternal] = useState(true);

  // Visual indicator states and refs
  const [hasMoneyInBank, setHasMoneyInBank] = useState(false);
  const [hasSpendLimit, setHasSpendLimit] = useState(false);

  // React Spring animation for bouncing dot
  const bounceAnimation = useSpring({
    to: async (next) => {
      while (true) {
        await next({ y: 0, config: { tension: 200, friction: 25, mass: 0.8 } });
        await next({
          y: -2,
          config: { tension: 300, friction: 12, mass: 0.8 },
        });
        await next({
          y: 0.5,
          config: { tension: 250, friction: 20, mass: 0.8 },
        });
        await next({ y: 0, config: { tension: 180, friction: 22, mass: 0.8 } });
        await next({
          y: -1,
          config: { tension: 220, friction: 18, mass: 0.8 },
        });
        await next({ y: 0, config: { tension: 160, friction: 25, mass: 0.8 } });
      }
    },
    from: { y: 0 },
  });

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

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setEditName(item.name || "");
    setEditAmount(item.amount?.toString() || item.price?.toString() || "");
    setEditPeriod(item.period || "monthly");
    setEditPrice(item.price?.toString() || "");
    setEditContribution(item.dailyContribution?.toString() || "");
    setEditIsExternal(item.isExternal !== false); // Default to true if undefined
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

  const renderEditForm = () => {
    if (activeTab === "goals") {
      return (
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <input
            placeholder="Goal name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-base"
          />
          <input
            type="number"
            step="any"
            placeholder="Price"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-base"
          />
          <input
            type="number"
            step="any"
            placeholder="Daily contribution"
            value={editContribution}
            onChange={(e) => setEditContribution(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-base"
          />
        </div>
      );
    }

    return (
      <div className="flex flex-col">
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <input
            placeholder={
              activeTab === "income" ? "Income name" : "Expense name"
            }
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-base"
          />
          <input
            type="number"
            step="any"
            placeholder="Amount"
            value={editAmount}
            onChange={(e) => setEditAmount(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-base"
          />
          <select
            value={editPeriod}
            onChange={(e) => setEditPeriod(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-base"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="one-off">One-off</option>
          </select>
        </div>
        {activeTab === "income" && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Source:</span>
            <button
              onClick={() => setEditIsExternal(!editIsExternal)}
              className={`px-3 py-1 rounded text-sm border transition-colors ${
                editIsExternal
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-orange-500 text-white border-orange-500"
              }`}
            >
              {editIsExternal ? "External" : "Internal"}
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderDisplayContent = (item) => {
    if (activeTab === "goals") {
      const price = item.price || 0;
      const dailyContribution = item.dailyContribution || 0;
      const days =
        dailyContribution > 0 ? Math.ceil(price / dailyContribution) : Infinity;
      const targetDate = new Date();

      if (days !== Infinity) {
        targetDate.setDate(targetDate.getDate() + days);
      }

      return (
        <div className="flex flex-col">
          <span className="font-medium text-base mb-2 text-gray-700">
            {capitalizeFirstLetter(item.name || "Unnamed Goal")}
          </span>
          <div className="flex justify-between items-center">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-gray-600 text-sm">
                Price: {formatCurrency(price, selectedCurrency)}
              </span>
              <span className="text-gray-600 text-sm">
                Daily: {formatCurrency(dailyContribution, selectedCurrency)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-green-600 text-sm">
                Target:{" "}
                {days === Infinity ? "Never" : targetDate.toLocaleDateString()}
              </span>
              <span className="text-gray-500 text-sm">
                ({days === Infinity ? "∞" : days} days)
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "report") {
      return (
        <div className="flex flex-col">
          <span className="font-medium text-base mb-2 text-gray-700">
            {item.name}
          </span>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">{item.subtitle}</span>
            <span className="font-medium text-base">
              {item.isText
                ? item.amount
                : formatCurrency(item.amount, selectedCurrency)}
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="flex justify-between items-center">
        <span className="font-medium text-base text-gray-700">
          {capitalizeFirstLetter(item.name)}
        </span>
        <span className="font-medium text-base">
          {formatCurrency(item.amount, selectedCurrency)}
        </span>
      </div>
    );
  };

  // Generate display data based on active tab
  const getDisplayData = () => {
    switch (activeTab) {
      case "income":
        return {
          title: "Your Income",
          items: getSortedItems(incomes, sortOrder),
          showSort: true,
        };
      case "expenses":
        return {
          title: "Your Expenses",
          items: getSortedItems(costs, sortOrder),
          showSort: true,
        };
      case "goals":
        return {
          title: "Your Goals",
          items: getSortedItems(goals, sortOrder),
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
          },
          {
            id: "total-money",
            name: "Total Money Available",
            amount: totalMoney,
            subtitle: "Bank + all income sources",
          },
          {
            id: "recurring-income",
            name: "Monthly Recurring Income",
            amount: recurringIncome,
            subtitle: "Regular income streams only",
          },
          {
            id: "total-expenses",
            name: "Total Monthly Expenses",
            amount: totalExpenses,
            subtitle: "Including spend limits",
          },
          {
            id: "daily-free-money",
            name: "Daily Free Money",
            amount: dailyFreeMoney,
            subtitle: "Available daily after expenses",
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
    <div className="p-3 border rounded-2xl bg-white/70 backdrop-blur-md shadow-md mb-2 flex-1">
      {/* Header Section */}
      <div className="flex flex-col mb-4">
        {/* Title and Special Unit Line */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700 drop-shadow-sm">{title}</h2>
          {activeTab === "income" || activeTab === "expenses" ? (
            <div className="flex items-center gap-1 relative">
              {((activeTab === "income" || activeTab === "expenses") && !hasMoneyInBank) && (
                <animated.div
                  className="w-2 h-2 bg-red-500 rounded-full z-10 absolute"
                  style={{
                    left: -12,
                    top: '50%',
                    transform: bounceAnimation.y.to(
                      (y) => `translateY(calc(-50% + ${y}px))`
                    ),
                  }}
                />
              )}
              <input
                type="number"
                placeholder="Available funds"
                value={moneyInBank}
                onChange={(e) => setMoneyInBank(e.target.value)}
                title="Estimated amount you could access if needed"
                className="border border-gray-300 rounded-lg px-2 py-1 text-xs w-32 bg-white/80 shadow"
              />
            </div>
          ) : activeTab === "goals" ? (
            <div className="flex items-center gap-1 relative">
              {(activeTab === "goals" && !hasSpendLimit) && (
                <animated.div
                  className="w-2 h-2 bg-red-500 rounded-full z-10 absolute"
                  style={{
                    left: -12,
                    top: '50%',
                    transform: bounceAnimation.y.to(
                      (y) => `translateY(calc(-50% + ${y}px))`
                    ),
                  }}
                />
              )}
              <input
                type="number"
                placeholder="Monthly limit"
                value={spendLimit}
                onChange={(e) => setSpendLimit(e.target.value)}
                title="Maximum amount you want to spend per month"
                className="border border-gray-300 rounded-lg px-2 py-1 text-xs w-32 bg-white/80 shadow"
              />
            </div>
          ) : null}
        </div>

        {/* Sort Line */}
        {showSort && (
          <div className="flex justify-end items-center mt-2">
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
          </div>
        )}
      </div>

      <div className="grid gap-2">
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
          items.map((item) => (
            <div className="rounded-2xl bg-white/80 shadow-md p-3 flex flex-col" key={item.id}>
              <EditableCard
                isEditing={activeTab !== "report" && editingItem === item.id}
                onEdit={
                  activeTab !== "report" ? () => handleEdit(item) : undefined
                }
                onSave={handleSave}
                onCancel={handleCancel}
                onDelete={
                  activeTab !== "report" ? () => handleDelete(item.id) : undefined
                }
                timestamp={item.timestamp}
                period={
                  activeTab === "income" || activeTab === "expenses"
                    ? item.period
                    : undefined
                }
                isExternal={activeTab === "income" ? item.isExternal : undefined}
              >
                {activeTab !== "report" && editingItem === item.id
                  ? renderEditForm()
                  : renderDisplayContent(item)}
              </EditableCard>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemsList;
