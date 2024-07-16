import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialValueType = {
  count: number;
  age: number;
};

const initialState: initialValueType = { count: 0, age: 5 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
      state.age = state.age + state.count * 2;
    },
    decrement: (state) => {
      state.count = state.count - 1;
      state.age = state.age - state.count * 2;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
