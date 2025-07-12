import React from "react";

const GroupHeader = ({ groupName, itemCount }) => {
  return (
    <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-blue-500 mb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-800">{groupName}</h3>
          <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GroupHeader;
