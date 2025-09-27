import type { Component } from 'solid-js';
import Terminal from './components/Terminal';
import { ToastProvider } from './components/ToastProvider';
import { ToastContainer } from './components/ToastContainer';
import './styles/terminal.css';

/**
 * Main application component that serves as the root container
 * for the terminal portfolio interface. This component wraps
 * the Terminal component with toast functionality.
 */
const App: Component = () => {
  return (
    <ToastProvider>
      <div class="app">
        <Terminal />
        <ToastContainer />
      </div>
    </ToastProvider>
  );
};

export default App;
