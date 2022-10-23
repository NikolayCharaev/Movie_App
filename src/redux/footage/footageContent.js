import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allVideoItems: [],
};

export const footageContent = createSlice({
  name: 'footage',
  initialState,
  reducers: {
    setVideoElelemts: (state, action) => {
      state.allVideoItems = action.payload;
    },
  },
});

export const { setVideoElelemts } = footageContent.actions;
export default footageContent.reducer;
