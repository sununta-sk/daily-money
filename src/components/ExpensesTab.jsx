import React from 'react'
import useDeviceType from '../hooks/useDeviceType'

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
  removeCost 
}) => {
  const { isMobile } = useDeviceType()

  return (
    <>
      <div className={`${isMobile ? 'p-4 mx-2' : 'mb-6 p-4'} border rounded`}>
        <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
        <div className={`grid gap-2 ${
          isMobile 
            ? 'grid-cols-1' 
            : 'grid-cols-1 md:grid-cols-4'
        }`}>
          <input 
            placeholder='Expense name'
            value={costName}
            onChange={(e) => setCostName(e.target.value)}
            onKeyPress={handleKeyPress}
            className={`border border-gray-300 rounded px-3 py-2 ${
              isMobile ? 'text-lg' : ''
            }`}
          />
          <input 
            type="number"
            placeholder='Amount'
            value={costAmount}
            onChange={(e) => setCostAmount(e.target.value)}
            onKeyPress={handleKeyPress}
            className={`border border-gray-300 rounded px-3 py-2 ${
              isMobile ? 'text-lg' : ''
            }`}
          />
          <select 
            value={period} 
            onChange={(e) => setPeriod(e.target.value)}
            className={`border border-gray-300 rounded px-3 py-2 ${
              isMobile ? 'text-lg' : ''
            }`}
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
            className={`px-4 py-2 text-white rounded ${
              addingCost 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'
            } ${isMobile ? 'text-lg py-3' : ''}`}
          >
            {addingCost ? 'Adding...' : 'Add'}
          </button>
        </div>
      </div>

      <div className={`${isMobile ? 'p-4 mx-2' : 'mb-6'}`}>
        <h2 className="text-xl font-semibold mb-4">Your Expenses</h2>
        <div className="grid gap-2">
          {costs.map(cost => (
            <div key={cost.id} className={`flex justify-between items-center p-3 border rounded bg-gray-50 ${
              isMobile ? 'flex-col gap-2 text-center' : ''
            }`}>
              <span className={`font-medium ${isMobile ? 'text-lg' : ''}`}>
                {cost.name}
              </span>
              <div className={`flex items-center gap-4 ${
                isMobile ? 'flex-col gap-1' : ''
              }`}>
                <span className={`font-medium ${isMobile ? 'text-lg' : ''}`}>
                  ฿{cost.amount} ({cost.period})
                </span>
                <button 
                  onClick={() => removeCost(cost.id)}
                  className={`text-red-500 hover:text-red-700 ${
                    isMobile ? 'text-xl px-3 py-1' : ''
                  }`}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ExpensesTab 