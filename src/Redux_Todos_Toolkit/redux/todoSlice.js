import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
      {
        id: 0,
        text: "Do homework",
        completed: false,
      },
      {
        id: 1,
        text: "Feed the dog",
        completed: false,
      },
      {
        id: 2,
        text: "Water flowers",
        completed: true,
      },
    ]

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
