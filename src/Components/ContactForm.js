import React, { useState } from "react";

function ContactForm(props) { 
  //const { addContact, toggleShow } = props; 
  // Naming for handlers from props: prefix "on" and handler name start with capital letter
  const { onSubmit, onToggle, id } = props; 
  // Change state to object instead of few states
  const [state, setState] = useState({
    id: (id + 1),
    firstName: "",
    lastName: "",
    phoneNumber: ""
  }) 
  const handleSubmit = (event) => { 
    event.preventDefault(); 
    onSubmit(state); 
    setState(state.firstName, state.lastName, state.phoneNumber); 
    onToggle(); 
  };
  // Naming for local handlers: prefix "handle" and handler name start with capital letter
  const handleChange = (event) => { 
    setState(prevState => ({ ...prevState, 
    // Remember about input name attribute 
    // Add the same name attribute as in state object (payload object) 
    [event.target.name]: event.target.value })) } 
  
  return ( 
    <form onSubmit={handleSubmit}> 
      <div className="input"> 
        <input 
          type="text" 
          // See handleChange -> [event.target.name]: event.target.value
          name="firstName" 
          value={state.firstName} placeholder="First name" 
          onChange={handleChange} 
          required /> 
        <input 
          type="text" 
          name="lastName" 
          value={state.lastName} placeholder="Last name" 
          onChange={handleChange} 
          required /> 
        <input 
          type="text" 
          name="phoneNumber" 
          value={state.phoneNumber} placeholder="Phone number" 
          onChange={handleChange} 
          required /> 
          <div className="formButtons"> 
            <button type="submit"> 
              Add contact 
            </button> {/* if button is not for submitting, then don't set type=submit */} 
            <button 
              type="button" 
              onClick={() => onToggle()}> 
              Cancel 
            </button> 
          </div> 
        </div> 
      </form> ); 
}

export default ContactForm;
