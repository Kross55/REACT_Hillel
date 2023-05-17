import React, { useState } from "react";
import "./ContactsList.css";
import ContactForm from "./ContactForm.js";

const ContactsList = () => {
  const [contacts, setContacts] = useState([
    {
      firstName: "Ivan",
      lastName: "Yakushenko",
      phoneNumber: "+380934869702",
    },
    {
      firstName: "Oleg",
      lastName: "Bobrov",
      phoneNumber: "+380973358892",
    },
    {
      firstName: "Irina",
      lastName: "Rogovskaya",
      phoneNumber: "+380956699944",
    },
  ]);

  const [show, setShow] = useState("true")

  const addContact = (firstName, lastName, phoneNumber) => setContacts([...contacts, { firstName, lastName, phoneNumber }]);

  const toggleShow = () => {
    return setShow(!show);
  };

  const removeContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div className="todo-list">
      {contacts.map((contact, index) => (
        <div key={contact.phoneNumber} className="todo">
          <span className="todo">
            {contact.firstName}
          </span>
          <span className="todo">
            {contact.lastName}
          </span>
          <span className="todo">
            {contact.phoneNumber}
          </span>
          <button onClick={() => removeContact(index)}>
            Delete Contact
          </button>
        </div>
      ))}
      { show && (<button onClick={toggleShow}>New contact</button>) }
      { !show && (<ContactForm addContact={addContact} toggleShow={toggleShow} />) }
    </div>
  );
};

export default ContactsList;
