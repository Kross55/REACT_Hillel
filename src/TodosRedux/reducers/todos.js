import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constants'

export const initialState = [
    {
        id: 0,
        text: "Do homework",
        isCompleted: false
    },
    {
        id: 1,
        text: "Feed the dog",
        isCompleted: false
    },
    {
        id: 2,
        text: "Water flowers",
        isCompleted: false
    }
]

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
            case REMOVE_TODO:
                return [
                    ...state,
                    state.filter(item => item.id !== action.id)
                ];
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state
    }
};

export default todos;