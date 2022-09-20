import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './search/search';
import premieres from './premieres/premieres';

export const store = configureStore({
  reducer: {
    searchSlice: searchSlice,
    premieres: premieres,
  },
});
