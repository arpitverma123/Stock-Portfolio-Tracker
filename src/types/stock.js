export const Stock = {
  id: String,
  user_id: String,
  symbol: String,
  name: String,
  quantity: Number,
  buy_price: Number,
  created_at: String,
  updated_at: String,
};

export const StockWithCurrentPrice = {
  ...Stock,
  current_price: Number,
  total_value: Number,
  profit_loss: Number,
  profit_loss_percentage: Number,
};
