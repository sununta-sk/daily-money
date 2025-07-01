const CURRENCIES = {
  THB: { symbol: '฿', name: 'Thai Baht' },
  USD: { symbol: '$', name: 'US Dollar' },
  NZD: { symbol: 'NZ$', name: 'New Zealand Dollar' },
  AED: { symbol: 'د.إ', name: 'UAE Dirham' }
};

let exchangeRates = {};

export const fetchExchangeRates = async () => {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/THB');
    const data = await response.json();
    exchangeRates = data.rates;
    return data.rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return {};
  }
};

export const convertCurrency = (amount, fromCurrency = 'THB', toCurrency) => {
  if (!exchangeRates[toCurrency] || fromCurrency === toCurrency) {
    return amount;
  }
  
  if (fromCurrency === 'THB') {
    return amount * exchangeRates[toCurrency];
  }
  
  // Convert from THB first, then to target currency
  const thbAmount = amount / exchangeRates[fromCurrency];
  return thbAmount * exchangeRates[toCurrency];
};

export const getCurrencySymbol = (currency) => {
  return CURRENCIES[currency]?.symbol || '฿';
};

export const formatCurrency = (amount, currency = 'THB') => {
  const symbol = getCurrencySymbol(currency);
  const convertedAmount = convertCurrency(amount, 'THB', currency);
  
  return `${symbol}${convertedAmount.toFixed(2)}`;
};

export { CURRENCIES }; 