import React from 'react'

const ReportCard = ({ 
  title, 
  value, 
  subtitle, 
  backgroundColor = "bg-gray-50", 
  textColor = "text-gray-600",
  valueColor = "text-gray-800",
  inline = false
}) => {
  if (inline) {
    return (
      <div className={`p-4 border rounded w-full cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:shadow-sm border-gray-200 ${backgroundColor}`}>
        <div className="flex flex-col">
          <span className="font-medium text-base mb-2">{title}</span>
          <div className="flex justify-between items-center">
            <span className="font-medium text-base">
              {value}
            </span>
            {subtitle && (
              <span className="text-sm text-gray-600">
                {subtitle}
              </span>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`p-4 border rounded w-full cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:shadow-sm border-gray-200 ${backgroundColor}`}>
      <span className="font-medium text-base block mb-2">{title}</span>
      <div className="flex justify-between items-center">
        <div className={`font-medium text-base break-words ${valueColor}`}>
          {value}
        </div>
        {subtitle && (
          <div className={`text-sm ${textColor}`}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  )
}

export default ReportCard 