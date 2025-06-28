import React, { useState, useEffect } from 'react'
import './firebase'
import { auth, googleProvider, db } from './firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc, getDoc, collection, addDoc, deleteDoc, query, where, getDocs } from 'firebase/firestore'
import IncomeTab from './components/IncomeTab'
import ExpensesTab from './components/ExpensesTab'
import ReportTab from './components/ReportTab'
import GoalsTab from './components/GoalsTab'

function App() {
  const [monthlySalary, setMonthlySalary] = useState('')
  const [costName, setCostName] = useState('')
  const [costAmount, setCostAmount] = useState('')
  const [period, setPeriod] = useState('daily')
  const [costs, setCosts] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [addingCost, setAddingCost] = useState(false)
  const [activeTab, setActiveTab] = useState('income')
  
  // Goals state
  const [goalName, setGoalName] = useState('')
  const [goalPrice, setGoalPrice] = useState('')
  const [dailyContribution, setDailyContribution] = useState('')
  const [goals, setGoals] = useState([])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      if (user) {
        loadUserData(user.uid)
      } else {
        setCosts([])
        setMonthlySalary('')
        setGoals([])
      }
    })
    return () => unsubscribe()
  }, [])

  const loadUserData = async (userId) => {
    setLoading(true)
    try {
      // Load salary
      const salaryDoc = await getDoc(doc(db, 'users', userId, 'data', 'salary'))
      if (salaryDoc.exists()) {
        setMonthlySalary(salaryDoc.data().amount.toString())
      }

      // Load costs
      const costsQuery = query(collection(db, 'users', userId, 'costs'))
      const costsSnapshot = await getDocs(costsQuery)
      const loadedCosts = costsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setCosts(loadedCosts)

      // Load goals
      const goalsQuery = query(collection(db, 'users', userId, 'goals'))
      const goalsSnapshot = await getDocs(goalsQuery)
      const loadedGoals = goalsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setGoals(loadedGoals)
    } catch (error) {
      console.error('Error loading user data:', error)
    }
    setLoading(false)
  }

  const saveSalary = async (amount) => {
    if (!user) return
    try {
      await setDoc(doc(db, 'users', user.uid, 'data', 'salary'), {
        amount: parseFloat(amount) || 0,
        updatedAt: new Date()
      })
    } catch (error) {
      console.error('Error saving salary:', error)
    }
  }

  const saveCost = async (cost) => {
    if (!user) {
      console.error('No user logged in')
      return null
    }
    
    try {
      console.log('Saving cost for user:', user.uid)
      console.log('Cost data:', cost)
      
      const docRef = await addDoc(collection(db, 'users', user.uid, 'costs'), {
        name: cost.name,
        amount: cost.amount,
        period: cost.period,
        createdAt: new Date()
      })
      
      console.log('Cost saved successfully with ID:', docRef.id)
      return docRef.id
    } catch (error) {
      console.error('Detailed Firestore error:', {
        code: error.code,
        message: error.message,
        stack: error.stack
      })
      
      if (error.code === 'permission-denied') {
        console.error('Firestore permission denied. Check security rules.')
      } else if (error.code === 'unavailable') {
        console.error('Firestore service unavailable.')
      }
      
      throw error
    }
  }

  const saveGoal = async (goal) => {
    if (!user) return null
    try {
      const docRef = await addDoc(collection(db, 'users', user.uid, 'goals'), {
        name: goal.name,
        price: goal.price,
        dailyContribution: goal.dailyContribution,
        createdAt: new Date()
      })
      return docRef.id
    } catch (error) {
      console.error('Error saving goal:', error)
      throw error
    }
  }

  const deleteCost = async (costId) => {
    if (!user) return
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'costs', costId))
    } catch (error) {
      console.error('Error deleting cost:', error)
    }
  }

  const deleteGoal = async (goalId) => {
    if (!user) return
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'goals', goalId))
    } catch (error) {
      console.error('Error deleting goal:', error)
    }
  }

  const signInWithGoogle = async () => {
    try {
      console.log('Attempting Google sign-in...')
      const result = await signInWithPopup(auth, googleProvider)
      console.log('Sign-in successful:', result.user)
    } catch (error) {
      console.error('Sign-in error details:', {
        code: error.code,
        message: error.message,
        email: error.email,
        credential: error.credential
      })
      
      if (error.code === 'auth/popup-closed-by-user') {
        alert('Sign-in was cancelled. Please try again.')
      } else if (error.code === 'auth/popup-blocked') {
        alert('Pop-up was blocked. Please allow pop-ups for this site and try again.')
      } else {
        alert(`Sign-in failed: ${error.message}`)
      }
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const handleAddCost = async () => {
    if (!costName.trim() || !costAmount.trim()) {
      alert('Please fill in both cost name and amount')
      return
    }

    const number = parseFloat(costAmount)
    if (isNaN(number) || number <= 0) {
      alert('Please enter a valid amount')
      return
    }

    setAddingCost(true)
    try {
      const newCost = {
        name: costName.trim(),
        amount: number,
        period: period
      }
      
      const costId = await saveCost(newCost)
      if (costId) {
        setCosts([...costs, { ...newCost, id: costId }])
        setCostName('')
        setCostAmount('')
        console.log('Cost added successfully:', newCost)
      } else {
        alert('Failed to save cost. Please try again.')
      }
    } catch (error) {
      console.error('Error adding cost:', error)
      alert(`Error adding cost: ${error.message}\n\nError code: ${error.code}`)
    } finally {
      setAddingCost(false)
    }
  }

  const handleAddGoal = async () => {
    if (!goalName.trim() || !goalPrice.trim() || !dailyContribution.trim()) {
      alert('Please fill in all goal fields')
      return
    }

    const price = parseFloat(goalPrice)
    const contribution = parseFloat(dailyContribution)
    
    if (isNaN(price) || price <= 0 || isNaN(contribution) || contribution <= 0) {
      alert('Please enter valid amounts')
      return
    }

    try {
      const newGoal = {
        name: goalName.trim(),
        price: price,
        dailyContribution: contribution
      }
      
      const goalId = await saveGoal(newGoal)
      if (goalId) {
        setGoals([...goals, { ...newGoal, id: goalId }])
        setGoalName('')
        setGoalPrice('')
        setDailyContribution('')
        console.log('Goal added successfully:', newGoal)
      } else {
        alert('Failed to save goal. Please try again.')
      }
    } catch (error) {
      console.error('Error adding goal:', error)
      alert(`Error adding goal: ${error.message}`)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (activeTab === 'expenses') {
        handleAddCost()
      } else if (activeTab === 'goals') {
        handleAddGoal()
      }
    }
  }

  const handleSalaryChange = async (e) => {
    const value = e.target.value
    setMonthlySalary(value)
    
    // Only save if there's a value and it's a valid number
    if (value && !isNaN(parseFloat(value))) {
      try {
        await saveSalary(value)
        console.log('Salary saved successfully:', value)
      } catch (error) {
        console.error('Error saving salary:', error)
        alert('Error saving salary. Please try again.')
      }
    }
  }

  const calculateMonthlyCosts = () => {
    return costs.reduce((total, cost) => {
      switch (cost.period) {
        case 'daily': return total + (cost.amount * 30)
        case 'weekly': return total + (cost.amount * 4.33)
        case 'monthly': return total + cost.amount
        case 'yearly': return total + (cost.amount / 12)
        case 'one-off': return total + cost.amount
        default: return total
      }
    }, 0)
  }

  const getDaysInMonth = () => {
    const date = new Date()
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const calculateDailyFreeMoney = () => {
    const salary = parseFloat(monthlySalary) || 0
    const monthlyCosts = calculateMonthlyCosts()
    const remaining = salary - monthlyCosts
    const daysInMonth = getDaysInMonth()
    return remaining / daysInMonth
  }

  const calculateGoalDays = (price, dailyContribution) => {
    return Math.ceil(price / dailyContribution)
  }

  const calculateGoalDate = (days) => {
    const date = new Date()
    date.setDate(date.getDate() + days)
    return date.toLocaleDateString()
  }

  const removeCost = async (id) => {
    await deleteCost(id)
    setCosts(costs.filter(cost => cost.id !== id))
  }

  const removeGoal = async (id) => {
    await deleteGoal(id)
    setGoals(goals.filter(goal => goal.id !== id))
  }

  const renderMiniReport = () => (
    <div className="p-4 bg-green-50 border rounded mb-6">
      <h2 className="text-xl font-semibold mb-4">Daily Free Money</h2>
      <div className="text-3xl font-bold text-green-600">
        ฿{calculateDailyFreeMoney().toFixed(2)}
      </div>
    </div>
  )

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 bg-purple-400 p-4 rounded">Budget Dashboard</h1>
      
      {/* Authentication Section */}
      <div className="mb-6 p-4 border rounded bg-gray-50">
        {user ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
              <span>Welcome, {user.displayName}!</span>
            </div>
            <button 
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-4">Please sign in to use the budget dashboard</p>
            <button 
              onClick={signInWithGoogle}
              className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2 mx-auto"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          </div>
        )}
      </div>

      {user && (
        <>
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600">Loading your budget data...</p>
            </div>
          ) : (
            <>
              {/* Mini Report */}
              {renderMiniReport()}

              {/* Tabs */}
              <div className="mb-6">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8">
                    {[
                      { id: 'income', name: 'Income' },
                      { id: 'expenses', name: 'Expenses' },
                      { id: 'report', name: 'Report' },
                      { id: 'goals', name: 'Goals' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          activeTab === tab.id
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                {activeTab === 'income' && (
                  <IncomeTab 
                    monthlySalary={monthlySalary}
                    handleSalaryChange={handleSalaryChange}
                  />
                )}
                {activeTab === 'expenses' && (
                  <ExpensesTab 
                    costName={costName}
                    setCostName={setCostName}
                    costAmount={costAmount}
                    setCostAmount={setCostAmount}
                    period={period}
                    setPeriod={setPeriod}
                    costs={costs}
                    addingCost={addingCost}
                    handleAddCost={handleAddCost}
                    handleKeyPress={handleKeyPress}
                    removeCost={removeCost}
                  />
                )}
                {activeTab === 'report' && (
                  <ReportTab 
                    monthlySalary={monthlySalary}
                    costs={costs}
                    calculateMonthlyCosts={calculateMonthlyCosts}
                    calculateDailyFreeMoney={calculateDailyFreeMoney}
                  />
                )}
                {activeTab === 'goals' && (
                  <GoalsTab 
                    goalName={goalName}
                    setGoalName={setGoalName}
                    goalPrice={goalPrice}
                    setGoalPrice={setGoalPrice}
                    dailyContribution={dailyContribution}
                    setDailyContribution={setDailyContribution}
                    goals={goals}
                    handleAddGoal={handleAddGoal}
                    handleKeyPress={handleKeyPress}
                    removeGoal={removeGoal}
                    calculateGoalDays={calculateGoalDays}
                    calculateGoalDate={calculateGoalDate}
                  />
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default App
