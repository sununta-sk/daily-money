import React, { useState, useRef, useEffect } from 'react';
import VoiceInput from './VoiceInput';
import { saveIncome, saveCost, saveGoal } from '../../utils/firebase';
import { capitalizeFirstLetter } from '../../utils/formatters';
import { getCurrencySymbol } from '../../utils/currency';

const AddArea = ({ 
  activeTab,
  incomes,
  setIncomes,
  costs,
  setCosts,
  goals,
  setGoals,
  selectedCurrency,
  user,
  isOpen,
  setIsOpen
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const areaRef = useRef(null);
  
  // Local state for form inputs
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomePeriod, setIncomePeriod] = useState('monthly');
  const [costName, setCostName] = useState('');
  const [costAmount, setCostAmount] = useState('');
  const [costPeriod, setCostPeriod] = useState('monthly');
  const [goalName, setGoalName] = useState('');
  const [goalPrice, setGoalPrice] = useState('');
  const [dailyContribution, setDailyContribution] = useState('');
  
  const [addingIncome, setAddingIncome] = useState(false);
  const [addingCost, setAddingCost] = useState(false);
  const [addingGoal, setAddingGoal] = useState(false);

  const INCOME_PERIODS = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
    { value: "one-off", label: "One-off" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (areaRef.current && !areaRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAddIncome = async (data = null) => {
    const itemData = data || {
      name: incomeName.trim(),
      amount: parseFloat(incomeAmount),
      period: incomePeriod
    };

    if (!itemData.name || !itemData.amount || isNaN(itemData.amount) || itemData.amount <= 0) return;

    setAddingIncome(true);
    
    try {
      const newIncome = {
        name: capitalizeFirstLetter(itemData.name),
        amount: itemData.amount,
        period: itemData.period,
        userId: user?.uid
      };

      const savedIncome = await saveIncome(newIncome);
      setIncomes([...incomes, savedIncome]);
      
      // Reset form only if not from voice input
      if (!data) {
        setIncomeName('');
        setIncomeAmount('');
        setIncomePeriod('monthly');
      }
    } catch {
      // Handle error silently
    } finally {
      setAddingIncome(false);
    }
  };

  const handleAddCost = async (data = null) => {
    const itemData = data || {
      name: costName.trim(),
      amount: parseFloat(costAmount),
      period: costPeriod
    };

    if (!itemData.name || !itemData.amount || isNaN(itemData.amount) || itemData.amount <= 0) {
      return;
    }

    setAddingCost(true);
    
    try {
      const newCost = {
        name: capitalizeFirstLetter(itemData.name),
        amount: itemData.amount,
        period: itemData.period,
        userId: user?.uid
      };
      
      const savedCost = await saveCost(newCost);
      setCosts([...costs, savedCost]);
      
      // Reset form only if not from voice input
      if (!data) {
        setCostName('');
        setCostAmount('');
        setCostPeriod('monthly');
      }
    } catch {
      // Handle error silently
    } finally {
      setAddingCost(false);
    }
  };

  const handleAddGoal = async (data = null) => {
    const itemData = data || {
      name: goalName.trim(),
      price: parseFloat(goalPrice),
      dailyContribution: parseFloat(dailyContribution)
    };

    if (!itemData.name || !itemData.price || isNaN(itemData.price) || itemData.price <= 0 || 
        !itemData.dailyContribution || isNaN(itemData.dailyContribution) || itemData.dailyContribution <= 0) return;

    setAddingGoal(true);
    
    try {
      const newGoal = {
        name: capitalizeFirstLetter(itemData.name),
        price: itemData.price,
        dailyContribution: itemData.dailyContribution,
        userId: user?.uid
      };

      const savedGoal = await saveGoal(newGoal);
      setGoals([...goals, savedGoal]);
      
      // Reset form only if not from voice input
      if (!data) {
        setGoalName('');
        setGoalPrice('');
        setDailyContribution('');
      }
    } catch {
      // Handle error silently
    } finally {
      setAddingGoal(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (activeTab === "income") {
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
      case 'income':
        return {
          title: 'Add Income',
          fields: [
            { 
              type: 'text', 
              placeholder: 'Income name', 
              value: incomeName, 
              onChange: (e) => setIncomeName(e.target.value),
              key: 'name'
            },
            { 
              type: 'number', 
              placeholder: `Amount (${currencySymbol})`, 
              value: incomeAmount, 
              onChange: (e) => setIncomeAmount(e.target.value),
              key: 'amount'
            },
            { 
              type: 'select', 
              value: incomePeriod, 
              onChange: (e) => setIncomePeriod(e.target.value),
              options: INCOME_PERIODS,
              key: 'period'
            }
          ],
          onSubmit: handleAddIncome,
          isSubmitting: addingIncome
        };
      case 'expenses':
        return {
          title: 'Add Expense',
          fields: [
            { 
              type: 'text', 
              placeholder: 'Expense name', 
              value: costName, 
              onChange: (e) => setCostName(e.target.value),
              key: 'name'
            },
            { 
              type: 'number', 
              placeholder: `Amount (${currencySymbol})`, 
              value: costAmount, 
              onChange: (e) => setCostAmount(e.target.value),
              key: 'amount'
            },
            { 
              type: 'select', 
              value: costPeriod, 
              onChange: (e) => setCostPeriod(e.target.value),
              options: INCOME_PERIODS.filter(p => p.value !== 'money-in-bank' && p.value !== 'spend-limit'),
              key: 'period'
            }
          ],
          onSubmit: handleAddCost,
          isSubmitting: addingCost
        };
      case 'goals':
        return {
          title: 'Add Goal',
          fields: [
            { 
              type: 'text', 
              placeholder: 'Goal name', 
              value: goalName, 
              onChange: (e) => setGoalName(e.target.value),
              key: 'name'
            },
            { 
              type: 'number', 
              placeholder: `Goal price (${currencySymbol})`, 
              value: goalPrice, 
              onChange: (e) => setGoalPrice(e.target.value),
              key: 'price'
            },
            { 
              type: 'number', 
              placeholder: `Daily contribution (${currencySymbol})`, 
              value: dailyContribution, 
              onChange: (e) => setDailyContribution(e.target.value),
              key: 'dailyContribution'
            }
          ],
          onSubmit: handleAddGoal,
          isSubmitting: addingGoal
        };
      default:
        return null;
    }
  };



  const handleDataExtracted = async (extractedData) => {
    // Validate the extracted data
    if (!extractedData || typeof extractedData !== 'object') {
      return;
    }

    try {
      if (activeTab === 'income') {
        const { name, amount, period } = extractedData;
        
        if (name && amount && period) {
          const incomeData = {
            name: name.trim(),
            amount: parseFloat(amount),
            period: period
          };
          await handleAddIncome(incomeData);
        }
      } else if (activeTab === 'expenses') {
        const { name, amount, period } = extractedData;
        
        if (name && amount && period) {
          const costData = {
            name: name.trim(),
            amount: parseFloat(amount),
            period: period
          };
          await handleAddCost(costData);
        }
      } else if (activeTab === 'goals') {
        const { name, price, dailyContribution } = extractedData;
        
        if (name && price && dailyContribution) {
          const goalData = {
            name: name.trim(),
            price: parseFloat(price),
            dailyContribution: parseFloat(dailyContribution)
          };
          await handleAddGoal(goalData);
        }
      }
    } catch {
      // Handle error silently
    }
  };

  const config = getTabConfig();
  if (!config) return null;

  return (
    <div
      ref={areaRef}
      className="p-3 border rounded mb-2"
    >
      <div 
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold select-none flex items-center gap-2">
          {config.title}
          <svg 
            className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </h2>
        <div className="flex items-center gap-2">
          <span onClick={e => e.stopPropagation()}>
                        <VoiceInput 
              onTranscript={() => {}} // Placeholder for transcript callback
              isRecording={isRecording}
              setIsRecording={setIsRecording}
              activeTab={activeTab}
              onDataExtracted={handleDataExtracted}
              selectedCurrency={selectedCurrency}
            />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 cursor-default" onClick={e => e.stopPropagation()}>
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-3">
            {config.fields.map((field, index) => (
              <div key={index} className="relative">
                {field.type === 'select' ? (
                  <select 
                    value={field.value} 
                    onChange={field.onChange}
                    className="border border-gray-300 rounded px-3 py-2 text-base w-full"
                  >
                    {field.options.map(option => (
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
                    className="border border-gray-300 rounded px-3 py-2 text-base w-full"
                  />
                )}
              </div>
            ))}
            <div className="flex gap-2">
              <button 
                onClick={e => { e.stopPropagation(); config.onSubmit(); }} 
                disabled={config.isSubmitting}
                className={`px-3 py-2 text-white rounded text-base w-full ${
                  config.isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {config.isSubmitting ? 'Adding...' : 'Add'}
              </button>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            💡 Voice input example: "{activeTab === 'income' ? 'salary 50000 monthly' : activeTab === 'expenses' ? 'rent 15000 monthly' : 'new phone 25000 100 daily'}"
          </div>
        </div>
      )}
    </div>
  );
};

export default AddArea; 