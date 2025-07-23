import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

// Get user settings (or return defaults if not found)
export const getUserSettings = async (userId) => {
  const settingsRef = doc(db, "users", userId, "userSettings", "settings");

  try {
    const docSnap = await getDoc(settingsRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }

    // Return default settings if doc doesn't exist
    return {
      activeTab: "expenses",
      currency: "THB",
      moneyInBank: "",
      spendLimit: "",
    };
  } catch {
    // On error, return same defaults
    return {
      activeTab: "expenses",
      currency: "THB",
      moneyInBank: "",
      spendLimit: "",
    };
  }
};

// Save or update user settings
export const saveUserSettings = async (settings, userId) => {
  const settingsRef = doc(db, "users", userId, "userSettings", "settings");

  try {
    await updateDoc(settingsRef, {
      ...settings,
      updatedAt: serverTimestamp(),
    });
    return settings;
  } catch {
    // If doc doesn't exist, create it
    await setDoc(settingsRef, {
      ...settings,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return settings;
  }
};
