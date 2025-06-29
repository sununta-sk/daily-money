export const formatThaiBaht = (amount) => {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return '฿0';
  }
  
  // Round to nearest whole number (Thai Baht doesn't use decimals)
  const roundedAmount = Math.round(amount);
  
  // Add commas for thousands
  const formattedAmount = roundedAmount.toLocaleString('en-US');
  
  return `฿${formattedAmount}`;
};

export const formatNumber = (number) => {
  if (number === null || number === undefined || isNaN(number)) {
    return '0';
  }
  
  // Round to nearest whole number
  const roundedNumber = Math.round(number);
  
  // Add commas for thousands
  return roundedNumber.toLocaleString('en-US');
};

export const capitalizeFirstLetter = (string) => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}; 