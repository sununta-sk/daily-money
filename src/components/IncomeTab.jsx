import React from 'react'

const IncomeTab = ({ monthlySalary, handleSalaryChange }) => {
  return (
    <div className="p-2 sm:p-4">
      <label className="block text-sm sm:text-base font-medium mb-2">Monthly Salary</label>
      <input 
        type="number"
        placeholder='Enter monthly salary'
        value={monthlySalary}
        onChange={handleSalaryChange}
        className="border border-gray-300 rounded px-3 py-2 w-full text-base sm:text-lg"
      />
    </div>
  )
}

export default IncomeTab 