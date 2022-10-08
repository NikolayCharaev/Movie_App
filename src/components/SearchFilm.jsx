import React, { useEffect } from 'react';
import axios from 'axios';
import {Button} from '@mui/material'
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
    async function newFilms() {
        if (value.length > 0) {
            return await axios
            .get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${value}`, {
              headers: {
                'X-API-KEY': process.env.REACT_APP_KEY,
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
    newFilms();
  }, []);

  return (
    // <div className='search'>
    <>
      <input
        className="search__input"
        value={value}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        type="text"
        placeholder="поиск фильма..."
        onKeyPress={buttonPress}
      />
      <Button
        sx={{padding: "9px", marginLeft: "5px"}}
        className="search__button"
        variant="contained"
        onClick={() => {
          newFilms();
        }}>
        найти
      </Button>
  
    {/* </div> */}
    </>
  );
};

export default SearchFilm;
