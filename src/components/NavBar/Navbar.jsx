import React, { useState, useRef } from "react";
import { CURRENCIES } from "../../utils/currency";
import WhaleLogo from "../WhaleLogo";
import { useAuth, useClickOutside } from "../../hooks";

const Navbar = ({ user, settings, updateSettings }) => {
  const { signOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef();

  // Click outside to close user menu
  useClickOutside(userMenuRef, () => setShowUserMenu(false));

  const tabs = [
    { id: "incomes", label: "Income" },
    { id: "expenses", label: "Expenses" },
    { id: "goals", label: "Goals" },
  ];

  const handleTabChange = (newTab) => {
    updateSettings({ activeTab: newTab });
  };

  const handleCurrencyChange = (newCurrency) => {
    updateSettings({ currency: newCurrency });
  };

  const handleSignOut = () => {
    signOut();
    setShowUserMenu(false);
  };

  return (
    <nav className="p-3 border rounded-2xl bg-white/70 backdrop-blur-md shadow-md flex items-center justify-between">
      {/* Left Section: Logo and Navigation */}
      <div className="flex items-center">
        {/* App Logo */}
        <WhaleLogo className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full shadow" />

        {/* Mobile Navigation: Dropdown select */}
        <div className="md:hidden ml-2">
          <select
            value={settings?.activeTab || "expenses"}
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

        {/* Desktop Navigation: Tab buttons */}
        <div className="hidden md:flex gap-2 ml-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 shadow-md
                ${
                  settings?.activeTab === tab.id
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

      {/* Right Section: User Controls */}
      {user && (
        <div className="flex items-center gap-2">
          {/* Currency Selector */}
          <select
            value={settings?.currency || "THB"}
            onChange={(e) => handleCurrencyChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-2 py-1 text-sm bg-white/80 shadow"
          >
            {Object.keys(CURRENCIES).map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>

          {/* User Profile Picture and Menu */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center focus:outline-none"
            >
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-white shadow hover:border-blue-300 transition-colors"
              />
            </button>

            {/* User Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">
                    {user.displayName}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
