import React, { useRef, useEffect } from "react";

const EditableCard = ({ isEditing, onEdit, onCancel, children }) => {
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
      className={`p-3 border rounded transition-all duration-200 flex items-center justify-between ${
        isEditing
          ? "border-gray-300"
          : onEdit
          ? "bg-gray-50 hover:bg-gray-100 hover:shadow-sm border-gray-200 cursor-pointer"
          : "bg-gray-50 border-gray-200"
      }`}
      onClick={!isEditing && onEdit ? onEdit : undefined}
    >
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default EditableCard;
