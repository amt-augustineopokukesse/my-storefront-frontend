import React from 'react';

const Rating: React.FC = () => {
  const getRandomStarRating = (): number => {
    return Math.floor(Math.random() * 10) / 2; // Generates a random number between 0 and 5 with half-star increments
  };

  const renderStarRating = (rating: number): JSX.Element[] => {
    const stars: JSX.Element[] = [];

    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        // Full star
        stars.push(
          <span key={i} style={{ color: '#15616B', fontSize: '30px' }}>
            &#9733;
          </span>
        );
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        // Half star
        stars.push(
          <span key={i} style={{ color: '#15616B', fontSize: '30px' }}>
            &#x2605;
          </span>
        );
      } else {
        // Empty star
        stars.push(
          <span key={i} style={{ color: '#15616B', fontSize: '30px' }}>
            &#9734;
          </span>
        );
      }
    }

    return stars;
  };

  return <div>{renderStarRating(getRandomStarRating())}</div>;
};

export default Rating;
