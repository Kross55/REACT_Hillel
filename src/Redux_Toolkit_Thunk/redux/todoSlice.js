import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "./constant";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
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

export const { setTodos, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(END_POINT);
      dispatch(setTodos(response.data));
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
};
