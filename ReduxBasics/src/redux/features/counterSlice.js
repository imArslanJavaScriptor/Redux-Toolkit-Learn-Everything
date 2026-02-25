import { createSlice } from "@reduxjs/toolkit";

export const counterSliceFeature = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      if(state.value > 0) {
        state.value-- 
      }
    },
    resetCounter: (state) => {state.value = 0},
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      if(state.value > 0) {
        state.value -= action.payload;
      };
    },
  },
});


export const {increment, decrement, resetCounter, incrementByAmount, decrementByAmount} = counterSliceFeature.actions;

export default counterSliceFeature.reducer;