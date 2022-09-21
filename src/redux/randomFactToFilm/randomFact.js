import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemsId: [],
  randomItemWrapper: {
    itemFact: '',
    itemImageUrl: '',
  },
};

export const randomFactSlice = createSlice({
  name: 'randomFact',
  initialState,
  reducers: {
    setRandomFactId: (state, action) => {
      state.itemsId = action.payload;
    },
    setRandomFactText: (state, action) => {
      state.randomItemWrapper.itemFact = action.payload;
    },
    setRandomFactImage: (state, action) => {
      state.randomItemWrapper.itemImageUrl = action.payload;
    },
  },
});

export const { setRandomFactId, setRandomFactText, setRandomFactImage } = randomFactSlice.actions;
export default randomFactSlice.reducer;
