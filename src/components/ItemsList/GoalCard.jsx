import React, { useState, useEffect, useRef } from "react";
import { Draggable } from "@hello-pangea/dnd";
import { PERIOD_OPTIONS } from "../../utils/periods";

const GoalCard = ({
  // The goal object
  goal,
  // Functions to update the database
  setEditedGoal,
  setDeletedGoal,
  // App-level editing state
  currentEditedCardRef,
  // Drag state
  index,
}) => {
  // Create our own ref if none is provided
  const cardRef = useRef();

  // Local state to capture internal state
  const [localGoal, setLocalGoal] = useState(goal);
  // Track original data to detect changes
  const originalGoalRef = useRef(goal);

  // Update local state when goal changes
  useEffect(() => {
    setLocalGoal(goal);
    originalGoalRef.current = goal;
  }, [goal]);

  // Function to check if data has changed
  const hasChanged = () => {
    const original = originalGoalRef.current;
    const current = localGoal;

    const changed =
      original.name !== current.name ||
      original.price !== current.price ||
      original.dailyContribution !== current.dailyContribution ||
      original.period !== current.period;

    if (changed) {
      console.log("🔍 GoalCard: Changes detected:");
      console.log("  Original:", original);
      console.log("  Current:", current);
    }

    return changed;
  };

  // Function to save the complete object only if changed
  const saveGoal = () => {
    console.log("💾 GoalCard: saveGoal() called");
    console.log("💾 GoalCard: hasChanged() =", hasChanged());

    if (hasChanged()) {
      console.log("💾 GoalCard: Data changed, calling setEditedGoal()");
      console.log("💾 GoalCard: Saving data:", localGoal);
      setEditedGoal(localGoal);
      // Update original data reference after saving
      originalGoalRef.current = { ...localGoal };
      console.log("💾 GoalCard: Updated originalGoalRef");
    } else {
      console.log("💾 GoalCard: No changes detected, skipping save");
    }
  };

  // Function to update local state only
  const updateLocal = (field, value) => {
    const updatedLocalGoal = {
      ...localGoal,
      [field]: value,
    };
    setLocalGoal(updatedLocalGoal);
  };

  // Editing state management
  const [isEditing, setIsEditing] = useState(false);

  // Watch for ref changes to exit edit mode when ref is cleared
  useEffect(() => {
    if (!currentEditedCardRef && isEditing) {
      console.log("🔴 GoalCard: Exiting edit mode - ref cleared");
      setIsEditing(false);
      saveGoal();
    }
  }, [currentEditedCardRef, isEditing]);

  // Watch for ref changes to enter/exit edit mode
  useEffect(() => {
    if (currentEditedCardRef === cardRef && !isEditing) {
      console.log("🟢 GoalCard: Entering edit mode - ref set");
      setIsEditing(true);
    } else if (currentEditedCardRef !== cardRef && isEditing) {
      console.log("🔴 GoalCard: Exiting edit mode - ref cleared");
      setIsEditing(false);
      saveGoal();
    }
  }, [currentEditedCardRef, cardRef, isEditing]);

  // Smart border styling that prevents layout shifts
  const getInputStyle = () => {
    const baseStyle =
      "font-medium text-base px-2 py-1 w-full rounded transition-colors duration-200";

    if (isEditing) {
      return `${baseStyle} border-2 border-blue-300 bg-blue-50`;
    } else {
      return `${baseStyle} border-2 border-transparent bg-transparent hover:border-gray-200`;
    }
  };

  // Smart select styling that hides dropdown arrow when not editing
  const getSelectStyle = () => {
    const baseStyle =
      "text-xs text-gray-500 px-2 py-1 border-2 rounded transition-all duration-200 appearance-none";

    if (isEditing) {
      return `${baseStyle} border-blue-300 bg-blue-50 bg-[url('data:image/svg+xml;charset=US-ASCII,<svg width="12" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l5 5 5-5" stroke="%23666" stroke-width="2" fill="none"/></svg>')] bg-no-repeat bg-right-2 bg-[length:12px_8px]`;
    } else {
      return `${baseStyle} border-transparent bg-transparent hover:border-gray-200`;
    }
  };

  return (
    <Draggable draggableId={goal.id || `temp-${goal.name}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={(element) => {
            provided.innerRef(element);
            cardRef.current = element;
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`border rounded-lg bg-white/80 shadow-sm w-full p-2 transition-colors duration-200 ${
            isEditing ? "bg-blue-50" : "hover:bg-gray-50 cursor-pointer"
          } ${
            snapshot.isDragging
              ? "z-50 cursor-grabbing opacity-50"
              : "cursor-grab"
          }`}
        >
          {/* Top Row */}
          <div className="flex items-center justify-between gap-4 mb-2">
            {/* Name */}
            <div className="flex-1 min-w-0">
              {isEditing ? (
                <input
                  placeholder="Goal name"
                  value={localGoal.name || ""}
                  onChange={(e) => updateLocal("name", e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveGoal()}
                  className={getInputStyle() + " text-gray-700"}
                />
              ) : (
                <div className="font-medium text-base text-gray-700 px-2 py-1">
                  {localGoal.name || "Unnamed Goal"}
                </div>
              )}
            </div>

            {/* Price */}
            <div className="flex-shrink-0">
              {isEditing ? (
                <input
                  type="text"
                  placeholder="Price"
                  value={localGoal.price?.toString() || ""}
                  onChange={(e) =>
                    updateLocal("price", parseFloat(e.target.value) || 0)
                  }
                  onKeyDown={(e) => e.key === "Enter" && saveGoal()}
                  className={getInputStyle() + " text-right"}
                />
              ) : (
                <div className="font-medium text-base text-right px-2 py-1">
                  {localGoal.price
                    ? `$${localGoal.price.toLocaleString()}`
                    : "$0"}
                </div>
              )}
            </div>

            {/* Period */}
            {goal.period && (
              <div className="flex-shrink-0">
                {isEditing ? (
                  <select
                    value={localGoal.period || "monthly"}
                    onChange={(e) => {
                      updateLocal("period", e.target.value);
                      saveGoal();
                    }}
                    className={getSelectStyle()}
                  >
                    {PERIOD_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="text-xs text-gray-500 px-2 py-1 capitalize">
                    {localGoal.period || "monthly"}
                  </div>
                )}
              </div>
            )}

            {/* Delete button - only show when editing */}
            {isEditing && (
              <div className="flex-shrink-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Don't delete if we're dragging
                    if (snapshot.isDragging) {
                      console.log(
                        "🚫 GoalCard: Delete button click blocked - isDragging = true"
                      );
                      return;
                    }
                    console.log(
                      "✅ GoalCard: Delete button click allowed - deleting goal"
                    );
                    setDeletedGoal(goal);
                  }}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between gap-4">
            {/* Timestamp */}
            {goal.formattedTimestamp && (
              <div className="flex-shrink-0">
                <span className="text-xs text-gray-400">
                  {goal.formattedTimestamp}
                </span>
              </div>
            )}

            {/* Daily Contribution */}
            {goal.formattedContribution && (
              <div className="flex-shrink-0">
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Daily contribution"
                    value={localGoal.dailyContribution?.toString() || ""}
                    onChange={(e) =>
                      updateLocal(
                        "dailyContribution",
                        parseFloat(e.target.value) || 0
                      )
                    }
                    onKeyDown={(e) => e.key === "Enter" && saveGoal()}
                    className="text-xs text-gray-500 px-2 py-1 border-2 border-transparent hover:border-gray-200 rounded transition-colors duration-200"
                  />
                ) : (
                  <div className="text-xs text-gray-500 px-2 py-1">
                    ${localGoal.dailyContribution?.toLocaleString() || "0"}/day
                  </div>
                )}
              </div>
            )}

            {/* Days to target */}
            {goal.days && (
              <div className="flex-shrink-0">
                <span className="text-gray-500 text-sm">
                  ({goal.days} days)
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default GoalCard;
