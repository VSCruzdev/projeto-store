import React from "react";
import '../productlisting.css'
import { Footer } from "../components/Footer";
import { ProductCard2 } from "../components/ProductCard2";
import { NavLink } from "react-router-dom";

export function ProductListingPage () {
    return (
        <div className="product-listing-page-mobile">
            <div className="productflex">
                <div className="result">
                    <h3><strong>Resultados para "Tênis"</strong> - 389 produtos </h3>
                </div>
                <div className="order-border">
                    <div className="order-flex">
                        <h3><strong>Ordernar por:</strong> mais relevantes</h3>
                        <img src="/src/assets/arrow-down-short.svg" width="25" height="20" alt="Logo" className="logo-arrow" />
                    </div>
                </div>
            </div>
            <div className="tenis">
                <div className="filter-block">
                    <h3 className="filter"><strong>Filtrar por</strong></h3>
                    <hr className="line" />
                    <div className="filter-list">
                        <ul>Marca</ul>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Adiddas</label>
                        </li>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Calenciaga</label>
                        </li>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">K-Swiss</label>
                        </li>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Nike</label>
                        </li>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Puma</label>
                        </li>
                    <ul>Categoria</ul>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Esporte</label>
                        </li>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Casual</label>
                        </li>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Utilitário</label>
                        </li>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Corrida</label>
                        </li>
                    <ul>Gênero</ul>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Masculino</label>
                        </li>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Feminino</label>
                        </li>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Unisex</label>
                        </li>
                    <ul>Estado</ul>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Novo</label>
                        </li>
                        <li className="li-filter">
                            <input type="checkbox" />
                            <label htmlFor="">Usado</label>
                        </li>
                    </div>
                </div>
                <div className="card">
                    <NavLink to="/ProductListingPage/ProductViewPage">
                        <ProductCard2/>
                        <ProductCard2/>
                        <ProductCard2/>
                        <ProductCard2/>
                    </NavLink>
                </div>
            </div>
            <Footer/>
        </div>
    ) 
}