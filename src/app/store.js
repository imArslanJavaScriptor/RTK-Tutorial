import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../slices/todo/todoSlice.js";

export const store = configureStore({
  reducer: {
    todoSlice
  }
})