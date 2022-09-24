import React from 'react';
import axios from 'axios';
import { Box, Slider } from '@mui/material';

const FilterSearchFilm = () => {


    
  
  return (
    <div className="filter">
      <div className="filter__wrapper">
       <h1>Подборка фильмов</h1>
        <div className="filter__item-box">
        <div className="filter__item-select">
        <p>сортировать по:</p>
        <select>
            <option value="YEAR">дате</option>
            <option value="RATING">рейтингу</option>
            <option value="NUM_VOTE">голосам</option>
          </select>
        </div>
        <div className="filter__item-year">
                <p>год релиза</p>
                <input type="text" placeholder='мин' />
                <input type="text" placeholder='макс'/>
        </div>
          <div className="filter__item-slider">
            <p>минимальный рейтинг</p>
            <Slider
              sx={{ width: 200 }}
              aria-label="Temperature"
              defaultValue={7}
              valueLabelDisplay="auto"
              step={2}
              marks
              min={1}
              max={10}
            />
          </div>
          <button className='search__button'>поиск</button>
       </div>
      </div>
    </div>
  );
};

export default FilterSearchFilm;
