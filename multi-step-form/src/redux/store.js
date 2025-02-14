import { configureStore } from "@reduxjs/toolkit";
import { pageReducer } from "./pagesSlices";

export const store = configureStore({
  reducer: {
    pageReducer,
  },
});
