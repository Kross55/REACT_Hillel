import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/actions";
import InputComponent from "./InputComponent";

const TodoList = ({ todos, addTodo, deleteTodo, toggleTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      setError("Please enter a valid todo.");
      return;
    }

    addTodo(inputValue);
    setInputValue("");
    setError("");
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleToggleTodo = (id) => {
    toggleTodo(id);
  };

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.isCompleted;
    } else if (filter === "completed") {
      return todo.isCompleted;
    }
    return true;
  });

  return (
    <div className="todo-list">
      <div>
        {filteredTodos.map((todo) => (
          <div className="todo" key={todo.id}>
            <span
              onClick={() => handleToggleTodo(todo.id)}
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
              className="todo-text"
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
      <InputComponent
        inputValue={inputValue}
        onChange={handleInputChange}
        onClick={handleAddTodo}
        error={error}
      />
      {/*<input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
          <button onClick={handleAddTodo}>Add Todo</button>}*/}

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => handleFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => handleFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
