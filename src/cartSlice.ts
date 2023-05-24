import { createSlice } from "@reduxjs/toolkit";

type Items = {
  items: Item[];
};

type Item = {
  id: number;
  name: string;
  price: number;
};

// 初期状態
const initialState: Items = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    resetCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
