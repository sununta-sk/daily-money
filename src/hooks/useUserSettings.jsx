import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserSettings, saveUserSettings } from "../utils/userSettings";
import { auth } from "../firebaseConfig";

export function useUserSettings() {
  const queryClient = useQueryClient();
  const uid = auth.currentUser?.uid;

  const { data: settings, isLoading } = useQuery({
    queryKey: ["userSettings", uid],
    queryFn: () => getUserSettings(uid),
    enabled: !!uid,
  });

  const mutation = useMutation({
    mutationFn: (newSettings) => saveUserSettings(newSettings, uid),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSettings", uid] });
    },
  });

  const updateSettings = (partial) => {
    if (settings) {
      mutation.mutate({ ...settings, ...partial });
    }
  };

  return { settings, isLoading, updateSettings };
}
