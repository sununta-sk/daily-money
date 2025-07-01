export const calculateTotalMoney = (incomes, costs, moneyInBank) => {
  const totalIncome = incomes.reduce((sum, income) => sum + (income.amount || 0), 0);
  const totalCosts = costs.reduce((sum, cost) => sum + (cost.amount || 0), 0);
  return moneyInBank + totalIncome - totalCosts;
};

export const calculateRecurringIncome = (incomes) => {
  return incomes
    .filter(income => income.period === 'monthly')
    .reduce((sum, income) => sum + (income.amount || 0), 0);
};

export const calculateMonthlyExpenses = (costs) => {
  return costs
    .filter(cost => cost.period === 'monthly')
    .reduce((sum, cost) => sum + (cost.amount || 0), 0);
};

export const calculateDailyFreeMoney = (incomes, costs) => {
  const monthlyIncome = calculateRecurringIncome(incomes);
  const monthlyExpenses = calculateMonthlyExpenses(costs);
  const dailyIncome = monthlyIncome / 30;
  const dailyExpenses = monthlyExpenses / 30;
  return dailyIncome - dailyExpenses;
};

export const calculateHowLongYouCanLive = (incomes, costs, moneyInBank) => {
  const totalMoney = calculateTotalMoney(incomes, costs, moneyInBank);
  const dailyFreeMoney = calculateDailyFreeMoney(incomes, costs);
  
  if (dailyFreeMoney <= 0) return Infinity;
  return totalMoney / dailyFreeMoney;
};

export const calculateGoalDays = (price, dailyContribution) => {
  if (!dailyContribution || dailyContribution <= 0) return Infinity;
  return Math.ceil(price / dailyContribution);
};

export const calculateGoalDate = (days) => {
  if (days === Infinity) return 'Never';
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + days);
  return targetDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

export const getSortedItems = (items, sortOrder) => {
  if (!items || items.length === 0) return [];
  
  return [...items].sort((a, b) => {
    const dateA = a.timestamp?.toDate?.() || new Date(a.timestamp) || new Date(0);
    const dateB = b.timestamp?.toDate?.() || new Date(b.timestamp) || new Date(0);
    
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });
}; 