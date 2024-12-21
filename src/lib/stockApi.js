import axios from 'axios';

const MOCK_PRICES = {
  AAPL: 175.50,
  MSFT: 380.20,
  GOOGL: 140.50,
  AMZN: 175.35,
  META: 485.90,
  TSLA: 175.35,
  NVDA: 875.20,
  JPM: 185.40,
  V: 275.60,
  WMT: 175.35,
};

export async function getStockPriceFromAPI(symbol) {
  try {
    const apiKey = 'ctilsdhr01qm6mune8v0ctilsdhr01qm6mune8vg';
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
    
    const response = await axios.get(url);
    const data = response.data;

    if (data.c !== undefined) {
      return {
        price: Number(data.c),
        change: Number(data.d),
        percentChange: Number(data.dp),
      };
    }
    
    return {
      price: MOCK_PRICES[symbol] || 100,
      change: 0,
      percentChange: 0,
    };
  } catch (error) {
    return {
      price: MOCK_PRICES[symbol] || 100,
      change: 0,
      percentChange: 0,
    };
  }
}
