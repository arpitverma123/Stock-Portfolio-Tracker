import React, { useState } from 'react';

export function StockForm({ stock, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    symbol: stock?.symbol || '',
    name: stock?.name || '',
    quantity: stock?.quantity?.toString() || '1',
    buy_price: stock?.buy_price?.toString() || '0',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      quantity: parseInt(formData.quantity, 10),
      buy_price: parseFloat(formData.buy_price),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="symbol" className="block text-sm font-medium text-gray-700">
          Symbol
        </label>
        <input
          type="text"
          id="symbol"
          value={formData.symbol}
          onChange={(e) => setFormData({ ...formData, symbol: e.target.value.toUpperCase() })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          min="1"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="buy_price" className="block text-sm font-medium text-gray-700">
          Buy Price
        </label>
        <input
          type="number"
          id="buy_price"
          min="0"
          step="0.01"
          value={formData.buy_price}
          onChange={(e) => setFormData({ ...formData, buy_price: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
        >
          {stock ? 'Update' : 'Add'} Stock
        </button>
      </div>
    </form>
  );
}
