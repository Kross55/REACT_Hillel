import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/todoSlice";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      setError("Please enter a valid todo.");
      return;
    }

    dispatch(
      addTodo({
        id: Date.now(),
        text: inputValue,
        completed: false,
      })
    );

    setInputValue("");
    setError("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
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
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              className="todo-text"
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <div className="form">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button className="form-buttons" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
        <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
      </div>
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

export default TodoList;
