import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setRandomFactId,
  setRandomFactText,
  setRandomFactImage,
} from '../redux/randomFactToFilm/randomFact';

const RandomFact = () => {
  const dispatch = useDispatch();
  const itemsId = useSelector((state) => state.randomFact.itemsId);



  async function setAllItemsId() {
    await axios
      .get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`,
        {
          headers: {
            'X-API-KEY': process.env.REACT_APP_KEY,
          },
        },
      )
      .then((res) => {
        dispatch(setRandomFactId(res.data.films.map((id) => id.filmId)));
      })
      .catch((err) => console.log(err));
  }

  function getRandomArrayElement(arr){
    if (arr.lenght <= 0) {
      return 'hello'
    }else {
      return arr[Math.floor(Math.random()*arr.length)]
    }
}

console.log(getRandomArrayElement(itemsId))

  async function setFactToRandomFilm() {
    await axios
      .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${''}/facts`, {
        headers: {
            'X-API-KEY': process.env.REACT_APP_KEY,
        },
      })
      .then((res) => {
        dispatch(setRandomFactText(res.data.items[0].text));
      })
      .catch((err) => console.log(err));
  }

  async function setImageToRandomFilm() {
    await axios
      .get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${328}/images?type=STILL&page=1`,
        {
          headers: {
            'X-API-KEY': process.env.REACT_APP_KEY,
          },
        },
      )
      .then((res) => {
        dispatch(setRandomFactImage(res.data.items[0].imageUrl));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setAllItemsId();
    // setFactToRandomFilm();
    // setImageToRandomFilm();
  }, []);

  return <div></div>;
};

export default RandomFact;
