import { configureStore } from "@reduxjs/toolkit";
//import reducers from "./Reducers/index";
import productReducer from "./Reducers/productSlice";
import cartSlice from "./Reducers/cartSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartSlice,
  },

  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;
