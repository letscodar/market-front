import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addToCart, removeFromCart } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
