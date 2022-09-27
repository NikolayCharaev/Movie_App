import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPremieres } from '../redux/premieres/premieres';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Premieres = () => {
  const year = new Date().getFullYear();
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

  let settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 9,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1727,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 8,
          autoplay: true,
          speed: 2000,
          arrows: false,
        }
      },
      {
        breakpoint: 1415,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 6,
          autoplay: true,
          speed: 2000,
          arrows: false,
        }
      },
      {
        breakpoint: 1188,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 6,
          autoplay: true,
          speed: 2000,
          arrows: false,
        }
      },
      {
        breakpoint: 994,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 7,
          autoplay: false,
          speed: 0,
          arrows: false,
        }
      },
      {
        breakpoint: 802,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 6,
          autoplay: false,
          speed: 0,
          arrows: false,
        }
      },
      {
        breakpoint: 669,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 5,
          autoplay: false,
          speed: 0,
          arrows: false,
        }
      },
      {
        breakpoint: 557,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 5,
          autoplay: false,
          speed: 0,
          arrows: false,
        }
      },
      {
        breakpoint: 484,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 6,
          autoplay: false,
          speed: 0,
          arrows: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 6,
          autoplay: false,
          speed: 0,
          arrows: false,
        }
      },
    ]

  };
  return (
    <div className={searchFilmsData.length > 0 ? 'premieres to-bottom' : 'premieres'}>
      <h1 className='premieres__title'>новинки {year} года</h1>
      <div className="premieres__wrapper">
        <Slider {...settings}>
          {premieresItems.map((elem, index) => {
            return (
              <div key={index} className="premieres__cart">
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
