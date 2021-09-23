import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    addToCarrinho: (state, action) => {
      if (state.value.length === 0) {
        state.value.push(action.payload);
        return;
      }
      let found = false;
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].id === action.payload.id) {
          state.value[i].amount += action.payload.amount;
          found = true;
        }
      }
      if (found === false) state.value.push(action.payload);
    },
    removeFromCarrinho: (state, action) => {
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].id === action.payload.id) {
          state.value.splice(i, 1);
        }
      }
    },
  },
});

export const { addToCarrinho, removeFromCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
