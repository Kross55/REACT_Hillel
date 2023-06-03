import { 
    ADD_TODO, 
    DELETE_TODO, 
    TOGGLE_TODO } from "./constants";
import { initialState } from "./todoReducer";

let nextTodoId = initialState.todos.length;

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
    isCompleted: false,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});


