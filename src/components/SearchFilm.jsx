import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue, setSearchFilm } from '../redux/search/search';

const SearchFilm = () => {
  const value = useSelector((state) => state.searchSlice.searchValue);
  const items = useSelector((state) => state.searchSlice.items);

  const dispatch = useDispatch();

  function buttonPress(e) {
    if (e.key === 'Enter' && value.length > 0) {
      dispatch(setSearchValue(e.target.value));
    }
  }
    async function topFilms() {
        if (value.length > 0) {
            return await axios
            .get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${value}`, {
              headers: {
                // 'X-API-KEY': 'cthulhu',
                'Content-type' : 'application/json',
                'X-API-KEY': '6095320d-2104-4268-befd-2890bc14af9e',
              },
            })
            .then((res) => {
                console.log(res)
                 dispatch(setSearchFilm(res.data.films))
              })
            .catch((err) => console.log(err));
        }
       
      }

  useEffect(() => {
    topFilms();
  }, []);

  return (
    <div className='search'>
      <input
        className="search__input"
        value={value}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        type="text"
        placeholder="поиск фильма..."
        onKeyPress={buttonPress}
      />
      <button
        className="search__button"
        onClick={() => {
          topFilms();
        }}>
        найти
      </button>
    </div>
  );
};

export default SearchFilm;