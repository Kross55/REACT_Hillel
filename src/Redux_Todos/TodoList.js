import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/actions";
import InputComponent from "./InputComponent";

const TodoList = ({ todos, addTodo, deleteTodo, toggleTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleToggleTodo = (id) => {
    toggleTodo(id);
  };

  return (
    <div className="todo-list">
      <div>
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <span
            onClick={() => handleToggleTodo(todo.id)}
            style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none'
            }}
            className="todo-text"
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <InputComponent 
        inputValue={inputValue} 
        onChange={handleInputChange} 
        onClick={handleAddTodo}/>
      {/*<input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
          <button onClick={handleAddTodo}>Add Todo</button>}*/}

      {/*<button onClick={handleComplited}>Complited</button>
      <button onClick={handleAll}>All</button>*/}
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
