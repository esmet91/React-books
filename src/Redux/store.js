import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './Slices/categorySlice';
import searchReducer from './Slices/searchSlice';
import paginationReducer from './Slices/paginationSlice';

export const store = configureStore({
  reducer: { category: categoryReducer, search: searchReducer, pagination: paginationReducer },
});
