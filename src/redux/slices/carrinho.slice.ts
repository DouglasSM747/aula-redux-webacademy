import { createSlice } from "@reduxjs/toolkit";

export const carrinhoSlice = createSlice({
  name: "carrinhoSlice",
  initialState: {
    produtos: [] as string[],
  },

  reducers: {
    addProdutoNome(state, action) {
      state.produtos.push(action.payload);
      return state;
    },
  },
});

export const { addProdutoNome } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
