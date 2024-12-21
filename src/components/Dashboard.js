import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Dashboard({ stocks }) {
  const totalValue = stocks.reduce((sum, stock) => sum + stock.total_value, 0);
  const totalProfitLoss = stocks.reduce((sum, stock) => sum + stock.profit_loss, 0);
  const topPerformer = stocks.reduce((best, stock) =>
    stock.profit_loss_percentage > (best?.profit_loss_percentage ?? -Infinity) ? stock : best
  , stocks[0]);

  const chartData = stocks.map(stock => ({
    name: stock.symbol,
    value: Number(stock.total_value.toFixed(2)),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Total Portfolio Value</h3>
        <p className="text-3xl font-bold text-indigo-600">${totalValue.toFixed(2)}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Total Profit/Loss</h3>
        <p className={`text-3xl font-bold ${totalProfitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {totalProfitLoss >= 0 ? '+' : ''}{totalProfitLoss.toFixed(2)}
        </p>
      </div>

      {topPerformer && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Top Performer</h3>
          <p className="text-xl font-semibold text-gray-800">{topPerformer.symbol}</p>
          <p className={`text-lg font-medium ${topPerformer.profit_loss_percentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {topPerformer.profit_loss_percentage >= 0 ? '+' : ''}{topPerformer.profit_loss_percentage.toFixed(2)}%
          </p>
        </div>
      )}

      <div className="col-span-full bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Portfolio Distribution</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => ['$' + value.toFixed(2), 'Value']} />
              <Bar dataKey="value" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
