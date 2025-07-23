import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addIncome,
  getIncomes,
  updateIncome,
  deleteIncome,
} from "../utils/incomes";

export const useIncomes = (userId) => {
  const queryClient = useQueryClient();

  const { data: incomes = [], isLoading } = useQuery({
    queryKey: ["incomes", userId],
    queryFn: () => getIncomes(userId),
    enabled: !!userId,
  });

  const addIncomeMutation = useMutation({
    mutationFn: (income) => addIncome(income, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["incomes", userId] });
    },
  });

  const updateIncomeMutation = useMutation({
    mutationFn: ({ incomeId, incomeData }) =>
      updateIncome(userId, incomeId, incomeData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["incomes", userId] });
    },
  });

  const deleteIncomeMutation = useMutation({
    mutationFn: (incomeId) => deleteIncome(userId, incomeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["incomes", userId] });
    },
  });

  return {
    incomes,
    isLoading,
    addIncome: addIncomeMutation.mutate,
    updateIncome: updateIncomeMutation.mutate,
    deleteIncome: deleteIncomeMutation.mutate,
  };
};
