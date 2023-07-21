import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/count.slice";
import ProdutoReducer from "./features/produto.slice";

export const store = configureStore({
  reducer: {
    count: CounterReducer,
    produto: ProdutoReducer,
  },
});

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
