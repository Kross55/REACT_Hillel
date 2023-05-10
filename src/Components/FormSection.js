import React from "react";
import './Weather.css';

function FormSection() {
  return (
    <section className="top-banner">
      <div className="container">
        <h1 className="heading">Simple Weather App</h1>
        <form>
          <input className="inputCity" type="text" placeholder="Search for a city" autoFocus></input>
          <button type="submit">SUBMIT</button>
          <span className="msg"></span>
        </form>
      </div>
    </section>
  )
}

export default FormSection;


