import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { getStockPriceFromAPI } from '../lib/stockApi';
import { calculateStockMetrics } from '../utils/stockCalculations';

export function useStocks(user) {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStocks = async () => {
    if (!user) return;
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('stocks')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching stocks:', error);
        return;
      }

      const stocksWithPrices = await Promise.all(
        (data || []).map(async (stock) => {
          try {
            const priceData = await getStockPriceFromAPI(stock.symbol);
            return calculateStockMetrics(stock, priceData.price);
          } catch (error) {
            return calculateStockMetrics(stock, stock.buy_price);
          }
        })
      );

      setStocks(stocksWithPrices);
    } catch (error) {
      console.error('Error processing stocks:', error);
    } finally {
      setLoading(false);
    }
  };

  const addStock = async (data) => {
    if (!user) return;
    
    const { error } = await supabase
      .from('stocks')
      .insert([{ ...data, user_id: user.id }]);

    if (error) {
      console.error('Error adding stock:', error);
    } else {
      fetchStocks();
    }
  };

  const updateStock = async (id, data) => {
    const { error } = await supabase
      .from('stocks')
      .update(data)
      .eq('id', id)
      .eq('user_id', user?.id);

    if (error) {
      console.error('Error updating stock:', error);
    } else {
      fetchStocks();
    }
  };

  const deleteStock = async (id) => {
    const { error } = await supabase
      .from('stocks')
      .delete()
      .eq('id', id)
      .eq('user_id', user?.id);

    if (error) {
      console.error('Error deleting stock:', error);
    } else {
      fetchStocks();
    }
  };

  useEffect(() => {
    if (user) {
      fetchStocks();
      const interval = setInterval(fetchStocks, 30000);
      return () => clearInterval(interval);
    } else {
      setStocks([]);
    }
  }, [user]);

  return {
    stocks,
    loading,
    fetchStocks,
    addStock,
    updateStock,
    deleteStock,
  };
}
