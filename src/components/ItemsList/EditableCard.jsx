import React, { useRef, useEffect } from "react";
import SwitchToggle from "../SwitchToggle";

const EditableCard = ({
  item,
  isEditing,
  onEdit,
  onCancel,
  onDelete,
  // Edit state
  editName,
  setEditName,
  editAmount,
  setEditAmount,
  editPeriod,
  setEditPeriod,
  editContribution,
  setEditContribution,
  editIsExternal,
  setEditIsExternal,
  // Refs
  nameInputRef,
  amountInputRef,
  periodSelectRef,
  contributionInputRef,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isEditing &&
        cardRef.current &&
        !cardRef.current.contains(event.target)
      ) {
        onCancel();
      }
    };

    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing, onCancel]);

  return (
    <div
      ref={cardRef}
      className={`p-2  ${
        isEditing ? "bg-blue-50" : "hover:bg-gray-50 cursor-pointer"
      }`}
      onClick={!isEditing ? onEdit : undefined}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between gap-4 mb-2">
        {/* Name */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              ref={nameInputRef}
              placeholder="Name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className={`font-medium text-base text-gray-700 px-2 py-1 w-full ${
                isEditing
                  ? "border border-gray-300 rounded"
                  : "bg-transparent border-b border-gray-300"
              }`}
            />
          ) : (
            <span className="font-medium text-base text-gray-700 truncate block">
              {item.name}
            </span>
          )}
        </div>

        {/* Amount/Price */}
        <div className="flex-shrink-0">
          {isEditing ? (
            <input
              ref={amountInputRef}
              type="text"
              placeholder="Amount"
              value={editAmount}
              onChange={(e) => setEditAmount(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className={`font-medium text-base px-2 py-1 text-right ${
                isEditing
                  ? "border border-gray-300 rounded"
                  : "bg-transparent border-b border-gray-300"
              }`}
            />
          ) : (
            <span className="font-medium text-base">
              {item.formattedAmount || item.formattedPrice}
            </span>
          )}
        </div>

        {/* Period */}
        {item.period && (
          <div className="flex-shrink-0">
            {isEditing ? (
              <select
                ref={periodSelectRef}
                value={editPeriod}
                onChange={(e) => setEditPeriod(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-gray-500 px-2 py-1 border border-gray-300 rounded"
              >
                {item.periodOptions?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <span className="text-xs text-gray-500">{item.period}</span>
            )}
          </div>
        )}

        {/* Switch */}
        {item.isExternal !== undefined && (
          <div className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
            <SwitchToggle
              value={isEditing ? editIsExternal : !!item.isExternal}
              onChange={(val) => {
                if (isEditing) {
                  setEditIsExternal(val);
                } else {
                  onEdit();
                }
              }}
              trueLabel="External"
              falseLabel="Internal"
              colorA="from-green-400"
              colorB="to-blue-400"
            />
          </div>
        )}

        {/* Delete button */}
        {isEditing && (
          <div className="flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
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
        {item.formattedTimestamp && (
          <div className="flex-shrink-0">
            <span className="text-xs text-gray-400">
              {item.formattedTimestamp}
            </span>
          </div>
        )}

        {/* Secondary Value (for goals) */}
        {item.formattedContribution && (
          <div className="flex-shrink-0">
            {isEditing ? (
              <input
                ref={contributionInputRef}
                type="text"
                placeholder="Daily contribution"
                value={editContribution}
                onChange={(e) => setEditContribution(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-gray-500 px-2 py-1 border border-gray-300 rounded"
              />
            ) : (
              <span className="text-xs text-gray-500">
                {item.formattedContribution}
              </span>
            )}
          </div>
        )}

        {/* Tertiary Value (for goals) */}
        {item.days && (
          <div className="flex-shrink-0">
            <span className="text-gray-500 text-sm">({item.days} days)</span>
          </div>
        )}

        {/* Spacer to push items to the left */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default EditableCard;
