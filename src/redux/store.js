import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/reduсer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
