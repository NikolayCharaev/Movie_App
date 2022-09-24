import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: 'RATING',
  releaseMin: '',
  releaseMax: '',
  minRating: '8',
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
  },
});


export const { setSortByFilm, setReleaseMin, setReleaseMax, setRating } = filterSearchFilms.actions;
export default filterSearchFilms.reducer;