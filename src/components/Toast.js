import React, { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

export function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-400" />,
    error: <XCircle className="w-5 h-5 text-red-400" />,
    info: <AlertCircle className="w-5 h-5 text-blue-400" />,
  };

  const bgColors = {
    success: 'bg-green-50',
    error: 'bg-red-50',
    info: 'bg-blue-50',
  };

  const textColors = {
    success: 'text-green-800',
    error: 'text-red-800',
    info: 'text-blue-800',
  };

  return (
    <div className={`fixed bottom-4 right-4 flex items-center p-4 rounded-lg shadow-lg ${bgColors[type]}`}>
      <div className="flex items-center">
        {icons[type]}
        <p className={`ml-3 text-sm font-medium ${textColors[type]}`}>{message}</p>
      </div>
      <button
        onClick={onClose}
        className={`ml-4 inline-flex ${textColors[type]} hover:opacity-75`}
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
