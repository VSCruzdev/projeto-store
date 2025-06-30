import React from "react";
import { Footer } from "../components/Footer";
import image from '../home-slide/sapato.png';
import '../ProductViewPage.css';
import { ProductCard } from "../components/ProductCard";


export function ProductViewPage () {
    return(
        <>
        <div>
            <div className="sub-title">
                <h3><strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</h3>
            </div>
            <div className="group-tenis">
                <div className="img-tenis">
                    <img src={image} alt='Descrição da imagem' />
                </div>
                <div className="information-tenis">
                    <div className="title-product">
                        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                    </div>
                    <div className="casual">
                        <p>Casual | Nike | REF:38416711</p>
                    </div>
                    <div className="avaliation">
                        <p className="stars">
                            ★★★★☆ 
                        </p>
                        <p className="avaliation-star">4.7 ★</p>
                        <p className="avaliation-numbers">(90 avaliações)</p>
                    </div>
                    <div className="prices">
                        <p>R$ <strong className="price-big">219</strong><strong>,00</strong> <del className="price-del">210,00</del> </p>
                    </div>
                    <div className="description-product">
                        <h3>Descrição do produto</h3>
                    </div>
                    <p className="paraghap-tenis">O Tênis Nike Revolution 6 Next Nature Masculino é ideal para quem busca conforto e estilo. Com tecnologia de amortecimento, ele proporciona uma corrida suave e leve.</p>
                    <h3 className="description-product">Tamanho</h3>
                    <ul className="size-product">
                        <li className="size">
                            <p className="bg1">
                                39
                            </p>
                        </li>
                        <li className="size">
                            <p className="bg2">
                                40
                            </p>
                        </li>
                        <li className="size">
                            <p className="bg3">
                                41
                            </p>
                        </li>
                        <li className="size">
                            <p className="bg4">
                                42
                            </p>
                        </li>
                        <li className="size">
                            <p className="bg5">
                                43
                            </p>
                        </li>
                    </ul>
                    <div className="button-buy">
                        <p>COMPRAR</p>
                    </div>
                </div>
            </div>
            <div className="group-products">
                <div className="products-related">
                    <h3>Produtos relacionados</h3>
                </div>
                <div className="others-products">
                    <h3><a href="/ProductListingPage">Ver todos →</a></h3>
                </div>
            </div>
            <ProductCard/>
        </div>
        <Footer />
        </>
    )
}