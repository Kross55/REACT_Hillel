import React from "react";
import './App.css';

function App() {
  //const isLoading = true;

  return (
    <div className="app-wrapper">
      <Header 
        headerText = "Component"
      />
      <Navigation />
      <Contant 
        isLoading = {true}
        contentText = "please"
      />
      
    </div>
  );
}

export default App;

const Header = (props) => {
  return (
    <div className="header">
      <h3>I am header {props.headerText}</h3>
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

function ListItem(props) {
  return (
    <h2>
      <span>
        {props.number}.{" "}
      </span>
      <span>
        {props.name}
      </span>
    </h2>
  )
}

class Contant extends React.Component {
  componentDidMount() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  constructor(props) {
    super(props);
    this.state = {
      textFromState: "Text from state",
      buttonText: "ASAP",
      data: [
        {
          id: 1,
          name: "Vitalii"
        },
        {
          id: 2,
          name: "Serhii"
        },
        {
          id: 3,
          name: "Ivan"
        },
      ]
    }
  }
  render() {
    return (
      <div className="content">
        <h3>I am Contant</h3>
        <p>{this.state.textFromState}</p>
        {this.state.data.map((item, index) => {
          return (
            <ListItem 
              key={item.id}
              number={index + 1}
              name={item.name}
            />
          )
          /*return (
            <h2 key={item.id}>
              <span>
                {index + 1}.
              </span>
              <span>
                {item.name}
              </span>
            </h2>
          )*/
        })}
        {this.props.isLoading && (
        <p>Loading...</p> 
        )}
        {!this.props.isLoading && (
        <button>Click me {this.props.contentText}</button> 
        )}
        {!this.props.isLoading 
          ? <p>Loading...</p> 
          : <button>Click me {this.state.buttonText}</button>
        }
      </div>
    )
  }
}

/*class ClassComponent extends React.PureComponent {
  componentDidMount() {

  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {

  }

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  shouldComponentUpdate() {
    return this.props.key1 === nextProps.key1
  }

  render() {
    return (
      <div className="content">
        <h3>I am Contant</h3>
      </div>
    )
  }
}*/