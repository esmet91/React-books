import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: {},
  itemCart: [],
  totalCount: 0,
  totalPrice: 0,
};

const counter = (state) => {
  return state.reduce((total, obj) => {
    return obj.count + total;
  }, 0);
};
const totalSum = (state) => {
  return state.reduce((total, obj) => {
    return obj.price * obj.count + total;
  }, 0);
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
      const obj = { ...action.payload, count: 1 };
      state.itemCart.push(obj);

      state.totalCount = counter(state.itemCart);
      state.totalPrice = totalSum(state.itemCart);
    },
    removeFromCart(state, action) {
      state.itemCart = state.itemCart.filter((obj) => obj.id !== action.payload.id);
      state.totalCount = counter(state.itemCart);
      state.totalPrice = totalSum(state.itemCart);
    },
    increment(state, action) {
      state.itemCart.forEach((obj) =>
        obj.id === action.payload.id ? (obj.count = action.payload.count + 1) : obj,
      );
      state.totalCount = counter(state.itemCart);
      state.totalPrice = totalSum(state.itemCart);
      //state.itemCart = [{ ...action.payload, count: action.payload.count + 1 }];
    },
    decrement(state, action) {
      state.itemCart.forEach((obj) =>
        obj.id === action.payload.id
          ? obj.count > 1
            ? (obj.count = action.payload.count - 1)
            : (obj.count = 1)
          : obj,
      );
      state.totalCount = counter(state.itemCart);
      state.totalPrice = totalSum(state.itemCart);
    },
  },
});

export const { setSelectItem, addToCart, removeFromCart, increment, decrement } = itemSlice.actions;

export default itemSlice.reducer;
