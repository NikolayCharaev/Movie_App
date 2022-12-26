import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoToFilterFilmId: '',
  infoToFilterFilmArr: [],
  toggleFlag: false,
  loading: false
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
      state.loading = true
    },
    setToggleRandomComponentContent: (state) => {
        if (state.infoToFilterFilmId.length !== '') {
            state.toggleFlag = true
        }else {
            state.toggleFlag = false
        }
    },
    deleteFilArr: (state) => {
      state.infoToFilterFilmArr = []
      state.toggleFlag = false
    }
  },
});

export const { sayToFilterFilmId, sayInfoToFilterFilmArr,setToggleRandomComponentContent, deleteFilArr } = infoToFilterFilm.actions;
export default infoToFilterFilm.reducer;
