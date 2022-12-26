import React from 'react';
import { useSelector } from 'react-redux';
import Footage from './Footage';
import Skeleton from '@mui/material/Skeleton';

const InfoFilterFilm = () => {
  const arrFilterFilm = useSelector((state) => state.infoToFilterFilm.infoToFilterFilmArr);
  const loading = useSelector((state) => state.infoToFilterFilm.loading);

  function addRatingClass(rating) {
    if (rating >= 8 || rating > 7) {
      return 'cart__rating green';
    } else if (rating <= 6 || rating <= 7) {
      return 'cart__rating yellow';
    } else if (rating <= 4) {
      return 'cart__rating red';
    } else if (rating === 'null') {
      return 'none';
    }
  }

  console.log(loading);
  return (
    <div>
      {arrFilterFilm.map((elem) => {
        const {
          nameRu,
          description,
          posterUrl,
          ratingKinopoisk,
          year,
          kinopoiskId,
          genres,
          countries,
        } = elem;
        return (
          <div className="info" key={kinopoiskId}>
            <div className="info__content">
              {!loading ? (
                <Skeleton className='info-skeleton' width={600} height={596} />
              ) : (
                <>
                  <div className="info__content-top">
                    <img className="info__content-image" src={posterUrl} alt="#" />
                    <p className={addRatingClass(ratingKinopoisk) + ' ' + 'info__content-rating'}>
                      {ratingKinopoisk}
                    </p>
                    <div className="info__content-bottom">
                      <h1 className="info__content-title">
                        {nameRu} ({year})
                      </h1>
                      <p className="info__content-genres">
                        <span className="text-bold">Жанры:</span>{' '}
                        {genres ? genres.map((genre) => genre.genre + ',') : ''}
                      </p>
                      <p className="info__content-countries">
                        <span className="text-bold">Страны:</span>{' '}
                        {countries ? countries.map((countries) => countries.country + ',') : ''}
                      </p>
                    </div>
                  </div>
                  <div className="info__content-text">
                    <h3 className="center">Описание фильма</h3>
                    <p className="info__content-description">
                      {description ? description : 'Нет описания :('}
                    </p>
                  </div>
                  <Footage />
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoFilterFilm;
