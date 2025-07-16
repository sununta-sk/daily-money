import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar/Navbar";
import { onAuthChange } from "./firebaseConfig";
import { useUserSettings } from "./hooks/useUserSettings";

function App() {
  const [user, setUser] = useState(null);

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthChange(setUser);
    return () => unsubscribe();
  }, []);

  // Settings hook - always call it, but pass null if no user
  const { settings, updateSettings } = useUserSettings(user?.uid || null);
  const { activeTab = "expenses", currency = "THB" } = settings || {};

  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300 p-3 md:p-4">
      <div className="flex flex-col h-full gap-2">
        {/* ===== NAVBAR ===== */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={(tab) => updateSettings({ activeTab: tab })}
          currency={currency}
          setCurrency={(cur) => updateSettings({ currency: cur })}
          user={user}
        />
      </div>
    </div>
  );
}

export default App;
