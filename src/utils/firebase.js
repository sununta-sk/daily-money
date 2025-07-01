import { db, auth } from '../firebase';
import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  query, 
  where,
  serverTimestamp 
} from 'firebase/firestore';
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';

// Authentication
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const signOutUser = async () => {
  return signOut(auth);
};

export const onAuthChange = (callback) => {
  const unsubscribe = onAuthStateChanged(auth, callback);
  return unsubscribe;
};

// Generic CRUD operations
export const saveDocument = async (collectionName, data, userId) => {
  try {
    const docRef = await addDoc(collection(db, "users", userId, collectionName), {
      ...data,
      timestamp: serverTimestamp()
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(`Error saving ${collectionName}:`, error);
    throw error;
  }
};

export const updateDocument = async (collectionName, id, data, userId) => {
  try {
    const docRef = doc(db, "users", userId, collectionName, id);
    await updateDoc(docRef, {
      ...data,
      timestamp: serverTimestamp()
    });
    return { id, ...data };
  } catch (error) {
    console.error(`Error updating ${collectionName}:`, error);
    throw error;
  }
};

export const deleteDocument = async (collectionName, id, userId) => {
  try {
    const docRef = doc(db, "users", userId, collectionName, id);
    await deleteDoc(docRef);
    return id;
  } catch (error) {
    console.error(`Error deleting ${collectionName}:`, error);
    throw error;
  }
};

export const getDocuments = async (collectionName, userId) => {
  try {
    if (!userId) {
      console.warn(`No userId provided for ${collectionName}`);
      return [];
    }
    
    // Try the subcollection structure first
    try {
      const q = query(collection(db, "users", userId, collectionName));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (subcollectionError) {
      // If subcollection fails, try flat structure with userId field
      console.log(`Trying flat structure for ${collectionName}`);
      const q = query(collection(db, collectionName), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    return [];
  }
};

// Specific operations for budget app
export const saveIncome = async (income) => {
  return saveDocument('incomes', income, income.userId);
};

export const saveCost = async (cost) => {
  return saveDocument('costs', cost, cost.userId);
};

export const saveGoal = async (goal) => {
  return saveDocument('goals', goal, goal.userId);
};

export const updateIncome = async (id, data, userId) => {
  return updateDocument('incomes', id, data, userId);
};

export const updateCost = async (id, data, userId) => {
  return updateDocument('costs', id, data, userId);
};

export const updateGoal = async (id, data, userId) => {
  return updateDocument('goals', id, data, userId);
};

export const deleteIncome = async (id, userId) => {
  return deleteDocument('incomes', id, userId);
};

export const deleteCost = async (id, userId) => {
  return deleteDocument('costs', id, userId);
};

export const deleteGoal = async (id, userId) => {
  return deleteDocument('goals', id, userId);
};

export const getUserData = async (userId) => {
  const [incomes, costs, goals] = await Promise.all([
    getDocuments('incomes', userId),
    getDocuments('costs', userId),
    getDocuments('goals', userId)
  ]);
  
  return { incomes, costs, goals };
}; 