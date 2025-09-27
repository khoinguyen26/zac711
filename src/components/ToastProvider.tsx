import {
  createContext,
  useContext,
  createSignal,
  type Component,
  type JSX,
} from "solid-js";
import type { Toast, ToastContextType } from "../types/toast";

const ToastContext = createContext<ToastContextType>();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: JSX.Element;
}

export const ToastProvider: Component<ToastProviderProps> = (props) => {
  const [toasts, setToasts] = createSignal<Toast[]>([]);

  const showToast = (
    message: string,
    type: "success" | "error" = "success",
    duration = 5000,
  ) => {
    const id = Date.now();
    const newToast: Toast = { id, message, type, duration };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove after duration
    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const contextValue: ToastContextType = {
    toasts,
    showToast,
    removeToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}
    </ToastContext.Provider>
  );
};

