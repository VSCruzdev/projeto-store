// index.js (ou o arquivo de entrada da sua aplicação)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes'; // Importe seu componente de rotas
import './App.css'
import { Header } from './components/Header';
import { FilterGroup } from './components/FilterGroup';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Header/>
       <FilterGroup/>
        <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);