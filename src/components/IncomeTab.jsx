import React from 'react'
import useDeviceType from '../hooks/useDeviceType'

const IncomeTab = ({ monthlySalary, handleSalaryChange }) => {
  const { isMobile } = useDeviceType()

  return (
    <div className={`${isMobile ? 'p-4' : 'mb-6'}`}>
      <label className="block text-sm font-medium mb-2">Monthly Salary</label>
      <input 
        type="number"
        placeholder='Enter monthly salary'
        value={monthlySalary}
        onChange={handleSalaryChange}
        className={`border border-gray-300 rounded px-3 py-2 w-full ${
          isMobile ? 'text-lg' : ''
        }`}
      />
    </div>
  )
}

export default IncomeTab 