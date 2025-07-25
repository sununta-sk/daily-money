import React from "react";
import { useIncomesTree } from "./IncomesListTest";

export default function IncomesList({ userId }) {
  const { tree } = useIncomesTree(userId);
  console.log("TREE OBJECT:", tree);
  return null;
}
