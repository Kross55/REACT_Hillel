import React, { useState } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import {
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
} from "../constants/filterTypes";

const TodoList = ({ todos }) => {
  const [filter, setFilter] = useState(FILTER_ALL);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const filteredTodos = () => {
    switch (filter) {
      case FILTER_ACTIVE:
        return todos.filter((todo) => !todo.completed);
      case FILTER_COMPLETED:
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos().slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(filteredTodos().length / todosPerPage);

  return (
    <div>
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
      <div className="todo-list">
        {currentTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="filter-buttons">
        <button 
          className={filter === "all" ? "active" : ""}
          onClick={() => handleFilterChange(FILTER_ALL)}>
          All
        </button>
        <button 
          className={filter === "active" ? "active" : ""}   
          onClick={() => handleFilterChange(FILTER_ACTIVE)}>
          Active
        </button>
        <button 
          className={filter === "completed" ? "active" : ""} 
          onClick={() => handleFilterChange(FILTER_COMPLETED)}>
          Completed
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
