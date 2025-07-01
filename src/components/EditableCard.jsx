import React from 'react'
import { formatDate } from '../utils/formatters'

const EditableCard = ({ 
  isEditing, 
  onEdit, 
  onSave, 
  onCancel, 
  onDelete,
  children,
  timestamp
}) => {
  return (
    <div 
      className={`p-3 sm:p-4 border rounded cursor-pointer transition-all duration-200 flex items-center justify-between ${
        isEditing 
          ? 'border-gray-300' 
          : 'bg-gray-50 hover:bg-gray-100 hover:shadow-sm border-gray-200'
      }`}
      onClick={!isEditing ? onEdit : undefined}
    >
      <div className="flex-1">
        {children}
        {timestamp && (
          <div className="text-xs text-gray-500 mt-1">
            {formatDate(timestamp)}
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
            onClick={onCancel}
            className="px-3 py-1 border border-gray-300 rounded text-sm text-black"
          >
            Cancel
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