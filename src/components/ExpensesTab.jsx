import React, { useState } from 'react'
import EditableCard from './EditableCard'

const ExpensesTab = ({ 
  costName, 
  setCostName, 
  costAmount, 
  setCostAmount, 
  period, 
  setPeriod, 
  costs, 
  addingCost, 
  handleAddCost, 
  handleKeyPress, 
  removeCost,
  editingCost,
  editCostName,
  setEditCostName,
  editCostAmount,
  setEditCostAmount,
  editCostPeriod,
  setEditCostPeriod,
  handleEditCost,
  handleSaveCostEdit,
  handleCancelCostEdit
}) => {
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false)

  return (
    <>
      <div className="p-2 sm:p-4 border rounded mb-4 sm:mb-6">
        <button 
          onClick={() => setIsAddExpenseOpen(!isAddExpenseOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <h2 className="text-lg sm:text-xl font-semibold">Add Expense</h2>
          <svg 
            className={`w-5 h-5 transition-transform duration-200 ${
              isAddExpenseOpen ? 'rotate-180' : ''
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isAddExpenseOpen && (
          <div className="mt-3 sm:mt-4 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <input 
              placeholder='Expense name'
              value={costName}
              onChange={(e) => setCostName(e.target.value)}
              onKeyPress={handleKeyPress}
              className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
            />
            <input 
              type="number"
              placeholder='Amount'
              value={costAmount}
              onChange={(e) => setCostAmount(e.target.value)}
              onKeyPress={handleKeyPress}
              className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
            />
            <select 
              value={period} 
              onChange={(e) => setPeriod(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="one-off">One-off</option>
            </select>
            <button 
              onClick={handleAddCost} 
              disabled={addingCost}
              className={`px-3 py-2 text-white rounded text-sm sm:text-base ${
                addingCost 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {addingCost ? 'Adding...' : 'Add'}
            </button>
          </div>
        )}
      </div>

      <div className="">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Your Expenses</h2>
        <div className="grid gap-2">
          {costs.map(cost => (
            <EditableCard
              key={cost.id}
              isEditing={editingCost === cost.id}
              onEdit={() => handleEditCost(cost)}
              onSave={handleSaveCostEdit}
              onCancel={handleCancelCostEdit}
              onDelete={() => removeCost(cost.id)}
            >
              {editingCost === cost.id ? (
                // Edit mode
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <input 
                    placeholder='Expense name'
                    value={editCostName}
                    onChange={(e) => setEditCostName(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                  />
                  <input 
                    type="number"
                    placeholder='Amount'
                    value={editCostAmount}
                    onChange={(e) => setEditCostAmount(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                  />
                  <select 
                    value={editCostPeriod} 
                    onChange={(e) => setEditCostPeriod(e.target.value)}
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
              ) : (
                // Display mode
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm sm:text-base">
                    {cost.name}
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    ฿{cost.amount} ({cost.period})
                  </span>
                </div>
              )}
            </EditableCard>
          ))}
        </div>
      </div>
    </>
  )
}

export default ExpensesTab 