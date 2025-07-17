import {
  doc,
  getDoc, // pull
  setDoc, // push
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const saveActiveTab = async (userId, tab) => {
  const activeTabRef = doc(db, "users", userId, "userSettings", "activeTab");
  await setDoc(activeTabRef, { tab });
};

export const saveCurrency = async (userId, currency) => {
  const currencyRef = doc(db, "users", userId, "userSettings", "currency");
  await setDoc(currencyRef, { currency });
};

export const saveSpendLimit = async (userId, spendLimit) => {
  const spendLimitRef = doc(db, "users", userId, "userSettings", "spendLimit");
  await setDoc(spendLimitRef, { spendLimit });
};

export const saveMoneyInBank = async (userId, moneyInBank) => {
  const moneyInBankRef = doc(db, "users", userId, "userSettings", "moneyInBank");
  await setDoc(moneyInBankRef, { moneyInBank });
};

export const getMoneyInBank = async (userId) => {
  const moneyInBankRef = doc(db, "users", userId, "userSettings", "moneyInBank");
  const docSnap = await getDoc(moneyInBankRef);
  return docSnap.data()?.moneyInBank;
};

export const getSpendLimit = async (userId) => {
  const spendLimitRef = doc(db, "users", userId, "userSettings", "spendLimit");
  const docSnap = await getDoc(spendLimitRef);
  return docSnap.data()?.spendLimit;
};

export const getCurrency = async (userId) => {
  const currencyRef = doc(db, "users", userId, "userSettings", "currency");
  const docSnap = await getDoc(currencyRef);
  return docSnap.data()?.currency;
};

export const getActiveTab = async (userId) => {
  const activeTabRef = doc(db, "users", userId, "userSettings", "activeTab");
  const docSnap = await getDoc(activeTabRef);
  return docSnap.data()?.activeTab;
};