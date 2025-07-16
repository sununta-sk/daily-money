import { useEffect, useState } from "react";
import { getUserSettings, saveUserSettings } from "../firebaseConfig";

export const useUserSettings = (userId) => {
  const [settings, setSettings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch settings on mount
  useEffect(() => {
    const load = async () => {
      const data = await getUserSettings(userId);
      setSettings(data);
      setIsLoading(false);
    };

    if (userId) load();
  }, [userId]);

  // Update settings in Firestore and locally
  const updateSettings = async (newValues) => {
    if (!userId) return;
    const updated = { ...settings, ...newValues };
    await saveUserSettings(updated, userId);
    setSettings(updated);
  };

  return { settings, updateSettings, isLoading };
};
