export const calculateTotalMoney = (incomes, costs, moneyInBank) => {
  const totalIncome = incomes.reduce(
    (sum, income) => sum + (income.amount || 0),
    0
  );
  const totalCosts = costs.reduce((sum, cost) => sum + (cost.amount || 0), 0);
  const bankAmount = parseFloat(moneyInBank) || 0;
  return bankAmount + totalIncome - totalCosts;
};

export const calculateRecurringIncome = (incomes) => {
  return incomes
    .filter((income) => income.period === "monthly")
    .reduce((sum, income) => sum + (income.amount || 0), 0);
};

export const calculateAccessibleFundsImpact = (
  incomes,
  currentDate = new Date()
) => {
  let totalImpact = 0;

  incomes.forEach((income) => {
    const amount = income.amount || 0;
    const isExternal = income.isExternal !== false; // Default to external if not specified
    const multiplier = isExternal ? 1 : -1; // External adds, internal subtracts

    switch (income.period) {
      case "one-off":
        // One-offs have immediate impact and never retrigger
        totalImpact += amount * multiplier;
        break;
      case "daily":
        // Daily impact every day
        totalImpact += amount * multiplier;
        break;
      case "weekly":
        // Weekly impact on Mondays (day 1)
        if (currentDate.getDay() === 1) {
          totalImpact += amount * multiplier;
        }
        break;
      case "monthly":
        // Monthly impact on 1st of month
        if (currentDate.getDate() === 1) {
          totalImpact += amount * multiplier;
        }
        break;
      default:
        // Default to monthly if no period specified
        if (currentDate.getDate() === 1) {
          totalImpact += amount * multiplier;
        }
    }
  });

  return totalImpact;
};

export const calculateProjectedAccessibleFunds = (
  incomes,
  currentAccessibleFunds,
  daysAhead = 30
) => {
  let projectedFunds = parseFloat(currentAccessibleFunds) || 0;
  const currentDate = new Date();

  // Process one-offs immediately
  incomes
    .filter((income) => income.period === "one-off")
    .forEach((income) => {
      const amount = income.amount || 0;
      const isExternal = income.isExternal !== false;
      const multiplier = isExternal ? 1 : -1;
      projectedFunds += amount * multiplier;
    });

  // Project recurring income over the specified days
  for (let day = 0; day < daysAhead; day++) {
    const checkDate = new Date(currentDate);
    checkDate.setDate(currentDate.getDate() + day);

    incomes
      .filter((income) => income.period !== "one-off")
      .forEach((income) => {
        const amount = income.amount || 0;
        const isExternal = income.isExternal !== false;
        const multiplier = isExternal ? 1 : -1;

        switch (income.period) {
          case "daily":
            projectedFunds += amount * multiplier;
            break;
          case "weekly":
            if (checkDate.getDay() === 1) {
              // Monday
              projectedFunds += amount * multiplier;
            }
            break;
          case "monthly":
            if (checkDate.getDate() === 1) {
              // 1st of month
              projectedFunds += amount * multiplier;
            }
            break;
        }
      });
  }

  return projectedFunds;
};

export const calculateMonthlyExpenses = (costs) => {
  return costs
    .filter((cost) => cost.period === "monthly")
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
  if (days === Infinity) return "Never";
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + days);
  return targetDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getSortedItems = (items, sortOrder) => {
  if (!items || items.length === 0) return [];

  return [...items].sort((a, b) => {
    const dateA =
      a.timestamp?.toDate?.() || new Date(a.timestamp) || new Date(0);
    const dateB =
      b.timestamp?.toDate?.() || new Date(b.timestamp) || new Date(0);

    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });
};
