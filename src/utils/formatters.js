import { formatCurrency as formatCurrencyWithConversion } from "./currency.js";

export const formatThaiBaht = (amount) => {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return "฿0";
  }

  // Round to nearest whole number (Thai Baht doesn't use decimals)
  const roundedAmount = Math.round(amount);

  // Add commas for thousands
  const formattedAmount = roundedAmount.toLocaleString("en-US");

  return `฿${formattedAmount}`;
};

export const formatCurrency = (amount, currency = "THB") => {
  return formatCurrencyWithConversion(amount, currency);
};

export const parseCurrency = (formattedString) => {
  if (!formattedString || typeof formattedString !== "string") {
    return 0;
  }

  // Remove currency symbol and any non-numeric characters except decimal point and comma
  const cleaned = formattedString.replace(/[^\d.,]/g, "");

  // Handle different decimal separators (comma vs period)
  let numericString = cleaned;

  // If there's a comma and it's not the last character, it might be a decimal separator
  if (cleaned.includes(",") && cleaned.lastIndexOf(",") < cleaned.length - 1) {
    // Replace comma with period for decimal
    numericString = cleaned.replace(",", ".");
  } else {
    // Remove commas (thousands separators)
    numericString = cleaned.replace(/,/g, "");
  }

  const parsed = parseFloat(numericString);
  return isNaN(parsed) ? 0 : parsed;
};

export const formatNumber = (number) => {
  if (number === null || number === undefined || isNaN(number)) {
    return "0";
  }

  // Round to nearest whole number
  const roundedNumber = Math.round(number);

  // Add commas for thousands
  return roundedNumber.toLocaleString("en-US");
};

export const capitalizeFirstLetter = (string) => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatDate = (date) => {
  if (!date) return "";

  // Convert Firestore timestamp to Date if needed
  const dateObj = date.toDate ? date.toDate() : new Date(date);

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return dateObj.toLocaleDateString("en-US", options);
};
