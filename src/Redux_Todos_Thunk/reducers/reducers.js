const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        ...state,
        todos: action.payload,
      };

    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
