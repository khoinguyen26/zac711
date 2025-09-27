/* @refresh reload */
import { render } from 'solid-js/web';
import 'solid-devtools';

import App from './App';

// Get the root DOM element where the app will be mounted
const root = document.getElementById('root');

// Development-time safety check to ensure root element exists
// This helps catch configuration issues early in development
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

// Mount the SolidJS application to the root element
// The non-null assertion (!) is safe here because we've checked for it above
render(() => <App />, root!);
