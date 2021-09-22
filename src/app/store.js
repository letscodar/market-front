import { configureStore } from "@reduxjs/toolkit";
import carrinhoReducer from "../features/carrinho/carrinhoSlice";

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
  },
});
