import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, setAllFilms } from '../redux/filterSearchFilms/filterSearchFilms';
import {
  sayToFilterFilmId,
  sayInfoToFilterFilmArr,
} from '../redux/infoToFilterFilm/infoToFilterFilm';

import { setToggleRandomComponentContent } from '../redux/infoToFilterFilm/infoToFilterFilm';

const FilterSearchItem = () => {
  const allFilterFilms = useSelector((state) => state.filterSearchFilms.arrAllFilms);
  const dispatch = useDispatch();

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

  async function getInfoFilterFilm(id) {
    await axios
      .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        headers: {
          'X-API-KEY': process.env.REACT_APP_KEY,
        },
      })
      .then((data) => {
        dispatch(sayInfoToFilterFilmArr([data.data]));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="compilation">
      <div className="compilation__item">
        {allFilterFilms
          .filter((elem) => {
            if (elem.nameRu && elem.ratingKinopoisk !== null) {
              return elem;
            }
          })
          .map((item, index) => {
            const {
              posterUrl,
              nameRu,
              nameEn,
              countryes,
              year,
              ratingKinopoisk,
              description,
              kinopoiskId,
            } = item;
            return (
              <div
                key={index}
                className="cart__item"
                onClick={() => {
                  dispatch(sayToFilterFilmId(kinopoiskId));
                  getInfoFilterFilm(kinopoiskId);
                  dispatch(setToggleRandomComponentContent());
                }}>
                <div
                  className="cart__item-top"
                  style={{
                    backgroundImage: `url(${posterUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top-center',
                  }}></div>
                <div className="cart__content">
                  <div className="cart__content-rating">
                    <p className={addRatingClass(ratingKinopoisk)}>{ratingKinopoisk}</p>
                  </div>
                  <div className="cart__content-text">
                    <p className="cart__title">{nameRu ? nameRu : nameEn}</p>
                    <p className="cart__country">{countryes}</p>
                    <p className="cart__year">{year}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FilterSearchItem;
