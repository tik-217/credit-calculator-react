import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Calculator from './components/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);