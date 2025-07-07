// Exchange rates (you may want to fetch these from an API in production)
// These are approximate rates and should be updated regularly
export const EXCHANGE_RATES = {
  USD: 1,
  EUR: 1.09, // 1 EUR = 1.09 USD (approximate)
  UGX: 0.00027, // 1 UGX = 0.00027 USD (approximate)
} as const;

export type SupportedCurrency = keyof typeof EXCHANGE_RATES;

export const convertToUSD = (value: number, fromCurrency: string): number => {
  const rate = EXCHANGE_RATES[fromCurrency as SupportedCurrency];
  if (!rate) {
    console.warn(`Unknown currency: ${fromCurrency}, using USD`);
    return value;
  }
  return value * rate;
};

export const formatUSD = (value: number): string => {
  return (
    "USD " +
    new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value)
  );
};

export const formatCurrencyAsUSD = (
  value: number,
  currency: string
): string => {
  const usdValue = convertToUSD(value, currency);
  return formatUSD(usdValue);
};
