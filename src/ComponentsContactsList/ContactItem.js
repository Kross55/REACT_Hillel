import React from "react";

function ContactItem(props) {
  const handleRemove = () => {
    // I would suggest you work with id rather than with an index
    props.onRemove(props.id);
  };
  return (
    <div className="todo">
      <span className="todo">
        {props.item.firstName}
      </span>
      <span className="todo">
        {props.item.lastName}
      </span>
      <span className="todo">
        {props.item.phoneNumber}
      </span>
      <button onClick={handleRemove}>
        Delete Contact
      </button>
    </div>
  );
}

export default ContactItem;