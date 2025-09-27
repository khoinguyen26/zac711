export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
  duration?: number;
}

export interface ToastContextType {
  toasts: () => Toast[];
  showToast: (message: string, type?: 'success' | 'error', duration?: number) => void;
  removeToast: (id: number) => void;
}