import React, { useState } from "react";
import { Droppable } from "@hello-pangea/dnd";

const GroupHeader = ({
  groupName,
  itemCount,
  isCollapsed,
  onToggleCollapsed,
  onUpdateGroupName,
  droppableId,
  isRoot = false,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState(groupName);

  const handleNameEdit = () => {
    if (!isRoot) {
      // Don't allow editing root name
      setIsEditingName(true);
    }
  };

  const handleNameSave = () => {
    if (name.trim() !== "" && name !== groupName) {
      onUpdateGroupName?.(groupName, name.trim());
    }
    setIsEditingName(false);
  };

  const handleNameCancel = () => {
    setName(groupName);
    setIsEditingName(false);
  };

  const handleNameKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNameSave();
    } else if (e.key === "Escape") {
      handleNameCancel();
    }
  };

  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="group-header"
        >
          <button onClick={onToggleCollapsed} className="group-toggle-btn">
            <span
              className={`toggle-icon ${
                isCollapsed ? "collapsed" : "expanded"
              }`}
            >
              ▼
            </span>
            {isEditingName ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={handleNameSave}
                onKeyDown={handleNameKeyDown}
                className="group-name-input bg-blue-50 border-2 border-blue-300 rounded px-2 py-1 text-sm font-medium"
                autoFocus
              />
            ) : (
              <span
                className={`group-name ${
                  !isRoot ? "cursor-pointer hover:bg-blue-100" : ""
                } px-2 py-1 rounded`}
                onClick={handleNameEdit}
              >
                {groupName}
              </span>
            )}
            <span className="item-count">({itemCount})</span>
          </button>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default GroupHeader;
