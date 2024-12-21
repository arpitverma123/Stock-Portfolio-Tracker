import React from 'react';
import { signOut } from '../lib/auth';
import { LineChart } from 'lucide-react';

export function Header({ onAddStock }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <LineChart className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-3 text-3xl font-bold text-gray-900">Portfolio Tracker</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onAddStock}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Add Stock
            </button>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
