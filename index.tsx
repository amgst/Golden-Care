import React from 'react';
import ReactDOM from 'react-dom/client';
import './src/index.css';
import App from './App';

// Suppress unhandled promise rejections from external sources (browser extensions, image loading, etc.)
window.addEventListener('unhandledrejection', (event) => {
  // Suppress errors from browser extensions and external services
  const error = event.reason;
  if (error && typeof error === 'object') {
    // Suppress 403 errors from image loading or external services
    if (error.code === 403 || error.name === 'i') {
      event.preventDefault();
      return;
    }
    // Suppress errors from browser extensions (content scripts)
    if (error.message && (
      error.message.includes('content-script') ||
      error.message.includes('extension') ||
      error.message.includes('Target website not loaded')
    )) {
      event.preventDefault();
      return;
    }
  }
  // Suppress errors from Unsplash or image CDNs
  if (typeof error === 'string' && (
    error.includes('unsplash') ||
    error.includes('403') ||
    error.includes('CORS')
  )) {
    event.preventDefault();
    return;
  }
});

// Suppress console errors from browser extensions (optional - can be removed if you want to see all errors)
const originalError = console.error;
console.error = (...args) => {
  const message = args.join(' ');
  // Filter out known browser extension errors
  if (
    message.includes('content-script') ||
    message.includes('AdUnit') ||
    message.includes('Target website not loaded') ||
    message.includes('cdn.loom.com') ||
    (message.includes('403') && message.includes('unsplash'))
  ) {
    return; // Suppress these errors
  }
  // Log other errors normally
  originalError.apply(console, args);
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);