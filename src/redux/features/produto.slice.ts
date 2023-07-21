import { createSlice } from "@reduxjs/toolkit";

interface Produto {
  nome: string;
  preco: number;
  estoque: number;
}

interface ProdutosState {
  produtos: Produto[];
}

const initialState: ProdutosState = {
  produtos: [
    {
      preco: 1.9,
      nome: "Sabonete",
      estoque: 10,
    },
    {
      preco: 1.9,
      nome: "Sabonete",
      estoque: 10,
    },
  ],
};

const produtoSlice = createSlice({
  name: "produtoSlice",
  initialState: initialState,
  reducers: {
    addProduto(state, action) {
      state.produtos.push(action.payload);
    },
  },
});

export const { addProduto } = produtoSlice.actions;
export default produtoSlice.reducer;
