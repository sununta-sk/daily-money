import React from 'react'
import useDeviceType from '../hooks/useDeviceType'

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
  calculateGoalDate 
}) => {
  const { isMobile } = useDeviceType()

  return (
    <>
      <div className={`${isMobile ? 'p-4 mx-2' : 'mb-6 p-4'} border rounded`}>
        <h2 className="text-xl font-semibold mb-4">Add Goal</h2>
        <div className={`grid gap-2 ${
          isMobile 
            ? 'grid-cols-1' 
            : 'grid-cols-1 md:grid-cols-4'
        }`}>
          <input 
            placeholder='Goal name'
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            onKeyPress={handleKeyPress}
            className={`border border-gray-300 rounded px-3 py-2 ${
              isMobile ? 'text-lg' : ''
            }`}
          />
          <input 
            type="number"
            placeholder='Price'
            value={goalPrice}
            onChange={(e) => setGoalPrice(e.target.value)}
            onKeyPress={handleKeyPress}
            className={`border border-gray-300 rounded px-3 py-2 ${
              isMobile ? 'text-lg' : ''
            }`}
          />
          <input 
            type="number"
            placeholder='Daily contribution'
            value={dailyContribution}
            onChange={(e) => setDailyContribution(e.target.value)}
            onKeyPress={handleKeyPress}
            className={`border border-gray-300 rounded px-3 py-2 ${
              isMobile ? 'text-lg' : ''
            }`}
          />
          <button 
            onClick={handleAddGoal}
            className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ${
              isMobile ? 'text-lg py-3' : ''
            }`}
          >
            Add Goal
          </button>
        </div>
      </div>

      <div className={`${isMobile ? 'p-4 mx-2' : 'mb-6'}`}>
        <h2 className="text-xl font-semibold mb-4">Your Goals</h2>
        <div className="grid gap-4">
          {goals.map(goal => {
            const days = calculateGoalDays(goal.price, goal.dailyContribution)
            const targetDate = calculateGoalDate(days)
            return (
              <div key={goal.id} className="p-4 border rounded bg-blue-50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-semibold ${isMobile ? 'text-xl' : 'text-lg'}`}>
                    {goal.name}
                  </h3>
                  <button 
                    onClick={() => removeGoal(goal.id)}
                    className={`text-red-500 hover:text-red-700 ${
                      isMobile ? 'text-xl px-3 py-1' : ''
                    }`}
                  >
                    ×
                  </button>
                </div>
                <div className={`grid gap-4 text-sm ${
                  isMobile 
                    ? 'grid-cols-1 text-center' 
                    : 'grid-cols-1 md:grid-cols-3'
                }`}>
                  <div>
                    <span className="text-gray-600">Price:</span>
                    <div className={`font-medium ${isMobile ? 'text-lg' : ''}`}>
                      ฿{goal.price}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600">Daily Contribution:</span>
                    <div className={`font-medium ${isMobile ? 'text-lg' : ''}`}>
                      ฿{goal.dailyContribution}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600">Target Date:</span>
                    <div className={`font-medium text-green-600 ${isMobile ? 'text-lg' : ''}`}>
                      {targetDate}
                    </div>
                  </div>
                </div>
                <div className={`mt-2 text-gray-500 ${isMobile ? 'text-sm text-center' : 'text-xs'}`}>
                  {days} days to reach your goal
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GoalsTab 