import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './search/search';
import premieres from './premieres/premieres';
import randomFact from './randomFactToFilm/randomFact';

export const store = configureStore({
  reducer: {
    searchSlice: searchSlice,
    premieres: premieres,
    randomFact:randomFact
  },
});
