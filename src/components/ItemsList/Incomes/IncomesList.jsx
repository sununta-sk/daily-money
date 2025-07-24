import React, { useState, useEffect, useMemo, useCallback } from "react";
import { generateTestTreeFromIncomes } from "./IncomesListTest";
import { useIncomes } from "../../../hooks/useIncomes";
import IncomesGroupHeader from "./IncomesGroupHeader";
import IncomesCard from "./IncomesCard";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { flattenTree, getNodeById } from "./flattenTree";
import dndSettings from "../../../dndSettings";

export default function IncomesList({ userId }) {
  const { isLoading } = useIncomes(userId);
  const [treeData, setTreeData] = useState(null);
  const [collapsed, setCollapsed] = useState({});
  const [overId, setOverId] = useState(null); // <-- add state for overId
  const [draggingHeaderId, setDraggingHeaderId] = useState(null);
  const [renderKey, setRenderKey] = useState(0);
  const [activeId, setActiveId] = useState(null);
  const [huggedHeaderId, setHuggedHeaderId] = useState(null);
  const [dragDirection, setDragDirection] = useState("down"); // Track drag direction
  const [lastMouseY, setLastMouseY] = useState(0); // Track last mouse Y position
  const [editingGroupId, setEditingGroupId] = useState(null);
  const [nextHeaderNum, setNextHeaderNum] = useState(1);

  // Helper function to find items in the tree
  const findItemInTree = useCallback((tree, id) => {
    if (!tree) return null;
    if (tree.id === id) return tree;
    if (tree.children) {
      for (const childKey of Object.keys(tree.children)) {
        const result = findItemInTree(tree.children[childKey], id);
        if (result) return result;
      }
    }
    return null;
  }, []);

  // Memoize the tree generation to prevent unnecessary re-renders
  const memoizedTree = useMemo(() => {
    if (!isLoading) {
      return generateTestTreeFromIncomes();
    }
    return null;
  }, [isLoading]); // Only depend on loading state

  useEffect(() => {
    if (memoizedTree) {
      // Batch the state updates to prevent multiple re-renders
      const newCollapsed = Object.fromEntries(
        (memoizedTree.childrenOrder || []).map((key) => [key, false])
      );
      setTreeData(memoizedTree);
      setCollapsed(newCollapsed);
    }
  }, [memoizedTree]);

  // DISABLED: Auto-collapse on drag start (using excludedIds approach instead)
  // useEffect(() => {
  //   if (!draggingHeaderId || !treeData) return;
  //   // ... auto-collapse logic removed
  // }, [draggingHeaderId, treeData, collapsed]);

  // DISABLED: Restore collapse state on drag end (using excludedIds approach instead)
  // useEffect(() => {
  //   if (!draggingHeaderId && prevCollapsedRef.current) {
  //     setCollapsed(prevCollapsedRef.current);
  //     prevCollapsedRef.current = null;
  //   }
  // }, [draggingHeaderId]);

  // Removed problematic effect that was clearing excludedIds during drag

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 180,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor)
  );

  // 3. useEffect for hug logic
  useEffect(() => {
    if (!activeId || !overId) {
      setHuggedHeaderId(null);
      return;
    }
    const draggedItem = treeData && findItemInTree(treeData, activeId);
    const overItem = treeData && findItemInTree(treeData, overId);
    // Allow both header-to-header and card-to-header hugs
    if (
      overItem?.type === "group" &&
      (draggedItem?.type === "group" || draggedItem?.type === "card")
    ) {
      setHuggedHeaderId(overId);
      // Update the grow direction in dndSettings based on drag direction
      dndSettings.collidedHeader.growDirection = dragDirection;
    } else {
      setHuggedHeaderId(null);
    }
  }, [activeId, overId, treeData, findItemInTree, dragDirection]);

  // Remove excludedIds/disabled logic from filteredFlatItems
  const filteredFlatItems = useMemo(() => {
    // First flatten with normal collapse logic
    let items = flattenTree(treeData, collapsed);
    return items;
  }, [treeData, collapsed]);

  // Helper to toggle or force collapse for a header
  function toggleCollapseForHeader(headerId, source = "click") {
    setCollapsed((prev) => {
      let next;
      if (source === "click") {
        next = { ...prev, [headerId]: !prev[headerId] };
      } else if (source === "drag") {
        next = { ...prev, [headerId]: true };
      } else {
        next = prev;
      }
      return next;
    });
  }

  // Memoize collapse toggle handlers for headers
  const handleCollapseToggle = useCallback((key) => {
    toggleCollapseForHeader(key, "click");
  }, []);

  const handleDragStart = useCallback((event) => {
    if (event.active && event.active.id) {
      setActiveId(event.active.id);
      setDraggingHeaderId(event.active.id);
      setRenderKey((prev) => prev + 1);
      toggleCollapseForHeader(event.active.id, "drag"); // Always collapse on drag
    } else {
      setDraggingHeaderId(null);
    }
  }, []);

  function handleCreateGroup() {
    const newId = `header${nextHeaderNum}`;
    setNextHeaderNum((n) => n + 1);
    const newGroup = {
      id: newId,
      name: newId,
      type: "group",
      collapsed: false,
      listCollapsed: false,
      childrenOrder: [],
      children: {},
    };
    setTreeData((prev) => {
      if (!prev) return prev;
      const updated = {
        ...prev,
        childrenOrder: [newId, ...(prev.childrenOrder || [])],
        children: {
          [newId]: newGroup,
          ...(prev.children || {}),
        },
      };
      console.log(
        "[handleCreateGroup] Added new group:",
        newGroup,
        "Updated tree:",
        updated
      );
      return updated;
    });
    setCollapsed((prev) => ({ ...prev, [newId]: false }));
    setEditingGroupId(newId);
    console.log("[handleCreateGroup] Set editingGroupId:", newId);
  }

  function handleGroupNameChange(id, newName) {
    setTreeData((prev) => {
      if (!prev) return prev;
      if (!prev.children || !prev.children[id]) return prev;
      if (!newName || !newName.trim()) return prev;
      // Only update the name property, not the id
      const group = prev.children[id];
      const newChildren = {
        ...prev.children,
        [id]: { ...group, name: newName },
      };
      const updated = {
        ...prev,
        children: newChildren,
      };
      console.log(
        "[handleGroupNameChange] Renamed group:",
        id,
        "to name:",
        newName,
        "Updated group object:",
        newChildren[id],
        "Updated tree:",
        updated
      );
      return updated;
    });
    setEditingGroupId(null);
    setActiveId(null);
    setDraggingHeaderId(null);
    setOverId(null);
    setHuggedHeaderId(null);
    console.log("[handleGroupNameChange] Cleared editingGroupId and DnD state");
  }

  if (isLoading || !treeData) {
    return <div>Loading incomes...</div>;
  }

  function findItemById(flatItems, id) {
    return flatItems.find((item) => item.id === id);
  }

  function removeNodeFromTree(tree, path) {
    if (path.length === 0) return tree;
    const [idx, ...rest] = path;
    const newTree = { ...tree };
    if (rest.length === 0) {
      // Remove child at idx
      const key = newTree.childrenOrder[idx];
      newTree.childrenOrder = newTree.childrenOrder.filter((_, i) => i !== idx);
      const { [key]: _, ...restChildren } = newTree.children;
      newTree.children = restChildren;
      return newTree;
    } else {
      const key = newTree.childrenOrder[idx];
      return {
        ...newTree,
        children: {
          ...newTree.children,
          [key]: removeNodeFromTree(newTree.children[key], rest),
        },
      };
    }
  }

  function insertNodeAsFirstChild(tree, path, nodeToInsert) {
    if (path.length === 0) {
      // Insert at root as first child
      const newKey = nodeToInsert.id;
      return {
        ...tree,
        childrenOrder: [newKey, ...(tree.childrenOrder || [])],
        children: {
          [newKey]: nodeToInsert,
          ...(tree.children || {}),
        },
      };
    }
    const [idx, ...rest] = path;
    const key = tree.childrenOrder[idx];
    if (rest.length === 0) {
      // Insert as first child of this node
      const targetNode = tree.children[key];
      const newKey = nodeToInsert.id;
      return {
        ...tree,
        children: {
          ...tree.children,
          [key]: {
            ...targetNode,
            childrenOrder: [newKey, ...(targetNode.childrenOrder || [])],
            children: {
              [newKey]: nodeToInsert,
              ...(targetNode.children || {}),
            },
          },
        },
      };
    } else {
      return {
        ...tree,
        children: {
          ...tree.children,
          [key]: insertNodeAsFirstChild(tree.children[key], rest, nodeToInsert),
        },
      };
    }
  }

  function handleDragEnd(event) {
    setOverId(null);
    setDraggingHeaderId(null);
    setActiveId(null);
    setHuggedHeaderId(null); // Clear hugged state when drag ends
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    // Find source and target from flatItems
    const flatItems = flattenTree(treeData, collapsed);
    const sourceItem = findItemById(flatItems, active.id);
    if (!sourceItem) return;

    // Use getNodeById to find the target node and path in the tree
    const { node: targetNode } = getNodeById(treeData, over.id);
    if (!targetNode || targetNode.type !== "group") return; // Only allow drop on header

    // Remove source node from its original location
    let newTree = removeNodeFromTree(treeData, sourceItem.path);
    // Re-calculate the target node and path in the updated tree
    const { node: updatedTargetNode, path: updatedTargetPath } = getNodeById(
      newTree,
      over.id
    );
    if (!updatedTargetNode || updatedTargetNode.type !== "group") return;
    // Insert as first child of the target header (overId)
    newTree = insertNodeAsFirstChild(
      newTree,
      updatedTargetPath,
      sourceItem.node
    );
    setTreeData(newTree); // UI will re-flatten and re-render
  }

  function handleDragOver(event) {
    if (event.over && event.over.id) {
      if (event.over.id !== overId) {
        setOverId(event.over.id);
      }
    } else {
      if (overId !== null) {
        setOverId(null);
      }
    }

    // Track drag direction based on list order AND mouse movement
    if (event.activatorEvent && event.activatorEvent.clientY !== undefined) {
      const currentY = event.activatorEvent.clientY;

      // Find the indices of the dragged item and the item being dragged over
      const draggedIndex = filteredFlatItems.findIndex(
        (item) => item.id === activeId
      );
      const overIndex = filteredFlatItems.findIndex(
        (item) => item.id === event.over?.id
      );

      let direction = "down"; // default

      if (draggedIndex !== -1 && overIndex !== -1) {
        // If dragging from lower index to higher index, it's "upward" in list order
        if (draggedIndex > overIndex) {
          direction = "up";
        } else if (draggedIndex < overIndex) {
          direction = "down";
        } else {
          // Same position, fall back to mouse movement
          if (lastMouseY !== 0) {
            direction = currentY < lastMouseY ? "up" : "down";
          }
        }
      } else {
        // Fall back to mouse movement if we can't determine indices
        if (lastMouseY !== 0) {
          direction = currentY < lastMouseY ? "up" : "down";
        }
      }

      setDragDirection(direction);
      setLastMouseY(currentY);
    }
  }

  // Helper to check if an item is a descendant of a collapsed header
  function isDescendantOfCollapsed(itemId, treeData, collapsed, getNodeById) {
    const { path } = getNodeById(treeData, itemId);
    if (!path || path.length === 0) return false;
    let currentNode = treeData;
    for (let i = 0; i < path.length - 1; i++) {
      // exclude self
      const idx = path[i];
      const key = currentNode.childrenOrder[idx];
      currentNode = currentNode.children[key];
      if (collapsed[currentNode.id]) {
        return true;
      }
    }
    return false;
  }

  console.log(
    "[IncomesList render] editingGroupId:",
    editingGroupId,
    "treeData.childrenOrder:",
    treeData?.childrenOrder,
    "activeId:",
    activeId,
    "draggingHeaderId:",
    draggingHeaderId,
    "overId:",
    overId,
    "huggedHeaderId:",
    huggedHeaderId,
    "filteredFlatItems:",
    filteredFlatItems
  );
  return (
    <>
      <button
        onClick={handleCreateGroup}
        style={{
          margin: "8px 0",
          padding: "6px 12px",
          borderRadius: 6,
          background: "#e0e7ff",
          color: "#3730a3",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
        }}
      >
        + Create Group
      </button>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        <SortableContext
          items={filteredFlatItems.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          <div>
            {filteredFlatItems.map((item, index) => {
              const isHidden = isDescendantOfCollapsed(
                item.id,
                treeData,
                collapsed,
                getNodeById
              );
              if (item.type === "header") {
                return (
                  <IncomesGroupHeader
                    key={`header-${item.id}`}
                    node={{ ...item.node, collapsed: !!collapsed[item.id] }}
                    name={item.node.name}
                    index={index}
                    draggableId={item.id}
                    onCollapseToggle={() => handleCollapseToggle(item.id)}
                    style={{ marginLeft: item.depth * 24 }}
                    overId={overId}
                    type={item.type}
                    isInSortableContext={true}
                    renderKey={renderKey}
                    huggedHeaderId={huggedHeaderId}
                    isCollapsed={!!collapsed[item.id]}
                    isDescendantOfCollapsed={isHidden}
                    isDragging={item.id === draggingHeaderId}
                    onDropZoneUpdate={() => {}}
                    editing={editingGroupId === item.id}
                    onEditGroupName={handleGroupNameChange}
                    onCancelEdit={() => setEditingGroupId(null)}
                  />
                );
              } else if (item.type === "card") {
                if (isHidden) return null;
                // Create mock income data for test cards
                const mockIncome = {
                  id: item.id,
                  name:
                    item.id.charAt(0).toUpperCase() +
                    item.id.slice(1).replace(/-/g, " "),
                  amount: Math.floor(Math.random() * 5000) + 500,
                  period: "monthly",
                  source: "Test",
                  userId: userId,
                };
                return (
                  <div
                    key={`card-${item.id}`}
                    style={{ marginLeft: item.depth * 24 }}
                  >
                    <IncomesCard income={mockIncome} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </SortableContext>
        <DragOverlay>
          {activeId
            ? (() => {
                const activeItem = filteredFlatItems.find(
                  (item) => item.id === activeId
                );
                if (activeItem?.type === "header") {
                  return (
                    <IncomesGroupHeader
                      node={activeItem.node}
                      index={0}
                      draggableId={activeItem.id}
                      onCollapseToggle={() => {}}
                      style={{ marginLeft: activeItem.depth * 24 }}
                      overId={null}
                      type={activeItem.type}
                      isInSortableContext={false}
                      renderKey={renderKey}
                      isDragging={true}
                    />
                  );
                } else if (activeItem?.type === "card") {
                  // Create mock income data for the dragged card
                  const mockIncome = {
                    id: activeItem.id,
                    name:
                      activeItem.id.charAt(0).toUpperCase() +
                      activeItem.id.slice(1).replace(/-/g, " "),
                    amount: Math.floor(Math.random() * 5000) + 500,
                    period: "monthly",
                    source: "Test",
                    userId: userId,
                  };
                  return (
                    <div
                      style={{
                        opacity: dndSettings.draggedCard.overlayOpacity,
                        transform: `scale(${dndSettings.draggedCard.overlayScale}) rotate(${dndSettings.draggedCard.overlayRotation}deg)`,
                        pointerEvents: "none",
                        zIndex: dndSettings.draggedCard.dragOverlayZIndex,
                      }}
                    >
                      <IncomesCard income={mockIncome} />
                    </div>
                  );
                }
                return null;
              })()
            : null}
        </DragOverlay>
      </DndContext>
    </>
  );
}
