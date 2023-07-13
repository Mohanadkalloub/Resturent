import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/style.css";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/app-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AppRouter/>
  </BrowserRouter>
);
