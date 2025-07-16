// Period options for income, expenses, and goals
export const PERIOD_OPTIONS = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
  { value: "one-off", label: "One-off" },
];

// Helper function to get period label by value
export const getPeriodLabel = (value) => {
  const period = PERIOD_OPTIONS.find((p) => p.value === value);
  return period ? period.label : value;
};

// Helper function to get period value by label
export const getPeriodValue = (label) => {
  const period = PERIOD_OPTIONS.find((p) => p.label === label);
  return period ? period.value : label;
};
