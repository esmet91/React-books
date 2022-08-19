import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './Slices/categorySlice';
import searchReducer from './Slices/searchSlice';

export const store = configureStore({
  reducer: { category: categoryReducer, search: searchReducer },
});
