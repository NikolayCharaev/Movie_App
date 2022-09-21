import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

const SearchCart = () => {
  const itemsToSearchFilms = useSelector((state) => state.searchSlice.items);


  function addRatingClass(rating) {
      if (rating >= 8 || rating > 7){
          return 'cart__rating green'
      }else if (rating <= 6 || rating < 7) {
          return 'cart__rating yellow'
      }else if (rating <= 4) {
          return 'cart__rating red'
      }else if (rating === 'null') {
          return 'none'
      }
  }
  return (
    <div className="cart">
      <div className="cart__wrapper">
        {itemsToSearchFilms.map((cartElem, index) => {
          const { posterUrl, nameRu, nameEn, countryes, year, rating } = cartElem;
          return (
            <div className="cart__item">
              <img src={posterUrl} alt="poster"/>
              <div className="cart__content">
                <div className="cart__content-rating">
                  <p className={addRatingClass(rating)}>{rating}</p>
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

export default SearchCart;
