import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './Slices/categorySlice';
import searchReducer from './Slices/searchSlice';
import paginationReducer from './Slices/paginationSlice';
import itemSlice from './Slices/itemSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    item: itemSlice,
    search: searchReducer,
    pagination: paginationReducer,
  },
});
