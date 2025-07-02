import React, { useState } from 'react';
import VoiceInput from './VoiceInput';
import { saveIncome, saveCost, saveGoal } from '../utils/firebase';
import { capitalizeFirstLetter } from '../utils/formatters';
import { getCurrencySymbol } from '../utils/currency';

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
    } catch (error) {
      console.error('Error adding income:', error);
    } finally {
      setAddingIncome(false);
    }
  };

  const handleAddCost = async (data = null) => {
    console.log('🏭 FACTORY: handleAddCost called');
    console.log('📦 Input data:', data);
    console.log('📝 Current form state:', { costName, costAmount, costPeriod });
    
    const itemData = data || {
      name: costName.trim(),
      amount: parseFloat(costAmount),
      period: costPeriod
    };
    
    console.log('🔍 Final itemData:', itemData);

    if (!itemData.name || !itemData.amount || isNaN(itemData.amount) || itemData.amount <= 0) {
      console.log('❌ Validation failed:', { 
        hasName: !!itemData.name, 
        hasAmount: !!itemData.amount, 
        isNumber: !isNaN(itemData.amount), 
        isPositive: itemData.amount > 0 
      });
      return;
    }

    console.log('✅ Validation passed, starting save process');
    setAddingCost(true);
    
    try {
      const newCost = {
        name: capitalizeFirstLetter(itemData.name),
        amount: itemData.amount,
        period: itemData.period,
        userId: user?.uid
      };
      
      console.log('💾 Saving cost to database:', newCost);
      const savedCost = await saveCost(newCost);
      console.log('✅ Cost saved successfully:', savedCost);
      
      setCosts([...costs, savedCost]);
      console.log('📊 Updated costs state, new length:', costs.length + 1);
      
      // Reset form only if not from voice input
      if (!data) {
        console.log('🔄 Resetting form fields');
        setCostName('');
        setCostAmount('');
        setCostPeriod('monthly');
      } else {
        console.log('🎤 Voice input - skipping form reset');
      }
    } catch (error) {
      console.error('💥 Error adding cost:', error);
    } finally {
      setAddingCost(false);
      console.log('🏁 handleAddCost completed');
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

  const handleDataExtracted = async (extractedData) => {
    console.log('🎤 VOICE INPUT: Starting data extraction process');
    console.log('📥 Raw extracted data:', extractedData);
    
    // Validate the extracted data
    if (!extractedData || typeof extractedData !== 'object') {
      console.log('❌ Invalid extracted data format');
      return;
    }

    try {
      if (activeTab === 'income') {
        console.log('💰 Processing as INCOME');
        const { name, amount, period } = extractedData;
        console.log('📋 Extracted fields:', { name, amount, period });
        
        if (name && amount && period) {
          // Create a new object with proper structure
          const incomeData = {
            name: name.trim(),
            amount: parseFloat(amount),
            period: period
          };
          console.log('🔧 Transformed income data:', incomeData);
          await handleAddIncome(incomeData);
        } else {
          console.log('❌ Missing required income fields');
        }
      } else if (activeTab === 'expenses') {
        console.log('💸 Processing as EXPENSE');
        const { name, amount, period } = extractedData;
        console.log('📋 Extracted fields:', { name, amount, period });
        
        if (name && amount && period) {
          // Create a new object with proper structure
          const costData = {
            name: name.trim(),
            amount: parseFloat(amount),
            period: period
          };
          console.log('🔧 Transformed cost data:', costData);
          await handleAddCost(costData);
        } else {
          console.log('❌ Missing required expense fields');
        }
      } else if (activeTab === 'goals') {
        console.log('🎯 Processing as GOAL');
        const { name, price, dailyContribution } = extractedData;
        console.log('📋 Extracted fields:', { name, price, dailyContribution });
        
        if (name && price && dailyContribution) {
          // Create a new object with proper structure
          const goalData = {
            name: name.trim(),
            price: parseFloat(price),
            dailyContribution: parseFloat(dailyContribution)
          };
          console.log('🔧 Transformed goal data:', goalData);
          await handleAddGoal(goalData);
        } else {
          console.log('❌ Missing required goal fields');
        }
      }
    } catch (error) {
      console.error('💥 Error in handleDataExtracted:', error);
    }
  };

  const config = getTabConfig();
  if (!config) return null;

  return (
    <div className="p-3 border rounded mb-2">
      <div className="flex items-center justify-between w-full">
                  <h2 className="text-xl font-semibold">{config.title}</h2>
        <div className="flex items-center gap-2">
          {!isOpen && (
            // TODO: Add paid user check here - VoiceInput should only render for paid users
            <VoiceInput 
              onTranscript={handleVoiceTranscript}
              isRecording={isRecording}
              setIsRecording={setIsRecording}
              activeTab={activeTab}
              onDataExtracted={handleDataExtracted}
              selectedCurrency={selectedCurrency}
            />
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center"
          >
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
        </div>
      </div>
      

      
      {isOpen && (
        <div className="mt-4">
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
                onClick={config.onSubmit} 
                disabled={config.isSubmitting}
                className={`px-3 py-2 text-white rounded text-base flex-1 ${
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
                activeTab={activeTab}
                onDataExtracted={handleDataExtracted}
                selectedCurrency={selectedCurrency}
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