import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./constants";

export const initialState = {
  todos: [
    {
      id: 0,
      text: "Do homework",
      isCompleted: false,
    },
    {
      id: 1,
      text: "Feed the dog",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Water flowers",
      isCompleted: true,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
