import React, { useState } from "react";
import "./ToDoList.css";
import AddTaskForm from "./AddTaskForm";

const ToDoList = () => {

  const [tasks, setTasks] = useState([{
      text: "Do homework",
      isCompleted: false
    },{
      text: "Feed the dog",
      isCompleted: false
    },{
      text: "Water flowers",
      isCompleted: false
    }]);

  const addTask = text => setTasks([...tasks, { text }]);

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <div className="todo">
          <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}>Remove ToDo</button>
        </div>
      ))}
      <AddTaskForm addTask={addTask} />
    </div>
  );
}

export default ToDoList;