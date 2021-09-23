import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    addToCarrinho: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromCarrinho: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addToCarrinho, removeFromCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
