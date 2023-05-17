import React, { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTask(value)
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter a title for this task…"
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
}

export default AddTaskForm;