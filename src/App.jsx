import React, { useState, useEffect } from "react";
import "./firebase";
import { auth, googleProvider, db } from "./firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import IncomeTab from "./components/IncomeTab";
import ExpensesTab from "./components/ExpensesTab";
import ReportTab from "./components/ReportTab";
import GoalsTab from "./components/GoalsTab";
import AddItemForm from './components/AddItemForm'
import ItemsList from './components/ItemsList'
import { formatThaiBaht, formatNumber, capitalizeFirstLetter } from './utils/formatters'

function App() {
  // Income state
  const [incomes, setIncomes] = useState([]);
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomePeriod, setIncomePeriod] = useState("monthly");
  
  // Expenses state
  const [costName, setCostName] = useState("");
  const [costAmount, setCostAmount] = useState("");
  const [period, setPeriod] = useState("monthly");
  const [costs, setCosts] = useState([]);
  
  // Goals state
  const [goalName, setGoalName] = useState("");
  const [goalPrice, setGoalPrice] = useState("");
  const [dailyContribution, setDailyContribution] = useState("");
  const [goals, setGoals] = useState([]);
  
  // General state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addingCost, setAddingCost] = useState(false);
  const [activeTab, setActiveTab] = useState("income");
  
  // Edit state
  const [editingCost, setEditingCost] = useState(null);
  const [editingGoal, setEditingGoal] = useState(null);
  const [editingIncome, setEditingIncome] = useState(null);
  const [editCostName, setEditCostName] = useState("");
  const [editCostAmount, setEditCostAmount] = useState("");
  const [editCostPeriod, setEditCostPeriod] = useState("monthly");
  const [editGoalName, setEditGoalName] = useState("");
  const [editGoalPrice, setEditGoalPrice] = useState("");
  const [editGoalContribution, setEditGoalContribution] = useState("");
  const [editIncomeName, setEditIncomeName] = useState("");
  const [editIncomeAmount, setEditIncomeAmount] = useState("");
  const [editIncomePeriod, setEditIncomePeriod] = useState("monthly");

  // Add money in bank state
  const [moneyInBank, setMoneyInBank] = useState('0');
  const [lastUpdateDate, setLastUpdateDate] = useState(null);

  // Update the income period options to include special categories
  const INCOME_PERIODS = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
    { value: "one-off", label: "One-off" },
    { value: "money-in-bank", label: "Money in Bank" },
    { value: "spend-limit", label: "Spend Limit" }
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        loadUserData(user.uid);
      } else {
        setCosts([]);
        setIncomes([]);
        setGoals([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const loadUserData = async (userId) => {
    setLoading(true);

    // Load money in bank
    const moneyInBankDoc = await getDoc(doc(db, 'users', userId, 'data', 'moneyInBank'));
    if (moneyInBankDoc.exists()) {
      setMoneyInBank(moneyInBankDoc.data().amount.toString());
      setLastUpdateDate(moneyInBankDoc.data().lastUpdate?.toDate() || null);
    }

    // Load incomes
    const incomesQuery = query(collection(db, "users", userId, "incomes"));
    const incomesSnapshot = await getDocs(incomesQuery);
    const loadedIncomes = incomesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setIncomes(loadedIncomes);

    // Load costs
    const costsQuery = query(collection(db, "users", userId, "costs"));
    const costsSnapshot = await getDocs(costsQuery);
    const loadedCosts = costsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCosts(loadedCosts);

    // Load goals
    const goalsQuery = query(collection(db, "users", userId, "goals"));
    const goalsSnapshot = await getDocs(goalsQuery);
    const loadedGoals = goalsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setGoals(loadedGoals);

    setLoading(false);
  };

  // Save functions
  const saveIncome = async (income) => {
    if (!user) return null;
    const docRef = await addDoc(collection(db, "users", user.uid, "incomes"), {
      name: income.name,
      amount: income.amount,
      period: income.period,
      createdAt: new Date(),
    });
    return docRef.id;
  };

  const saveCost = async (cost) => {
    if (!user) return null;
    const docRef = await addDoc(collection(db, "users", user.uid, "costs"), {
      name: cost.name,
      amount: cost.amount,
      period: cost.period,
      createdAt: new Date(),
    });
    return docRef.id;
  };

  const saveGoal = async (goal) => {
    if (!user) return null;
    const docRef = await addDoc(collection(db, "users", user.uid, "goals"), {
      name: goal.name,
      price: goal.price,
      dailyContribution: goal.dailyContribution,
      createdAt: new Date(),
    });
    return docRef.id;
  };

  const saveMoneyInBank = async (amount) => {
    if (!user) return;
    await setDoc(doc(db, 'users', user.uid, 'data', 'moneyInBank'), {
      amount: parseFloat(amount) || 0,
      lastUpdate: new Date(),
      updatedAt: new Date()
    });
  };

  // Delete functions
  const deleteIncome = async (incomeId) => {
    if (!user) return;
    await deleteDoc(doc(db, "users", user.uid, "incomes", incomeId));
  };

  const deleteCost = async (costId) => {
    if (!user) return;
    await deleteDoc(doc(db, "users", user.uid, "costs", costId));
  };

  const deleteGoal = async (goalId) => {
    if (!user) return;
    await deleteDoc(doc(db, "users", user.uid, "goals", goalId));
  };

  // Update functions
  const updateIncome = async (incomeId, updatedIncome) => {
    if (!user) return;
    await setDoc(doc(db, "users", user.uid, "incomes", incomeId), {
      name: updatedIncome.name,
      amount: updatedIncome.amount,
      period: updatedIncome.period,
      updatedAt: new Date(),
    });
  };

  const updateCost = async (costId, updatedCost) => {
    if (!user) return;
    await setDoc(doc(db, "users", user.uid, "costs", costId), {
      name: updatedCost.name,
      amount: updatedCost.amount,
      period: updatedCost.period,
      updatedAt: new Date(),
    });
  };

  const updateGoal = async (goalId, updatedGoal) => {
    if (!user) return;
    await setDoc(doc(db, "users", user.uid, "goals", goalId), {
      name: updatedGoal.name,
      price: updatedGoal.price,
      dailyContribution: updatedGoal.dailyContribution,
      updatedAt: new Date(),
    });
  };

  // Auth functions
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  // Add functions
  const handleAddIncome = async () => {
    if (!incomeName.trim() || !incomeAmount.trim()) return;

    const number = parseFloat(incomeAmount);
    if (isNaN(number) || number <= 0) return;

    const newIncome = {
      name: capitalizeFirstLetter(incomeName.trim()),
      amount: number,
      period: incomePeriod,
    };

    const incomeId = await saveIncome(newIncome);
    if (incomeId) {
      setIncomes([...incomes, { ...newIncome, id: incomeId }]);
      setIncomeName("");
      setIncomeAmount("");
    }
  };

  const handleAddCost = async () => {
    if (!costName.trim() || !costAmount.trim()) return;

    const number = parseFloat(costAmount);
    if (isNaN(number) || number <= 0) return;

    setAddingCost(true);
    
    const newCost = {
      name: capitalizeFirstLetter(costName.trim()),
      amount: number,
      period: period,
    };
    
    const costId = await saveCost(newCost);
    if (costId) {
      setCosts([...costs, { ...newCost, id: costId }]);
      setCostName("");
      setCostAmount("");
    }

    setAddingCost(false);
  };

  const handleAddGoal = async () => {
    if (!goalName.trim() || !goalPrice.trim() || !dailyContribution.trim()) return;

    const price = parseFloat(goalPrice);
    const contribution = parseFloat(dailyContribution);
    
    if (isNaN(price) || price <= 0 || isNaN(contribution) || contribution <= 0) return;

    const newGoal = {
      name: capitalizeFirstLetter(goalName.trim()),
      price: price,
      dailyContribution: contribution,
    };
    
    const goalId = await saveGoal(newGoal);
    if (goalId) {
      setGoals([...goals, { ...newGoal, id: goalId }]);
      setGoalName("");
      setGoalPrice("");
      setDailyContribution("");
    }
  };

  // Edit functions
  const handleEditIncome = (income) => {
    setEditingIncome(income.id);
    setEditIncomeName(income.name);
    setEditIncomeAmount(income.amount.toString());
    setEditIncomePeriod(income.period);
  };

  const handleSaveIncomeEdit = async () => {
    if (!editIncomeName.trim() || !editIncomeAmount.trim()) return;

    const number = parseFloat(editIncomeAmount);
    if (isNaN(number) || number <= 0) return;

    const updatedIncome = {
      name: capitalizeFirstLetter(editIncomeName.trim()),
      amount: number,
      period: editIncomePeriod,
    };

    await updateIncome(editingIncome, updatedIncome);
    setIncomes(incomes.map((income) =>
      income.id === editingIncome ? { ...income, ...updatedIncome } : income
    ));

    setEditingIncome(null);
    setEditIncomeName("");
    setEditIncomeAmount("");
    setEditIncomePeriod("monthly");
  };

  const handleCancelIncomeEdit = () => {
    setEditingIncome(null);
    setEditIncomeName("");
    setEditIncomeAmount("");
    setEditIncomePeriod("monthly");
  };

  const handleEditCost = (cost) => {
    setEditingCost(cost.id);
    setEditCostName(cost.name);
    setEditCostAmount(cost.amount.toString());
    setEditCostPeriod(cost.period);
  };

  const handleSaveCostEdit = async () => {
    if (!editCostName.trim() || !editCostAmount.trim()) return;

    const number = parseFloat(editCostAmount);
    if (isNaN(number) || number <= 0) return;

    const updatedCost = {
      name: capitalizeFirstLetter(editCostName.trim()),
      amount: number,
      period: editCostPeriod,
    };

    await updateCost(editingCost, updatedCost);
    setCosts(costs.map((cost) =>
      cost.id === editingCost ? { ...cost, ...updatedCost } : cost
    ));

    setEditingCost(null);
    setEditCostName("");
    setEditCostAmount("");
    setEditCostPeriod("monthly");
  };

  const handleCancelCostEdit = () => {
    setEditingCost(null);
    setEditCostName("");
    setEditCostAmount("");
    setEditCostPeriod("monthly");
  };

  const handleEditGoal = (goal) => {
    setEditingGoal(goal.id);
    setEditGoalName(goal.name);
    setEditGoalPrice(goal.price.toString());
    setEditGoalContribution(goal.dailyContribution.toString());
  };

  const handleSaveGoalEdit = async () => {
    if (!editGoalName.trim() || !editGoalPrice.trim() || !editGoalContribution.trim()) return;

    const price = parseFloat(editGoalPrice);
    const contribution = parseFloat(editGoalContribution);

    if (isNaN(price) || price <= 0 || isNaN(contribution) || contribution <= 0) return;

    const updatedGoal = {
      name: editGoalName.trim(),
      price: price,
      dailyContribution: contribution,
    };

    await updateGoal(editingGoal, updatedGoal);
    setGoals(goals.map((goal) =>
      goal.id === editingGoal ? { ...goal, ...updatedGoal } : goal
    ));

    setEditingGoal(null);
    setEditGoalName("");
    setEditGoalPrice("");
    setEditGoalContribution("");
  };

  const handleCancelGoalEdit = () => {
    setEditingGoal(null);
    setEditGoalName("");
    setEditGoalPrice("");
    setEditGoalContribution("");
  };

  // Remove functions
  const removeIncome = async (id) => {
    await deleteIncome(id);
    setIncomes(incomes.filter((income) => income.id !== id));
  };

  const removeCost = async (id) => {
    await deleteCost(id);
    setCosts(costs.filter((cost) => cost.id !== id));
  };

  const removeGoal = async (id) => {
    await deleteGoal(id);
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  // Utility functions
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (activeTab === "income") {
        handleAddIncome();
      } else if (activeTab === "expenses") {
        handleAddCost();
      } else if (activeTab === "goals") {
        handleAddGoal();
      }
    }
  };

  // Update calculation functions
  const calculateTotalMoney = () => {
    const bankMoney = parseFloat(moneyInBank) || 0;
    const incomeMoney = incomes.reduce((total, income) => {
      switch (income.period) {
        case "daily": return total + (income.amount * 30);
        case "weekly": return total + (income.amount * 4.33);
        case "monthly": return total + income.amount;
        case "yearly": return total + (income.amount / 12);
        case "one-off": return total + income.amount;
        case "money-in-bank": return total; // Don't double count
        case "spend-limit": return total; // Don't count as income
        default: return total;
      }
    }, 0);
    
    return bankMoney + incomeMoney;
  };

  const calculateRecurringIncome = () => {
    return incomes.reduce((total, income) => {
      // Only count actual recurring income (not money-in-bank, spend-limit, or one-off)
      switch (income.period) {
        case "daily": return total + (income.amount * 30);
        case "weekly": return total + (income.amount * 4.33);
        case "monthly": return total + income.amount;
        case "yearly": return total + (income.amount / 12);
        default: return total;
      }
    }, 0);
  };

  const calculateMonthlyExpenses = () => {
    const regularExpenses = calculateMonthlyCosts();
    const spendLimit = incomes.reduce((total, income) => {
      return income.period === "spend-limit" ? total + income.amount : total;
    }, 0);
    
    return regularExpenses + spendLimit;
  };

  const calculateMonthlyCosts = () => {
    return costs.reduce((total, cost) => {
      switch (cost.period) {
        case "daily":
          return total + cost.amount * 30;
        case "weekly":
          return total + cost.amount * 4.33;
        case "monthly":
          return total + cost.amount;
        case "yearly":
          return total + cost.amount / 12;
        case "one-off":
          return total + cost.amount;
        default:
          return total;
      }
    }, 0);
  };

  const getDaysInMonth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const calculateDailyFreeMoney = () => {
    const recurringIncome = calculateRecurringIncome();
    const monthlyCosts = calculateMonthlyCosts();
    const remaining = recurringIncome - monthlyCosts;
    const daysInMonth = getDaysInMonth();
    return remaining / daysInMonth;
  };

  const calculateHowLongYouCanLive = () => {
    const totalMoney = calculateTotalMoney();
    const monthlyExpenses = calculateMonthlyExpenses();
    const recurringIncome = calculateRecurringIncome();
    
    // If you have recurring income that covers your expenses
    if (recurringIncome >= monthlyExpenses) {
      return {
        type: "indefinite",
        message: "As long as you maintain your current income",
        months: null,
        days: null
      };
    }
    
    // Calculate how long your total money will last
    const monthlyDeficit = monthlyExpenses - recurringIncome;
    const monthsLeft = totalMoney / monthlyDeficit;
    
    if (monthsLeft <= 0) {
      return {
        type: "negative",
        message: "Your expenses exceed your total money",
        months: 0,
        days: 0
      };
    }
    
    const fullMonths = Math.floor(monthsLeft);
    const remainingDays = Math.floor((monthsLeft - fullMonths) * 30);
    
    return {
      type: "limited",
      message: `${fullMonths} months and ${remainingDays} days`,
      months: fullMonths,
      days: remainingDays
    };
  };

  const calculateGoalDays = (price, dailyContribution) => {
    return Math.ceil(price / dailyContribution);
  };

  const calculateGoalDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString();
  };

  // Auto-update money in bank on 1st of month
  const updateMoneyInBankMonthly = async () => {
    const now = new Date();
    const isFirstOfMonth = now.getDate() === 1;
    const lastUpdate = lastUpdateDate ? new Date(lastUpdateDate) : null;
    const shouldUpdate = isFirstOfMonth && (!lastUpdate || lastUpdate.getMonth() !== now.getMonth());

    if (shouldUpdate) {
      const currentBankAmount = parseFloat(moneyInBank) || 0;
      const recurringIncome = calculateRecurringIncome();
      const newBankAmount = currentBankAmount + recurringIncome;
      
      setMoneyInBank(newBankAmount.toString());
      await saveMoneyInBank(newBankAmount.toString());
      setLastUpdateDate(now);
    }
  };

  // Check for monthly update on component mount
  useEffect(() => {
    if (user) {
      updateMoneyInBankMonthly();
    }
  }, [user, lastUpdateDate]);

  return (
    <div className="w-full p-4">
      {/* Profile Section */}
      <div className="mb-4 p-2 border rounded bg-gray-50">
        {user ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Blue Pastel Cartoon Whale Logo */}
              <svg 
                className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                {/* Whale body */}
                <ellipse cx="12" cy="14" rx="8" ry="4" fill="#93C5FD"/>
                {/* Whale tail */}
                <path d="M4 14 Q2 12 4 10 Q6 12 4 14" fill="#93C5FD"/>
                {/* Whale belly */}
                <ellipse cx="12" cy="14" rx="5" ry="2" fill="#DBEAFE"/>
                {/* Whale eye */}
                <circle cx="10" cy="12" r="1" fill="#1E40AF"/>
                {/* Whale smile */}
                <path d="M10 15 Q12 16 14 15" stroke="#1E40AF" strokeWidth="0.5" fill="none"/>
                {/* Water spout */}
                <path d="M12 8 Q12 6 12 4" stroke="#93C5FD" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <circle cx="12" cy="4" r="0.5" fill="#93C5FD"/>
              </svg>
              
              {/* Nav next to logo */}
              <nav className="flex">
                {[
                  { id: "income", name: "Income" },
                  { id: "expenses", name: "Expenses" },
                  { id: "goals", name: "Goals" },
                  { id: "report", name: "Report" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 sm:px-3 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center flex-shrink-0">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Blue Pastel Cartoon Whale Logo */}
              <svg 
                className="w-6 h-6 sm:w-8 sm:h-8" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                {/* Whale body */}
                <ellipse cx="12" cy="14" rx="8" ry="4" fill="#93C5FD"/>
                {/* Whale tail */}
                <path d="M4 14 Q2 12 4 10 Q6 12 4 14" fill="#93C5FD"/>
                {/* Whale belly */}
                <ellipse cx="12" cy="14" rx="5" ry="2" fill="#DBEAFE"/>
                {/* Whale eye */}
                <circle cx="10" cy="12" r="1" fill="#1E40AF"/>
                {/* Whale smile */}
                <path d="M10 15 Q12 16 14 15" stroke="#1E40AF" strokeWidth="0.5" fill="none"/>
                {/* Water spout */}
                <path d="M12 8 Q12 6 12 4" stroke="#93C5FD" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <circle cx="12" cy="4" r="0.5" fill="#93C5FD"/>
              </svg>
            </div>
            
            <div className="text-center">
              <p className="mb-2 text-sm">Please sign in to use the budget dashboard</p>
              <button
                onClick={signInWithGoogle}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2 mx-auto text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
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
        )}
      </div>

      {user && (
        <>
          {loading ? (
            <div className="text-center py-4">
              <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600 text-sm">Loading your budget data...</p>
            </div>
          ) : (
            <>
              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === "income" && (
                  <>
                    {/* Money in Bank Input */}
                    <div className="p-2 sm:p-4 border rounded mb-4 sm:mb-6 bg-blue-50">
                      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Money in Bank</h2>
                      <div className="flex items-center gap-4">
                        <input 
                          type="number"
                          placeholder="Enter amount in bank"
                          value={moneyInBank}
                          onChange={(e) => setMoneyInBank(e.target.value)}
                          className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base flex-1"
                        />
                        <div className="text-sm text-gray-600">
                          Auto-updates monthly on the 1st
                        </div>
                      </div>
                    </div>

                    <AddItemForm
                      title="Add Income"
                      fields={[
                        {
                          type: "text",
                          placeholder: "Income name",
                          value: incomeName,
                          onChange: (e) => setIncomeName(e.target.value),
                        },
                        {
                          type: "number",
                          placeholder: "Amount",
                          value: incomeAmount,
                          onChange: (e) => setIncomeAmount(e.target.value),
                        },
                        {
                          type: "select",
                          value: incomePeriod,
                          onChange: (e) => setIncomePeriod(e.target.value),
                          options: INCOME_PERIODS,
                        },
                      ]}
                      onSubmit={handleAddIncome}
                      isSubmitting={false}
                      onKeyPress={handleKeyPress}
                    />

                    <ItemsList
                      title="Your Income Streams"
                      items={incomes}
                      editingItem={editingIncome}
                      onEdit={handleEditIncome}
                      onSave={handleSaveIncomeEdit}
                      onCancel={handleCancelIncomeEdit}
                      onDelete={removeIncome}
                      renderEditForm={(income) => (
                        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                          <input
                            placeholder="Income name"
                            value={editIncomeName}
                            onChange={(e) => setEditIncomeName(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                          />
                          <input
                            type="number"
                            placeholder="Amount"
                            value={editIncomeAmount}
                            onChange={(e) => setEditIncomeAmount(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                          />
                          <select
                            value={editIncomePeriod}
                            onChange={(e) => setEditIncomePeriod(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                          >
                            {INCOME_PERIODS.map(period => (
                              <option key={period.value} value={period.value}>
                                {period.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                      renderDisplayContent={(income) => (
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm sm:text-base">
                            {capitalizeFirstLetter(income.name)}
                          </span>
                          <span className="font-medium text-sm sm:text-base">
                            {formatThaiBaht(income.amount)} ({income.period})
                          </span>
                        </div>
                      )}
                    />
                  </>
                )}

                {activeTab === "expenses" && (
                  <>
                    <AddItemForm
                      title="Add Expense"
                      fields={[
                        {
                          type: "text",
                          placeholder: "Expense name",
                          value: costName,
                          onChange: (e) => setCostName(e.target.value),
                        },
                        {
                          type: "number",
                          placeholder: "Amount",
                          value: costAmount,
                          onChange: (e) => setCostAmount(e.target.value),
                        },
                        {
                          type: "select",
                          value: period,
                          onChange: (e) => setPeriod(e.target.value),
                          options: INCOME_PERIODS,
                        },
                      ]}
                      onSubmit={handleAddCost}
                      isSubmitting={addingCost}
                      onKeyPress={handleKeyPress}
                    />

                    <ItemsList
                      title="Your Expenses"
                      items={costs}
                      editingItem={editingCost}
                      onEdit={handleEditCost}
                      onSave={handleSaveCostEdit}
                      onCancel={handleCancelCostEdit}
                      onDelete={removeCost}
                      renderEditForm={(cost) => (
                        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                          <input
                            placeholder="Expense name"
                            value={editCostName}
                            onChange={(e) => setEditCostName(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                          />
                          <input
                            type="number"
                            placeholder="Amount"
                            value={editCostAmount}
                            onChange={(e) => setEditCostAmount(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                          />
                          <select
                            value={editCostPeriod}
                            onChange={(e) => setEditCostPeriod(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                          >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                            <option value="one-off">One-off</option>
                          </select>
                        </div>
                      )}
                      renderDisplayContent={(cost) => (
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm sm:text-base">
                            {capitalizeFirstLetter(cost.name)}
                          </span>
                          <span className="font-medium text-sm sm:text-base">
                            {formatThaiBaht(cost.amount)} ({cost.period})
                          </span>
                        </div>
                      )}
                    />
                  </>
                )}

                {activeTab === "goals" && (
                  <>
                    <AddItemForm
                      title="Add Goal"
                      fields={[
                        {
                          type: "text",
                          placeholder: "Goal name",
                          value: goalName,
                          onChange: (e) => setGoalName(e.target.value),
                        },
                        {
                          type: "number",
                          step: "any",
                          placeholder: "Price",
                          value: goalPrice,
                          onChange: (e) => setGoalPrice(e.target.value),
                        },
                        {
                          type: "number",
                          step: "any",
                          placeholder: "Daily contribution",
                          value: dailyContribution,
                          onChange: (e) => setDailyContribution(e.target.value),
                        },
                      ]}
                      onSubmit={handleAddGoal}
                      isSubmitting={false}
                      onKeyPress={handleKeyPress}
                    />

                    <ItemsList
                      title="Your Goals"
                      items={goals}
                      editingItem={editingGoal}
                      onEdit={handleEditGoal}
                      onSave={handleSaveGoalEdit}
                      onCancel={handleCancelGoalEdit}
                      onDelete={removeGoal}
                      renderEditForm={(goal) => (
                        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                          <input
                            placeholder="Goal name"
                            value={editGoalName}
                            onChange={(e) => setEditGoalName(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                          />
                          <input
                            type="number"
                            step="any"
                            placeholder="Price"
                            value={editGoalPrice}
                            onChange={(e) => setEditGoalPrice(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                          />
                          <input
                            type="number"
                            step="any"
                            placeholder="Daily contribution"
                            value={editGoalContribution}
                            onChange={(e) => setEditGoalContribution(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base"
                          />
                        </div>
                      )}
                      renderDisplayContent={(goal) => {
                        const days = calculateGoalDays(goal.price, goal.dailyContribution);
                        const targetDate = calculateGoalDate(days);
                        return (
                          <div className="flex flex-col">
                            <span className="font-medium text-sm sm:text-base mb-2">
                              {capitalizeFirstLetter(goal.name)}
                            </span>
                            <div className="flex justify-between items-center">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <span className="text-gray-600 text-sm">
                                  Price: {formatThaiBaht(goal.price)}
                                </span>
                                <span className="text-gray-600 text-sm">
                                  Daily: {formatThaiBaht(goal.dailyContribution)}
                                </span>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <span className="text-green-600 text-sm">
                                  Target: {targetDate}
                                </span>
                                <span className="text-gray-500 text-sm">
                                  ({formatNumber(days)} days)
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }}
                    />
                  </>
                )}

                {activeTab === "report" && (
                  <ReportTab 
                    incomes={incomes}
                    costs={costs}
                    moneyInBank={moneyInBank}
                    calculateTotalMoney={calculateTotalMoney}
                    calculateRecurringIncome={calculateRecurringIncome}
                    calculateMonthlyExpenses={calculateMonthlyExpenses}
                    calculateDailyFreeMoney={calculateDailyFreeMoney}
                    calculateHowLongYouCanLive={calculateHowLongYouCanLive}
                  />
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
