import React, { useState } from 'react'

const AddItemForm = ({ 
  title, 
  fields, 
  onSubmit, 
  isSubmitting, 
  onKeyPress 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-2 sm:p-4 border rounded mb-4 sm:mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        <svg 
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-3 sm:mt-4 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {fields.map((field, index) => (
            <div key={index}>
              {field.type === 'select' ? (
                <select 
                  value={field.value} 
                  onChange={field.onChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base w-full"
                >
                  {field.options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input 
                  type={field.type}
                  step={field.step}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={field.onChange}
                  onKeyPress={onKeyPress}
                  className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base w-full"
                />
              )}
            </div>
          ))}
          <button 
            onClick={onSubmit} 
            disabled={isSubmitting}
            className={`px-3 py-2 text-white rounded text-sm sm:text-base ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isSubmitting ? 'Adding...' : 'Add'}
          </button>
        </div>
      )}
    </div>
  )
}

export default AddItemForm 