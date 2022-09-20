import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};



export const premieresSlice = createSlice({
  name: 'premieres',
  initialState,
  reducers: {
    setPremieres: (state, action) => {
        state.items = action.payload
    }
  },
});

export const { setPremieres } = premieresSlice.actions;
export default premieresSlice.reducer;
