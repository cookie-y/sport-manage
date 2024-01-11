import React from 'react';
import 'virtual:uno.css';
import './index.scss';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import router from './router/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
