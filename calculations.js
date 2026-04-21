// Calculate total income
export const getTotalIncome = (transactions) =>
  transactions.reduce(
    (sum, t) => (t.type === "income" ? sum + t.amount : sum),
    0,
  );

// Calculate total expenses
export const getTotalExpenses = (transactions) =>
  transactions.reduce(
    (sum, t) => (t.type === "expense" ? sum + t.amount : sum),
    0,
  );

// Net savings = income - expenses
export const getNetSavings = (transactions) =>
  getTotalIncome(transactions) - getTotalExpenses(transactions);
