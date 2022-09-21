import React from 'react';
import { setCartClassText } from '../redux/search/search';
import { useSelector, useDispatch } from 'react-redux';

const SearchCart = () => {

  const dispatch = useDispatch()

  const itemsToSearchFilms = useSelector((state) => state.searchSlice.items);

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


  return (
    <div className="cart">
      <div className="cart__wrapper">
        {itemsToSearchFilms.map((cartElem, index) => {
          const { posterUrl, nameRu, nameEn, countryes, year, rating, description } = cartElem;
          return (
            <div key={index} className="cart__item">
              <div className="cart__item-top">
              <img src={posterUrl} alt="poster" />
              <p className="cart__content-description">{description}</p>
              </div>
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
