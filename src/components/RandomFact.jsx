import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import InfoFilterFilm from './InfoFilterFilm';
import RandomFactCart from './RandomFactCart';
import { useSelector, useDispatch } from 'react-redux';
import {
  setRandomFactId,
  setRandomFactText,
  setRandomFactImage,
} from '../redux/randomFactToFilm/randomFact';

const RandomFact = () => {
  const dispatch = useDispatch();
  const arrFilterFilm = useSelector((state) => state.infoToFilterFilm.infoToFilterFilmArr);
  const randomFilmImage = useSelector((state) => state.randomFact.randomItemWrapper.itemImageUrl);
  const randomFilmText = useSelector(
    (state) => state.randomFact.randomItemWrapper.itemFact,
  ).replace(/( |<([^>]+)>)/gi, ' ');
  const flagContent = useSelector((state) => state.infoToFilterFilm.toggleFlag);

  function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  const allFIlmsId = [
    435, 329, 326, 3498, 448, 312, 328, 535341, 342, 42664, 679486, 258687, 2360, 476, 111543,
    279102, 447301, 361, 370, 474,
  ];

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

  const resultRandomFilmId = arrayRandElement(allFIlmsId);

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
    setFactToRandomFilm();
    setImageToRandomFilm();
  }, []);

  console.log(arrFilterFilm);
  return (
    <div className="interesting">
      <div className="interesting__wrapper">
        {flagContent ? (
          <>
            <h1 className="interesting__title">О фильме</h1>
            <InfoFilterFilm />
          </>
        ) : (
          <>
            <h1 className="interesting__title">Интересно</h1>
            <RandomFactCart randomFilmImage={randomFilmImage} randomFilmText={randomFilmText} />
          </>
        )}
      </div>
    </div>
  );
};

export default RandomFact;
