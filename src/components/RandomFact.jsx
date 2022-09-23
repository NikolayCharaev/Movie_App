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
  setRandomId,
} from '../redux/randomFactToFilm/randomFact';

const RandomFact = () => {
  const dispatch = useDispatch();
  const itemsId = useSelector((state) => state.randomFact.itemsId);
  const randomFilmImage = useSelector((state) => state.randomFact.randomItemWrapper.itemImageUrl);
  const randomFilmText = useSelector(
    (state) => state.randomFact.randomItemWrapper.itemFact,
  ).replace(/( |<([^>]+)>)/gi, ' ');
  console.log(randomFilmText);

  function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  const allFIlmsId = [
    435, 329, 326, 3498, 448, 312, 328, 535341, 342, 42664, 679486, 258687, 2360, 476, 111543,
    279102, 447301, 361, 370, 474,
  ];
  const resultRandomFilmId = arrayRandElement(allFIlmsId);

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

  async function setFactToRandomFilm() {
    await axios
      .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${resultRandomFilmId}/facts`, {
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
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${resultRandomFilmId}/images?type=STILL&page=1`,
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

    setFactToRandomFilm();
    setImageToRandomFilm();
  }, []);

  return (
    <div className="interesting">
      <div className="interesting__wrapper">
        <h1 className='interesting__title'>Интересно</h1>
        <div className="interesting__item">
          <div className="interesting__item-img">
          <img src={randomFilmImage} alt="" />
          </div>
          <div className="interesting__item-text">
            <p>{randomFilmText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomFact;
