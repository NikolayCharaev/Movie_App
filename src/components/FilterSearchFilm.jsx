import React from 'react';
import axios from 'axios';

const FilterSearchFilm = () => {
  return (
    <div className="filter">
      <div className="filter__wrapper">
        <h1>Фильтр фильмов</h1>
        <div className="filter__item-box">
          <form className="filter__item-form" action="#">
            <p>
              <select size="3" multiple name="hero[]">
                <option disabled>Выберите героя</option>
                <option value="Чебурашка">Чебурашка</option>
                <option selected value="Крокодил Гена">
                  Крокодил Гена
                </option>
                <option value="Шапокляк">Шапокляк</option>
                <option value="Крыса Лариса">Крыса Лариса</option>
              </select>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterSearchFilm;
