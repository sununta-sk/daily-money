import { db, auth } from "../firebase";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
  deleteField,
} from "firebase/firestore";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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
    const docRef = await addDoc(
      collection(db, "users", userId, collectionName),
      {
        ...data,
        timestamp: serverTimestamp(),
      }
    );
    return { id: docRef.id, ...data };
  } catch (error) {
    throw error;
  }
};

export const updateDocument = async (collectionName, id, data, userId) => {
  try {
    const docRef = doc(db, "users", userId, collectionName, id);
    await updateDoc(docRef, {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { id, ...data };
  } catch (error) {
    throw error;
  }
};

export const deleteDocument = async (collectionName, id, userId) => {
  try {
    const docRef = doc(db, "users", userId, collectionName, id);
    await deleteDoc(docRef);
    return id;
  } catch (error) {
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
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      // If subcollection fails, try flat structure with userId field
      console.log(`Trying flat structure for ${collectionName}`);
      const q = query(
        collection(db, collectionName),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    }
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    return [];
  }
};

// Specific operations for budget app
export const saveIncome = async (income) => {
  return saveDocument("incomes", income, income.userId);
};

export const saveCost = async (cost) => {
  return saveDocument("costs", cost, cost.userId);
};

export const saveGoal = async (goal) => {
  return saveDocument("goals", goal, goal.userId);
};

export const updateIncome = async (id, data, userId) => {
  return updateDocument("incomes", id, data, userId);
};

export const updateCost = async (id, data, userId) => {
  return updateDocument("costs", id, data, userId);
};

export const updateGoal = async (id, data, userId) => {
  return updateDocument("goals", id, data, userId);
};

export const deleteIncome = async (id, userId) => {
  return deleteDocument("incomes", id, userId);
};

export const deleteCost = async (id, userId) => {
  return deleteDocument("costs", id, userId);
};

export const deleteGoal = async (id, userId) => {
  return deleteDocument("goals", id, userId);
};

export const getUserData = async (userId) => {
  const [incomes, costs, goals] = await Promise.all([
    getDocuments("incomes", userId),
    getDocuments("costs", userId),
    getDocuments("goals", userId),
  ]);

  return { incomes, costs, goals };
};

// Timestamp analysis and migration utilities
export const analyzeUserTimestamps = async (userId) => {
  const collections = ["incomes", "costs", "goals"];
  const timestampFields = ["timestamp", "createdAt", "date", "created"];

  const analysis = {
    userId,
    totalDocuments: 0,
    fieldCounts: {
      timestamp: 0,
      createdAt: 0,
      date: 0,
      created: 0,
      missing: 0,
    },
    documentsToMigrate: [],
    problemDocuments: [],
  };

  try {
    for (const collectionName of collections) {
      const documents = await getDocuments(collectionName, userId);

      documents.forEach((doc) => {
        analysis.totalDocuments++;

        let timestampFieldsFound = [];

        // Check all timestamp fields
        for (const field of timestampFields) {
          if (doc[field]) {
            timestampFieldsFound.push(field);
          }
        }

        if (timestampFieldsFound.length === 0) {
          analysis.fieldCounts.missing++;
          analysis.problemDocuments.push({
            collection: collectionName,
            docId: doc.id,
            name: doc.name || "Unknown",
            issue: "No timestamp field found",
          });
        } else if (timestampFieldsFound.length > 1) {
          // Multiple timestamp fields - problematic
          analysis.problemDocuments.push({
            collection: collectionName,
            docId: doc.id,
            name: doc.name || "Unknown",
            fields: timestampFieldsFound,
            issue: `Multiple timestamp fields: ${timestampFieldsFound.join(
              ", "
            )}`,
          });
          // Count the first field found
          analysis.fieldCounts[timestampFieldsFound[0]]++;

          // Add to migration list if it has old fields to clean up
          const oldFields = timestampFieldsFound.filter(
            (f) => f !== "timestamp"
          );
          if (oldFields.length > 0) {
            analysis.documentsToMigrate.push({
              collection: collectionName,
              docId: doc.id,
              name: doc.name || "Unknown",
              currentFields: timestampFieldsFound,
              fieldsToRemove: oldFields,
              action: "cleanup_duplicates",
            });
          }
        } else {
          // Single timestamp field found
          const field = timestampFieldsFound[0];
          analysis.fieldCounts[field]++;

          // If it's not 'timestamp', add to migration list
          if (field !== "timestamp") {
            analysis.documentsToMigrate.push({
              collection: collectionName,
              docId: doc.id,
              name: doc.name || "Unknown",
              currentField: field,
              value: doc[field],
              action: "rename_field",
            });
          }
        }
      });
    }

    console.log("📊 Timestamp Analysis for User:", userId);
    console.log("Total Documents:", analysis.totalDocuments);
    console.log("Field Distribution:", analysis.fieldCounts);
    console.log(
      "Documents needing migration:",
      analysis.documentsToMigrate.length
    );

    return analysis;
  } catch (error) {
    console.error("Error analyzing timestamps:", error);
    throw error;
  }
};

export const migrateUserTimestamps = async (userId, dryRun = true) => {
  const analysis = await analyzeUserTimestamps(userId);

  if (analysis.documentsToMigrate.length === 0) {
    console.log("✅ No migration needed for user:", userId);
    return { success: true, migrated: 0, message: "No migration needed" };
  }

  console.log(
    `🔄 ${dryRun ? "DRY RUN:" : "MIGRATING:"} ${
      analysis.documentsToMigrate.length
    } documents for user ${userId}`
  );

  let migrated = 0;
  const errors = [];

  for (const doc of analysis.documentsToMigrate) {
    try {
      console.log(`  ${doc.action}: ${doc.collection}/${doc.name}`);

      if (!dryRun) {
        if (doc.action === "rename_field") {
          // Move old field to timestamp, remove old field
          const updateData = {
            timestamp: doc.value,
          };
          // Remove old field using FieldValue.delete()
          updateData[doc.currentField] = deleteField();

          await updateDocument(doc.collection, doc.docId, updateData, userId);
          migrated++;
        } else if (doc.action === "cleanup_duplicates") {
          // Remove duplicate timestamp fields, keep only 'timestamp'
          const updateData = {};
          doc.fieldsToRemove.forEach((field) => {
            updateData[field] = deleteField();
          });

          await updateDocument(doc.collection, doc.docId, updateData, userId);
          migrated++;
        }
      }
    } catch (error) {
      console.error(
        `Error migrating ${doc.collection}/${doc.name}:`,
        error.message
      );
      errors.push({ doc, error: error.message });
    }
  }

  const result = {
    success: errors.length === 0,
    totalDocuments: analysis.documentsToMigrate.length,
    migrated,
    errors,
    dryRun,
    message: dryRun
      ? `Dry run complete. ${analysis.documentsToMigrate.length} documents would be migrated.`
      : `Migration complete. ${migrated} documents migrated.`,
  };

  console.log("📋 Migration Result:", result.message);
  if (errors.length > 0) {
    console.warn("⚠️ Errors:", errors);
  }

  return result;
};
