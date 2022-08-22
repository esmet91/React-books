import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: {},
  itemCart: [],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setSelectItem(state, action) {
      state.item = action.payload;
    },
    addToCart(state, action) {
      // const findItem = state.itemCart.find((obj) => obj.id === action.payload.id);

      // if (!findItem) {
      //   state.itemCart.push(action.payload);
      // }
      state.itemCart.push(action.payload);
    },
  },
});

export const { setSelectItem, addToCart } = itemSlice.actions;

export default itemSlice.reducer;
