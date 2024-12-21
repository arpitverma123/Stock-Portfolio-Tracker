import React, { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from './lib/supabase';
import { Dashboard } from './components/Dashboard';
import { StockList } from './components/StockList';
import { StockForm } from './components/StockForm';
import { Auth } from './components/Auth';
import { Header } from './components/Header';
import { Toast } from './components/Toast';
import { useStocks } from './hooks/useStocks';
import { useToast } from './hooks/useToast';
import { Modal } from './components/Modal';
import { Stock } from './types/stock';

export function App() {
  const [user, setUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingStock, setEditingStock] = useState<Stock | null>(null);
  
  const { stocks, fetchStocks, addStock, updateStock, deleteStock } = useStocks(user);
  const { toasts, showToast, removeToast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (data) => {
    try {
      if (editingStock) {
        await updateStock(editingStock.id, data);
        showToast('Stock updated successfully', 'success');
      } else {
        await addStock(data);
        showToast('Stock added successfully', 'success');
      }
      setEditingStock(null);
      setShowForm(false);
      fetchStocks();
    } catch (error) {
      showToast('Failed to save stock', 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteStock(id);
      showToast('Stock deleted successfully', 'success');
    } catch (error) {
      showToast('Failed to delete stock', 'error');
    }
  };

  if (!user) {
    return <Auth onAuthSuccess={() => fetchStocks()} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddStock={() => setShowForm(true)} />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Dashboard stocks={stocks} />

          {showForm && (
            <Modal onClose={() => {
              setShowForm(false);
              setEditingStock(null);
            }}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                {editingStock ? 'Edit Stock' : 'Add New Stock'}
              </h2>
              <StockForm
                stock={editingStock ?? undefined}
                onSubmit={handleSubmit}
                onCancel={() => {
                  setShowForm(false);
                  setEditingStock(null);
                }}
              />
            </Modal>
          )}

          <StockList
            stocks={stocks}
            onEdit={(stock) => {
              setEditingStock(stock);
              setShowForm(true);
            }}
            onDelete={handleDelete}
          />
        </div>
      </div>

      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}