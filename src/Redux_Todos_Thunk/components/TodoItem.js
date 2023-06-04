import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions/todoActions";
import {
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
} from "../constants/filterTypes";

const TodoItem = ({ todo, toggleTodo, deleteTodo, filter }) => {
  const handleToggle = () => {
    toggleTodo(todo.id, !todo.completed);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const isVisible = () => {
    switch (filter) {
      case FILTER_ALL:
        return true;
      case FILTER_ACTIVE:
        return !todo.completed;
      case FILTER_COMPLETED:
        return todo.completed;
      default:
        return true;
    }
  };

  if (!isVisible()) {
    return null;
  }

  return (
    <div className="todo">
    <span
      className="todo-text"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={handleToggle}
    >
      {todo.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoItem);
