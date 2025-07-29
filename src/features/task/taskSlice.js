import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    items: [],
    filters: "all",
  },
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
    },
    toggleTask: {},
    deleteTask: {},
    setFilter: {},
  },
});
