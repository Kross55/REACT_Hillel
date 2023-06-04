import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTodos, deleteTodo, toggleTodo, fetchTodos } from "./redux/todoSlice";
import { END_POINT } from "./redux/constant";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  //const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");
  //const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = async () => {
    if (inputValue.trim() === "") {
      setError("Please enter a valid todo.");
      return;
    }
  
    try {
      const response = await axios.post(END_POINT, {
        text: inputValue,
        completed: false,
      });
  
      dispatch(
        setTodos({
          id: response.data.id,
          text: response.data.text,
          completed: response.data.completed,
        })
      );
  
      setInputValue("");
      setError("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
  
  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`${END_POINT}/${id}`);
      dispatch(deleteTodo(id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  
  const handleToggleTodo = async (id) => {
    try {
      const todo = todos.find((todo) => todo.id === id);
  
      if (todo) {
        const updatedTodo = { ...todo, completed: !todo.completed };
  
        await axios.put(`${END_POINT}/${id}`, updatedTodo);
  
        dispatch(toggleTodo(id));
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
  

  {/*const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });*/}

  return (
    <div className="todo-list">
      <div>
        {todos.map((todo) => (
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
      {/*<div className="filter-buttons">
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
            </div>*/}
    </div>
  );
};

export default TodoList;
