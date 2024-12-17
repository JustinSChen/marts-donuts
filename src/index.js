import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@fontsource/raleway"; // Defaults to weight 400
import "@fontsource/raleway/400.css"; // Specify weight
import "@fontsource/raleway/400-italic.css"; // Specify weight and style

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
