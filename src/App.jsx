import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar/Navbar";
import AddArea from "./components/AddArea/AddArea";
import ItemsList from "./components/ItemsList/ItemsList";
import MiniReport from "./components/MiniReport/MiniReport";
import WhaleLogo from "./components/WhaleLogo";
import {
  onAuthChange,
  getUserData,
  signInWithGoogle,
  updateIncome,
  updateCost,
  updateGoal,
  deleteIncome,
  deleteCost,
  deleteGoal,
  saveIncome,
  saveCost,
  saveGoal,
  getUserSettings,
  saveUserSettings,
} from "./utils/database";
import { fetchExchangeRates } from "./utils/currency";
import { capitalizeFirstLetter } from "./utils/formatters";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("income");
  const [selectedCurrency, setSelectedCurrency] = useState("THB");

  // Data states
  const [incomes, setIncomes] = useState([]);
  const [costs, setCosts] = useState([]);
  const [goals, setGoals] = useState([]);
  const [moneyInBank, setMoneyInBank] = useState("");
  const [spendLimit, setSpendLimit] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  // CRUD operations
  const handleUpdateItem = async (id, updatedData) => {
    try {
      if (activeTab === "income") {
        const updatedIncome = {
          name: capitalizeFirstLetter(updatedData.name?.trim() || ""),
          amount: parseFloat(updatedData.amount),
          period: updatedData.period,
          ...(updatedData.isExternal !== undefined && {
            isExternal: updatedData.isExternal,
          }),
        };
        await updateIncome(id, updatedIncome, user?.uid);
        setIncomes(
          incomes.map((income) =>
            income.id === id ? { ...income, ...updatedIncome } : income
          )
        );
      } else if (activeTab === "expenses") {
        const updatedCost = {
          name: capitalizeFirstLetter(updatedData.name?.trim() || ""),
          amount: parseFloat(updatedData.amount),
          period: updatedData.period,
        };
        await updateCost(id, updatedCost, user?.uid);
        setCosts(
          costs.map((cost) =>
            cost.id === id ? { ...cost, ...updatedCost } : cost
          )
        );
      } else if (activeTab === "goals") {
        const updatedGoal = {
          name: capitalizeFirstLetter(updatedData.name?.trim() || ""),
          price: parseFloat(updatedData.price),
          dailyContribution: parseFloat(updatedData.dailyContribution),
        };
        await updateGoal(id, updatedGoal, user?.uid);
        setGoals(
          goals.map((goal) =>
            goal.id === id ? { ...goal, ...updatedGoal } : goal
          )
        );
      }
    } catch {
      // Handle error silently
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      if (activeTab === "income") {
        await deleteIncome(id, user?.uid);
        setIncomes(incomes.filter((income) => income.id !== id));
      } else if (activeTab === "expenses") {
        await deleteCost(id, user?.uid);
        setCosts(costs.filter((cost) => cost.id !== id));
      } else if (activeTab === "goals") {
        await deleteGoal(id, user?.uid);
        setGoals(goals.filter((goal) => goal.id !== id));
      }
    } catch {
      // Handle error silently
    }
  };

  // Add item callbacks
  const handleAddIncome = async (incomeData) => {
    try {
      const timestamp = new Date();
      const newIncome = { ...incomeData, userId: user?.uid };
      const savedIncome = await saveIncome(newIncome, timestamp);
      setIncomes([...incomes, savedIncome]);
    } catch {
      // Handle error silently
    }
  };

  const handleAddCost = async (costData) => {
    try {
      const timestamp = new Date();
      const newCost = { ...costData, userId: user?.uid };
      const savedCost = await saveCost(newCost, timestamp);
      setCosts([...costs, savedCost]);
    } catch {
      // Handle error silently
    }
  };

  const handleAddGoal = async (goalData) => {
    try {
      const timestamp = new Date();
      const newGoal = { ...goalData, userId: user?.uid };
      const savedGoal = await saveGoal(newGoal, timestamp);
      setGoals([...goals, savedGoal]);
    } catch {
      // Handle error silently
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        loadUserData(user.uid);
        loadUserSettings(user.uid);
        fetchExchangeRates();
      }
    });

    return unsubscribe;
  }, []);

  // Load user settings from database
  const loadUserSettings = async (userId) => {
    try {
      const settings = await getUserSettings(userId);
      console.log("Loaded settings:", settings);
      setMoneyInBank(settings.moneyInBank);
      setSpendLimit(settings.spendLimit);
      setActiveTab(settings.lastTab);
      setSettingsLoaded(true);
    } catch (error) {
      console.error("Error loading user settings:", error);
      setSettingsLoaded(true);
    }
  };

  // Save available funds to database
  const saveMoneyInBank = async (newMoneyInBank) => {
    if (user?.uid) {
      try {
        console.log("Saving moneyInBank:", newMoneyInBank);

        // Get current settings first to avoid overwriting other fields
        const currentSettings = await getUserSettings(user.uid);

        await saveUserSettings(
          {
            ...currentSettings,
            moneyInBank: newMoneyInBank,
          },
          user.uid
        );
        console.log("MoneyInBank saved successfully");
      } catch (error) {
        console.error("Error saving moneyInBank:", error);
      }
    }
  };

  // Save spend limit to database
  const saveSpendLimit = async (newSpendLimit) => {
    if (user?.uid) {
      try {
        console.log("Saving spendLimit:", newSpendLimit);

        // Get current settings first to avoid overwriting other fields
        const currentSettings = await getUserSettings(user.uid);

        await saveUserSettings(
          {
            ...currentSettings,
            spendLimit: newSpendLimit,
          },
          user.uid
        );
        console.log("SpendLimit saved successfully");
      } catch (error) {
        console.error("Error saving spendLimit:", error);
      }
    }
  };

  // Save lastTab to database when it changes
  useEffect(() => {
    const saveLastTab = async () => {
      if (user?.uid && activeTab) {
        try {
          // Get current settings first to avoid overwriting other fields
          const currentSettings = await getUserSettings(user.uid);

          await saveUserSettings(
            {
              ...currentSettings,
              lastTab: activeTab,
            },
            user.uid
          );
        } catch (error) {
          console.error("Error saving last tab:", error);
        }
      }
    };

    saveLastTab();
  }, [activeTab, user?.uid]);

  const loadUserData = async (userId) => {
    try {
      const data = await getUserData(userId);
      setIncomes(data.incomes || []);
      setCosts(data.costs || []);
      setGoals(data.goals || []);
    } catch {
      // Handle error silently
    }
  };

  if (loading || !settingsLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <WhaleLogo className="w-16 h-16" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Daily Money</h1>
          <p className="mb-4 text-gray-600">
            Please sign in to use the budget dashboard
          </p>
          <button
            onClick={async () => {
              try {
                await signInWithGoogle();
              } catch {
                // Handle error silently
              }
            }}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2 mx-auto text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300 p-3 md:p-4">
      <div className="flex flex-col h-full gap-2">
        <Navbar
          user={user}
          onTabChange={setActiveTab}
          onCurrencyChange={setSelectedCurrency}
          lastTab={activeTab}
        />
        {activeTab !== "report" && (
          <AddArea
            activeTab={activeTab}
            onAddIncome={handleAddIncome}
            onAddCost={handleAddCost}
            onAddGoal={handleAddGoal}
            selectedCurrency={selectedCurrency}
          />
        )}
        <ItemsList
          activeTab={activeTab}
          incomes={incomes}
          costs={costs}
          goals={goals}
          moneyInBank={moneyInBank}
          setMoneyInBank={setMoneyInBank}
          spendLimit={spendLimit}
          setSpendLimit={setSpendLimit}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          selectedCurrency={selectedCurrency}
          onUpdateItem={handleUpdateItem}
          onDeleteItem={handleDeleteItem}
          onSaveMoneyInBank={saveMoneyInBank}
          onSaveSpendLimit={saveSpendLimit}
        />
        <MiniReport
          incomes={incomes}
          costs={costs}
          selectedCurrency={selectedCurrency}
        />
      </div>
    </div>
  );
}

export default App;
