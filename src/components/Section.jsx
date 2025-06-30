import React from 'react';
import collection1 from '../collections/collection-1.png';
import collection2 from '../collections/collection-2.png';
import collection3 from '../collections/collection-3.png';
import sapato3 from '../home-slide/sapato3.png';
import { ProductListing } from './ProductListing';

export function Section({ title, titleAlign = 'left', link, children }) {
  const titleStyle = {
    textAlign: titleAlign,
  };

  return (
    <section>
      <div className="section-container">
        <h1 className="sec1title"><b>Coleções em destaque</b></h1>
        <div className="containerimage">
          <div className="inner">
            <img className="border" src={collection1} alt="não disponivel" />
            <img className="border" src={collection2} alt="não disponivel" />
            <img className="border" src={collection3} alt="não disponivel" />
          </div>
          <h1 className="sec2title"><b>Produtos em Alta</b></h1>
          <div className="shadow-4 p-3 border-round-md">
            <ProductListing />
          </div>
          <div className="secjordan">
            <div className="circleblue">
              <img className="secjordanImage" src={sapato3} alt="" />
            </div>
            <div className="secjordan-text">
              <p className="pink">Oferta especial</p>
              <h1 className="secjordan-title"><b>Air Jordan edição de colecionador</b></h1>
              <p className="secjordan-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla odit, vitae quam unde repellat soluta officiis delectus, fugit perspiciatis vel possimus dicta, aperiam ad? Distinctio iste ullam ipsa natus deserunt!</p>
              <button className="buttonOferta">Ver oferta</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}