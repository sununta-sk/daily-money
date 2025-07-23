import React, { useState, useEffect } from "react";
import WhaleLogo from "../WhaleLogo";
import { CURRENCIES } from "../../utils/currency";

const Navbar = ({
  user,
  settings,
  updateSettings,
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { id: "incomes", label: "Income" },
    { id: "expenses", label: "Expenses" },
    { id: "goals", label: "Goals" },
  ];

  const [moneyInBank, setMoneyInBank] = useState(settings?.moneyInBank || "");
  const [spendLimit, setSpendLimit] = useState(settings?.spendLimit || "");

  useEffect(() => {
    setMoneyInBank(settings?.moneyInBank || "");
    setSpendLimit(settings?.spendLimit || "");
  }, [settings?.moneyInBank, settings?.spendLimit]);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    updateSettings({ activeTab: newTab });
  };

  const handleCurrencyChange = (newCurrency) => {
    updateSettings({ currency: newCurrency });
  };

  const handleMoneyInBankKeyDown = (e) => {
    if (e.key === "Enter") {
      updateSettings({ moneyInBank });
      e.target.blur();
    }
  };

  const handleMoneyInBankBlur = () => {
    updateSettings({ moneyInBank });
  };

  const handleSpendLimitKeyDown = (e) => {
    if (e.key === "Enter") {
      updateSettings({ spendLimit });
      e.target.blur();
    }
  };

  const handleSpendLimitBlur = () => {
    updateSettings({ spendLimit });
  };

  return (
    <nav className="p-3 border rounded-2xl bg-white/70 backdrop-blur-md shadow-md flex items-center justify-between">
      {/* Left Section: Logo and Navigation */}
      <div className="flex items-center gap-4">
        <WhaleLogo className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full shadow" />
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 shadow-md
                ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-400 to-indigo-400 text-white"
                    : "bg-white/80 text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Currency Selector */}
        <select
          value={settings?.currency || "THB"}
          onChange={(e) => handleCurrencyChange(e.target.value)}
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm bg-white/80 shadow ml-4"
        >
          {Object.entries(CURRENCIES).map(([code, currency]) => (
            <option key={code} value={code}>
              {currency.symbol} {currency.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="moneyInBank"
          value={moneyInBank}
          onChange={(e) => setMoneyInBank(e.target.value)}
          onKeyDown={handleMoneyInBankKeyDown}
          onBlur={handleMoneyInBankBlur}
          placeholder="Money in Bank"
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm bg-white/80 shadow w-28 ml-2"
        />
        <input
          type="number"
          name="spendLimit"
          value={spendLimit}
          onChange={(e) => setSpendLimit(e.target.value)}
          onKeyDown={handleSpendLimitKeyDown}
          onBlur={handleSpendLimitBlur}
          placeholder="Spend Limit"
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm bg-white/80 shadow w-28 ml-2"
        />
      </div>
      {/* Right Section: Profile Picture Only */}
      {user && user.photoURL && (
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-8 h-8 rounded-full border-2 border-white shadow"
        />
      )}
    </nav>
  );
};

export default Navbar;
