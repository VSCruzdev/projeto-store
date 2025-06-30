import React from 'react';
import { BiSearch } from 'react-icons/bi'; 

export function SearchProducts () {
    return (
        <div className="search-container">
            <input type="text" placeholder="Pesquisar Produto..." className="search-input" />
            <button className="search-button">
                <BiSearch color="#6666667a" />
            </button>
        </div>
    )
}