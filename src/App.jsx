import React, { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Navbar from "./components/NavBar/Navbar";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { getUserSettings, saveUserSettings } from "./utils/userSettings";
import AddIncome from "./components/AddArea/AddIncome";
import AddExpense from "./components/AddArea/AddExpense";
import AddGoal from "./components/AddArea/AddGoal";
import IncomesList from "./components/ItemsList/Incomes/IncomesList";

const queryClient = new QueryClient();

function UserSettingsNavbar({ user, activeTab, setActiveTab }) {
  const queryClient = useQueryClient();
  const { data: settings, isLoading } = useQuery({
    queryKey: ["userSettings", user?.uid],
    queryFn: () => getUserSettings(user.uid),
    enabled: !!user,
  });

  const mutation = useMutation({
    mutationFn: (newSettings) => saveUserSettings(newSettings, user.uid),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSettings", user.uid] });
    },
  });

  // Sync local activeTab with settings.activeTab on initial load
  React.useEffect(() => {
    if (settings?.activeTab && settings.activeTab !== activeTab) {
      setActiveTab(settings.activeTab);
    }
    // eslint-disable-next-line
  }, [settings?.activeTab]);

  const updateSettings = (partial) => {
    mutation.mutate({ ...settings, ...partial });
  };

  if (isLoading || !settings) return null;
  return (
    <Navbar
      user={user}
      settings={settings}
      updateSettings={updateSettings}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = React.useState("expenses");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <p className="text-white font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    const handleLogin = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    };
    return (
      <div className="h-screen w-full bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300 flex items-center justify-center">
        <button
          onClick={handleLogin}
          className="bg-white text-blue-700 px-6 py-3 rounded shadow font-semibold hover:bg-blue-50 transition"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen w-full bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300 flex flex-col">
        <div className="flex flex-col gap-[2px] h-full p-4">
          <UserSettingsNavbar
            user={user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {user && <TanStackAddAreaWrapper user={user} activeTab={activeTab} />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

// Helper to get settings and show AddIncome or AddExpense if needed
function TanStackAddAreaWrapper({ user, activeTab }) {
  const [addIncomeToOrderFn, setAddIncomeToOrderFn] = useState(null);

  // No longer fetch settings.activeTab here, just use local activeTab
  if (activeTab === "incomes") {
    return (
      <>
        <div className="bg-white/70 rounded-2xl shadow-md">
          <AddIncome
            userId={user.uid}
            addIncomeToOrderFn={addIncomeToOrderFn}
          />
        </div>
        <div className="bg-white/70 rounded-2xl shadow-md">
          <IncomesList
            userId={user.uid}
            onAddIncomeToOrder={setAddIncomeToOrderFn}
          />
        </div>
      </>
    );
  }
  if (activeTab === "expenses") {
    return (
      <>
        <div className="bg-white/70 rounded-2xl shadow-md">
          <AddExpense userId={user.uid} />
        </div>
        {/* ExpensesList would go here */}
      </>
    );
  }
  if (activeTab === "goals") {
    return (
      <>
        <div className="bg-white/70 rounded-2xl shadow-md">
          <AddGoal userId={user.uid} />
        </div>
        {/* GoalsList would go here */}
      </>
    );
  }
  return null;
}

export default App;
