import React, { useState, useRef, useEffect } from "react";
import GoalsVoiceInput from "./GoalsVoiceInput";
import { useGoals } from "../../hooks/useGoals";
import { useUserSettings } from "../../hooks/useUserSettings";
import { formatCurrency } from "../../utils/formatters";

const AddGoal = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const areaRef = useRef(null);

  // Get user settings for currency
  const { data: settings } = useUserSettings(userId);
  const currency = settings?.currency || "THB";

  const [goalName, setGoalName] = useState("");
  const [goalPriceRaw, setGoalPriceRaw] = useState("");
  const [goalPriceDisplay, setGoalPriceDisplay] = useState("");
  const [goalPriceFocused, setGoalPriceFocused] = useState(false);
  const [dailyContributionRaw, setDailyContributionRaw] = useState("");
  const [dailyContributionDisplay, setDailyContributionDisplay] = useState("");
  const [dailyContributionFocused, setDailyContributionFocused] =
    useState(false);

  const { addGoal, isAdding } = useGoals(userId);

  // Update display values when raw values or currency changes
  useEffect(() => {
    if (!goalPriceFocused) {
      const formatted = goalPriceRaw
        ? formatCurrency(parseFloat(goalPriceRaw), currency)
        : "";
      setGoalPriceDisplay(formatted);
    }
  }, [goalPriceRaw, currency, goalPriceFocused]);

  useEffect(() => {
    if (!dailyContributionFocused) {
      const formatted = dailyContributionRaw
        ? formatCurrency(parseFloat(dailyContributionRaw), currency)
        : "";
      setDailyContributionDisplay(formatted);
    }
  }, [dailyContributionRaw, currency, dailyContributionFocused]);

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

  const handlePriceFocus = () => {
    setGoalPriceFocused(true);
    setGoalPriceDisplay(goalPriceRaw || "");
  };

  const handlePriceBlur = () => {
    setGoalPriceFocused(false);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setGoalPriceRaw(value);
    setGoalPriceDisplay(value);
  };

  const handleContributionFocus = () => {
    setDailyContributionFocused(true);
    setDailyContributionDisplay(dailyContributionRaw || "");
  };

  const handleContributionBlur = () => {
    setDailyContributionFocused(false);
  };

  const handleContributionChange = (e) => {
    const value = e.target.value;
    setDailyContributionRaw(value);
    setDailyContributionDisplay(value);
  };

  const handleAddGoal = async (data = null) => {
    const itemData = data || {
      name: goalName.trim(),
      price: parseFloat(goalPriceRaw),
      dailyContribution: parseFloat(dailyContributionRaw),
    };
    if (
      !itemData.name ||
      !itemData.price ||
      isNaN(itemData.price) ||
      itemData.price <= 0
    )
      return;
    setGoalName("");
    setGoalPriceRaw("");
    setGoalPriceDisplay("");
    setDailyContributionRaw("");
    setDailyContributionDisplay("");
    setIsOpen(false);
    try {
      await addGoal(itemData);
    } catch (error) {
      console.error("Failed to save goal:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddGoal();
    }
  };

  const handleVoiceGoal = (goalObj) => {
    if (goalObj && goalObj.name && goalObj.price) {
      handleAddGoal({
        name: goalObj.name,
        price: goalObj.price,
        dailyContribution: goalObj.dailyContribution || "",
      });
    } else if (goalObj && goalObj.name) {
      setGoalName(goalObj.name);
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
          <span className="font-semibold text-lg">Add Goal</span>
        </div>
        <GoalsVoiceInput onVoiceResult={handleVoiceGoal} />
      </div>
      {isOpen && (
        <div className="flex items-center gap-2 mb-2">
          <input
            type="text"
            placeholder="Goal name"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 border rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Price"
            value={goalPriceDisplay}
            onChange={handlePriceChange}
            onFocus={handlePriceFocus}
            onBlur={handlePriceBlur}
            onKeyDown={handleKeyPress}
            className="w-32 border rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Daily Contribution"
            value={dailyContributionDisplay}
            onChange={handleContributionChange}
            onFocus={handleContributionFocus}
            onBlur={handleContributionBlur}
            onKeyDown={handleKeyPress}
            className="w-36 border rounded-lg px-3 py-2 text-sm"
          />
          <button
            onClick={() => handleAddGoal()}
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

export default AddGoal;
