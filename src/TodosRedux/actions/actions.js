import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL } from '../constants'
import { initialState } from '../reducers/todos'

let nextTodoId = initialState.length;

export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const VisibilityFilters = {
    SHOW_COMPLETED: SHOW_COMPLETED,
    SHOW_ACTIVE: SHOW_ACTIVE,
    SHOW_ALL: SHOW_ALL
};
