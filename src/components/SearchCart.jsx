import axios from 'axios';
import React from 'react';
// import { setCartClassText } from '../redux/search/search';
import { useSelector, useDispatch } from 'react-redux';
import { setBigBackground } from '../redux/search/search';

const SearchCart = () => {
  const dispatch = useDispatch();

  const itemsToSearchFilms = useSelector((state) => state.searchSlice.items);
  const backgroundCartId = useSelector((state) =>
    state.searchSlice.items.length > 0 ? state.searchSlice.items[0].filmId : '',
  );
  const bigBackgrond = useSelector((state) => state.searchSlice.bigBackground);

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

  async function setBackgroundCart(id) {
    if (id.length <= 0) {
      return;
    }
    await axios
      .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=STILL&page=1`, {
        headers: {
          'X-API-KEY': process.env.REACT_APP_KEY,
        },
      })
      .then(async (data) => dispatch(await setBigBackground(data.data.items[0].imageUrl)))
      .catch((err) => console.log(err));
  }

  setBackgroundCart(backgroundCartId);

  return (
    <div
      className={itemsToSearchFilms.length > 0 ? 'search__big-background' : 'none'}
      style={{
        width: '100%',
        // height: '100%',
        backgroundImage: `url(${bigBackgrond})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top -80px left',
        backgroundSize: 'cover',
      }}>
      {/* {console.log('BIG', bigBackgrond)} */}
      <div className="container">
        <div className={itemsToSearchFilms.length > 0 ? 'cart pt-50' : 'cart none'}>
          <div className="cart__wrapper">
            {itemsToSearchFilms.map((cartElem, index) => {
              const { posterUrl, nameRu, nameEn, countryes, year, rating, description } = cartElem;
              return (
                <div key={index} className="cart__item">
                  <div className="cart__item-top">
                    <img src={posterUrl} alt="poster" />
                    <p className="cart__content-description">
                      {description ? description : 'Описание отсутствует :('}
                    </p>
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
      </div>
    </div>
  );
};

export default SearchCart;
