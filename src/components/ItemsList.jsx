import React, { useState } from 'react';
import EditableCard from './EditableCard';
import { updateIncome, updateCost, updateGoal, deleteIncome, deleteCost, deleteGoal } from '../utils/firebase';
import { capitalizeFirstLetter } from '../utils/formatters';

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

  const getItems = () => {
    switch (activeTab) {
      case 'income':
        return incomes || [];
      case 'expenses':
        return costs || [];
      case 'goals':
        return goals || [];
      default:
        return [];
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'income':
        return 'Your Income';
      case 'expenses':
        return 'Your Expenses';
      case 'goals':
        return 'Your Goals';
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

  const renderEditForm = (item) => {
    if (activeTab === 'goals') {
      return (
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <input
            placeholder="Goal name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
          />
          <input
            type="number"
            step="any"
            placeholder="Price"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
          />
          <input
            type="number"
            step="any"
            placeholder="Daily contribution"
            value={editContribution}
            onChange={(e) => setEditContribution(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
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
          className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
        />
        <input
          type="number"
          step="any"
          placeholder="Amount"
          value={editAmount}
          onChange={(e) => setEditAmount(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
        />
        <select
          value={editPeriod}
          onChange={(e) => setEditPeriod(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
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
          <span className="font-medium text-sm sm:text-base mb-2">
            {capitalizeFirstLetter(item.name)}
          </span>
          <div className="flex justify-between items-center">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-gray-600 text-sm">
                Price: ฿{item.price?.toLocaleString()}
              </span>
              <span className="text-gray-600 text-sm">
                Daily: ฿{item.dailyContribution?.toLocaleString()}
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
        <span className="font-medium text-sm sm:text-base">
          {capitalizeFirstLetter(item.name)}
        </span>
        <span className="font-medium text-sm sm:text-base">
          ฿{item.amount?.toLocaleString()} ({item.period})
        </span>
      </div>
    );
  };

  const items = getItems();

  return (
    <div className="p-2 sm:p-4 border rounded mb-4 sm:mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{getTitle()}</h2>
      
      {/* Control Bar */}
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          {activeTab === 'income' || activeTab === 'expenses' ? (
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">Money in Bank:</label>
              <input 
                type="number"
                placeholder="0"
                value={moneyInBank}
                onChange={(e) => setMoneyInBank(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm w-24"
              />
            </div>
          ) : activeTab === 'goals' ? (
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">Spend Limit:</label>
              <input 
                type="number"
                placeholder="0"
                value={spendLimit}
                onChange={(e) => setSpendLimit(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm w-24"
              />
            </div>
          ) : null}
        </div>
        
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Sort:</label>
          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      
      <div className="grid gap-2">
        {items.map(item => (
          <EditableCard
            key={item.id}
            isEditing={editingItem === item.id}
            onEdit={() => handleEdit(item)}
            onSave={handleSave}
            onCancel={handleCancel}
            onDelete={() => handleDelete(item.id)}
            timestamp={item.timestamp}
          >
            {editingItem === item.id ? (
              renderEditForm(item)
            ) : (
              renderDisplayContent(item)
            )}
          </EditableCard>
        ))}
      </div>
    </div>
  );
};

export default ItemsList; 