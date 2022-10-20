import React from 'react';
import { useSelector } from 'react-redux';

const InfoFilterFilm = () => {
  const arrFilterFilm = useSelector((state) => state.infoToFilterFilm.infoToFilterFilmArr);
  return (
    <div>
      {arrFilterFilm.map((elem) => {
        const { nameRu, description, posterUrl, ratingKinopoisk, year, kinopoiskId } = elem;
        return (
          <div className="info" key={kinopoiskId}>
            <div className="info__content">
              <div className="info__content-cart">
                <h1 className='info__cart-title'>{nameRu}</h1>
                <p className='info__cart-description'>{description}</p>
                <img className='info__cart-image' src={posterUrl} alt="#" />
                <p className='info__cart-rating'>{ratingKinopoisk}</p>
                <p className='info__cart-year'>{year}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoFilterFilm;
