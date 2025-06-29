import React from 'react'
import EditableCard from './EditableCard'

const GoalsTab = ({ 
  goalName, 
  setGoalName, 
  goalPrice, 
  setGoalPrice, 
  dailyContribution, 
  setDailyContribution, 
  goals, 
  handleAddGoal, 
  handleKeyPress, 
  removeGoal, 
  calculateGoalDays, 
  calculateGoalDate,
  editingGoal,
  editGoalName,
  setEditGoalName,
  editGoalPrice,
  setEditGoalPrice,
  editGoalContribution,
  setEditGoalContribution,
  handleEditGoal,
  handleSaveGoalEdit,
  handleCancelGoalEdit
}) => {
  return (
    <>
      <div className="p-2 sm:p-4 border rounded mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Add Goal</h2>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <input 
            placeholder='Goal name'
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
          />
          <input 
            type="number"
            step="any"
            placeholder='Price'
            value={goalPrice}
            onChange={(e) => setGoalPrice(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
          />
          <input 
            type="number"
            step="any"
            placeholder='Daily contribution'
            value={dailyContribution}
            onChange={(e) => setDailyContribution(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
          />
          <button 
            onClick={handleAddGoal}
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm sm:text-base"
          >
            Add Goal
          </button>
        </div>
      </div>

      <div className="p-2 sm:p-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Your Goals</h2>
        <div className="grid gap-3 sm:gap-4">
          {goals.map(goal => {
            const days = calculateGoalDays(goal.price, goal.dailyContribution)
            const targetDate = calculateGoalDate(days)
            return (
              <div key={goal.id} className="p-3 sm:p-4 border rounded bg-blue-50">
                {editingGoal === goal.id ? (
                  // Edit mode
                  <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-3">
                    <input 
                      placeholder='Goal name'
                      value={editGoalName}
                      onChange={(e) => setEditGoalName(e.target.value)}
                      className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                    />
                    <input 
                      type="number"
                      step="any"
                      placeholder='Price'
                      value={editGoalPrice}
                      onChange={(e) => setEditGoalPrice(e.target.value)}
                      className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                    />
                    <input 
                      type="number"
                      step="any"
                      placeholder='Daily contribution'
                      value={editGoalContribution}
                      onChange={(e) => setEditGoalContribution(e.target.value)}
                      className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                    />
                    <div className="flex gap-2">
                      <button 
                        onClick={handleSaveGoalEdit}
                        className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm sm:text-base"
                      >
                        Save
                      </button>
                      <button 
                        onClick={handleCancelGoalEdit}
                        className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm sm:text-base"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // Display mode
                  <>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-base sm:text-lg">
                        {goal.name}
                      </h3>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEditGoal(goal)}
                          className="text-blue-500 hover:text-blue-700 text-sm px-2 py-1"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => removeGoal(goal.id)}
                          className="text-red-500 hover:text-red-700 text-lg sm:text-xl px-2 py-1"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:gap-4 text-xs sm:text-sm grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <span className="text-gray-600">Price:</span>
                        <div className="font-medium text-sm sm:text-base">
                          ฿{goal.price}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-600">Daily Contribution:</span>
                        <div className="font-medium text-sm sm:text-base">
                          ฿{goal.dailyContribution}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-600">Target Date:</span>
                        <div className="font-medium text-green-600 text-sm sm:text-base">
                          {targetDate}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-gray-500 text-xs sm:text-sm">
                      {days} days to reach your goal
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GoalsTab 