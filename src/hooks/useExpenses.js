import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addExpense, getExpenses, updateExpense } from "../utils/expenses";

export const useExpenses = (userId) => {
  const queryClient = useQueryClient();

  const { data: expenses = [], isLoading } = useQuery({
    queryKey: ["expenses", userId],
    queryFn: () => getExpenses(userId),
    enabled: !!userId,
  });

  const addExpenseMutation = useMutation({
    mutationFn: (expense) => addExpense(expense, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses", userId] });
    },
  });

  const updateExpenseMutation = useMutation({
    mutationFn: ({ expenseId, expenseData }) =>
      updateExpense(userId, expenseId, expenseData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses", userId] });
    },
  });

  return {
    expenses,
    isLoading,
    addExpense: addExpenseMutation.mutate,
    updateExpense: updateExpenseMutation.mutate,
  };
};
