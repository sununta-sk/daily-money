// NOTE: If you change the tree structure (e.g., add new node types, change children format), update this utility accordingly.

/**
 * Returns the node at the given path and a flat array of all its descendants (including itself).
 * @param {object} tree - The root of the tree.
 * @param {string[]} path - Array of keys to reach the target node.
 * @returns {{ node: object|null, descendants: object[] }}
 */
export function getNodeAndDescendantsAtPath(tree, path) {
  let node = tree;
  for (const key of path) {
    if (!node.children || !node.children[key])
      return { node: null, descendants: [] };
    node = node.children[key];
  }
  const descendants = [];
  function collect(n) {
    if (!n) return;
    descendants.push(n);
    if (n.children) {
      Object.values(n.children).forEach(collect);
    }
  }
  collect(node);
  return { node, descendants };
}
