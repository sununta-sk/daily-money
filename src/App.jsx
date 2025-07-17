import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar/Navbar";
import { onAuthChange, signInWithGoogle } from "./firebaseConfig";
import { getActiveTab, getCurrency } from "./utils/database";
import { useUserSettings } from "./hooks/useUserSettings";

function App() {
  const [user, setUser] = useState(null);
  const tabs = ["incomes","expenses","goals"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const unsubscribe = onAuthChange(setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user?.uid) return;
    (async () => {
      const [savedTab, savedCurrency] = await Promise.all([
        getActiveTab(user.uid),
        getCurrency(user.uid),
      ]);
      if (savedTab) setActiveTab(savedTab);
      if (savedCurrency) setCurrency(savedCurrency);
    })();
  }, [user?.uid]);

  const handleLogin = async () => {
    try {
      const loggedInUser = await signInWithGoogle();
      setUser(loggedInUser);
    } catch (error) {
      alert("Login failed");
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  console.log(activeTab);
  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300 p-3 md:p-4">
      <div className="flex flex-col h-full gap-2">
        {/* ===== NAVBAR ===== */}
        <Navbar
          tabs={tabs}
          setActiveTab={setActiveTab}
          uid={user?.uid}
          setCurrency={setCurrency}
          currency={currency}
        />

        <AddArea
          activeTab={activeTab}
          selectedCurrency={currency}
          onAddCardItem={handleAddCardItem}
          onOpenChange={handleOpenChange}
        />
      </div>
    </div>
  );
}

export default App;
