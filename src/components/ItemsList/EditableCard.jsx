import React, { useState, useEffect, useRef } from "react";
import { Draggable } from "@hello-pangea/dnd";
import SwitchToggle from "../SwitchToggle";
import { PERIOD_OPTIONS } from "../../utils/periods";

const EditableCard = ({
  // APP-LEVEL PROPS (from App.jsx via ItemsList)
  cardItem: cardItemData, // Data object containing card information (id, name, amount, type, period, etc.) with pre-formatted amounts

  // CRUD CARD OPERATIONS (from App.jsx via ItemsList)
  setEditedCard, // Function for UPDATE card operations
  setDeletedCard, // Function for DELETE card operations
  // eslint-disable-next-line no-unused-vars
  setAddedCard, // Function for ADD card operations

  // GROUP OPERATIONS (from App.jsx - full CRUD available)
  // eslint-disable-next-line no-unused-vars
  setAddedGroup, // Pure state setter for CREATE group operations
  setEditedGroup, // Pure state setter for UPDATE group operations
  setDeletedGroup, // Pure state setter for DELETE group operations

  // CLICK OUTSIDE STATE (from App.jsx - signal to react to)
  clickOutsideMessage, // Signal from app level to exit edit mode

  // DRAG STATE (from @hello-pangea/dnd)
  index, // Index for drag and drop

  // GROUP CREATION
  onCreateGroup, // Function to create a group with this card

  // INTERNAL STATE
}) => {
  // ===== LOCAL-FIRST STATE FOR IMMEDIATE UI FEEDBACK =====
  const [cardItem, setCardItem] = useState(cardItemData); // Local copy of single card for immediate editing

  const [validationErrors, setValidationErrors] = useState({}); // Local validation state
  const [isSaving, setIsSaving] = useState(false); // Local saving state for UI feedback
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false); // Track unsaved changes
  const [isEditing, setIsEditing] = useState(false); // Individual card edit state

  // ===== REFS FOR STATE MANAGEMENT =====
  const originalDataRef = useRef(cardItemData); // Reference to original data
  const saveTimeoutRef = useRef(null); // Debounced save timeout

  // ===== LOCAL STATE EFFECTS =====
  // Update local state when cardItem changes from parent
  useEffect(() => {
    setCardItem(cardItemData);
    originalDataRef.current = cardItemData;
    setHasUnsavedChanges(false);
    setValidationErrors({});
  }, [cardItemData]);

  // Auto-save with debouncing when local data changes
  useEffect(() => {
    if (hasUnsavedChanges && !isEditing) {
      // Clear existing timeout
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }

      // Set new timeout for auto-save
      saveTimeoutRef.current = setTimeout(() => {
        prepareEditedCard();
      }, 1000); // 1 second debounce
    }

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [cardItem, hasUnsavedChanges, isEditing]);

  // Listen for click outside signal from app level
  useEffect(() => {
    if (clickOutsideMessage && isEditing) {
      handleExitEditMode();
    }
  }, [clickOutsideMessage, isEditing]);

  // ===== LOCAL UTILITY FUNCTIONS =====
  // Check if local data has changed from original data
  const hasChanged = () => {
    const original = originalDataRef.current;
    const current = cardItem;

    return (
      original.name !== current.name ||
      original.amount !== current.amount ||
      original.period !== current.period ||
      original.isExternal !== current.isExternal
    );
  };

  // Validate local data
  const validateLocalData = () => {
    const errors = {};

    if (!cardItem.name || cardItem.name.trim() === "") {
      errors.name = "Name is required";
    }

    if (
      cardItem.amount === undefined ||
      cardItem.amount === null ||
      cardItem.amount < 0
    ) {
      errors.amount = "Amount must be a positive number";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Update local state for a specific field with immediate UI feedback
  const updateLocal = (field, value) => {
    const updatedCardItem = {
      ...cardItem,
      [field]: value,
    };
    setCardItem(updatedCardItem);
    setHasUnsavedChanges(true);

    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  // Handle card background click to toggle edit mode
  const handleCardClick = (e) => {
    // Only toggle if clicking on the card background, not on inputs/buttons
    if (
      e.target.tagName === "INPUT" ||
      e.target.tagName === "BUTTON" ||
      e.target.tagName === "SELECT" ||
      e.target.closest("input") ||
      e.target.closest("button") ||
      e.target.closest("select")
    ) {
      return; // Don't toggle edit mode for interactive elements
    }

    setIsEditing((prev) => !prev);
  };

  // Consolidated input interaction handler
  const handleInputInteraction = (e, action, field, value) => {
    switch (action) {
      case "click":
        // Input click - no action needed, inputs work naturally now
        break;
      case "blur":
        // Input blur - no action needed
        break;
      case "keydown":
        if (e.key === "Enter") setIsEditing(false);
        if (e.key === "Escape") {
          setCardItem(originalDataRef.current);
          setIsEditing(false);
        }
        break;
      case "change":
        updateLocal(field, value);
        break;
    }
  };

  // Handle exiting edit mode
  const handleExitEditMode = () => {
    if (hasUnsavedChanges) {
      prepareEditedCard();
    }
    setIsEditing(false);
    setHasUnsavedChanges(false);
    setValidationErrors({});
  };

  // ===== PREPARE FUNCTIONS (KEEPING YOUR SETTER ARCHITECTURE) =====
  // PREPARE CARD OPERATIONS
  const prepareEditedCard = async () => {
    if (!validateLocalData()) {
      return; // Don't save if validation fails
    }

    if (hasChanged()) {
      setIsSaving(true);
      try {
        await setEditedCard(cardItem); // App-level setter
        originalDataRef.current = { ...cardItem }; // Update original reference
        setHasUnsavedChanges(false);
        setValidationErrors({});
      } catch (error) {
        console.error("Error saving card:", error);
        // Could add error state here for UI feedback
      } finally {
        setIsSaving(false);
      }
    }
  };

  const prepareDeletedCard = () => {
    setDeletedCard(cardItem); // App-level setter
  };

  // PREPARE GROUP OPERATIONS
  // Group creation is now handled by onCreateGroup prop

  // eslint-disable-next-line no-unused-vars
  const prepareEditedGroup = (groupId, updates) => {
    setEditedGroup(groupId, updates, cardItem.type); // App-level setter
  };

  // eslint-disable-next-line no-unused-vars
  const prepareDeletedGroup = (group) => {
    setDeletedGroup(group); // App-level setter
  };

  // Safety check - if cardItemData is undefined, don't render
  if (!cardItemData) {
    return null;
  }

  return (
    <Draggable
      draggableId={`${cardItemData.id || `temp-${cardItemData.name}`}-${index}`}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={handleCardClick}
          className={`relative border rounded-lg bg-white/80 shadow-sm w-full p-2 transition-colors duration-200 ${
            isEditing ? "bg-blue-50" : "hover:bg-gray-50 cursor-pointer"
          } ${hasUnsavedChanges ? "ring-1 ring-yellow-400" : ""} ${
            snapshot.isDragging
              ? "z-50 cursor-grabbing opacity-50"
              : "cursor-grab"
          }`}
        >
          {/* Top Row */}
          <div className="flex items-center justify-between gap-2">
            {/* Name */}
            <div className="flex-1 min-w-0">
              {isEditing ? (
                <div>
                  <input
                    placeholder="Name"
                    value={cardItem.name || ""}
                    onChange={(e) => updateLocal("name", e.target.value)}
                    onClick={(e) => handleInputInteraction(e, "click")}
                    onBlur={(e) => handleInputInteraction(e, "blur")}
                    onKeyDown={(e) => handleInputInteraction(e, "keydown")}
                    className={`font-medium text-base px-2 py-1 w-full rounded transition-colors duration-200 ${
                      isEditing
                        ? "border-2 border-blue-300 bg-blue-50"
                        : "border-2 border-transparent bg-transparent hover:border-gray-200"
                    } text-gray-700 ${
                      validationErrors.name ? "border-red-500" : ""
                    }`}
                  />
                  {validationErrors.name && (
                    <div className="text-xs text-red-500 mt-1">
                      {validationErrors.name}
                    </div>
                  )}
                </div>
              ) : (
                <div className="font-medium text-base text-gray-700">
                  {cardItem.name || "Unnamed"}
                </div>
              )}
            </div>

            {/* Amount */}
            <div className="flex-shrink-0">
              {isEditing ? (
                <div>
                  <input
                    type="text"
                    placeholder="Amount"
                    value={cardItem.amount?.toString() || ""}
                    onChange={(e) =>
                      updateLocal("amount", parseFloat(e.target.value) || 0)
                    }
                    onClick={(e) => handleInputInteraction(e, "click")}
                    onBlur={(e) => handleInputInteraction(e, "blur")}
                    onKeyDown={(e) => handleInputInteraction(e, "keydown")}
                    className={`font-medium text-base px-2 py-1 w-full rounded transition-colors duration-200 ${
                      isEditing
                        ? "border-2 border-blue-300 bg-blue-50"
                        : "border-2 border-transparent bg-transparent hover:border-gray-200"
                    } text-right ${
                      validationErrors.amount ? "border-red-500" : ""
                    }`}
                  />
                  {validationErrors.amount && (
                    <div className="text-xs text-red-500 mt-1">
                      {validationErrors.amount}
                    </div>
                  )}
                </div>
              ) : (
                <div className="font-medium text-base text-right">
                  {cardItem.formattedAmount || `฿${cardItem.amount || 0}`}
                </div>
              )}
            </div>

            {/* Period */}
            {cardItemData.period && (
              <div className="flex-shrink-0">
                {isEditing ? (
                  <select
                    value={cardItem.period || "monthly"}
                    onChange={(e) => {
                      updateLocal("period", e.target.value);
                    }}
                    onClick={(e) => handleInputInteraction(e, "click")}
                    onBlur={(e) => handleInputInteraction(e, "blur")}
                    className={`text-xs text-gray-500 px-2 py-1 border-2 rounded transition-all duration-200 appearance-none ${
                      isEditing
                        ? 'border-blue-300 bg-blue-50 bg-[url(\'data:image/svg+xml;charset=US-ASCII,<svg width="12" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l5 5 5-5" stroke="%23666" stroke-width="2" fill="none"/></svg>\')] bg-no-repeat bg-right-2 bg-[length:12px_8px]'
                        : "border-transparent bg-transparent hover:border-gray-200"
                    }`}
                  >
                    {PERIOD_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="text-xs text-gray-500 capitalize">
                    {cardItem.period || "monthly"}
                  </div>
                )}
              </div>
            )}

            {/* Switch */}
            {cardItemData.isExternal !== undefined && (
              <div className="flex-shrink-0">
                {isEditing ? (
                  <SwitchToggle
                    value={cardItem.isExternal}
                    onChange={(val) =>
                      handleInputInteraction(null, "change", "isExternal", val)
                    }
                    onClick={(e) => handleInputInteraction(e, "click")}
                    trueLabel="External"
                    falseLabel="Internal"
                    colorA="from-green-400"
                    colorB="to-blue-400"
                  />
                ) : (
                  <div className="text-xs">
                    <span
                      className={`rounded-full text-white text-xs ${
                        cardItem.isExternal ? "bg-green-500" : "bg-blue-500"
                      }`}
                    >
                      {cardItem.isExternal ? "External" : "Internal"}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between">
            {/* Timestamp */}
            {cardItemData.formattedTimestamp && (
              <div className="flex-shrink-0">
                <span className="text-xs text-gray-400">
                  {cardItemData.formattedTimestamp}
                </span>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex-shrink-0 flex gap-1">
              {/* Create Group button - always show if card is not in a group */}
              {!cardItemData.group && onCreateGroup && (
                <button
                  onClick={(e) => {
                    handleInputInteraction(e, "click");
                    onCreateGroup(cardItem.id);
                  }}
                  className="bg-blue-500 text-white rounded hover:bg-blue-600 text-xs px-2 py-1"
                  title="Create new group with this card"
                >
                  Group
                </button>
              )}

              {/* Save indicator */}
              {isSaving && (
                <div className="text-xs text-blue-500 flex items-center gap-1">
                  <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  Saving...
                </div>
              )}

              {/* Delete button - only show when editing */}
              {isEditing && (
                <button
                  onClick={(e) => {
                    handleInputInteraction(e, "click");
                    prepareDeletedCard();
                  }}
                  className="bg-red-500 text-white rounded hover:bg-red-600 text-xs px-2 py-1"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default EditableCard;
