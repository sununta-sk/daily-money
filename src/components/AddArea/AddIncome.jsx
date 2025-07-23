import React, { useState, useRef, useEffect } from "react";
import IncomeVoiceInput from "./IncomeVoiceInput";
import SwitchToggle from "../SwitchToggle";
import { PERIOD_OPTIONS } from "../../utils/periods";
import { useIncomes } from "../../hooks/useIncomes";
import { useUserSettings } from "../../hooks/useUserSettings";
import { formatCurrency } from "../../utils/formatters";

const AddIncome = ({ userId, selectedCurrency, addIncomeToOrderFn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const areaRef = useRef(null);

  // Get user settings for currency
  const { data: settings } = useUserSettings(userId);
  const currency = settings?.currency || "THB";

  // Local state for form inputs
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmountRaw, setIncomeAmountRaw] = useState("");
  const [incomeAmountDisplay, setIncomeAmountDisplay] = useState("");
  const [incomeAmountFocused, setIncomeAmountFocused] = useState(false);
  const [incomePeriod, setIncomePeriod] = useState(PERIOD_OPTIONS[0].value);
  const [isExternalIncome, setIsExternalIncome] = useState(true);

  const { addIncome, isAdding } = useIncomes(userId);

  // Update display value when raw value or currency changes
  useEffect(() => {
    if (!incomeAmountFocused) {
      const formatted = incomeAmountRaw
        ? formatCurrency(parseFloat(incomeAmountRaw), currency)
        : "";
      setIncomeAmountDisplay(formatted);
    }
  }, [incomeAmountRaw, currency, incomeAmountFocused]);

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
    setIncomeAmountFocused(true);
    setIncomeAmountDisplay(incomeAmountRaw || "");
  };

  const handleAmountBlur = () => {
    setIncomeAmountFocused(false);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setIncomeAmountRaw(value);
    setIncomeAmountDisplay(value);
  };

  // Accepts either a full income object (from voice) or manual form data
  const handleAddIncome = async (data = null, addIncomeToOrderFn = null) => {
    const itemData = data || {
      name: incomeName.trim(),
      amount: parseFloat(incomeAmountRaw),
      period: incomePeriod,
      source: isExternalIncome ? "external" : "internal",
    };

    if (
      !itemData.name ||
      !itemData.amount ||
      isNaN(itemData.amount) ||
      itemData.amount <= 0
    )
      return;

    // 1. Generate local ID immediately
    const localId = crypto.randomUUID();

    // 2. Add to local incomesObjectOrder first (instant UI feedback)
    if (addIncomeToOrderFn) {
      addIncomeToOrderFn(localId);
    }

    // Reset form and close after local update
    if (!data) {
      setIncomeName("");
      setIncomeAmountRaw("");
      setIncomeAmountDisplay("");
      setIncomePeriod(PERIOD_OPTIONS[0].value);
      setIsExternalIncome(true);
      setIsOpen(false);
    }

    try {
      // 3. Then save to Firebase in background
      const firebaseResult = await addIncome(itemData);

      // 4. If Firebase returns different ID, we could remap here
      // For now, assume Firebase uses our generated ID or we handle sync elsewhere
      console.log("Income saved to Firebase:", firebaseResult);
    } catch (error) {
      console.error("Failed to save income:", error);
      // TODO: Handle failure - maybe revert local state or show error
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddIncome(null, addIncomeToOrderFn);
    }
  };

  // Microphone input should always be visible
  const handleVoiceIncome = (incomeObj) => {
    if (incomeObj && incomeObj.name && incomeObj.amount) {
      // Default period and source if missing
      const period = incomeObj.period || "one-off";
      const source = incomeObj.source || "external";
      handleAddIncome(
        {
          name: incomeObj.name,
          amount: incomeObj.amount,
          period,
          source,
        },
        addIncomeToOrderFn
      );
      setIsOpen(false);
      setIncomeName("");
      setIncomeAmountRaw("");
      setIncomeAmountDisplay("");
      setIncomePeriod(PERIOD_OPTIONS[0].value);
      setIsExternalIncome(true);
    } else if (incomeObj && incomeObj.name) {
      setIncomeName(incomeObj.name);
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
          <span className="font-semibold text-lg">Add Income</span>
        </div>
        <IncomeVoiceInput
          selectedCurrency={selectedCurrency}
          onVoiceResult={handleVoiceIncome}
        />
      </div>
      {isOpen && (
        <div className="flex items-center gap-2 mb-2">
          <input
            type="text"
            placeholder="Income name"
            value={incomeName}
            onChange={(e) => setIncomeName(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 border rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Amount"
            value={incomeAmountDisplay}
            onChange={handleAmountChange}
            onFocus={handleAmountFocus}
            onBlur={handleAmountBlur}
            onKeyDown={handleKeyPress}
            className="w-32 border rounded-lg px-3 py-2 text-sm"
          />
          <select
            value={incomePeriod}
            onChange={(e) => setIncomePeriod(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm"
          >
            {PERIOD_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <SwitchToggle
            checked={isExternalIncome}
            onChange={setIsExternalIncome}
            labelLeft="Internal"
            labelRight="External"
          />
          <button
            onClick={() => handleAddIncome(null, addIncomeToOrderFn)}
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

export default AddIncome;
