import React from 'react'
import useDeviceType from '../hooks/useDeviceType'

const ReportTab = ({ 
  monthlySalary, 
  costs, 
  calculateMonthlyCosts, 
  calculateDailyFreeMoney 
}) => {
  const { isMobile } = useDeviceType()

  return (
    <div className={`space-y-6 ${isMobile ? 'p-4' : ''}`}>
      <div className="p-4 bg-blue-50 border rounded">
        <h2 className="text-xl font-semibold mb-4">Detailed Budget Report</h2>
        <div className={`grid gap-4 ${
          isMobile 
            ? 'grid-cols-1' 
            : 'grid-cols-1 md:grid-cols-3'
        }`}>
          <div className="p-3 bg-white rounded border">
            <div className="text-sm text-gray-600">Monthly Salary</div>
            <div className={`font-bold ${isMobile ? 'text-3xl' : 'text-2xl'}`}>
              ฿{parseFloat(monthlySalary) || 0}
            </div>
          </div>
          <div className="p-3 bg-white rounded border">
            <div className="text-sm text-gray-600">Monthly Expenses</div>
            <div className={`font-bold text-red-600 ${isMobile ? 'text-3xl' : 'text-2xl'}`}>
              ฿{calculateMonthlyCosts().toFixed(2)}
            </div>
          </div>
          <div className="p-3 bg-white rounded border">
            <div className="text-sm text-gray-600">Daily Free Money</div>
            <div className={`font-bold text-green-600 ${isMobile ? 'text-3xl' : 'text-2xl'}`}>
              ฿{calculateDailyFreeMoney().toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-yellow-50 border rounded">
        <h3 className="text-lg font-semibold mb-3">Expense Breakdown</h3>
        <div className="space-y-2">
          {costs.map(cost => {
            const monthlyAmount = cost.period === 'daily' ? cost.amount * 30 :
                                cost.period === 'weekly' ? cost.amount * 4.33 :
                                cost.period === 'yearly' ? cost.amount / 12 :
                                cost.period === 'one-off' ? cost.amount :
                                cost.amount
            return (
              <div key={cost.id} className={`flex justify-between items-center p-2 bg-white rounded ${
                isMobile ? 'flex-col gap-1 text-center' : ''
              }`}>
                <span className={isMobile ? 'text-lg' : ''}>{cost.name}</span>
                <span className={`font-medium ${isMobile ? 'text-lg' : ''}`}>
                  ฿{monthlyAmount.toFixed(2)}/month
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ReportTab 