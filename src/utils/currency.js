const CURRENCIES = {
  THB: { symbol: "฿", name: "Thai Baht", decimals: 0 },
  USD: { symbol: "$", name: "US Dollar", decimals: 2 },
  NZD: { symbol: "$", name: "New Zealand Dollar", decimals: 2 },
  AED: { symbol: "د.إ", name: "UAE Dirham", decimals: 2, roundTo: 0.25 },
};

let exchangeRates = {};

export const fetchExchangeRates = async () => {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/THB"
    );
    const data = await response.json();
    exchangeRates = data.rates;
    return data.rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return {};
  }
};

export const convertCurrency = (amount, fromCurrency = "THB", toCurrency) => {
  if (!exchangeRates[toCurrency] || fromCurrency === toCurrency) {
    return amount;
  }

  if (fromCurrency === "THB") {
    return amount * exchangeRates[toCurrency];
  }

  // Convert from THB first, then to target currency
  const thbAmount = amount / exchangeRates[fromCurrency];
  return thbAmount * exchangeRates[toCurrency];
};

export const getCurrencySymbol = (currency) => {
  return CURRENCIES[currency]?.symbol || "฿";
};

export const formatCurrency = (amount, currency = "THB") => {
  const symbol = getCurrencySymbol(currency);
  const currencyInfo = CURRENCIES[currency];
  let convertedAmount = convertCurrency(amount, "THB", currency);

  // Handle special rounding for AED (round to nearest 0.25)
  if (currencyInfo?.roundTo) {
    convertedAmount =
      Math.round(convertedAmount / currencyInfo.roundTo) * currencyInfo.roundTo;
  }

  // Format with appropriate decimal places and comma separators
  const decimals = currencyInfo?.decimals ?? 2;
  const formattedAmount = convertedAmount.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return `${symbol}${formattedAmount}`;
};

export { CURRENCIES };
