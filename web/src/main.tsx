import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import PagesRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PagesRoutes />
  </React.StrictMode>
);
