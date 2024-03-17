import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    showCart: (state) => {
      state.cart = state.cart;
    },
    addCart(state, action) {
      state.push(action.payload);
    },
    removeCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCart, showCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
