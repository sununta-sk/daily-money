// Utility to flatten a nested tree into a flat array for dnd-kit
// Each item: { id, type, depth, path, parentId, disabled, ... }

/**
 * @param {object} node - The root node of the tree (group or card)
 * @param {object} collapsedMap - Map of id -> boolean (true if collapsed)
 * @param {number} depth - Current depth (default 0)
 * @param {Array} path - Path to this node (default [])
 * @param {string|null} parentId - Parent node id (default null)
 * @param {string|null} forceCollapseForId - If set, treat this id and all descendants as collapsed
 * @param {boolean} ancestorForced - Internal: true if an ancestor is already forced collapsed
 * @returns {Array} Flat array of visible nodes
 */
export function flattenTree(
  node,
  collapsedMap,
  depth = 0,
  path = [],
  parentId = null,
  forceCollapseForId = null,
  ancestorForced = false
) {
  if (!node) return [];
  const items = [];
  const isForced =
    ancestorForced || (forceCollapseForId && node.id === forceCollapseForId);

  if (node.type === "group") {
    items.push({
      id: node.id,
      type: "header",
      depth,
      path,
      parentId,
      disabled: false, // Will be set by parent component
      node, // reference to the original node (optional, for metadata)
    });
    const isCollapsed = isForced || collapsedMap[node.id];
    if (!isCollapsed && node.childrenOrder && node.children) {
      node.childrenOrder.forEach((childKey, idx) => {
        items.push(
          ...flattenTree(
            node.children[childKey],
            collapsedMap,
            depth + 1,
            path.concat(idx),
            node.id,
            forceCollapseForId,
            isForced
          )
        );
      });
    }
  } else if (node.type === "card") {
    items.push({
      id: node.id,
      type: "card",
      depth,
      path,
      parentId,
      disabled: false, // Will be set by parent component
      node, // reference to the original node (optional, for metadata)
    });
  }
  return items;
}

/**
 * Recursively finds a node by id in the tree and returns { node, path }.
 * @param {object} tree - The root node.
 * @param {string} id - The id to search for.
 * @param {Array} path - The path to this node (default []).
 * @returns {{ node: object|null, path: Array|null }}
 */
export function getNodeById(tree, id, path = []) {
  if (!tree) return { node: null, path: null };
  if (tree.id === id) return { node: tree, path };
  if (tree.childrenOrder && tree.children) {
    for (let i = 0; i < tree.childrenOrder.length; i++) {
      const key = tree.childrenOrder[i];
      const child = tree.children[key];
      const result = getNodeById(child, id, path.concat(i));
      if (result.node) return result;
    }
  }
  return { node: null, path: null };
}
