import React, { useState } from 'react';
import VoiceInput from './VoiceInput';
import { saveIncome, saveCost, saveGoal } from '../utils/firebase';
import { capitalizeFirstLetter } from '../utils/formatters';

const AddArea = ({ 
  activeTab,
  incomes,
  setIncomes,
  costs,
  setCosts,
  goals,
  setGoals,
  selectedCurrency,
  user
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
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

  const handleAddIncome = async () => {
    if (!incomeName.trim() || !incomeAmount.trim()) return;

    const number = parseFloat(incomeAmount);
    if (isNaN(number) || number <= 0) return;

    setAddingIncome(true);
    
    try {
      const newIncome = {
        name: capitalizeFirstLetter(incomeName.trim()),
        amount: number,
        period: incomePeriod,
        userId: user?.uid
      };

      const savedIncome = await saveIncome(newIncome);
      setIncomes([...incomes, savedIncome]);
      
      // Reset form
      setIncomeName('');
      setIncomeAmount('');
      setIncomePeriod('monthly');
    } catch (error) {
      console.error('Error adding income:', error);
    } finally {
      setAddingIncome(false);
    }
  };

  const handleAddCost = async () => {
    if (!costName.trim() || !costAmount.trim()) return;

    const number = parseFloat(costAmount);
    if (isNaN(number) || number <= 0) return;

    setAddingCost(true);
    
    try {
      const newCost = {
        name: capitalizeFirstLetter(costName.trim()),
        amount: number,
        period: costPeriod,
        userId: user?.uid
      };

      const savedCost = await saveCost(newCost);
      setCosts([...costs, savedCost]);
      
      // Reset form
      setCostName('');
      setCostAmount('');
      setCostPeriod('monthly');
    } catch (error) {
      console.error('Error adding cost:', error);
    } finally {
      setAddingCost(false);
    }
  };

  const handleAddGoal = async () => {
    if (!goalName.trim() || !goalPrice.trim() || !dailyContribution.trim()) return;

    const price = parseFloat(goalPrice);
    const contribution = parseFloat(dailyContribution);
    
    if (isNaN(price) || price <= 0 || isNaN(contribution) || contribution <= 0) return;

    setAddingGoal(true);
    
    try {
      const newGoal = {
        name: capitalizeFirstLetter(goalName.trim()),
        price: price,
        dailyContribution: contribution,
        userId: user?.uid
      };

      const savedGoal = await saveGoal(newGoal);
      setGoals([...goals, savedGoal]);
      
      // Reset form
      setGoalName('');
      setGoalPrice('');
      setDailyContribution('');
    } catch (error) {
      console.error('Error adding goal:', error);
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
              placeholder: 'Amount', 
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
              placeholder: 'Amount', 
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
              placeholder: 'Goal price', 
              value: goalPrice, 
              onChange: (e) => setGoalPrice(e.target.value),
              key: 'price'
            },
            { 
              type: 'number', 
              placeholder: 'Daily contribution', 
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

  const handleVoiceTranscript = (transcript) => {
    const config = getTabConfig();
    if (!config) return;

    // Smart parsing based on active tab
    const words = transcript.toLowerCase().split(' ');
    let name = '';
    let amount = '';
    let period = '';
    let dailyContribution = '';

    if (activeTab === 'income') {
      // Parse income: "salary 50000 monthly" or "freelance 2000 daily"
      const amountIndex = words.findIndex(word => !isNaN(word) || word.includes('k') || word.includes('thousand'));
      if (amountIndex !== -1) {
        name = words.slice(0, amountIndex).join(' ');
        amount = words[amountIndex].replace('k', '000').replace('thousand', '000');
        period = words[amountIndex + 1] || 'monthly';
      }
    } else if (activeTab === 'expenses') {
      // Parse expense: "rent 15000 monthly" or "coffee 50 daily"
      const amountIndex = words.findIndex(word => !isNaN(word) || word.includes('k') || word.includes('thousand'));
      if (amountIndex !== -1) {
        name = words.slice(0, amountIndex).join(' ');
        amount = words[amountIndex].replace('k', '000').replace('thousand', '000');
        period = words[amountIndex + 1] || 'monthly';
      }
    } else if (activeTab === 'goals') {
      // Parse goal: "new phone 25000 100 daily" (name, price, daily contribution)
      const amountIndex = words.findIndex(word => !isNaN(word) || word.includes('k') || word.includes('thousand'));
      if (amountIndex !== -1) {
        name = words.slice(0, amountIndex).join(' ');
        amount = words[amountIndex].replace('k', '000').replace('thousand', '000');
        dailyContribution = words[amountIndex + 1] || '100';
      }
    }

    // Update the appropriate fields
    if (name) {
      if (activeTab === 'income') setIncomeName(name);
      else if (activeTab === 'expenses') setCostName(name);
      else if (activeTab === 'goals') setGoalName(name);
    }
    if (amount) {
      if (activeTab === 'income') setIncomeAmount(amount);
      else if (activeTab === 'expenses') setCostAmount(amount);
      else if (activeTab === 'goals') setGoalPrice(amount);
    }
    if (period) {
      if (activeTab === 'income') setIncomePeriod(period);
      else if (activeTab === 'expenses') setCostPeriod(period);
    }
    if (dailyContribution && activeTab === 'goals') {
      setDailyContribution(dailyContribution);
    }
  };

  const config = getTabConfig();
  if (!config) return null;

  return (
    <div className="p-2 sm:p-4 border rounded mb-4 sm:mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <h2 className="text-lg sm:text-xl font-semibold">{config.title}</h2>
        <svg 
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-3 sm:mt-4">
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-3">
            {config.fields.map((field, index) => (
              <div key={index} className="relative">
                {field.type === 'select' ? (
                  <select 
                    value={field.value} 
                    onChange={field.onChange}
                    className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base w-full"
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
                    className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base w-full"
                  />
                )}
              </div>
            ))}
            <div className="flex gap-2">
              <button 
                onClick={config.onSubmit} 
                disabled={config.isSubmitting}
                className={`px-3 py-2 text-white rounded text-sm sm:text-base flex-1 ${
                  config.isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {config.isSubmitting ? 'Adding...' : 'Add'}
              </button>
              <VoiceInput 
                onTranscript={handleVoiceTranscript}
                isRecording={isRecording}
                setIsRecording={setIsRecording}
              />
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