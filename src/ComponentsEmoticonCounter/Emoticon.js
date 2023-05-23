import React from "react";

function Emoticon(props) {
  const handleClick = () => {
    props.onClick(props.icon.id);
  };
  return (
    <li>
      {props.icon.name} - {props.icon.count}{" "}
      <button onClick={handleClick}> Vote </button>
    </li>
  );
}

export default Emoticon;