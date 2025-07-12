import React, { useState, useEffect, useRef } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import EditableCard from "./EditableCard";
import GoalCard from "./GoalCard";
import GroupHeader from "./GroupHeader";
import { getCurrencySymbol } from "../../utils/currency";

const ItemsList = ({
  activeTab,
  cardArray: cardArrayProp,
  setEditedCard,
  setDeletedCard,
  setAddedCard,
  setEditedGoal,
  setDeletedGoal,
  setAddedGroup,
  setClickOutsideMessage,
  moneyInBank,
  setMoneyInBank,
  spendLimit,
  setSpendLimit,
  selectedCurrency,
  setCardOrder,
  cardOrder: savedOrder,
}) => {
  // ===== LOCAL-FIRST STATE FOR IMMEDIATE UI FEEDBACK =====
  const [localMoneyInBank, setLocalMoneyInBank] = useState(moneyInBank);
  const [localSpendLimit, setLocalSpendLimit] = useState(spendLimit);
  const [isEditingMoneyInBank, setIsEditingMoneyInBank] = useState(false);
  const [isEditingSpendLimit, setIsEditingSpendLimit] = useState(false);

  // ===== LOCAL CARD DATA FOR DRAG AND DROP ORDER =====
  const [cardArray, setCardArray] = useState(cardArrayProp);
  const [hasCustomOrder, setHasCustomOrder] = useState(false);

  // ===== GROUP CREATION STATE =====
  const [creatingGroupForCard, setCreatingGroupForCard] = useState(null);
  const [groupName, setGroupName] = useState("");

  // ===== CLICK OUTSIDE STATE =====
  const [clickOutsideMessage, setLocalClickOutsideMessage] = useState("");

  // ===== REFS FOR STATE MANAGEMENT =====
  const saveTimeoutRef = useRef(null);
  const itemsListRef = useRef(null);
  const groupInputRef = useRef(null);

  // ===== CLICK OUTSIDE DETECTION =====
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        itemsListRef.current &&
        !itemsListRef.current.contains(event.target)
      ) {
        setLocalClickOutsideMessage("clicked-outside");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setClickOutsideMessage]);

  // ===== DRAG AND DROP HANDLERS =====
  const handleDragStart = () => {
    // TODO: Add reordering logic here if needed
  };

  const handleDragEnd = (result) => {
    // If dropped outside the list, do nothing
    if (!result.destination) {
      return;
    }

    // If dropped in the same position, do nothing
    if (result.destination.index === result.source.index) {
      return;
    }

    // Get the current items array (already filtered by activeTab)
    const { items } = getDisplayData();

    // Create a copy of the items array
    const reorderedItems = Array.from(items);

    // Remove the item from its original position
    const [removed] = reorderedItems.splice(result.source.index, 1);

    // Insert the item at its new position
    reorderedItems.splice(result.destination.index, 0, removed);

    // Update local card data with the new order
    setCardArray(reorderedItems);
    setHasCustomOrder(true);

    // Extract Firebase IDs in the new order
    const newOrder = reorderedItems.map((item) => item.id);

    // Save the order array to Firebase
    setCardOrder(newOrder, activeTab);
  };

  // Sync local money in bank with prop changes
  useEffect(() => {
    setLocalMoneyInBank(moneyInBank);
  }, [moneyInBank]);

  // Sync local spend limit with prop changes
  useEffect(() => {
    setLocalSpendLimit(spendLimit);
  }, [spendLimit]);

  // Sync local card data with prop changes
  useEffect(() => {
    // Only update local data if we don't have a custom order
    // This prevents the prop from overwriting our drag-and-drop reordering
    if (!hasCustomOrder) {
      setCardArray(cardArrayProp);
    }
  }, [cardArrayProp, hasCustomOrder]);

  // Reset custom order when sort order changes
  useEffect(() => {
    setHasCustomOrder(false);
  }, []);

  // ===== LOCAL PREPARE FUNCTIONS FOR UI INTERACTIONS =====
  const handleMoneyInBankChange = (value) => {
    setLocalMoneyInBank(value);

    // Debounced save to database
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(async () => {
      try {
        await setMoneyInBank(value);
      } catch (error) {
        console.error("Error saving money in bank:", error);
        // Revert on error
        setLocalMoneyInBank(moneyInBank);
      }
    }, 1000);
  };

  const handleSpendLimitChange = (value) => {
    setLocalSpendLimit(value);

    // Debounced save to database
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(async () => {
      try {
        await setSpendLimit(value);
      } catch (error) {
        console.error("Error saving spend limit:", error);
        // Revert on error
        setLocalSpendLimit(spendLimit);
      }
    }, 1000);
  };

  // ===== GROUP CREATION HANDLERS =====
  const handleCreateGroup = (cardId) => {
    setCreatingGroupForCard(cardId);
    setGroupName("");
    // Focus the input after render
    setTimeout(() => {
      if (groupInputRef.current) {
        groupInputRef.current.focus();
      }
    }, 100);
  };

  const handleGroupNameSubmit = async (e) => {
    e.preventDefault();
    if (!groupName.trim()) return;

    try {
      console.log("Creating group with name:", groupName.trim());
      console.log("For card:", creatingGroupForCard);
      console.log("Active tab:", activeTab);

      // Create the group
      const newGroup = await setAddedGroup(groupName.trim(), activeTab);
      console.log("Group created:", newGroup);

      // Update the cardOrder to include the group structure
      const currentOrder = savedOrder || [];
      const cardIndex = currentOrder.indexOf(creatingGroupForCard);

      if (cardIndex !== -1) {
        // Create new order with group structure
        const newOrder = [...currentOrder];

        // Create simple group object: { name: "Group Name", items: ["cardId1", "cardId2"] }
        const groupObject = {
          name: groupName.trim(),
          items: [creatingGroupForCard],
        };

        // Replace the card with the group object
        newOrder.splice(cardIndex, 1, groupObject);

        console.log("New order with group:", newOrder);

        // Save the new order
        await setCardOrder(newOrder, activeTab);
      }

      // Clear group creation state
      setCreatingGroupForCard(null);
      setGroupName("");
    } catch (error) {
      console.error("Error creating group:", error);
    }
  };

  const handleGroupNameCancel = () => {
    setCreatingGroupForCard(null);
    setGroupName("");
  };

  // ===== UTILITY FUNCTIONS =====
  const formatCurrencyForDisplay = (value, currency) => {
    const symbol = getCurrencySymbol(currency);
    return `${symbol}${value.toLocaleString()}`;
  };

  const parseCurrencyInput = (value) => {
    return parseFloat(value.replace(/[^0-9.-]+/g, "")) || 0;
  };

  // ===== CARD ORDER AS SOURCE OF TRUTH =====
  const getDisplayData = () => {
    if (activeTab === "goals") {
      return { items: cardArray || [] };
    } else {
      // CARD ORDER IS THE PRIMARY SOURCE OF TRUTH
      // Only show cards that are explicitly in the cardOrder array
      if (!savedOrder || savedOrder.length === 0) {
        return { items: [] }; // No cards if cardOrder is empty
      }

      // Create a map of all available cards for quick lookup
      const cardMap = new Map(cardArray.map((card) => [card.id, card]));

      // Build the display array based on cardOrder
      const orderedItems = [];

      for (const item of savedOrder) {
        if (typeof item === "string") {
          // This is a card ID - add the card
          const card = cardMap.get(item);
          if (card) {
            orderedItems.push({ ...card, type: "card" });
          }
        } else if (
          item &&
          typeof item === "object" &&
          item.name &&
          item.items
        ) {
          // This is a group object - add group header and grouped cards
          orderedItems.push({
            id: `group-${item.name}`,
            name: item.name,
            type: "group-header",
            isExpanded: true, // Default to expanded
          });

          // Add the grouped cards
          for (const cardId of item.items) {
            const card = cardMap.get(cardId);
            if (card) {
              orderedItems.push({
                ...card,
                type: "grouped-card",
                groupName: item.name,
              });
            }
          }
        }
      }

      return { items: orderedItems };
    }
  };

  // ===== RENDER LOGIC =====
  const { items } = getDisplayData();

  if (items.length === 0) {
    return (
      <div className="flex-1 bg-white rounded-lg shadow-sm p-4">
        <div className="text-center text-gray-500">
          No {activeTab} items yet. Add your first {activeTab} above!
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex-1 bg-white rounded-lg shadow-sm p-4"
      ref={itemsListRef}
    >
      {/* ===== MONEY IN BANK SECTION ===== */}
      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Money in Bank:
          </span>
          {isEditingMoneyInBank ? (
            <input
              type="text"
              value={formatCurrencyForDisplay(
                localMoneyInBank,
                selectedCurrency
              )}
              onChange={(e) =>
                handleMoneyInBankChange(parseCurrencyInput(e.target.value))
              }
              onBlur={() => setIsEditingMoneyInBank(false)}
              className="text-right bg-white border border-gray-300 rounded px-2 py-1 text-sm w-32"
              autoFocus
            />
          ) : (
            <button
              onClick={() => setIsEditingMoneyInBank(true)}
              className="text-right text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              {formatCurrencyForDisplay(localMoneyInBank, selectedCurrency)}
            </button>
          )}
        </div>
      </div>

      {/* ===== SPEND LIMIT SECTION ===== */}
      <div className="mb-4 p-3 bg-red-50 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Spend Limit:
          </span>
          {isEditingSpendLimit ? (
            <input
              type="text"
              value={formatCurrencyForDisplay(
                localSpendLimit,
                selectedCurrency
              )}
              onChange={(e) =>
                handleSpendLimitChange(parseCurrencyInput(e.target.value))
              }
              onBlur={() => setIsEditingSpendLimit(false)}
              className="text-right bg-white border border-gray-300 rounded px-2 py-1 text-sm w-32"
              autoFocus
            />
          ) : (
            <button
              onClick={() => setIsEditingSpendLimit(true)}
              className="text-right text-sm font-medium text-gray-900 hover:text-red-600"
            >
              {formatCurrencyForDisplay(localSpendLimit, selectedCurrency)}
            </button>
          )}
        </div>
      </div>

      {/* ===== ITEMS LIST ===== */}
      <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Droppable droppableId="items-list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {items.map((item, index) => (
                <React.Fragment key={item.id || item.name || index}>
                  {/* ===== GROUP CREATION INPUT ===== */}
                  {creatingGroupForCard === item.id && (
                    <div className="mb-2 p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                      <form
                        onSubmit={handleGroupNameSubmit}
                        className="flex gap-2"
                      >
                        <input
                          ref={groupInputRef}
                          type="text"
                          placeholder="Enter group name..."
                          value={groupName}
                          onChange={(e) => setGroupName(e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onKeyDown={(e) => {
                            if (e.key === "Escape") {
                              handleGroupNameCancel();
                            }
                          }}
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          Create
                        </button>
                        <button
                          type="button"
                          onClick={handleGroupNameCancel}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                          Cancel
                        </button>
                      </form>
                    </div>
                  )}

                  {activeTab === "goals" ? (
                    <GoalCard
                      goal={item}
                      setEditedGoal={setEditedGoal}
                      setDeletedGoal={setDeletedGoal}
                      index={index}
                    />
                  ) : item.type === "group-header" ? (
                    <GroupHeader
                      groupName={item.name}
                      itemCount={
                        item.itemCount || (item.items ? item.items.length : 0)
                      }
                    />
                  ) : item.type === "grouped-card" ? (
                    <div className="ml-4">
                      <EditableCard
                        cardItem={{ ...item, type: activeTab }}
                        setEditedCard={setEditedCard}
                        setDeletedCard={setDeletedCard}
                        setAddedCard={setAddedCard}
                        clickOutsideMessage={clickOutsideMessage}
                        index={index}
                        onCreateGroup={handleCreateGroup}
                      />
                    </div>
                  ) : (
                    <EditableCard
                      cardItem={{ ...item, type: activeTab }}
                      setEditedCard={setEditedCard}
                      setDeletedCard={setDeletedCard}
                      setAddedCard={setAddedCard}
                      clickOutsideMessage={clickOutsideMessage}
                      index={index}
                      onCreateGroup={handleCreateGroup}
                    />
                  )}
                </React.Fragment>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ItemsList;
