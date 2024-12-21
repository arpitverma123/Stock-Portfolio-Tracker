export function calculateStockMetrics(stock, currentPrice) {
  const totalValue = currentPrice * stock.quantity;
  const profitLoss = totalValue - (stock.buy_price * stock.quantity);
  const profitLossPercentage = (profitLoss / (stock.buy_price * stock.quantity)) * 100;

  return {
    ...stock,
    current_price: currentPrice,
    total_value: totalValue,
    profit_loss: profitLoss,
    profit_loss_percentage: profitLossPercentage,
  };
}
