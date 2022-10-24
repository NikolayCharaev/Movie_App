import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setVideoElelemts } from '../redux/footage/footageContent';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { deleteFilArr } from '../redux/infoToFilterFilm/infoToFilterFilm';

const Footage = () => {
  const itemId = useSelector((state) => state.infoToFilterFilm.infoToFilterFilmId);
  const allVideoItems = useSelector((state) => state.footageContent.allVideoItems);
  const dispatch = useDispatch();

  async function getAllVideo() {
    await axios
      .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${itemId}/videos`, {
        headers: {
          'X-API-KEY': process.env.REACT_APP_KEY,
        },
      })
      .then((data) => {
        dispatch(setVideoElelemts(data.data.items));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllVideo();
  }, []);
  return (
    <div className="footage">
      <div className="footage__inner">
        <h3 className="center">
          {' '}
          {allVideoItems.length > 0 ? 'Видеоматериалы' : 'Видеоматериалы отсутствуют'}{' '}
        </h3>
        <div className="footage__content">
          <ul className="footage__content-list">
            {allVideoItems.map((elem, id) => {
              return (
                <li className="footage__content-item" key={id}>
                  <i className="fa-brands fa-youtube">
                    <a target='blank' className="footage__content-link" href={elem.url}>
                    {elem.name}
                    </a>
                  </i>
                </li>
              );
            })}

          </ul>
        </div>

      </div>
      <div className="footage__button">
              <Button
                // disabled={true}
                sx={{ marginTop: '20px', padding: '10px 40px' }}
                variant="contained"
                onClick={() => {
                    dispatch(deleteFilArr())
                }}>
                закрыть
              </Button>
            </div>
    </div>
    
  );
};

export default Footage;
