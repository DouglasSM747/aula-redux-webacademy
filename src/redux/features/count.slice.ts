import { createSlice } from "@reduxjs/toolkit";

// https://dontpad.com/aulareduxufam

export const countSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 1,
  },

  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
});

export const { increment } = countSlice.actions;
export default countSlice.reducer;
