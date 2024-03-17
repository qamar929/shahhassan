import { createSlice } from "@reduxjs/toolkit";



export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    showProducts: (state) => {
      state.products = state.products;
    },
    addProduct(state, action) {
        state.push(action.payload); // Add the new product to the array
      },
      removeProduct(state,action){
        return state.filter((item)=> item.id !==action.payload);
      }
  },
});

export const { addProduct , showProducts,removeProduct } = productSlice.actions;
export default productSlice.reducer;


