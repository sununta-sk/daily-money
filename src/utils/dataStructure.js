// ===== FIREBASE DATA STRUCTURE REFERENCE =====
// This file defines all collection paths and provides utilities for consistent CRUD operations

// ===== COLLECTION NAMES =====
export const COLLECTIONS = {
  USERS: "users",
  INCOMES: "incomes",
  EXPENSES: "expenses",
  GOALS: "goals",
  GROUPS: "groups",
  SETTINGS: "settings",
  ORDERS: "orders",
};

// ===== DOCUMENT NAMES =====
export const DOCUMENTS = {
  PREFERENCES: "preferences",
  GROUP_ORDER: "groupOrder",
};

// ===== PATH BUILDERS =====
export const buildUserPath = (userId) => [COLLECTIONS.USERS, userId];

export const buildCollectionPath = (userId, collectionName) => [
  ...buildUserPath(userId),
  collectionName,
];

export const buildDocumentPath = (userId, collectionName, documentId) => [
  ...buildCollectionPath(userId, collectionName),
  documentId,
];

export const buildSettingsPath = (userId) => [
  ...buildUserPath(userId),
  COLLECTIONS.SETTINGS,
  DOCUMENTS.PREFERENCES,
];

export const buildOrderPath = (userId, activeTab) => [
  ...buildUserPath(userId),
  activeTab,
  DOCUMENTS.GROUP_ORDER,
];

// ===== COLLECTION PATHS =====
export const getIncomesPath = (userId) =>
  buildCollectionPath(userId, COLLECTIONS.INCOMES);
export const getExpensesPath = (userId) =>
  buildCollectionPath(userId, COLLECTIONS.EXPENSES);
export const getGoalsPath = (userId) =>
  buildCollectionPath(userId, COLLECTIONS.GOALS);
export const getGroupsPath = (userId) =>
  buildCollectionPath(userId, COLLECTIONS.GROUPS);

// ===== DOCUMENT PATHS =====
export const getIncomePath = (userId, incomeId) =>
  buildDocumentPath(userId, COLLECTIONS.INCOMES, incomeId);
export const getExpensePath = (userId, expenseId) =>
  buildDocumentPath(userId, COLLECTIONS.EXPENSES, expenseId);
export const getGoalPath = (userId, goalId) =>
  buildDocumentPath(userId, COLLECTIONS.GOALS, goalId);
export const getGroupPath = (userId, groupId) =>
  buildDocumentPath(userId, COLLECTIONS.GROUPS, groupId);

// ===== VALIDATION =====
export const validateUserId = (userId) => {
  if (!userId) {
    throw new Error("User ID is required for database operations");
  }
  return userId;
};

export const validateDocumentId = (documentId) => {
  if (!documentId) {
    throw new Error("Document ID is required for database operations");
  }
  return documentId;
};

// ===== PATH UTILITIES =====
export const getActiveTabCollection = (activeTab) => {
  switch (activeTab) {
    case "incomes":
      return COLLECTIONS.INCOMES;
    case "expenses":
      return COLLECTIONS.EXPENSES;
    case "goals":
      return COLLECTIONS.GOALS;
    default:
      throw new Error(`Invalid active tab: ${activeTab}`);
  }
};

export const getActiveTabPath = (userId, activeTab) => {
  const collection = getActiveTabCollection(activeTab);
  return buildCollectionPath(userId, collection);
};

export const getActiveTabDocumentPath = (userId, activeTab, documentId) => {
  const collection = getActiveTabCollection(activeTab);
  return buildDocumentPath(userId, collection, documentId);
};
