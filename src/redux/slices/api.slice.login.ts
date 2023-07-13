import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface ApiState {
  loading: boolean;
  data: object;
  error: string;
  isSucess: boolean;
}

const initialState: ApiState = {
  loading: false,
  data: {},
  error: "",
  isSucess: false,
};

export const doLogin = createAsyncThunk(
  "api/login",
  async (dataLogin: object) => {
    const response: AxiosResponse = await axios.post(
      "http://localhost:3333/v1/login",
      dataLogin
    );

    return { payload: response.data, status: response.status };
  }
);

const apiLoginSlice = createSlice({
  name: "apiLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.isSucess = false;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

        if (action.payload.status === 200) {
          state.isSucess = true;
        }
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "";
        state.isSucess = false;
      });
  },
});

export const { reducer: apiLoginReducer } = apiLoginSlice;
export default apiLoginSlice;