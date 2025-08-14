import React, { useState, useRef, useEffect } from "react";
import ExpensesVoiceInput from "./ExpensesVoiceInput";
import { PERIOD_OPTIONS } from "../../utils/periods";
import { useExpenses } from "../../hooks/useExpenses";
import { useUserSettings } from "../../hooks/useUserSettings";
import { formatCurrency } from "../../utils/formatters";

const AddExpense = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const areaRef = useRef(null);

  // Get user settings for currency
  const { data: settings } = useUserSettings(userId);
  const currency = settings?.currency || "THB";

  const [expenseName, setExpenseName] = useState("");
  const [expenseAmountRaw, setExpenseAmountRaw] = useState("");
  const [expenseAmountDisplay, setExpenseAmountDisplay] = useState("");
  const [expenseAmountFocused, setExpenseAmountFocused] = useState(false);
  const [expensePeriod, setExpensePeriod] = useState(PERIOD_OPTIONS[0].value);

  const { addExpense, isAdding } = useExpenses(userId);

  // Update display value when raw value or currency changes
  useEffect(() => {
    if (!expenseAmountFocused) {
      const formatted = expenseAmountRaw
        ? formatCurrency(parseFloat(expenseAmountRaw), currency)
        : "";
      setExpenseAmountDisplay(formatted);
    }
  }, [expenseAmountRaw, currency, expenseAmountFocused]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (areaRef.current && !areaRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAmountFocus = () => {
    setExpenseAmountFocused(true);
    setExpenseAmountDisplay(expenseAmountRaw || "");
  };

  const handleAmountBlur = () => {
    setExpenseAmountFocused(false);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setExpenseAmountRaw(value);
    setExpenseAmountDisplay(value);
  };

  const handleAddExpense = async (data = null) => {
    const itemData = data || {
      name: expenseName.trim(),
      amount: parseFloat(expenseAmountRaw),
      period: expensePeriod,
    };
    if (
      !itemData.name ||
      !itemData.amount ||
      isNaN(itemData.amount) ||
      itemData.amount <= 0
    )
      return;
    if (!itemData.period) itemData.period = "one-off";
    setExpenseName("");
    setExpenseAmountRaw("");
    setExpenseAmountDisplay("");
    setExpensePeriod(PERIOD_OPTIONS[0].value);
    setIsOpen(false);
    try {
      await addExpense(itemData);
    } catch (error) {
      console.error("Failed to save expense:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddExpense();
    }
  };

  const handleVoiceExpense = (expenseObj) => {
    if (expenseObj && expenseObj.name && expenseObj.amount) {
      const period = expenseObj.period || "one-off";
      handleAddExpense({
        name: expenseObj.name,
        amount: expenseObj.amount,
        period,
      });
    } else if (expenseObj && expenseObj.name) {
      setExpenseName(expenseObj.name);
      setIsOpen(true);
    }
  };

  return (
    <div ref={areaRef} className="bg-white/70 border rounded-2xl shadow-md p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="focus:outline-none"
            aria-label={isOpen ? "Close" : "Open"}
          >
            <span
              className={`inline-block transition-transform duration-200 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              ▶
            </span>
          </button>
          <span className="font-semibold text-lg">Add Expense</span>
        </div>
        <ExpensesVoiceInput onVoiceResult={handleVoiceExpense} />
      </div>
      {isOpen && (
        <div className="flex items-center gap-2 mb-2">
          <input
            type="text"
            placeholder="Expense name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 border rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Amount"
            value={expenseAmountDisplay}
            onChange={handleAmountChange}
            onFocus={handleAmountFocus}
            onBlur={handleAmountBlur}
            onKeyDown={handleKeyPress}
            className="w-32 border rounded-lg px-3 py-2 text-sm"
          />
          <select
            value={expensePeriod}
            onChange={(e) => setExpensePeriod(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm"
          >
            {PERIOD_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleAddExpense()}
            disabled={isAdding}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition disabled:opacity-50"
          >
            {isAdding ? "Adding..." : "Add"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddExpense;
