import React from 'react';
import ReactDOM from 'react-dom/client'; // Only need this import for React 18
import './index.css'; // Styles for your app
import App from './App'; // Main component of your app
import reportWebVitals from './reportWebVitals'; // Performance measuring tool

// Create the root element using React 18's createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React.StrictMode for development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, you can pass a function to log results
reportWebVitals();
