import React, { useState } from 'react'

function App() {
  const [monthlySalary, setMonthlySalary] = useState('20000')
  const [costName, setCostName] = useState('')
  const [costAmount, setCostAmount] = useState('')
  const [period, setPeriod] = useState('daily')
  const [costs, setCosts] = useState([])

  const handleAddCost = () => {
    const number = parseFloat(costAmount)
    if (!isNaN(number) && costName.trim() && costAmount.trim()) {
      const newCost = {
        id: Date.now(),
        name: costName.trim(),
        amount: number,
        period: period
      }
      setCosts([...costs, newCost])
      setCostName('')
      setCostAmount('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddCost()
    }
  }

  const calculateMonthlyCosts = () => {
    return costs.reduce((total, cost) => {
      switch (cost.period) {
        case 'daily': return total + (cost.amount * 30)
        case 'weekly': return total + (cost.amount * 4.33)
        case 'monthly': return total + cost.amount
        case 'yearly': return total + (cost.amount / 12)
        default: return total
      }
    }, 0)
  }

  const getDaysInMonth = () => {
    const date = new Date()
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const calculateDailyFreeMoney = () => {
    const salary = parseFloat(monthlySalary) || 0
    const monthlyCosts = calculateMonthlyCosts()
    const remaining = salary - monthlyCosts
    const daysInMonth = getDaysInMonth()
    return remaining / daysInMonth
  }

  const removeCost = (id) => {
    setCosts(costs.filter(cost => cost.id !== id))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 bg-purple-200 p-4 rounded">Budget Dashboard</h1>
      
      {/* Monthly Salary Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Monthly Salary</label>
        <input 
          type="number"
          placeholder='Enter monthly salary'
          value={monthlySalary}
          onChange={(e) => setMonthlySalary(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>

      {/* Add Cost Section */}
      <div className="mb-6 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-4">Add Cost</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-2">
          <input 
            placeholder='Cost name'
            value={costName}
            onChange={(e) => setCostName(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input 
            type="number"
            placeholder='Amount'
            value={costAmount}
            onChange={(e) => setCostAmount(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <select 
            value={period} 
            onChange={(e) => setPeriod(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button onClick={handleAddCost} className="px-4 py-2 bg-blue-500 text-white rounded">
            Add
          </button>
        </div>
      </div>

      {/* Report Section */}
      <div className="p-4 bg-blue-50 border rounded mb-6">
        <h2 className="text-xl font-semibold mb-4">Budget Report</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-white rounded border">
            <div className="text-sm text-gray-600">Monthly Salary</div>
            <div className="text-2xl font-bold">฿{parseFloat(monthlySalary) || 0}</div>
          </div>
          <div className="p-3 bg-white rounded border">
            <div className="text-sm text-gray-600">Monthly Costs</div>
            <div className="text-2xl font-bold text-red-600">฿{calculateMonthlyCosts().toFixed(2)}</div>
          </div>
          <div className="p-3 bg-white rounded border">
            <div className="text-sm text-gray-600">Daily Free Money</div>
            <div className="text-2xl font-bold text-green-600">฿{calculateDailyFreeMoney().toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Costs Dashboard */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Costs</h2>
        <div className="grid gap-2">
          {costs.map(cost => (
            <div key={cost.id} className="flex justify-between items-center p-3 border rounded bg-gray-50">
              <span className="font-medium">{cost.name}</span>
              <div className="flex items-center gap-4">
                <span className="font-medium">฿{cost.amount} ({cost.period})</span>
                <button 
                  onClick={() => removeCost(cost.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
