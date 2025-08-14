import { db } from "../firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";

export const addExpense = async (expense, userId) => {
  const expensesRef = collection(db, "expenses");
  const docRef = await addDoc(expensesRef, {
    ...expense,
    userId,
    createdAt: new Date(),
  });
  return docRef.id;
};

export const updateExpense = async (userId, expenseId, expenseData) => {
  const expensesRef = collection(db, "expenses");
  const q = query(
    expensesRef,
    where("userId", "==", userId),
    where("__name__", "==", expenseId)
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const expenseRef = doc(db, "expenses", expenseId);
    await updateDoc(expenseRef, {
      ...expenseData,
      updatedAt: new Date(),
    });
  }
};

export const getExpenses = async (userId) => {
  const expensesRef = collection(db, "expenses");
  const q = query(
    expensesRef,
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(q);
  const expenses = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return expenses;
};
