import React, { useState, useRef, useLayoutEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import EditableCard from './EditableCard';
import { updateIncome, updateCost, updateGoal, deleteIncome, deleteCost, deleteGoal } from '../../utils/firebase';
import { capitalizeFirstLetter } from '../../utils/formatters';
import { formatCurrency } from '../../utils/currency';
import { 
  calculateTotalMoney, 
  calculateRecurringIncome, 
  calculateMonthlyExpenses, 
  calculateDailyFreeMoney, 
  calculateHowLongYouCanLive 
} from '../../utils/calculations';

const ItemsList = ({ 
  activeTab,
  incomes,
  costs,
  goals,
  setIncomes,
  setCosts,
  setGoals,
  moneyInBank,
  setMoneyInBank,
  spendLimit,
  setSpendLimit,
  sortOrder,
  setSortOrder,
  selectedCurrency,
  user
}) => {
  const [editingItem, setEditingItem] = useState(null);
  const [editName, setEditName] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [editPeriod, setEditPeriod] = useState('monthly');
  const [editPrice, setEditPrice] = useState('');
  const [editContribution, setEditContribution] = useState('');

  // Visual indicator states and refs
  const [hasMoneyInBank, setHasMoneyInBank] = useState(false);
  const [hasSpendLimit, setHasSpendLimit] = useState(false);
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const moneyInputRef = useRef(null);
  const spendInputRef = useRef(null);

  // React Spring animation for bouncing dot - realistic physics-based bounce
  const bounceAnimation = useSpring({
    to: async (next) => {
      while (true) {
        // Start from rest position (0)
        await next({ y: 0, config: { tension: 200, friction: 25, mass: 0.8 } });
        // Small bounce up
        await next({ y: -2, config: { tension: 300, friction: 12, mass: 0.8 } });
        // Return with slight overshoot
        await next({ y: 0.5, config: { tension: 250, friction: 20, mass: 0.8 } });
        // Settle back to rest
        await next({ y: 0, config: { tension: 180, friction: 22, mass: 0.8 } });
        // Tiny secondary bounce
        await next({ y: -1, config: { tension: 220, friction: 18, mass: 0.8 } });
        // Final settle
        await next({ y: 0, config: { tension: 160, friction: 25, mass: 0.8 } });
      }
    },
    from: { y: 0 }
  });

  // Update validation states when values change
  React.useEffect(() => {
    setHasMoneyInBank(moneyInBank && parseFloat(moneyInBank) > 0);
    setHasSpendLimit(spendLimit && parseFloat(spendLimit) > 0);
  }, [moneyInBank, spendLimit]);

  // Track input positions for visual indicators
  useLayoutEffect(() => {
    const updatePosition = () => {
      const activeInput = activeTab === 'goals' ? spendInputRef.current : moneyInputRef.current;
      if (activeInput) {
        const rect = activeInput.getBoundingClientRect();
        const inputStyle = window.getComputedStyle(activeInput);
        const paddingLeft = parseInt(inputStyle.paddingLeft);
        
        setDotPosition({
          x: rect.left + paddingLeft + 16, // Natural text position + spacebar-like gap
          y: rect.top + rect.height / 2 // center vertically
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [activeTab, moneyInBank, spendLimit]);

  const getItems = () => {
    let items = [];
    
    switch (activeTab) {
      case 'income':
        items = incomes || [];
        break;
      case 'expenses':
        items = costs || [];
        break;
      case 'goals':
        items = goals || [];
        break;
      case 'report': {
        // Generate report data as items
        const totalMoney = calculateTotalMoney(incomes, costs, moneyInBank);
        const recurringIncome = calculateRecurringIncome(incomes);
        const totalExpenses = calculateMonthlyExpenses(costs);
        const dailyFreeMoney = calculateDailyFreeMoney(incomes, costs);
        const survivalTime = calculateHowLongYouCanLive(incomes, costs, moneyInBank);
        
        items = [
          { id: 'money-in-bank', name: 'Money in Bank', amount: parseFloat(moneyInBank) || 0, subtitle: 'Current bank balance' },
          { id: 'total-money', name: 'Total Money Available', amount: totalMoney, subtitle: 'Bank + all income sources' },
          { id: 'recurring-income', name: 'Monthly Recurring Income', amount: recurringIncome, subtitle: 'Regular income streams only' },
          { id: 'total-expenses', name: 'Total Monthly Expenses', amount: totalExpenses, subtitle: 'Including spend limits' },
          { id: 'daily-free-money', name: 'Daily Free Money', amount: dailyFreeMoney, subtitle: 'Available daily after expenses' },
          { id: 'survival-time', name: 'How Long You Can Live', amount: survivalTime === Infinity ? 'Forever' : `${Math.round(survivalTime)} days`, subtitle: 'Based on current income and expenses', isText: true }
        ];
        return items; // Return early, no sorting needed for report
      }
      default:
        items = [];
    }
    
    // Sort items by timestamp
    return items.sort((a, b) => {
      // Try multiple possible timestamp fields
      const getTimestamp = (item) => {
        // Try different possible timestamp field names
        const timestamp = item.timestamp || item.createdAt || item.date || item.created;
        
        if (!timestamp) {
          // If no timestamp found, use current date as fallback
          return new Date();
        }
        
        // Handle different timestamp formats
        if (timestamp.toDate) {
          return timestamp.toDate(); // Firestore timestamp
        } else if (timestamp.seconds) {
          return new Date(timestamp.seconds * 1000); // Firestore timestamp object
        } else {
          return new Date(timestamp); // Regular date string/number
        }
      };
      
      const dateA = getTimestamp(a);
      const dateB = getTimestamp(b);
      
      if (sortOrder === 'newest') {
        return dateB - dateA; // Newest first
      } else {
        return dateA - dateB; // Oldest first
      }
    });
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'income':
        return 'Your Income';
      case 'expenses':
        return 'Your Expenses';
      case 'goals':
        return 'Your Goals';
      case 'report':
        return 'Financial Report';
      default:
        return 'Items';
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setEditName(item.name || '');
    setEditAmount(item.amount?.toString() || item.price?.toString() || '');
    setEditPeriod(item.period || 'monthly');
    setEditPrice(item.price?.toString() || '');
    setEditContribution(item.dailyContribution?.toString() || '');
  };

  const handleSave = async () => {
    if (!editingItem) return;

    try {
      if (activeTab === 'income') {
        const updatedIncome = {
          name: capitalizeFirstLetter(editName.trim()),
          amount: parseFloat(editAmount),
          period: editPeriod
        };
        await updateIncome(editingItem, updatedIncome, user?.uid);
        setIncomes(incomes.map(income => 
          income.id === editingItem ? { ...income, ...updatedIncome } : income
        ));
      } else if (activeTab === 'expenses') {
        const updatedCost = {
          name: capitalizeFirstLetter(editName.trim()),
          amount: parseFloat(editAmount),
          period: editPeriod
        };
        await updateCost(editingItem, updatedCost, user?.uid);
        setCosts(costs.map(cost => 
          cost.id === editingItem ? { ...cost, ...updatedCost } : cost
        ));
      } else if (activeTab === 'goals') {
        const updatedGoal = {
          name: capitalizeFirstLetter(editName.trim()),
          price: parseFloat(editPrice),
          dailyContribution: parseFloat(editContribution)
        };
        await updateGoal(editingItem, updatedGoal, user?.uid);
        setGoals(goals.map(goal => 
          goal.id === editingItem ? { ...goal, ...updatedGoal } : goal
        ));
      }
    } catch (error) {
      console.error('Error updating item:', error);
    } finally {
      setEditingItem(null);
      setEditName('');
      setEditAmount('');
      setEditPeriod('monthly');
      setEditPrice('');
      setEditContribution('');
    }
  };

  const handleCancel = () => {
    setEditingItem(null);
    setEditName('');
    setEditAmount('');
    setEditPeriod('monthly');
    setEditPrice('');
    setEditContribution('');
  };

  const handleDelete = async (id) => {
    try {
      if (activeTab === 'income') {
        await deleteIncome(id, user?.uid);
        setIncomes(incomes.filter(income => income.id !== id));
      } else if (activeTab === 'expenses') {
        await deleteCost(id, user?.uid);
        setCosts(costs.filter(cost => cost.id !== id));
      } else if (activeTab === 'goals') {
        await deleteGoal(id, user?.uid);
        setGoals(goals.filter(goal => goal.id !== id));
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const renderEditForm = () => {
    if (activeTab === 'goals') {
      return (
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <input
            placeholder="Goal name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-base"
          />
          <input
            type="number"
            step="any"
            placeholder="Price"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-base"
          />
          <input
            type="number"
            step="any"
            placeholder="Daily contribution"
            value={editContribution}
            onChange={(e) => setEditContribution(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-base"
          />
        </div>
      );
    }

    return (
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <input
          placeholder={activeTab === 'income' ? 'Income name' : 'Expense name'}
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="border border-gray-300 rounded px-3 py-2 text-base"
        />
        <input
          type="number"
          step="any"
          placeholder="Amount"
          value={editAmount}
          onChange={(e) => setEditAmount(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="border border-gray-300 rounded px-3 py-2 text-base"
        />
        <select
          value={editPeriod}
          onChange={(e) => setEditPeriod(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="border border-gray-300 rounded px-3 py-2 text-base"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="one-off">One-off</option>
        </select>
      </div>
    );
  };

  const renderDisplayContent = (item) => {
    if (activeTab === 'goals') {
      // Add null safety for goals
      const price = item.price || 0;
      const dailyContribution = item.dailyContribution || 0;
      const days = dailyContribution > 0 ? Math.ceil(price / dailyContribution) : Infinity;
      const targetDate = new Date();
      
      if (days !== Infinity) {
        targetDate.setDate(targetDate.getDate() + days);
      }
      

      
      return (
        <div className="flex flex-col">
          <span className="font-medium text-base mb-2 text-gray-700">
            {capitalizeFirstLetter(item.name || 'Unnamed Goal')}
          </span>
          <div className="flex justify-between items-center">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-gray-600 text-sm">
                Price: {formatCurrency(price, selectedCurrency)}
              </span>
              <span className="text-gray-600 text-sm">
                Daily: {formatCurrency(dailyContribution, selectedCurrency)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-green-600 text-sm">
                Target: {days === Infinity ? 'Never' : targetDate.toLocaleDateString()}
              </span>
              <span className="text-gray-500 text-sm">
                ({days === Infinity ? '∞' : days} days)
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'report') {
      return (
        <div className="flex flex-col">
          <span className="font-medium text-base mb-2 text-gray-700">
            {item.name}
          </span>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">
              {item.subtitle}
            </span>
            <span className="font-medium text-base">
              {item.isText ? item.amount : formatCurrency(item.amount, selectedCurrency)}
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="flex justify-between items-center">
        <span className="font-medium text-base text-gray-700">
          {capitalizeFirstLetter(item.name)}
        </span>
        <span className="font-medium text-base">
          {formatCurrency(item.amount, selectedCurrency)}
        </span>
      </div>
    );
  };

  const items = getItems();
  
  // Debug: Log current tab and items for debugging
  if (activeTab === 'goals' && goals.length === 0) {
    console.log(`🔍 No goals found. Add a goal using the form above.`);
  }

  return (
    <div className="p-3 border rounded mb-2 flex-1">
      {/* Header Section */}
      <div className="flex flex-col mb-4">
        {/* Title and Special Unit Line */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">{getTitle()}</h2>
          
          {activeTab === 'income' || activeTab === 'expenses' ? (
            <div className="flex items-center gap-1 relative">
              <label className="text-xs font-medium text-gray-600">Money in Bank:</label>
              <input 
                ref={moneyInputRef}
                type="number"
                placeholder="0"
                value={moneyInBank}
                onChange={(e) => setMoneyInBank(e.target.value)}
                className="border border-gray-300 rounded px-1 py-1 text-xs w-16"
              />
            </div>
          ) : activeTab === 'goals' ? (
            <div className="flex items-center gap-1 relative">
              <label className="text-xs font-medium text-gray-600">Spend Limit:</label>
              <input 
                ref={spendInputRef}
                type="number"
                placeholder="0"
                value={spendLimit}
                onChange={(e) => setSpendLimit(e.target.value)}
                className="border border-gray-300 rounded px-1 py-1 text-xs w-16"
              />
            </div>
          ) : null}
        </div>
        
        {/* Sort Line */}
        {activeTab !== 'report' && (
          <div className="flex justify-end items-center mt-2">
            <div className="flex items-center gap-1">
              <label className="text-xs font-medium text-gray-600">Sort:</label>
              <select 
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-300 rounded px-1 py-1 text-xs"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Visual Indicator - Bouncing Red Dot */}
      {activeTab !== 'report' && (
        ((activeTab === 'income' || activeTab === 'expenses') && !hasMoneyInBank) || 
        (activeTab === 'goals' && !hasSpendLimit)
      ) ? (
        <animated.div 
          className="fixed w-1.5 h-1.5 bg-red-500 rounded-full z-10"
          style={{
            left: `${dotPosition.x}px`,
            top: `${dotPosition.y}px`,
            transform: bounceAnimation.y.to(y => `translate(-50%, calc(-50% + ${y}px))`),
          }}
        />
      ) : null}
      
      <div className="grid gap-2">
        {items.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            {activeTab === 'goals' ? 'No goals yet. Add your first goal above!' : 
             activeTab === 'income' ? 'No income sources yet. Add your first income above!' :
             activeTab === 'expenses' ? 'No expenses yet. Add your first expense above!' :
             'No items to display'}
          </div>
        ) : (
          items.map(item => (
            <EditableCard
              key={item.id}
              isEditing={activeTab !== 'report' && editingItem === item.id}
              onEdit={activeTab !== 'report' ? () => handleEdit(item) : undefined}
              onSave={handleSave}
              onCancel={handleCancel}
              onDelete={activeTab !== 'report' ? () => handleDelete(item.id) : undefined}
              timestamp={item.timestamp || item.createdAt || item.date || item.created}
              period={activeTab === 'income' || activeTab === 'expenses' ? item.period : undefined}
            >
              {activeTab !== 'report' && editingItem === item.id ? (
                renderEditForm()
              ) : (
                renderDisplayContent(item)
              )}
            </EditableCard>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemsList; 