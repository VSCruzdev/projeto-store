import React from 'react';
import '../BuyBox.css'; // Criaremos este arquivo CSS a seguir
import StarIcon from '../assets/star-icon.svg'; // Certifique-se de que este caminho está correto

const BuyBox2 = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <div className="buy-box-container">
      <h1 className="product-name">{name}</h1>
      <p className="product-reference">{reference}</p>

      <div className="product-reviews">
        {stars && (
          <div className="stars-rating">
            <span>{stars}</span>
            <img src={StarIcon} alt="Ícone de Estrela" className="star-icon" />
          </div>
        )}
        {rating && <span className="product-rating">({rating} avaliações)</span>}
      </div>

      <div className="product-price-info">
        {priceDiscount ? (
          <>
            <span className="price-discounted">R$ {priceDiscount.toFixed(2).replace('.', ',')}</span>
            <span className="price-original">R$ {price.toFixed(2).replace('.', ',')}</span>
          </>
        ) : (
          <span className="price-full">R$ {price.toFixed(2).replace('.', ',')}</span>
        )}
      </div>

      <p className="product-description">{description}</p>

      <div className="product-options-children">{children}</div>

      <button className="buy-button">Comprar</button>
    </div>
  );
};

export default BuyBox2;