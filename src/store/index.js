import { configureStore } from "@reduxjs/toolkit";
import { toDoSlice } from "./todo-slice";

export const store = configureStore({
  reducer: {
    toDos: toDoSlice.reducer,
  },
});
