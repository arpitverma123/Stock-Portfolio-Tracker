import { useState, useCallback } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type) => {
    const id = Date.now();
    setToasts(current => [...current, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(current => current.filter(toast => toast.id !== id));
  }, []);

  return { toasts, showToast, removeToast };
}
