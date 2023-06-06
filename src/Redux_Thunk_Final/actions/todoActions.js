import axios from "axios";
import { 
  FETCH_TODOS_SUCCESS, 
  ADD_TODO_SUCCESS, 
  TOGGLE_TODO_SUCCESS, 
  DELETE_TODO_SUCCESS,
  SET_FILTER } from "../constants/actionTypes";

const API_URL = "https://647c17f9c0bae2880ad06138.mockapi.io/todos";

// Action creators
const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: todo,
});

const toggleTodoSuccess = (id) => ({
  type: TOGGLE_TODO_SUCCESS,
  payload: id,
});

const deleteTodoSuccess = (id) => ({
  type: DELETE_TODO_SUCCESS,
  payload: id,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

// Thunk action creator for fetching todos
export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_URL);
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      console.log("Error fetching todos:", error);
    }
  };
};

// Thunk action creator for adding a todo
export const addTodo = (text) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_URL, { text, completed: false });
      dispatch(addTodoSuccess(response.data));
    } catch (error) {
      console.log("Error adding todo:", error);
    }
  };
};

// Thunk action creator for toggling a todo
export const toggleTodo = (id, completed) => {
  return async (dispatch) => {
    try {
      await axios.put(`${API_URL}/${id}`, { completed });
      dispatch(toggleTodoSuccess(id));
    } catch (error) {
      console.log("Error toggling todo:", error);
    }
  };
};

// Thunk action creator for deleting a todo
export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch(deleteTodoSuccess(id));
    } catch (error) {
      console.log("Error deleting todo:", error);
    }
  };
};
