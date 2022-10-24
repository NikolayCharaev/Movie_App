import React from 'react';
import nature__one from '../images/nature-1.gif';
import { useSelector, useDispatch } from 'react-redux';

const LoadCompilation = () => {
  const buttonClickLoaded = useSelector((state) => state.filterSearchFilms.buttonClick);
  return (
    <div className="load__wrapper">
      {!buttonClickLoaded ? (
        <>
          <img src={nature__one} alt="" />
          <p className="load__wrapper-text">Подберем лучшие фильмы для вас 😻</p>
        </>
      ) : (
        <>
          <img className='loading' src={nature__one} alt="" />
          <p className="load__wrapper-text">идет загрузка...</p>
        </>
      )}

    </div>
  
  );
};

export default LoadCompilation;
