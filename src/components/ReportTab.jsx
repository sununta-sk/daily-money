import React from 'react'
import { formatThaiBaht, formatNumber } from '../utils/formatters'
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
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Financial Report</h2>
      
      <div className="grid gap-4">
        <ReportCard
          title="Money in Bank"
          value={formatThaiBaht(parseFloat(moneyInBank) || 0)}
          subtitle="Current bank balance"
          backgroundColor="bg-gray-50"
          textColor="text-gray-600"
          valueColor="text-gray-800"
          inline={true}
        />

        <ReportCard
          title="Total Money Available"
          value={formatThaiBaht(totalMoney)}
          subtitle="Bank + all income sources"
          backgroundColor="bg-gray-50"
          textColor="text-gray-600"
          valueColor="text-gray-800"
          inline={true}
        />

        <ReportCard
          title="Monthly Recurring Income"
          value={formatThaiBaht(recurringIncome)}
          subtitle="Regular income streams only"
          backgroundColor="bg-gray-50"
          textColor="text-gray-600"
          valueColor="text-gray-800"
          inline={true}
        />

        <ReportCard
          title="Total Monthly Expenses"
          value={formatThaiBaht(totalExpenses)}
          subtitle="Including spend limits"
          backgroundColor="bg-gray-50"
          textColor="text-gray-600"
          valueColor="text-gray-800"
          inline={true}
        />

        <ReportCard
          title="Daily Free Money"
          value={formatThaiBaht(dailyFreeMoney)}
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