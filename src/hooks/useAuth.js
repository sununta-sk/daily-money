import { useState, useEffect } from "react";
import { onAuthChange } from "../firebaseConfig";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Coordinate with database for auth operations
  const signIn = async () => {
    try {
      console.log("Sign in functionality - TODO: Implement when ready");
      // TODO: Implement signInWithGoogle when ready
      throw new Error("Sign in not implemented yet");
    } catch (error) {
      console.error("Sign in error:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      console.log("Sign out functionality - TODO: Implement when ready");
      // TODO: Implement signOutUser when ready
      throw new Error("Sign out not implemented yet");
    } catch (error) {
      console.error("Sign out error:", error);
      throw error;
    }
  };

  return {
    user,
    signIn,
    signOut,
  };
};
