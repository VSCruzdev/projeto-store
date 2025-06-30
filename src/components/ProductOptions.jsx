import React, { useState } from 'react';
import './ProductOptions.css'; // Criaremos este arquivo CSS a seguir

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="product-options-container">
      {options.map((option, index) => {
        const isSelected = selectedOption === option;
        let optionStyle = {};
        let optionClass = '';

        if (shape === 'square') {
          optionClass = 'option-square';
          optionStyle = {
            width: 'auto',
            height: '46px',
            border: '1px solid var(--light-gray-2)',
            borderRadius: radius || '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 15px',
            cursor: 'pointer',
          };
          if (type === 'color') {
            optionStyle.backgroundColor = option;
            optionStyle.border = '1px solid #ccc'; // Garante visibilidade para cores claras
          }
        } else if (shape === 'circle') {
          optionClass = 'option-circle';
          optionStyle = {
            width: '31px',
            height: '31px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid var(--light-gray-2)',
          };
          if (type === 'color') {
            optionStyle.backgroundColor = option;
            optionStyle.border = '1px solid #ccc'; // Garante visibilidade para cores claras
          }
        }

        if (isSelected) {
          optionStyle.border = '2px solid var(--primary-color)';
        }

        return (
          <div
            key={index}
            className={`product-option ${optionClass}`}
            style={optionStyle}
            onClick={() => handleOptionClick(option)}
          >
            {type === 'text' && (
              <span style={{ fontSize: '24px', color: 'var(--dark-gray-2)' }}>
                {option}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductOptions;