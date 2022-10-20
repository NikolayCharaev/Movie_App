import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoToFilterFilmId: '',
  infoToFilterFilmArr: [],
  toggleFlag: false
};

export const infoToFilterFilm = createSlice({
  name: 'infoToFilterFilm',
  initialState,
  reducers: {
    sayToFilterFilmId: (state, action) => {
      state.infoToFilterFilmId = action.payload;
    },

    sayInfoToFilterFilmArr: (state, action) => {
      state.infoToFilterFilmArr = action.payload;
    },
    setToggleRandomComponentContent: (state) => {
        if (state.infoToFilterFilmId.length !== '') {
            state.toggleFlag = true
        }else {
            state.toggleFlag = false
        }
    }
  },
});

export const { sayToFilterFilmId, sayInfoToFilterFilmArr,setToggleRandomComponentContent } = infoToFilterFilm.actions;
export default infoToFilterFilm.reducer;
