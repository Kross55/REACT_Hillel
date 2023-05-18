import React, { useState } from "react";

const ContactForm = ({ addContact, toggleShow }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(firstName, lastName, phoneNumber);
    setFirstName("");
    toggleShow();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <input
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          value={phoneNumber}
          placeholder="Phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <div className="formButtons">
          <button type="submit">Add contact</button>
          <button type="submit" onClick={toggleShow}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
