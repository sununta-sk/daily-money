import React, { useState, useEffect } from "react";
import { CURRENCIES } from "../../utils/currency";
import WhaleLogo from "../WhaleLogo";

const Navbar = ({ onTabChange, onCurrencyChange, user }) => {
  const [activeTab, setActiveTab] = useState("income");
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

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <nav className="p-3 border rounded mb-2 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <WhaleLogo className="w-12 h-12" />

          {/* Mobile: Dropdown select */}
          <div className="md:hidden">
            <select
              value={activeTab}
              onChange={(e) => handleTabChange(e.target.value)}
              className="py-2 text-base bg-transparent outline-none"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: Tab buttons */}
          <div className="hidden md:flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
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
              className="border border-gray-300 rounded px-2 py-1 text-sm bg-white"
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
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
