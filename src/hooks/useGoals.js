import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addGoal, getGoals, updateGoal } from "../utils/goals";

export const useGoals = (userId) => {
  const queryClient = useQueryClient();

  const { data: goals = [], isLoading } = useQuery({
    queryKey: ["goals", userId],
    queryFn: () => getGoals(userId),
    enabled: !!userId,
  });

  const addGoalMutation = useMutation({
    mutationFn: (goal) => addGoal(goal, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["goals", userId] });
    },
  });

  const updateGoalMutation = useMutation({
    mutationFn: ({ goalId, goalData }) => updateGoal(userId, goalId, goalData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["goals", userId] });
    },
  });

  return {
    goals,
    isLoading,
    addGoal: addGoalMutation.mutate,
    updateGoal: updateGoalMutation.mutate,
  };
};
