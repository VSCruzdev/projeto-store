import React, { useEffect, useState } from 'react';
import productImage from '../home-slide/sapato2.png'; // Importando a imagem do produto
import { ul } from 'framer-motion/client';
import { API } from '../services';

export function ProductCard2() {

    const [products, setProducts] = useState([]);

    async function buscarProduto() {
        const request = await API.get('/products') 
        setProducts(response.data);

    }

    useEffect(() => {
        buscarProduto(); 
    }, [])

    return (
        <ul className="cards">
            <li className="product-card-container flex flex-wrap">
                <div className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <img className="sapato" src={productImage} alt="K-Swiss V8 Masculino Tênis" /> {/* Adicionado alt text para acessibilidade */}
                <div className="description">
                    <p className="product-type">Tênis</p> {/* Mudado de h2 para p, e classe mais específica */}
                    <h2 className="product-name">K-Swiss V8 - Masculino</h2> {/* Agora este é o h2 principal do nome do produto */}
                    <div className="price-container"> {/* Novo container para os preços */}
                        <span className="original-price">$200</span>
                        <span className="current-price">$100</span>
                    </div>
                    </div>
                </div>
            </li>
            <li className="product-card-container flex flex-wrap">
                <div className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <img className="sapato" src={productImage} alt="K-Swiss V8 Masculino Tênis" /> {/* Adicionado alt text para acessibilidade */}
                <div className="description">
                    <p className="product-type">Tênis</p> {/* Mudado de h2 para p, e classe mais específica */}
                    <h2 className="product-name">K-Swiss V8 - Masculino</h2> {/* Agora este é o h2 principal do nome do produto */}
                    <div className="price-container"> {/* Novo container para os preços */}
                        <span className="original-price">$200</span>
                        <span className="current-price">$100</span>
                    </div>
                    </div>
                </div>
            </li>
            <li className="product-card-container flex flex-wrap">
                <div className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <img className="sapato" src={productImage} alt="K-Swiss V8 Masculino Tênis" /> {/* Adicionado alt text para acessibilidade */}
                <div className="description">
                    <p className="product-type">Tênis</p> {/* Mudado de h2 para p, e classe mais específica */}
                    <h2 className="product-name">K-Swiss V8 - Masculino</h2> {/* Agora este é o h2 principal do nome do produto */}
                    <div className="price-container"> {/* Novo container para os preços */}
                        <span className="original-price">$200</span>
                        <span className="current-price">$100</span>
                    </div>
                    </div>
                </div>
            </li>
            <li className="product-card-container flex flex-wrap">
                <div className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <img className="sapato" src={productImage} alt="K-Swiss V8 Masculino Tênis" /> {/* Adicionado alt text para acessibilidade */}
                <div className="description">
                    <p className="product-type">Tênis</p> {/* Mudado de h2 para p, e classe mais específica */}
                    <h2 className="product-name">K-Swiss V8 - Masculino</h2> {/* Agora este é o h2 principal do nome do produto */}
                    <div className="price-container"> {/* Novo container para os preços */}
                        <span className="original-price">$200</span>
                        <span className="current-price">$100</span>
                    </div>
                    </div>
                </div>
            </li>
            <li className="product-card-container flex flex-wrap">
                <div className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <img className="sapato" src={productImage} alt="K-Swiss V8 Masculino Tênis" /> {/* Adicionado alt text para acessibilidade */}
                <div className="description">
                    <p className="product-type">Tênis</p> {/* Mudado de h2 para p, e classe mais específica */}
                    <h2 className="product-name">K-Swiss V8 - Masculino</h2> {/* Agora este é o h2 principal do nome do produto */}
                    <div className="price-container"> {/* Novo container para os preços */}
                        <span className="original-price">$200</span>
                        <span className="current-price">$100</span>
                    </div>
                    </div>
                </div>
            </li>
            <li className="product-card-container flex flex-wrap">
                <div className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <img className="sapato" src={productImage} alt="K-Swiss V8 Masculino Tênis" /> {/* Adicionado alt text para acessibilidade */}
                <div className="description">
                    <p className="product-type">Tênis</p> {/* Mudado de h2 para p, e classe mais específica */}
                    <h2 className="product-name">K-Swiss V8 - Masculino</h2> {/* Agora este é o h2 principal do nome do produto */}
                    <div className="price-container"> {/* Novo container para os preços */}
                        <span className="original-price">$200</span>
                        <span className="current-price">$100</span>
                    </div>
                    </div>
                </div>
            </li>
            <li className="product-card-container flex flex-wrap">
                <div className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <img className="sapato" src={productImage} alt="K-Swiss V8 Masculino Tênis" /> {/* Adicionado alt text para acessibilidade */}
                <div className="description">
                    <p className="product-type">Tênis</p> {/* Mudado de h2 para p, e classe mais específica */}
                    <h2 className="product-name">K-Swiss V8 - Masculino</h2> {/* Agora este é o h2 principal do nome do produto */}
                    <div className="price-container"> {/* Novo container para os preços */}
                        <span className="original-price">$200</span>
                        <span className="current-price">$100</span>
                    </div>
                    </div>
                </div>
            </li>
            <li className="product-card-container flex flex-wrap">
                <div className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <img className="sapato" src={productImage} alt="K-Swiss V8 Masculino Tênis" /> {/* Adicionado alt text para acessibilidade */}
                <div className="description">
                    <p className="product-type">Tênis</p> {/* Mudado de h2 para p, e classe mais específica */}
                    <h2 className="product-name">K-Swiss V8 - Masculino</h2> {/* Agora este é o h2 principal do nome do produto */}
                    <div className="price-container"> {/* Novo container para os preços */}
                        <span className="original-price">$200</span>
                        <span className="current-price">$100</span>
                    </div>
                    </div>
                </div>
            </li>
        </ul>
    );
}