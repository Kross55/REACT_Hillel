import { FILTER_ALL } from '../constants/filterTypes';
import { 
  FETCH_TODOS_SUCCESS, 
  ADD_TODO_SUCCESS, 
  TOGGLE_TODO_SUCCESS, 
  DELETE_TODO_SUCCESS, 
  SET_FILTER } from "../constants/actionTypes";

const initialState = {
  todos: [],
  filter: FILTER_ALL,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
