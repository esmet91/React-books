import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: {},
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setSelectItem(state, action) {
      state.item = action.payload;
    },
  },
});

export const { setSelectItem } = itemSlice.actions;

export default itemSlice.reducer;
