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
  console.log(premieresItems);

  async function newPremieres() {
    return await axios
      .get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=JANUARY`,
        {
          headers: {
            'X-API-KEY': '6095320d-2104-4268-befd-2890bc14af9e',
          },
        },
      )
      .then((res) => dispatch(setPremieres(res.data.items)))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    newPremieres();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    speed: 500
  };
  return (
    <div className="premieres">
      <h1>новинки {year} года</h1>
      <div className="premieres__wrapper">
        <Slider  {...settings}>
          {premieresItems.map((elem) => {
            return (
              <div className='premieres__cart'> 
                <img src={elem.posterUrl} alt="" />
              </div>
            )
          })}
        </Slider>
      </div>
    </div>

  );
};

export default Premieres;
