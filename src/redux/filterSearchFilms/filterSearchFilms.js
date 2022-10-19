import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrAllFilms: [],
  sortBy: 'RATING',
  releaseMin: '',
  releaseMax: '',
  minRating: '8',
  page: 3,
  buttonClick: false,
  buttonState: false,
};

export const filterSearchFilms = createSlice({
  name: 'filterSearchFilms',
  initialState,
  reducers: {
    setSortByFilm: (state, action) => {
      state.sortBy = action.payload;
    },
    setReleaseMin: (state, action) => {
      state.releaseMin = action.payload;
    },
    setReleaseMax: (state, action) => {
      state.releaseMax = action.payload;
    },
    setRating: (state, action) => {
      state.minRating = action.payload;
    },
    setPage: (state) => {
      state.page = state.page + 1;
    },
    setAllFilms: (state, action) => {
      state.arrAllFilms = action.payload;
    },
    setToggleButtonClick: (state) => {
     
      state.buttonClick = !state.buttonClick;
    },
    changeInputInfo: (state) => {
      if (state.releaseMin !== '' && state.releaseMax !== '' && Number(state.releaseMin) <=  Number(state.releaseMax)){
        state.buttonState = true
      }else {
        state.buttonState = false
      }
       
    },
  },
});

export const {
  setSortByFilm,
  setReleaseMin,
  setReleaseMax,
  setRating,
  setPage,
  setAllFilms,
  setToggleButtonClick,
  changeInputInfo,
} = filterSearchFilms.actions;
export default filterSearchFilms.reducer;
