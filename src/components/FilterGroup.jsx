import { head } from "framer-motion/client";
import React from "react";
import { NavLink } from "react-router-dom";


export function FilterGroup () {
    return (
        <div className="filter-group-mobile">
            <div className="filter-group">
                <nav className="navigation">
                    <ul className="list-nav" id="list-nav-mobile">
                        <li>
                            <NavLink to="/HomePage" className="filter-link"><a href="/HomePage">Home</a></NavLink>
                        </li>
                        <li>
                            <NavLink to="/ProductListingPage" className="filter-link"><a href="/ProductListingPage">Produtos</a></NavLink>
                        </li>
                        <li>
                            <NavLink to="/Categorias" className="filter-link">Categorias</NavLink>
                        </li>
                        <li>
                            <NavLink to="/MeusPedidos" className="filter-link">Meus Pedidos</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};