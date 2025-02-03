// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18+
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);