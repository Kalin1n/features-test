import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// Logic
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("Incrementing");
      state.value += 1;
    },
    decrement: (state) => {
      console.log("Decrementing");
      state.value -= 1;
    },
    addAmount: (state, action) => {
      console.log("Action : ", action);
      state.value += Number(action.payload);
    },
  },
});

export const asyncAddOne = () => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 2000);
  };
};

export const { increment, decrement, addAmount } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
