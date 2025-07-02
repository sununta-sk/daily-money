import React, { useRef, useEffect } from 'react'
import { formatDate } from '../../utils/formatters'

const EditableCard = ({ 
  isEditing, 
  onEdit, 
  onSave, 
  onCancel, 
  onDelete,
  children,
  timestamp,
  period
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isEditing && cardRef.current && !cardRef.current.contains(event.target)) {
        onCancel();
      }
    };

    if (isEditing) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditing, onCancel]);

  return (
    <div 
      ref={cardRef}
      className={`p-3 border rounded transition-all duration-200 flex items-center justify-between ${
        isEditing 
          ? 'border-gray-300' 
          : onEdit 
            ? 'bg-gray-50 hover:bg-gray-100 hover:shadow-sm border-gray-200 cursor-pointer'
            : 'bg-gray-50 border-gray-200'
      }`}
      onClick={!isEditing && onEdit ? onEdit : undefined}
    >
      <div className="flex-1">
        {children}
        {(timestamp || period) && (
          <div className="flex justify-between items-baseline mt-1">
            <span className="text-xs text-gray-500 leading-none">
              {timestamp ? formatDate(timestamp) : ''}
            </span>
            <span className="text-xs text-gray-500 leading-none">
              {period || ''}
            </span>
          </div>
        )}
      </div>
      
      {isEditing && (
        <div className="flex gap-2 ml-4">
          <button 
            onClick={onSave}
            className="px-3 py-1 border border-gray-300 rounded text-sm text-black"
          >
            Save
          </button>
          <button 
            onClick={onDelete}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default EditableCard 