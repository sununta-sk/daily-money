import React from 'react'
import { formatCurrency } from '../utils/currency'
import { 
  calculateTotalMoney, 
  calculateRecurringIncome, 
  calculateMonthlyExpenses, 
  calculateDailyFreeMoney, 
  calculateHowLongYouCanLive 
} from '../utils/calculations'
import ReportCard from './ReportCard'

const ReportTab = ({ 
  incomes, 
  costs, 
  moneyInBank,
  selectedCurrency
}) => {
  const totalMoney = calculateTotalMoney(incomes, costs, moneyInBank);
  const recurringIncome = calculateRecurringIncome(incomes);
  const totalExpenses = calculateMonthlyExpenses(costs);
  const dailyFreeMoney = calculateDailyFreeMoney(incomes, costs);
  const survivalTime = calculateHowLongYouCanLive(incomes, costs, moneyInBank);

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">Financial Report</h2>
      
      <div className="grid gap-4">
        <ReportCard
          title="Money in Bank"
          value={formatCurrency(parseFloat(moneyInBank) || 0, selectedCurrency)}
          subtitle="Current bank balance"
          backgroundColor="bg-gray-50"
          textColor="text-gray-600"
          valueColor="text-gray-800"
          inline={true}
        />

        <ReportCard
          title="Total Money Available"
          value={formatCurrency(totalMoney, selectedCurrency)}
          subtitle="Bank + all income sources"
          backgroundColor="bg-gray-50"
          textColor="text-gray-600"
          valueColor="text-gray-800"
          inline={true}
        />

        <ReportCard
          title="Monthly Recurring Income"
          value={formatCurrency(recurringIncome, selectedCurrency)}
          subtitle="Regular income streams only"
          backgroundColor="bg-gray-50"
          textColor="text-gray-600"
          valueColor="text-gray-800"
          inline={true}
        />

        <ReportCard
          title="Total Monthly Expenses"
          value={formatCurrency(totalExpenses, selectedCurrency)}
          subtitle="Including spend limits"
          backgroundColor="bg-gray-50"
          textColor="text-gray-600"
          valueColor="text-gray-800"
          inline={true}
        />

        <ReportCard
          title="Daily Free Money"
          value={formatCurrency(dailyFreeMoney, selectedCurrency)}
          subtitle="Available daily after expenses"
          backgroundColor="bg-gray-50"
          textColor="text-gray-600"
          valueColor="text-gray-800"
          inline={true}
        />

        <ReportCard
          title="How Long You Can Live"
          value={survivalTime === Infinity ? 'Forever' : `${Math.round(survivalTime)} days`}
          subtitle="Based on current income and expenses"
          backgroundColor="bg-gray-50"
          textColor="text-gray-600"
          valueColor="text-gray-800"
          inline={true}
        />
      </div>
    </div>
  )
}

export default ReportTab 