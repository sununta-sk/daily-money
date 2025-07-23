// treeMutators.js

import { getNodeAndDescendantsAtPath } from "./getNodeAndDescendantsAtPath";

/**
 * Immutably toggles the 'collapsed' property at the given path in the tree.
 * @param {object} tree - The root of the tree.
 * @param {string[]} path - Array of keys to reach the target node.
 * @returns {object} - A new tree with the target node's 'collapsed' toggled.
 */
export function toggleCollapseAtPath(tree, path) {
  const { node } = getNodeAndDescendantsAtPath(tree, path);
  if (!node) return tree;
  const toggled = {
    ...node,
    collapsed: !node.collapsed,
    listCollapsed: !node.collapsed,
  };
  return setNodeAtPath(tree, path, toggled);
}

/**
 * Collapse all descendants at the given path.
 */
export function collapseAllDescendantsAtPath(tree, path) {
  const { node, descendants } = getNodeAndDescendantsAtPath(tree, path);
  if (!node) return tree;
  // Collapse all group nodes
  descendants.forEach((n) => {
    if (n.type === "group") {
      n.collapsed = true;
      n.listCollapsed = true;
    }
  });
  return setNodeAtPath(tree, path, { ...node });
}

/**
 * Expand all descendants at the given path.
 */
export function expandAllDescendantsAtPath(tree, path) {
  const { node, descendants } = getNodeAndDescendantsAtPath(tree, path);
  if (!node) return tree;
  // Expand all group nodes
  descendants.forEach((n) => {
    if (n.type === "group") {
      n.collapsed = false;
      n.listCollapsed = false;
    }
  });
  return setNodeAtPath(tree, path, { ...node });
}

/**
 * Returns the node at the given path in the tree.
 */
export function getNodeAtPath(tree, path) {
  let node = tree;
  for (const key of path) {
    if (!node.children || !node.children[key]) return null;
    node = node.children[key];
  }
  return node;
}

/**
 * Immutably sets the node at the given path in the tree.
 */
export function setNodeAtPath(tree, path, newNode) {
  if (!tree || !path || path.length === 0) return newNode;
  const [key, ...rest] = path;
  if (tree.id === key && rest.length === 0) {
    // At the node to replace
    return {
      ...newNode,
      childrenOrder: newNode.childrenOrder || tree.childrenOrder,
    };
  }
  if (tree.children && tree.children[key]) {
    return {
      ...tree,
      children: {
        ...tree.children,
        [key]: setNodeAtPath(tree.children[key], rest, newNode),
      },
    };
  }
  return tree;
}

/**
 * Move a node (header or card) according to type-based rules:
 * - Remove from source parent
 * - Insert into destination parent at correct index
 * - If reordering in same parent, just reorder childrenOrder
 * - If moving to new parent, update both parents
 * - Works for both headers (groups) and cards
 *
 * @param {object} tree
 * @param {string[]} sourcePath
 * @param {string[]} destinationParentPath
 * @param {string} newKey
 * @param {number} sourceIndex
 * @param {number} destinationIndex
 * @returns {object}
 */
export function moveNodeInTree(
  tree,
  sourcePath,
  destinationParentPath,
  newKey,
  sourceIndex,
  destinationIndex
) {
  const sourceParentPath = sourcePath.slice(0, -1);
  const sourceKey = sourcePath[sourcePath.length - 1];

  // Get source parent and destination parent
  const { node: sourceParent } = getNodeAndDescendantsAtPath(
    tree,
    sourceParentPath
  );
  const { node: destParent } = getNodeAndDescendantsAtPath(
    tree,
    destinationParentPath
  );
  if (
    !sourceParent ||
    !destParent ||
    !sourceParent.children ||
    !destParent.children
  )
    return tree;

  // If reordering in the same parent
  if (
    JSON.stringify(sourceParentPath) === JSON.stringify(destinationParentPath)
  ) {
    const order = [...sourceParent.childrenOrder];
    order.splice(sourceIndex, 1);
    order.splice(destinationIndex, 0, sourceKey);
    const newChildren = {};
    order.forEach((k) => {
      newChildren[k] = sourceParent.children[k];
    });
    const newSourceParent = {
      ...sourceParent,
      childrenOrder: order,
      children: newChildren,
    };
    return setNodeAtPath(tree, sourceParentPath, newSourceParent);
  }

  // Otherwise, moving to a new parent
  // 1. Remove from source parent
  const newSourceChildrenOrder = sourceParent.childrenOrder.filter(
    (k) => k !== sourceKey
  );
  const newSourceChildren = { ...sourceParent.children };
  delete newSourceChildren[sourceKey];
  const newSourceParent = {
    ...sourceParent,
    childrenOrder: newSourceChildrenOrder,
    children: newSourceChildren,
  };

  // 2. Insert into destination parent
  const newDestChildrenOrder = [...destParent.childrenOrder];
  newDestChildrenOrder.splice(destinationIndex, 0, sourceKey);
  const { node: nodeToMove } = getNodeAndDescendantsAtPath(tree, sourcePath);
  const newDestChildren = { ...destParent.children, [sourceKey]: nodeToMove };
  const newDestParent = {
    ...destParent,
    childrenOrder: newDestChildrenOrder,
    children: newDestChildren,
  };

  // 3. Set both parents in the tree
  let treeWithSource = setNodeAtPath(tree, sourceParentPath, newSourceParent);
  let treeWithBoth = setNodeAtPath(
    treeWithSource,
    destinationParentPath,
    newDestParent
  );
  return treeWithBoth;
}
