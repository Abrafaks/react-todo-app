import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "toDos",
  initialState: { toDos: [] },
  reducers: {
    addToDo(state, action) {
      state.toDos.push(action.payload);
    },
    removeToDo(state, action) {
      const id = action.payload;

      state.toDos = state.toDos.filter((toDo) => toDo.id !== id);
    },
  },
});

export const toDoActions = toDoSlice.actions;
