import React from 'react';
import '../Gallery.css'; // Criaremos este arquivo CSS a seguir

const Gallery2 = ({ images, showThumbs, width, height, radius }) => {
  const [selectedImage, setSelectedImage] = React.useState(images[0]?.src);

  const galleryStyle = {
    width: width,
    height: height,
    borderRadius: radius,
  };

  const mainImageStyle = {
    width: '100%',
    height: 'calc(100% - 80px)', // Ajuste com base na altura das miniaturas
    objectFit: 'contain',
    borderRadius: radius,
  };

  const thumbnailContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    paddingTop: '10px',
  };

  const thumbnailStyle = {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '4px',
    cursor: 'pointer',
    border: '1px solid #eee',
  };

  return (
    <div className="gallery-container" style={galleryStyle}>
      <img src={selectedImage} alt="Produto" style={mainImageStyle} />
      {showThumbs && (
        <div className="thumbnail-container" style={thumbnailContainerStyle}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Miniatura ${index + 1}`}
              style={thumbnailStyle}
              onClick={() => setSelectedImage(image.src)}
              className={selectedImage === image.src ? 'selected-thumbnail' : ''}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery2;