import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  items: [],
  bigBackground: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSearchFilm: (state, action) => {
      state.items = action.payload;
    },
    setBigBackground: (state, action) => {
      state.bigBackground = action.payload
    }

  },
});

export const { setSearchValue, setSearchFilm, setBigBackground } = searchSlice.actions;
export default searchSlice.reducer;
