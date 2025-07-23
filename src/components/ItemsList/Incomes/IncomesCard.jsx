import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { formatCurrency } from "../../../utils/formatters";
import dndSettings from "../../../dndSettings";

const IncomesCard = React.memo(function IncomesCard({
  income,
  disabled = false,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: income.id,
    data: { type: "card", id: income.id },
    disabled,
  });

  function handleClick() {
    // intentionally left blank
  }

  if (!income) {
    return <div style={{ color: "red" }}>Income not found</div>;
  }
  const currency = "THB"; // Use a default for now

  // Make placeholder invisible when dragging cards if setting is enabled
  const placeholderOpacity =
    isDragging && !dndSettings.draggedCard.placeholderVisible
      ? 0
      : isDragging
      ? 0.5
      : 1;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: placeholderOpacity,
    background: isDragging ? "#f8fafc" : "white",
    marginBottom: 4,
    borderRadius: 6,
    boxShadow: isDragging ? "0 2px 8px #b3c6ff" : "0 1px 3px #e0e0e0",
    cursor: isDragging ? "grabbing" : "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={handleClick}
    >
      <div className="bg-white rounded-xl shadow p-3 flex items-center justify-between cursor-pointer transition-colors mb-2">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm">▶</span>
          <span className="font-semibold text-sm">{income.name || ""}</span>
          <span className="text-xs text-gray-500">• {income.source || ""}</span>
          <span className="text-xs text-gray-500">• {income.period || ""}</span>
        </div>
        <span className="text-blue-700 font-bold text-base">
          {formatCurrency(income.amount || 0, currency)}
        </span>
      </div>
    </div>
  );
});

export default IncomesCard;
