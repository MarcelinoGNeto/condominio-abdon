import React, { useState } from 'react';
import './styles.css';


const Card = ({images, title, description}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    const previousImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(previousImageIndex);
  };

  const handleNextClick = () => {
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextImageIndex);
  };

  return (
    <div className='card'>

      <div className="carousel">
        <img src={images[currentImageIndex]} alt="" className="carousel__image" />
        <button onClick={handlePreviousClick} className="carousel__button carousel__button--previous">
        &larr;
        </button>
        <button onClick={handleNextClick} className="carousel__button carousel__button--next">
        &rarr;
        </button>
      </div>

      <div className='content'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
