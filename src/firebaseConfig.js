// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

// Auth change listener
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// User settings functions
export const getUserSettings = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return (
        docSnap.data().settings || { activeTab: "expenses", currency: "THB" }
      );
    } else {
      // Create default settings for new user
      const defaultSettings = { activeTab: "expenses", currency: "THB" };
      await setDoc(docRef, { settings: defaultSettings });
      return defaultSettings;
    }
  } catch (error) {
    console.error("Error getting user settings:", error);
    return { activeTab: "expenses", currency: "THB" };
  }
};

export const saveUserSettings = async (settings, userId) => {
  try {
    const docRef = doc(db, "users", userId);
    await setDoc(docRef, { settings }, { merge: true });
  } catch (error) {
    console.error("Error saving user settings:", error);
  }
};

export { app, analytics, auth, googleProvider, db };
