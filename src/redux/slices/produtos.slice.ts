import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  createdAt: string;
  updatedAt: string;
}

interface ProdutosState {
  produtos: Produto[];
}

const initialState: ProdutosState = {
  produtos: [
    {
      id: 0,
      nome: "Maça",
      preco: 1.3,
      estoque: 10,
      createdAt: "",
      updatedAt: "",
    },
  ],
};

const produtoSlice = createSlice({
  name: "produtos",
  initialState,
  reducers: {
    addProduto: (state, action: PayloadAction<Produto>) => {
      // var produto = { ...action.payload };
      // produto.id = state.produtos[state.produtos.length - 1].id + 1;

      state.produtos.push(action.payload);
    },
    removeProduto: (state, action: PayloadAction<number>) => {
      state.produtos = state.produtos.filter(
        (produto) => produto.id !== action.payload
      );
    },
  },
});

export const { addProduto, removeProduto } = produtoSlice.actions;
export default produtoSlice.reducer;
