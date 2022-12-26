import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPremieres } from '../../redux/premieres/premieres';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Skeleton from '@mui/material/Skeleton';
import 'slick-carousel/slick/slick-theme.css';
import {
  sayToFilterFilmId,
  setToggleRandomComponentContent,
} from '../../redux/infoToFilterFilm/infoToFilterFilm';
import { sayInfoToFilterFilmArr } from '../../redux/infoToFilterFilm/infoToFilterFilm';

const Premieres = () => {
  const year = new Date().getFullYear();
  const loading = useSelector((state) => state.premieres.loading);
  const dispatch = useDispatch();
  const premieresItems = useSelector((state) => state.premieres.items);
  const searchFilmsData = useSelector((state) => state.searchSlice.items);

  async function newPremieres() {
    return await axios
      .get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=JANUARY`,
        {
          headers: {
            'X-API-KEY': process.env.REACT_APP_KEY,
          },
        },
      )
      .then((res) => dispatch(setPremieres(res.data.items)))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    newPremieres();
  }, []);

  async function getInfoFilterFilm(id) {
    await axios
      .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        headers: {
          'X-API-KEY': process.env.REACT_APP_KEY,
        },
      })
      .then((data) => {
        dispatch(sayInfoToFilterFilmArr([data.data]));
      })
      .catch((err) => console.log(err));
  }

  let settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 9,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1727,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 8,
          slidesToScroll: 8,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 2000,
          arrows: false,
        },
      },
      {
        breakpoint: 1415,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 6,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 2000,
          arrows: false,
        },
      },
      {
        breakpoint: 1188,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 6,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 1000,
          arrows: false,
        },
      },
      {
        breakpoint: 994,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 7,
          slidesToScroll: 7,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 1000,
          arrows: false,
        },
      },
      {
        breakpoint: 802,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 6,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 1000,
          arrows: false,
        },
      },
      {
        breakpoint: 669,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 5,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 2000,
          arrows: false,
        },
      },
      {
        breakpoint: 553,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 2000,
          arrows: false,
        },
      },
      {
        breakpoint: 484,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 2000,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 2000,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className={searchFilmsData.length > 0 ? 'premieres to-bottom' : 'premieres '}>
      <h1 className="premieres__title">новинки {year} года</h1>
      <div className="premieres__wrapper">
        <Slider {...settings}>
          {!loading
            ? [...Array(10)].map((elem, key) => {
                return (
                  <div key={key} className="premieres__cart">
                    <Skeleton variant="rectangular" width={210} height={248} />
                  </div>
                );
              })
            : premieresItems.map((elem, index) => {
                const { kinopoiskId } = elem;
                return (
                  <div
                    key={index}
                    className="premieres__cart"
                    onClick={() => {
                      dispatch(sayToFilterFilmId(kinopoiskId));
                      getInfoFilterFilm(kinopoiskId);
                      dispatch(setToggleRandomComponentContent());
                    }}>
                    <img src={elem.posterUrl} alt="" />
                  </div>
                );
              })}
        </Slider>
      </div>
    </div>
  );
};

export default Premieres;
