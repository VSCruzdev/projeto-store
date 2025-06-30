// AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage'; // Ajuste o caminho conforme a estrutura do seu projeto
import { ProductListingPage } from '../pages/ProductListingPage'; // Ajuste o caminho
import { ProductViewPage } from '../pages/ProductViewPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/ProductListingPage" element={<ProductListingPage />} />
      <Route path="/HomePage/ProductViewPage" element={<ProductViewPage />} />
      <Route path="/ProductListingPage/ProductViewPage" element={<ProductViewPage />} />
      <Route path="/Categorias" element={<div>Página de Categorias</div>} />
      <Route path="/MeusPedidos" element={<div>Página de Meus Pedidos</div>} />
      <Route path="/" element={<HomePage />} /> 
    </Routes>
  );
}