import React from "react";
import { formatCurrency } from "../../utils/currency";
import { calculateDailyFreeMoney } from "../../utils/calculations";

const MiniReport = ({ incomes, costs, selectedCurrency }) => {
  const dailyFreeMoney = calculateDailyFreeMoney(incomes, costs);

  return (
    <div className="p-3 border rounded-2xl bg-white/70 backdrop-blur-md shadow-md flex-shrink-0">
      {/* Title and Amount on same line */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700 drop-shadow-sm m-0">
          Daily Money
        </h3>
        <span className="text-2xl font-bold text-green-600">
          {formatCurrency(dailyFreeMoney, selectedCurrency)}
        </span>
      </div>
    </div>
  );
};

export default MiniReport;
