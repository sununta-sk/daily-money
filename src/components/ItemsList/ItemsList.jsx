import React, { useEffect, useRef } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import GroupObject from "./GroupObject";

const ItemsList = ({
  tabData,
  setClickOutsideMessage,
  setCardItemOrder,
  setEditedCardId,
  setDeletedCard,
  setUpdatedCard,
  setEditedGoalCardId,
  setDeletedGoalCard,
  setUpdatedGoalCard,
}) => {
  // ===== LOCAL STATE FOR GROUPS =====

  // ===== REFS FOR STATE MANAGEMENT =====
  const itemsListRef = useRef(null);

  // ===== CLICK OUTSIDE DETECTION =====
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        itemsListRef.current &&
        !itemsListRef.current.contains(event.target)
      ) {
        setClickOutsideMessage("clicked-outside");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ===== DRAG AND DROP HANDLERS =====
  const handleDragEnd = (result) => {
    // ===== EARLY EXIT CONDITIONS =====
    if (!result.destination) {
      return; // Dropped outside any droppable area
    }

    if (
      result.destination.index === result.source.index &&
      result.destination.droppableId === result.source.droppableId
    ) {
      return; // Dropped in same position
    }

    const { source, destination } = result;

    // ===== STAGE 2: ROUTE TO APPROPRIATE HANDLER =====
    // cardItemOrder is now a single root group object, so we work with its items array
    const currentOrder = { ...tabData.cardItemOrder };
    const rootItems = [...(currentOrder.items || [])];

    if (destination.droppableId === "main-content") {
      // ===== CASE 1: DROPPING INTO MAIN CONTENT AREA =====
      handleMainContentDrop(source, destination, rootItems);
    } else if (destination.droppableId.endsWith("-header")) {
      // ===== CASE 2: DROPPING ON GROUP HEADER (add to bottom) =====
      const groupName = destination.droppableId.replace("-header", "");
      handleGroupHeaderDrop(source, destination, groupName, rootItems);
    } else if (destination.droppableId.endsWith("-content")) {
      // ===== CASE 3: DROPPING INTO GROUP CONTENT (insert at position) =====
      const groupName = destination.droppableId.replace("-content", "");
      handleGroupContentDrop(source, destination, groupName, rootItems);
    }

    // ===== STAGE 3: SAVE UPDATED ORDER =====
    // Update the root group with the modified items
    currentOrder.items = rootItems;

    // Update local state immediately for smooth UX
    setCardItemOrder(currentOrder);

    // The Firebase sync will happen automatically through the hook
    // This gives us local-first updates with eventual consistency
  };

  // ===== CASE 1: DROPPING INTO MAIN CONTENT AREA =====
  const handleMainContentDrop = (source, destination, rootItems) => {
    let cardToMove = null;

    // ===== EXTRACT CARD FROM SOURCE =====
    if (source.droppableId === "root-content") {
      // Moving within root group content
      const sourceItem = rootItems[source.index];
      if (typeof sourceItem === "string") {
        cardToMove = sourceItem;
        // Remove from current position in rootItems
        rootItems.splice(source.index, 1);
      }
    } else if (source.droppableId.endsWith("-content")) {
      // Moving from nested group to root
      const sourceGroupName = source.droppableId.replace("-content", "");
      cardToMove = extractCardFromGroup(
        sourceGroupName,
        source.index,
        rootItems
      );
    } else if (source.droppableId.endsWith("-header")) {
      // Moving from group header to root (shouldn't happen, but handle it)
      const sourceGroupName = source.droppableId.replace("-header", "");
      cardToMove = extractCardFromGroup(
        sourceGroupName,
        source.index,
        rootItems
      );
    }

    // ===== INSERT CARD AT DESTINATION =====
    if (cardToMove) {
      insertCardAtTopLevel(cardToMove, destination.index, rootItems);
    }
  };

  // ===== CASE 2: DROPPING ON GROUP HEADER (add to bottom) =====
  const handleGroupHeaderDrop = (source, destination, groupName, rootItems) => {
    let cardToMove = null;

    // ===== EXTRACT CARD FROM SOURCE =====
    if (source.droppableId === "root-content") {
      // Moving from root group to nested group
      const sourceItem = rootItems[source.index];
      if (typeof sourceItem === "string") {
        cardToMove = sourceItem;
        // Remove from current position in rootItems
        rootItems.splice(source.index, 1);
      }
    } else if (source.droppableId.endsWith("-content")) {
      // Moving from one nested group to another
      const sourceGroupName = source.droppableId.replace("-content", "");
      cardToMove = extractCardFromGroup(
        sourceGroupName,
        source.index,
        rootItems
      );
    } else if (source.droppableId.endsWith("-header")) {
      // Moving from group header to group header (shouldn't happen, but handle it)
      const sourceGroupName = source.droppableId.replace("-header", "");
      cardToMove = extractCardFromGroup(
        sourceGroupName,
        source.index,
        rootItems
      );
    }

    // ===== ADD CARD TO GROUP BOTTOM =====
    if (cardToMove) {
      addCardToGroupBottom(cardToMove, groupName, rootItems);
    }
  };

  // ===== CASE 3: DROPPING INTO GROUP CONTENT (insert at position) =====
  const handleGroupContentDrop = (
    source,
    destination,
    groupName,
    rootItems
  ) => {
    let cardToMove = null;

    // ===== EXTRACT CARD FROM SOURCE =====
    if (source.droppableId === "root-content") {
      // Moving from root group to nested group
      const sourceItem = rootItems[source.index];
      if (typeof sourceItem === "string") {
        cardToMove = sourceItem;
        // Remove from current position in rootItems
        rootItems.splice(source.index, 1);
      }
    } else if (source.droppableId.endsWith("-content")) {
      // Moving within or between groups
      const sourceGroupName = source.droppableId.replace("-content", "");
      cardToMove = extractCardFromGroup(
        sourceGroupName,
        source.index,
        rootItems
      );
    } else if (source.droppableId.endsWith("-header")) {
      // Moving from group header to group content (shouldn't happen, but handle it)
      const sourceGroupName = source.droppableId.replace("-header", "");
      cardToMove = extractCardFromGroup(
        sourceGroupName,
        source.index,
        rootItems
      );
    }

    // ===== INSERT CARD IN GROUP AT POSITION =====
    if (cardToMove) {
      insertCardInGroup(cardToMove, groupName, destination.index, rootItems);
    }
  };

  // ===== UTILITY FUNCTIONS =====
  const extractCardFromGroup = (groupName, cardIndex, rootItems) => {
    const groupIndex = rootItems.findIndex(
      (item) => typeof item === "object" && item.name === groupName
    );

    if (groupIndex !== -1) {
      const group = rootItems[groupIndex];
      const groupItems = [...group.items];

      // Ensure cardIndex is valid
      if (cardIndex >= 0 && cardIndex < groupItems.length) {
        const cardId = groupItems[cardIndex];

        // Remove card from group
        groupItems.splice(cardIndex, 1);

        // Update group
        rootItems[groupIndex] = {
          ...group,
          items: groupItems,
        };

        return cardId;
      }
    }

    return null;
  };

  const insertCardAtTopLevel = (cardId, index, rootItems) => {
    // Count ungrouped items to find insertion point
    let ungroupedCount = 0;
    for (let i = 0; i < rootItems.length; i++) {
      const item = rootItems[i];
      if (typeof item === "string") {
        if (ungroupedCount === index) {
          rootItems.splice(i, 0, cardId);
          return;
        }
        ungroupedCount++;
      }
    }

    // If not inserted yet, add to end
    rootItems.push(cardId);
  };

  const addCardToGroupBottom = (cardId, groupName, rootItems) => {
    const groupIndex = rootItems.findIndex(
      (item) => typeof item === "object" && item.name === groupName
    );

    if (groupIndex !== -1) {
      const group = rootItems[groupIndex];

      rootItems[groupIndex] = {
        ...group,
        items: [...group.items, cardId],
      };
    }
  };

  const insertCardInGroup = (cardId, groupName, index, rootItems) => {
    const groupIndex = rootItems.findIndex(
      (item) => typeof item === "object" && item.name === groupName
    );

    if (groupIndex !== -1) {
      const group = rootItems[groupIndex];
      const groupItems = [...group.items];

      // Ensure index is valid
      if (index >= 0 && index <= groupItems.length) {
        groupItems.splice(index, 0, cardId);

        rootItems[groupIndex] = {
          ...group,
          items: groupItems,
        };
      }
    }
  };

  // ===== RENDER =====
  return (
    <div ref={itemsListRef} className="flex-1 overflow-hidden">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="main-content">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="h-full overflow-y-auto space-y-2"
            >
              {tabData.cardItemOrder && (
                <GroupObject
                  key={tabData.cardItemOrder.name}
                  groupData={tabData.cardItemOrder}
                  cardItemArray={tabData.cardItemArray}
                  parentPath=""
                  setCardItemOrder={setCardItemOrder}
                  setEditedCardId={setEditedCardId}
                  setDeletedCard={setDeletedCard}
                  setUpdatedCard={setUpdatedCard}
                  setEditedGoalCardId={setEditedGoalCardId}
                  setDeletedGoalCard={setDeletedGoalCard}
                  setUpdatedGoalCard={setUpdatedGoalCard}
                  setClickOutsideMessage={setClickOutsideMessage}
                />
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ItemsList;
