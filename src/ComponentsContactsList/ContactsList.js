import React, { useState } from "react";
import "./ContactsList.css";
import ContactForm from "./ContactForm.js";
import ContactItem from "./ContactItem.js";
const ContactsList = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: "Ivan",
      lastName: "Yakushenko",
      phoneNumber: "+380934869702",
    },
    {
      id: 2,
      firstName: "Oleg",
      lastName: "Bobrov",
      phoneNumber: "+380973358892",
    },
    {
      id: 3,
      firstName: "Irina",
      lastName: "Rogovskaya",
      phoneNumber: "+380956699944",
    },
  ]);
  console.log(contacts[contacts.length - 1])
  const [show, setShow] = useState(true);
  {/*const addContact = (firstName, lastName, phoneNumber) =>
    setContacts([...contacts, { firstName, lastName, phoneNumber }]);*/}
  const handleSubmit = (payload) => setContacts(prevState => [...prevState, payload]);
  const handleToggle = () => {
    return setShow(!show);
  };

  const removeContact = (id) => {
    const newContacts = [...contacts];
    newContacts.splice(id, 1);
    setContacts(newContacts);
  };

  return (
    <div className="todo-list">
      {contacts.map((contact, id) => (
        <div key={contact.id} className="todo">
          <ContactItem item={contact} onRemove={removeContact} id={id}/>
          {/*<span className="todo">{contact.firstName}</span>
          <span className="todo">{contact.lastName}</span>
          <span className="todo">{contact.phoneNumber}</span>
          <button onClick={() => removeContact(index)}>Delete Contact</button>*/}
        </div>
      ))}
      {show && <button onClick={handleToggle}>New contact</button>}
      {!show && <ContactForm onSubmit={handleSubmit} onToggle={handleToggle} id={contacts[contacts.length - 1].id} />}
    </div>
  );
};
export default ContactsList;