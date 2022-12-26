import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
};

export const premieresSlice = createSlice({
  name: 'premieres',
  initialState,
  reducers: {
    setPremieres: (state, action) => {
      state.items = action.payload;
      state.loading = true;
    },
  },
});

export const { setPremieres } = premieresSlice.actions;
export default premieresSlice.reducer;
