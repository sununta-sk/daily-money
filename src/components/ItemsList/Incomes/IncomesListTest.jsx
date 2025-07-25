import { auth } from "../../../firebaseConfig";
import { useIncomes } from "../../../hooks/useIncomes";

export function useIncomesTree(userIdArg) {
  const userId = userIdArg || auth.currentUser?.uid;
  const { incomes, isLoading } = useIncomes(userId);
  console.log("[useIncomesTree] incomes:", incomes);
  const children = incomes.map((doc) => {
    console.log("[useIncomesTree] mapping doc:", doc);
    return {
      type: "card",
      firebaseId: doc.id,
      collapsed: false,
    };
  });
  console.log("[useIncomesTree] children:", children);
  const tree = {
    name: "Root",
    type: "group",
    collapsed: false,
    children,
  };
  return { tree, isLoading };
}
