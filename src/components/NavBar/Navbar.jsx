import React, { useState, useEffect } from "react";
import { CURRENCIES } from "../../utils/currency";
import WhaleLogo from "../WhaleLogo";

const Navbar = ({ onTabChange, onCurrencyChange, user, lastTab }) => {
  const [activeTab, setActiveTab] = useState(lastTab || "income");
  const [selectedCurrency, setSelectedCurrency] = useState("THB");

  const tabs = [
    { id: "income", label: "Income" },
    { id: "expenses", label: "Expenses" },
    { id: "goals", label: "Goals" },
    { id: "report", label: "Report" },
  ];

  // Notify parent when tab changes
  useEffect(() => {
    onTabChange?.(activeTab);
  }, [activeTab]);

  // Notify parent when currency changes
  useEffect(() => {
    onCurrencyChange?.(selectedCurrency);
  }, [selectedCurrency]);

  // Sync activeTab when lastTab changes
  useEffect(() => {
    if (lastTab && lastTab !== activeTab) {
      setActiveTab(lastTab);
    }
  }, [lastTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <nav className="p-3 border rounded-2xl bg-white/70 backdrop-blur-md shadow-md flex items-center justify-between">
      <div className="flex items-center gap-2">
        <WhaleLogo className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full shadow" />
        {/* Mobile: Dropdown select */}
        <div className="md:hidden ml-2">
          <select
            value={activeTab}
            onChange={(e) => handleTabChange(e.target.value)}
            className="py-2 px-3 text-base bg-white/80 rounded-lg shadow border outline-none"
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>
        {/* Desktop: Tab buttons */}
        <div className="hidden md:flex gap-2 ml-4">
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
      </div>
      {user && (
        <div className="flex items-center space-x-2">
          <select
            value={selectedCurrency}
            onChange={(e) => handleCurrencyChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-2 py-1 text-sm bg-white/80 shadow"
          >
            {Object.keys(CURRENCIES).map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <div className="flex items-center">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-white shadow"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
