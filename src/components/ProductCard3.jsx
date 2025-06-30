import React from 'react';
import './ProductCard.css'; // Criaremos este arquivo CSS a seguir

const ProductCard3 = ({ name, image, price, priceDiscount }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-card-image" />
      <h3 className="product-card-name">{name}</h3>
      <div className="product-card-prices">
        {priceDiscount ? (
          <>
            <span className="product-card-price-discount">R$ {priceDiscount.toFixed(2).replace('.', ',')}</span>
            <span className="product-card-price-original">R$ {price.toFixed(2).replace('.', ',')}</span>
          </>
        ) : (
          <span className="product-card-price">R$ {price.toFixed(2).replace('.', ',')}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard3;