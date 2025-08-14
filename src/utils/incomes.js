import { db } from "../firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";

export const addIncome = async (income, userId) => {
  const incomesRef = collection(db, "users", userId, "incomes");
  const docRef = await addDoc(incomesRef, {
    ...income,
    createdAt: new Date(),
  });
  return docRef.id;
};

export const updateIncome = async (userId, incomeId, incomeData) => {
  const incomeRef = doc(db, "users", userId, "incomes", incomeId);
  await updateDoc(incomeRef, {
    ...incomeData,
    updatedAt: new Date(),
  });
};

export const deleteIncome = async (userId, incomeId) => {
  const incomeRef = doc(db, "users", userId, "incomes", incomeId);
  await deleteDoc(incomeRef);
};

export const getIncomes = async (userId) => {
  const incomesRef = collection(db, "users", userId, "incomes");
  const q = query(incomesRef, orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  const incomes = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return incomes;
};
