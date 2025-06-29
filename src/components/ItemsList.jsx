import React from 'react'
import EditableCard from './EditableCard'

const ItemsList = ({ 
  title, 
  items, 
  editingItem,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  renderEditForm,
  renderDisplayContent
}) => {
  return (
    <div className="">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{title}</h2>
      <div className="grid gap-2">
        {items.map(item => (
          <EditableCard
            key={item.id}
            isEditing={editingItem === item.id}
            onEdit={() => onEdit(item)}
            onSave={onSave}
            onCancel={onCancel}
            onDelete={() => onDelete(item.id)}
          >
              {editingItem === item.id ? (
                renderEditForm(item)
              ) : (
                renderDisplayContent(item)
              )}
          </EditableCard>
        ))}
      </div>
    </div>
  )
}

export default ItemsList 