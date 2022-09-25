import React from 'react';
import nature__one from '../images/nature-1.gif';
import nature__two from '../images/nature-2.gif';
import loading from '../images/loading.gif';
import { useSelector, useDispatch } from 'react-redux';
import { setToggleButtonClick } from '../redux/filterSearchFilms/filterSearchFilms';

const LoadCompilation = () => {
  const buttonClickLoaded = useSelector((state) => state.filterSearchFilms.buttonClick);
  const loadArr = [nature__one, nature__two];
  
  function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }
  return (
    <div className="load__wrapper">
      {!buttonClickLoaded ? (
        <>
          <img src={arrayRandElement(loadArr)} alt="" />
          <p className="load__wrapper-text">Подберем лучшие фильмы для вас :)</p>
        </>
      ) : (
        <>
          <img className='loading' src={loading} alt="" />
          <p className="load__wrapper-text">идет загрузка...</p>
        </>
      )}
    </div>
  );
};

export default LoadCompilation;