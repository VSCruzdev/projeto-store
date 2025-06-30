import React from 'react';
import image from '../home-slide/sapato.png';


export function Gallery () {
    return ( 
        <div className="coluna">
            <img className="image" src={image} alt='Descrição da imagem' />
            <div className="dots-pattern"></div>
        </div>
    );
}