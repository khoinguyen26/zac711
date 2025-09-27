import type { Component } from "solid-js";
import { For } from "solid-js";
import { useToast } from "./ToastProvider";

export const ToastContainer: Component = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div class="toast-container">
      <For each={toasts()}>
        {(toast) => (
          <div
            class={`toast toast-${toast.type}`}
            onClick={() => removeToast(toast.id)}
          >
            <span class="toast-message">{toast.message}</span>
            <button
              class="toast-close"
              onClick={(e) => {
                e.stopPropagation();
                removeToast(toast.id);
              }}
            >
              ✕
            </button>
          </div>
        )}
      </For>
    </div>
  );
};

