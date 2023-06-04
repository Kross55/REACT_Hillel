import React from "react";

function InputComponent({ inputValue, onClick, onChange, error }) {
  return (
    <div>
      <div className="form">
        <input type="text" value={inputValue} onChange={onChange} />
        <button className="form-buttons" onClick={onClick}>
          Add Todo
        </button>
      </div>
      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
    </div>
  );
}

export default InputComponent;
