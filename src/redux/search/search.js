import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  items: [],
};



export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSearchFilm:(state, action) => {
        state.items = action.payload
    },
  },
});

export const { setSearchValue, setSearchFilm } = searchSlice.actions;
export default searchSlice.reducer;
