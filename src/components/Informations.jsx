import React from 'react';
import { NavLink } from 'react-router-dom';
import { Section } from './Section'; 

export function RodapeInformations() {
  return (
    <div className="rodape-info-container">
      <div className="footer-column">
        <h3>Informação</h3>
        <br />
        <ul>
          <li>Sobre Drip Store</li>
          <li>Segurança</li>
          <li>Wishlist</li>
          <li>Blog</li>
          <li>Trabalhe conosco</li>
          <li>Meu Pedidos</li>
        </ul>
      </div>

      <div className="footer-column2">
        <h3>Categorias</h3>
        <br />
        <ul>
          <li>Camisetas</li>
          <li>Calças</li>
          <li>Bonés</li>
          <li>Headphones</li>
          <li>Tênis</li>
        </ul>
      </div>

      <div className="footer-column3">
        <h3>Contato</h3>
        <br />
          <p className="addressWrap">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
      </div>
    </div>
  );
}