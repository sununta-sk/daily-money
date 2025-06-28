// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxYyDUPCRPb5O6-GucCcmO4jcdf9rBEho",
  authDomain: "daily-money-94f02.firebaseapp.com",
  projectId: "daily-money-94f02",
  storageBucket: "daily-money-94f02.firebasestorage.app",
  messagingSenderId: "31843473349",
  appId: "1:31843473349:web:249d43c7856d1b60b39dac",
  measurementId: "G-6WZTW0WFRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, analytics, auth, googleProvider, db }; 