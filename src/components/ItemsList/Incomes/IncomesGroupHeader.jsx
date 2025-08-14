import React, { useRef, useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import dndSettings from "../../../dndSettings";

export default function IncomesGroupHeader(props) {
  const headerRef = useRef(null);

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useSortable({
      id: props.node.id,
      data: {
        type: "header",
        node: props.node,
      },
    });

  // Move all hooks to the top
  const [inputValue, setInputValue] = useState(props.name);
  const inputRef = useRef(null);

  useEffect(() => {
    setInputValue(props.name);
  }, [props.name, props.editing]);

  useEffect(() => {
    if (props.editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [props.editing]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    if (inputValue.trim() && inputValue !== props.name) {
      props.onEditGroupName(props.node.id, inputValue.trim());
    } else {
      props.onCancelEdit();
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleInputBlur();
    } else if (e.key === "Escape") {
      props.onCancelEdit();
    }
  };

  const transitionDurationMs = dndSettings.collidedHeader.transitionSpeedMs;
  const growDownPx = dndSettings.collidedHeader.howMuchHeaderBGrowsDownPx;
  const growDirection = dndSettings.collidedHeader.growDirection;

  const isDropTarget =
    props.node.id === props.overId && props.type === "header";
  const isBeingHugged = props.node.id === props.huggedHeaderId;

  // Only apply grow-down if isBeingHugged, otherwise use base height
  const baseHeight = 44; // px, matches PlaceholderComponent and visual default
  const animatedHeight = isBeingHugged ? baseHeight + growDownPx : baseHeight;

  // Calculate the center of the grown area for drop zone balancing
  useEffect(() => {
    if (headerRef.current && isBeingHugged) {
      const rect = headerRef.current.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;

      // Notify parent component about the adjusted drop zone center
      if (props.onDropZoneUpdate) {
        props.onDropZoneUpdate(props.node.id, {
          centerY,
          height: rect.height,
          isGrown: true,
        });
      }
    }
  }, [isBeingHugged, props.node.id, props.onDropZoneUpdate]);

  let finalTransform = transform;
  // No scale transform for grow-down effect

  // When growing upward, adjust the drop zone to be centered in the grown area
  if (
    isBeingHugged &&
    growDirection === "up" &&
    dndSettings.collidedHeader.centerDropZoneInGrownArea
  ) {
    // Shift the collision area up by half the grow amount to center it in the grown space
    const shiftUpAmount = growDownPx / 2;
    finalTransform = {
      ...finalTransform,
      y: (finalTransform.y || 0) - shiftUpAmount,
    };
  }

  // Placeholder component for when this header is being dragged
  const PlaceholderComponent = () => (
    <div
      style={{
        height: baseHeight,
        marginBottom: 8,
        borderRadius: 8,
        background: "#f3f4f6",
        border: "1px dashed #cbd5e1",
        opacity: 0.7,
        marginLeft: props.style?.marginLeft || 0,
      }}
    />
  );

  if (isDragging) {
    return (
      <div ref={setNodeRef} {...attributes} {...listeners}>
        <PlaceholderComponent />
      </div>
    );
  }

  const baseStyle = {
    transform: CSS.Transform.toString(finalTransform),
    height: animatedHeight,
    // Apply different styling based on grow direction
    ...(isBeingHugged && growDirection === "up"
      ? {
          transformOrigin: "bottom",
          marginTop: -growDownPx, // Move up by the grow amount
        }
      : {}),
    transition: `transform ${transitionDurationMs}ms ease, height 250ms cubic-bezier(0.4,0,0.2,1)`,
    opacity: isDragging ? 0.5 : 1,
    background: isDragging
      ? "#f0f4ff"
      : isBeingHugged
      ? "#e8f4fd"
      : isDropTarget
      ? "#e3f0ff" // original blue for drop target
      : "white",
    marginBottom: 8,
    borderRadius: isBeingHugged ? 12 : 8,
    boxShadow: isDragging
      ? "0 2px 8px #b3c6ff"
      : isBeingHugged
      ? "0 4px 12px rgba(59, 130, 246, 0.3)"
      : "0 1px 3px #e0e0e0",
    cursor: isDragging ? "grabbing" : "grab",
    fontWeight: "bold",
    userSelect: "none",
    // scale: isBeingHugged ? 1.02 : 1, // legacy, can be removed if using growScale
    ...props.style,
  };

  const handleHeaderClick = (e) => {
    e.stopPropagation();
    if (props.onCollapseToggle) props.onCollapseToggle();
  };

  return (
    <div
      ref={(node) => {
        headerRef.current = node;
        setNodeRef(node);
      }}
      {...attributes}
      {...listeners}
      className="group-income-header border-b border-gray-200 p-3 transition-all duration-200 cursor-pointer bg-gray-100 hover:bg-gray-150 flex items-start justify-start"
      style={baseStyle}
      data-draggableid={props.draggableId}
      data-index={props.index}
      onClick={handleHeaderClick}
    >
      <span style={{ marginRight: 8, alignSelf: "flex-start" }}>
        {props.node.collapsed ? "▶" : "▼"}
      </span>
      {props.editing ? (
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          style={{
            fontSize: 16,
            fontWeight: 500,
            padding: "2px 6px",
            borderRadius: 4,
            border: "1px solid #cbd5e1",
            outline: "none",
            minWidth: 80,
          }}
          maxLength={32}
        />
      ) : (
        <span
          className="font-medium text-gray-800"
          style={{ alignSelf: "flex-start" }}
        >
          {props.name}
        </span>
      )}
    </div>
  );
}
