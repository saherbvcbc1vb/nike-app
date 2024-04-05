import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./ProuductsSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
