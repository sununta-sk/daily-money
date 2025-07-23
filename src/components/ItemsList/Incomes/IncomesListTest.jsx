import { useMemo } from "react";

export function useTestIncomesTree(userId) {
  // Only group nodes, no cards
  return useMemo(() => {
    return {
      id: "root",
      type: "group",
      collapsed: false,
      listCollapsed: false,
      children: {
        vip: {
          id: "vip",
          type: "group",
          collapsed: false,
          listCollapsed: false,
          children: {
            business: {
              id: "business",
              type: "group",
              collapsed: false,
              listCollapsed: false,
              children: {},
            },
            agencies: {
              id: "agencies",
              type: "group",
              collapsed: false,
              listCollapsed: false,
              children: {},
            },
          },
        },
        passive: {
          id: "passive",
          type: "group",
          collapsed: false,
          listCollapsed: false,
          children: {},
        },
        family: {
          id: "family",
          type: "group",
          collapsed: false,
          listCollapsed: false,
          children: {},
        },
        hobbies: {
          id: "hobbies",
          type: "group",
          collapsed: false,
          listCollapsed: false,
          children: {},
        },
      },
    };
  }, [userId]);
}

// Comprehensive test tree with multiple headers and cards
export function generateTestTreeFromIncomes() {
  // Expanded test tree: 4 headers, each with 2 cards
  return {
    id: "root",
    type: "group",
    collapsed: false,
    listCollapsed: false,
    childrenOrder: ["headerA", "headerB", "headerC", "headerD"],
    children: {
      headerA: {
        id: "headerA",
        type: "group",
        collapsed: false,
        listCollapsed: false,
        childrenOrder: ["cardA1", "cardA2"],
        children: {
          cardA1: { id: "cardA1", type: "card" },
          cardA2: { id: "cardA2", type: "card" },
        },
      },
      headerB: {
        id: "headerB",
        type: "group",
        collapsed: false,
        listCollapsed: false,
        childrenOrder: ["cardB1", "cardB2"],
        children: {
          cardB1: { id: "cardB1", type: "card" },
          cardB2: { id: "cardB2", type: "card" },
        },
      },
      headerC: {
        id: "headerC",
        type: "group",
        collapsed: false,
        listCollapsed: false,
        childrenOrder: ["cardC1", "cardC2"],
        children: {
          cardC1: { id: "cardC1", type: "card" },
          cardC2: { id: "cardC2", type: "card" },
        },
      },
      headerD: {
        id: "headerD",
        type: "group",
        collapsed: false,
        listCollapsed: false,
        childrenOrder: ["cardD1", "cardD2"],
        children: {
          cardD1: { id: "cardD1", type: "card" },
          cardD2: { id: "cardD2", type: "card" },
        },
      },
    },
  };
}

export const testIncomesArray = [
  {
    id: "item1",
    name: "Salary",
    amount: 5000,
    period: "monthly",
    source: "Job",
    userId: "user1",
  },
  {
    id: "item2",
    name: "Freelance",
    amount: 1200,
    period: "monthly",
    source: "Side Hustle",
    userId: "user1",
  },
  {
    id: "item3",
    name: "Dividends",
    amount: 300,
    period: "quarterly",
    source: "Stocks",
    userId: "user1",
  },
  {
    id: "item4",
    name: "Gift",
    amount: 200,
    period: "yearly",
    source: "Family",
    userId: "user1",
  },
  {
    id: "item5",
    name: "Rental",
    amount: 800,
    period: "monthly",
    source: "Property",
    userId: "user1",
  },
  {
    id: "item6",
    name: "Royalties",
    amount: 150,
    period: "monthly",
    source: "Books",
    userId: "user1",
  },
  {
    id: "item7",
    name: "Other",
    amount: 100,
    period: "monthly",
    source: "Misc",
    userId: "user1",
  },
];

export const testIncomesTree = {
  id: "root",
  type: "group",
  collapsed: false,
  listCollapsed: false,
  children: {
    vip: {
      id: "vip",
      type: "group",
      collapsed: false,
      listCollapsed: false,
      children: {
        business: {
          id: "business",
          type: "group",
          collapsed: false,
          listCollapsed: false,
          children: {},
        },
        agencies: {
          id: "agencies",
          type: "group",
          collapsed: false,
          listCollapsed: false,
          children: {},
        },
      },
    },
    passive: {
      id: "passive",
      type: "group",
      collapsed: false,
      listCollapsed: false,
      children: {},
    },
    family: {
      id: "family",
      type: "group",
      collapsed: false,
      listCollapsed: false,
      children: {},
    },
    hobbies: {
      id: "hobbies",
      type: "group",
      collapsed: false,
      listCollapsed: false,
      children: {},
    },
  },
};
