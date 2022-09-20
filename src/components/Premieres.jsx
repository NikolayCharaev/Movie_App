import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPremieres } from '../redux/premieres/premieres';

const Premieres = () => {
const year = new Date().getFullYear()
const dispatch = useDispatch()

async function newPremieres () {
    return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=JANUARY`, {
        headers: {
            'X-API-KEY': '6095320d-2104-4268-befd-2890bc14af9e',
        },
    })
        .then(res => dispatch(setPremieres(res.data.items)))
        .catch(err => console.log(err))
}

useEffect(() => {
    newPremieres()
},[])


  return (
    <div>
        <h1>новинки</h1>
    </div>
  )
}

export default Premieres
