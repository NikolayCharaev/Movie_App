import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrAllFilms: [],
  sortBy: 'RATING',
  releaseMin: '19',
  releaseMax: '20',
  minRating: '8',
  page: 1,
  buttonClick: false
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
    setAllFilms: (state,action) => {
        state.arrAllFilms = action.payload
    },
    setToggleButtonClick: (state) => {
      state.buttonClick = !state.buttonClick

    }
  },
});

export const { setSortByFilm, setReleaseMin, setReleaseMax, setRating, setPage, setAllFilms, setToggleButtonClick } =
  filterSearchFilms.actions;
export default filterSearchFilms.reducer;
