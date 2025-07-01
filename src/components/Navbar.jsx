import React from 'react';
import { CURRENCIES } from '../utils/currency';

const Navbar = ({ 
  activeTab, 
  setActiveTab, 
  selectedCurrency, 
  setSelectedCurrency, 
  user,
  totalMoney
}) => {
  const tabs = [
    { id: 'income', label: 'Income', icon: '💵' },
    { id: 'expenses', label: 'Expenses', icon: '💰' },
    { id: 'goals', label: 'Goals', icon: '🎯' },
    { id: 'report', label: 'Report', icon: '📊' }
  ];

  const currencies = Object.entries(CURRENCIES).map(([code, currency]) => ({
    code,
    name: currency.name,
    symbol: currency.symbol
  }));



  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Daily Money</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-1">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
            
            {user && (
              <>
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm bg-white"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code}
                    </option>
                  ))}
                </select>
                
                <div className="flex items-center space-x-2">
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 