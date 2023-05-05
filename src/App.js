import React from "react";
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Contant />
      
    </div>
  );
}

export default App;

const Header = () => {
  return (
    <div className="header">
      <h3>I am header</h3>
    </div>
  )
}

const Navigation = () => {
  return (
    <div className="nav">
      <h3>I am Navigation</h3>
    </div>
  )
}

class Contant extends React.Component {
  render() {
    return (
      <div className="content">
        <h3>I am Contant</h3>
      </div>
    )
  }
}