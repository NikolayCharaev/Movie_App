import React, { useEffect } from 'react';

import nature from '../images/nature-1.gif';

import axios from 'axios';
import { Box, Slider, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import FilterSearchItem from './FilterSearchItem';
import LoadCompilation from './LoadCompilation';
import { setToggleButtonClick } from '../redux/filterSearchFilms/filterSearchFilms';
import {
  setSortByFilm,
  setReleaseMin,
  setReleaseMax,
  setRating,
  setPage,
  setAllFilms,
  changeInputInfo,
} from '../redux/filterSearchFilms/filterSearchFilms';

const FilterSearchFilm = () => {
  const sortByFilm = useSelector((state) => state.filterSearchFilms.sortBy);
  const releaseMax = useSelector((state) => state.filterSearchFilms.releaseMax);
  const releaseMin = useSelector((state) => state.filterSearchFilms.releaseMin);
  const filmRating = useSelector((state) => state.filterSearchFilms.minRating);
  const page = useSelector((state) => state.filterSearchFilms.page);
  const allFilterFilms = useSelector((state) => state.filterSearchFilms.arrAllFilms);

  const buttonState = useSelector((state) => state.filterSearchFilms.buttonState);

  const dispatch = useDispatch();

  async function getFilterSearchFilm(pageNumber = 1) {
    await axios
      .get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=${sortByFilm}&type=FILM&ratingFrom=${filmRating}&ratingTo=10&yearFrom=${releaseMin}&yearTo=${releaseMax}&page=${pageNumber}`,
        {
          headers: {
            'X-API-KEY': process.env.REACT_APP_KEY,
          },
        },
      )
      .then((data) => {
        dispatch(setAllFilms(data.data.items));
      })
      .catch((err) => console.log(err));
  }

  function handleChange(e) {
    dispatch(setSortByFilm(e.target.value));
  }

  return (
    <div className="filter">
      <div className="filter__wrapper">
        <h1>Подборка фильмов</h1>
        <div className="filter__item-box">
          <div className="filter__item-select">
            <p>сортировать по:</p>
            <select onChange={handleChange}>
              <option value="YEAR">дате</option>
              <option value="RATING">рейтингу</option>
              <option value="NUM_VOTE">голосам</option>
            </select>
          </div>
          <div className="filter__item-year">
            <p>год релиза</p>
            <input
              onKeyUp={(e) => {
                e.target.value = e.target.value.replace(/[^\d]/g, '');
              }}
              type="number"
              placeholder="мин"
              onChange={(e) => {
                dispatch(setReleaseMin(e.target.value));
                dispatch(changeInputInfo());
              }}
            />
            <input
              onKeyUp={(e) => {
                e.target.value = e.target.value.replace(/[^\d]/g, '');
              }}
              type="number"
              placeholder="макс"
              onChange={(e) => {
                dispatch(setReleaseMax(e.target.value));
                dispatch(changeInputInfo());
              }}
            />
          </div>
          <div className="filter__item-slider">
            <p>минимальный рейтинг</p>
            <Slider
              sx={{ width: 200 }}
              aria-label="Temperature"
              defaultValue={7}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
              onChange={(e) => dispatch(setRating(e.target.value))}
            />
          </div>
          <Button
            type="submit"
            disabled={buttonState ? false : true}
            className="search__button"
            variant="contained"
            onClick={() => {
              getFilterSearchFilm();
              dispatch(setToggleButtonClick());
            }}>
            поиск
          </Button>
        </div>
      </div>
      {allFilterFilms.length > 0 ? (
        <>
          <FilterSearchItem />
          {
            <div className="center ">
              <Button
                // disabled={true}
                sx={{ marginTop: '20px', padding: '10px 40px' }}
                variant="contained"
                onClick={() => {
                  dispatch(setPage());
                  getFilterSearchFilm(page);
                  dispatch(setAllFilms([]));
                }}>
                еще
              </Button>
            </div>
          }
        </>
      ) : (
        <LoadCompilation />
      )}
    </div>
  );
};

export default FilterSearchFilm;
