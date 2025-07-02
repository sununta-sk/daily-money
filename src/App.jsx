import React, { useState, useEffect } from 'react';
import Navbar from './components/NavBar/Navbar';
import AddArea from './components/AddArea/AddArea';
import ItemsList from './components/ItemsList/ItemsList';
import WhaleLogo from './components/WhaleLogo';
import { onAuthChange, getUserData, signInWithGoogle } from './utils/firebase';
import { fetchExchangeRates } from './utils/currency';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('income');
  const [selectedCurrency, setSelectedCurrency] = useState('THB');
  
  // Data states
  const [incomes, setIncomes] = useState([]);
  const [costs, setCosts] = useState([]);
  const [goals, setGoals] = useState([]);
  const [moneyInBank, setMoneyInBank] = useState(0);
  const [spendLimit, setSpendLimit] = useState(0);
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setUser(user);
      setLoading(false);
      
      if (user) {
        loadUserData(user.uid);
          fetchExchangeRates();
      }
    });

    return unsubscribe;
  }, []);

  const loadUserData = async (userId) => {
    try {
      const data = await getUserData(userId);
      setIncomes(data.incomes || []);
      setCosts(data.costs || []);
      setGoals(data.goals || []);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  if (loading) {
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
          <p className="mb-4 text-gray-600">Please sign in to use the budget dashboard</p>
              <button
            onClick={async () => {
              try {
                await signInWithGoogle();
              } catch (error) {
                console.error('Error signing in:', error);
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
    <div className="min-h-screen bg-gray-50 p-2 flex flex-col">
      <Navbar 
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      
      <div className="flex flex-col flex-1">
        {activeTab !== 'report' && (
            <AddArea 
              activeTab={activeTab}
              incomes={incomes}
              setIncomes={setIncomes}
              costs={costs}
              setCosts={setCosts}
              goals={goals}
              setGoals={setGoals}
              selectedCurrency={selectedCurrency}
              user={user}
                    />
        )}

                    <ItemsList
              activeTab={activeTab}
              incomes={incomes}
              costs={costs}
              goals={goals}
              setIncomes={setIncomes}
              setCosts={setCosts}
              setGoals={setGoals}
              moneyInBank={moneyInBank}
              setMoneyInBank={setMoneyInBank}
              spendLimit={spendLimit}
              setSpendLimit={setSpendLimit}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              selectedCurrency={selectedCurrency}
              user={user}
                    />
              </div>
    </div>
  );
}

export default App;
