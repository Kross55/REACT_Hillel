import React from "react";

function InputComponent({ inputValue, onClick, onChange}) {
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={onClick}>Add Todo</button>
    </div>
  );
}

export default InputComponent;
