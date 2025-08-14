import React, { useState, useRef, useLayoutEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import EditableCard from './EditableCard';
import { updateIncome, updateCost, updateGoal, deleteIncome, deleteCost, deleteGoal } from '../utils/firebase';
import { capitalizeFirstLetter } from '../utils/formatters';
import { formatCurrency } from '../utils/currency';
import { 
  calculateTotalMoney, 
  calculateRecurringIncome, 
  calculateMonthlyExpenses, 
  calculateDailyFreeMoney, 
  calculateHowLongYouCanLive 
} from '../utils/calculations';

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
      case 'report':
        // For report tab, we'll return empty array since we render report cards instead
        items = [];
        break;
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
      const days = Math.ceil(item.price / item.dailyContribution);
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + days);
      
      return (
        <div className="flex flex-col">
          <span className="font-medium text-base mb-2 text-gray-700">
            {capitalizeFirstLetter(item.name)}
          </span>
          <div className="flex justify-between items-center">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-gray-600 text-sm">
                Price: {formatCurrency(item.price, selectedCurrency)}
              </span>
              <span className="text-gray-600 text-sm">
                Daily: {formatCurrency(item.dailyContribution, selectedCurrency)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-green-600 text-sm">
                Target: {targetDate.toLocaleDateString()}
              </span>
              <span className="text-gray-500 text-sm">
                ({days} days)
              </span>
            </div>
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

  const renderReportCards = () => {
    const totalMoney = calculateTotalMoney(incomes, costs, moneyInBank);
    const recurringIncome = calculateRecurringIncome(incomes);
    const totalExpenses = calculateMonthlyExpenses(costs);
    const dailyFreeMoney = calculateDailyFreeMoney(incomes, costs);
    const survivalTime = calculateHowLongYouCanLive(incomes, costs, moneyInBank);

    const reportData = [
      {
        title: "Money in Bank",
        value: formatCurrency(parseFloat(moneyInBank) || 0, selectedCurrency),
        subtitle: "Current bank balance"
      },
      {
        title: "Total Money Available",
        value: formatCurrency(totalMoney, selectedCurrency),
        subtitle: "Bank + all income sources"
      },
      {
        title: "Monthly Recurring Income",
        value: formatCurrency(recurringIncome, selectedCurrency),
        subtitle: "Regular income streams only"
      },
      {
        title: "Total Monthly Expenses",
        value: formatCurrency(totalExpenses, selectedCurrency),
        subtitle: "Including spend limits"
      },
      {
        title: "Daily Free Money",
        value: formatCurrency(dailyFreeMoney, selectedCurrency),
        subtitle: "Available daily after expenses"
      },
      {
        title: "How Long You Can Live",
        value: survivalTime === Infinity ? 'Forever' : `${Math.round(survivalTime)} days`,
        subtitle: "Based on current income and expenses"
      }
    ];

    return (
      <div className="grid gap-4">
        {reportData.map((report, index) => (
          <div key={index} className="p-4 border rounded w-full cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:shadow-sm border-gray-200 bg-gray-50">
            <div className="flex flex-col">
              <span className="font-medium text-base mb-2">{report.title}</span>
              <div className="flex justify-between items-center">
                <span className="font-medium text-base">
                  {report.value}
                </span>
                {report.subtitle && (
                  <span className="text-sm text-gray-600">
                    {report.subtitle}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const items = getItems();
  
  // Debug: Log first few items to see timestamp structure
  if (items.length > 0) {
    console.log('🔍 Debug: First item structure:', {
      id: items[0].id,
      name: items[0].name,
      timestamp: items[0].timestamp,
      createdAt: items[0].createdAt,
      date: items[0].date,
      created: items[0].created,
      allFields: Object.keys(items[0])
    });
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
      </div>

      {/* Visual Indicator - Bouncing Red Dot */}
      {((activeTab === 'income' || activeTab === 'expenses') && !hasMoneyInBank) || 
       (activeTab === 'goals' && !hasSpendLimit) ? (
        <animated.div 
          className="fixed w-1.5 h-1.5 bg-red-500 rounded-full z-10"
          style={{
            left: `${dotPosition.x}px`,
            top: `${dotPosition.y}px`,
            transform: bounceAnimation.y.to(y => `translate(-50%, calc(-50% + ${y}px))`),
          }}
        />
      ) : null}
      
      {activeTab === 'report' ? (
        renderReportCards()
      ) : (
        <div className="grid gap-2">
          {items.map(item => (
            <EditableCard
              key={item.id}
              isEditing={editingItem === item.id}
              onEdit={() => handleEdit(item)}
              onSave={handleSave}
              onCancel={handleCancel}
              onDelete={() => handleDelete(item.id)}
              timestamp={item.timestamp || item.createdAt || item.date || item.created}
              period={activeTab !== 'goals' ? item.period : undefined}
            >
              {editingItem === item.id ? (
                renderEditForm()
              ) : (
                renderDisplayContent(item)
              )}
            </EditableCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemsList; 