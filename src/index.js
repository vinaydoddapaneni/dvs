/**
 * @copyright 2025 Vinay. All Rights Reserved.
 * Unauthorized copying, modification, or distribution of this code is strictly prohibited.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import initProtection from './utils/protection';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Initialize protection
initProtection();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
