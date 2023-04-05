import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo';

const store = configureStore({
  reducer: {
    todo: todoReducer //todoSlice의 reducer
  }
});

export default store;