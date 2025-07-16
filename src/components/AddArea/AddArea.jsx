import React, { useState, useRef, useEffect } from "react";
import VoiceInput from "./VoiceInput";
import { capitalizeFirstLetter } from "../../utils/formatters";
import { getCurrencySymbol } from "../../utils/currency";
import SwitchToggle from "../SwitchToggle";
import { PERIOD_OPTIONS } from "../../utils/periods";

const AddArea = ({
  activeTab,
  selectedCurrency,
  onAddCardItem,
  onOpenChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const areaRef = useRef(null);

  // Local state for form inputs
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomePeriod, setIncomePeriod] = useState("monthly");
  const [costName, setCostName] = useState("");
  const [costAmount, setCostAmount] = useState("");
  const [costPeriod, setCostPeriod] = useState("monthly");
  const [goalName, setGoalName] = useState("");
  const [goalPrice, setGoalPrice] = useState("");
  const [dailyContribution, setDailyContribution] = useState("");

  const [isExternalIncome, setIsExternalIncome] = useState(true);

  const INCOME_PERIODS = PERIOD_OPTIONS;

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

  // Notify parent when open state changes
  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  const handleAddIncome = async (data = null) => {
    const itemData = data || {
      name: incomeName.trim(),
      amount: parseFloat(incomeAmount),
      period: incomePeriod,
    };

    if (
      !itemData.name ||
      !itemData.amount ||
      isNaN(itemData.amount) ||
      itemData.amount <= 0
    )
      return;

    const newIncome = {
      name: capitalizeFirstLetter(itemData.name),
      amount: itemData.amount,
      period: itemData.period,
      isExternal: isExternalIncome,
      type: "income", // Required for cardData structure
    };

    // Collapse AddArea immediately for better UX
    setIsOpen(false);

    // Reset form immediately
    if (!data) {
      setIncomeName("");
      setIncomeAmount("");
      setIncomePeriod("monthly");
    }

    // Just pass the card object back to the app
    try {
      await onAddCardItem(newIncome);
    } catch (error) {
      console.error("Failed to save card:", error);
    }
  };

  const handleAddCost = async (data = null) => {
    const itemData = data || {
      name: costName.trim(),
      amount: parseFloat(costAmount),
      period: costPeriod,
    };

    if (
      !itemData.name ||
      !itemData.amount ||
      isNaN(itemData.amount) ||
      itemData.amount <= 0
    )
      return;

    const newCost = {
      name: capitalizeFirstLetter(itemData.name),
      amount: itemData.amount,
      period: costPeriod,
      type: "expense",
    };

    // Collapse AddArea immediately for better UX
    setIsOpen(false);

    // Reset form immediately
    if (!data) {
      setCostName("");
      setCostAmount("");
      setCostPeriod("monthly");
    }

    // Just pass the card object back to the app
    try {
      await onAddCardItem(newCost);
    } catch (error) {
      console.error("Failed to save card:", error);
    }
  };

  const handleAddGoal = async (data = null) => {
    const itemData = data || {
      name: goalName.trim(),
      price: parseFloat(goalPrice),
      dailyContribution: parseFloat(dailyContribution),
    };

    if (
      !itemData.name ||
      !itemData.price ||
      isNaN(itemData.price) ||
      itemData.price <= 0 ||
      !itemData.dailyContribution ||
      isNaN(itemData.dailyContribution) ||
      itemData.dailyContribution <= 0
    )
      return;

    const newGoal = {
      name: capitalizeFirstLetter(itemData.name),
      price: itemData.price,
      dailyContribution: itemData.dailyContribution,
      type: "goal",
    };

    // Collapse AddArea immediately for better UX
    setIsOpen(false);

    // Reset form immediately
    if (!data) {
      setGoalName("");
      setGoalPrice("");
      setDailyContribution("");
    }

    // Just pass the card object back to the app
    try {
      await onAddCardItem(newGoal);
    } catch (error) {
      console.error("Failed to save goal:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (activeTab === "incomes") {
        handleAddIncome();
      } else if (activeTab === "expenses") {
        handleAddCost();
      } else if (activeTab === "goals") {
        handleAddGoal();
      }
    }
  };

  const getTabConfig = () => {
    const currencySymbol = getCurrencySymbol(selectedCurrency);

    switch (activeTab) {
      case "incomes":
        return {
          title: "Add Income",
          fields: [
            {
              type: "text",
              placeholder: "Income name",
              value: incomeName,
              onChange: (e) => setIncomeName(e.target.value),
              key: "name",
            },
            {
              type: "number",
              placeholder: `Amount (${currencySymbol})`,
              value: incomeAmount,
              onChange: (e) => setIncomeAmount(e.target.value),
              key: "amount",
            },
            {
              type: "select",
              value: incomePeriod,
              onChange: (e) => setIncomePeriod(e.target.value),
              options: INCOME_PERIODS,
              key: "period",
            },
          ],
          onSubmit: handleAddIncome,
        };
      case "expenses":
        return {
          title: "Add Expense",
          fields: [
            {
              type: "text",
              placeholder: "Expense name",
              value: costName,
              onChange: (e) => setCostName(e.target.value),
              key: "name",
            },
            {
              type: "number",
              placeholder: `Amount (${currencySymbol})`,
              value: costAmount,
              onChange: (e) => setCostAmount(e.target.value),
              key: "amount",
            },
            {
              type: "select",
              value: costPeriod,
              onChange: (e) => setCostPeriod(e.target.value),
              options: INCOME_PERIODS.filter(
                (p) => p.value !== "money-in-bank" && p.value !== "spend-limit"
              ),
              key: "period",
            },
          ],
          onSubmit: handleAddCost,
        };
      case "goals":
        return {
          title: "Add Goal",
          fields: [
            {
              type: "text",
              placeholder: "Goal name",
              value: goalName,
              onChange: (e) => setGoalName(e.target.value),
              key: "name",
            },
            {
              type: "number",
              placeholder: `Goal price (${currencySymbol})`,
              value: goalPrice,
              onChange: (e) => setGoalPrice(e.target.value),
              key: "price",
            },
            {
              type: "number",
              placeholder: `Daily contribution (${currencySymbol})`,
              value: dailyContribution,
              onChange: (e) => setDailyContribution(e.target.value),
              key: "dailyContribution",
            },
          ],
          onSubmit: handleAddGoal,
        };
      default:
        return null;
    }
  };

  const config = getTabConfig();
  if (!config) return null;

  return (
    <div
      ref={areaRef}
      className="p-3 border rounded-2xl bg-white/70 backdrop-blur-md shadow-md"
    >
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold select-none flex items-center gap-2">
          {config.title}
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </h2>
        <div className="flex items-center gap-2">
          {activeTab === "incomes" && (
            <span onClick={(e) => e.stopPropagation()}>
              <SwitchToggle
                value={isExternalIncome}
                onChange={setIsExternalIncome}
                trueLabel="External"
                falseLabel="Internal"
                colorA="from-green-400"
                colorB="to-blue-400"
              />
            </span>
          )}
          <span onClick={(e) => e.stopPropagation()}>
            <VoiceInput
              activeTab={activeTab}
              onAddIncome={handleAddIncome}
              onAddCost={handleAddCost}
              onAddGoal={handleAddGoal}
              selectedCurrency={selectedCurrency}
            />
          </span>
        </div>
      </div>
      {isOpen && (
        <div
          className="mt-4 cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-3">
            {config.fields.map((field, index) => (
              <div key={index} className="relative">
                {field.type === "select" ? (
                  <select
                    value={field.value}
                    onChange={field.onChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-base w-full bg-white/80 shadow"
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                    onKeyPress={handleKeyPress}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-base w-full bg-white/80 shadow"
                  />
                )}
              </div>
            ))}
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  config.onSubmit();
                }}
                className="px-3 py-2 text-white rounded-lg text-base w-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-md hover:from-blue-500 hover:to-indigo-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddArea;
