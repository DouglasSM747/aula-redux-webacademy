import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  createdAt: string;
  updatedAt: string;
}

interface ApiState {
  loading: boolean;
  produtos: Produto[];
  error: string;
}

const initialState: ApiState = {
  loading: false,
  produtos: [],
  error: "",
};

export const fetchProdutos = createAsyncThunk<Produto[]>(
  "api/get/produtos",
  async () => {
    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await wait(1000);

    const response: AxiosResponse<Produto[]> = await axios.get(
      "http://localhost:3333/v1/produto"
    );
    return response.data;
  }
);

const apiProdutoSlice = createSlice({
  name: "apiProduto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        fetchProdutos.fulfilled,
        (state, action: PayloadAction<Produto[]>) => {
          state.loading = false;
          state.produtos = action.payload;
        }
      )
      .addCase(fetchProdutos.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: apiProdutoReducer } = apiProdutoSlice;
export default apiProdutoSlice;
