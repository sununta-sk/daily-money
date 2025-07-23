import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

// Add a new goal for a user
export const addGoal = async (userId, goal) => {
  const goalsRef = collection(db, "users", userId, "goals");
  const docRef = await addDoc(goalsRef, {
    ...goal,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};

// Update an existing goal for a user
export const updateGoal = async (userId, goalId, goalData) => {
  console.log("updateGoal called with:", { userId, goalId, goalData });
  const goalRef = doc(db, "users", userId, "goals", goalId);
  console.log("Updating document:", goalRef.path);
  await updateDoc(goalRef, {
    ...goalData,
    updatedAt: serverTimestamp(),
  });
  console.log("Update completed successfully");
};

// Get all goals for a user
export const getGoals = async (userId) => {
  const goalsRef = collection(db, "users", userId, "goals");
  const snapshot = await getDocs(goalsRef);
  const goals = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log("getGoals result:", goals);
  return goals;
};
