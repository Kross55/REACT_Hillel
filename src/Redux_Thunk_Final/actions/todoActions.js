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
  return (dispatch) => {
    axios
      .get(API_URL)
      .then( (response) => {
        dispatch(fetchTodosSuccess(response.data));
      })
      .catch( (error) => {
        console.log("Error fetching todos:", error);
      });
  };
};

// Thunk action creator for adding a todo
export const addTodo = (text) => {
  return (dispatch) => {
    axios
      .post(API_URL, { text, completed: false })
      .then( (response) => {
        dispatch(addTodoSuccess(response.data))
      })
      .catch( (error) => {
        console.log("Error adding todo:", error)
      })
  };
};

// Thunk action creator for toggling a todo
export const toggleTodo = (id, completed) => {
  return (dispatch) => {
    axios
      .put(`${API_URL}/${id}`, { completed })
      .then( () => {
        dispatch(toggleTodoSuccess(id));
      })
      .catch( (error) => {
        console.log("Error toggling todo:", error);
      });
  };
};

// Thunk action creator for deleting a todo
export const deleteTodo = (id) => {
  return (dispatch) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then( () => {
        dispatch(deleteTodoSuccess(id));
      })
      .catch( (error) => { 
      console.log("Error deleting todo:", error);
      })
  };
};