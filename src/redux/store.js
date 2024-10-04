import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/reduser";

export const store = configureStore({
  reduser: {
    conter: counterReducer,
  },
});
