import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { formatPrice, formatPercentage } from '../utils/formatters';

export function StockList({ stocks, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buy Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P/L</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {stocks.map((stock) => (
              <tr key={stock.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stock.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatPrice(stock.buy_price)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatPrice(stock.current_price)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatPrice(stock.total_value)}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${stock.profit_loss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stock.profit_loss >= 0 ? '+' : ''}{formatPrice(stock.profit_loss)} ({formatPercentage(stock.profit_loss_percentage)}%)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => onEdit(stock)}
                      className="text-indigo-600 hover:text-indigo-900 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(stock.id)}
                      className="text-red-600 hover:text-red-900 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
