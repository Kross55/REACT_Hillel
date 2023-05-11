import React from "react";
import './Weather.css';
import Forecast from "./Forecast";

const API_ENDPOINT = "http://api.openweathermap.org/data/2.5/weather";
const API_ICON = "http://openweathermap.org/img/w/";

class FormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      data: [],
      icon: null,
      status: "loading",
      inputText: "Search for a city"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({city: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const params = {
      q: this.state.city,
      units: "metric",
      APPID: "5d066958a60d315387d9492393935c19" 
    };
    
    const query = Object
            .keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
        
    const url = `${API_ENDPOINT}?${query}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          status: 'success', 
          data: data,
          icon: `${API_ICON}${data.weather[0]["icon"]}.png` })
      })
      .catch(() => {
        this.setState({ status: 'failure' })
    })
  }

  render() {
    return (
      <React.Fragment>
        <section className="top-banner">
          <div className="container">
            <h1 className="heading">Simple Weather App</h1>
            <form  onSubmit={this.handleSubmit}>
              <input className="inputCity" type="text" placeholder="Search for a city" autoFocus value={this.state.city} onChange={this.handleChange} />
              <button type="submit">SUBMIT</button>
              <span className="msg"></span>
            </form>
          </div>
        </section>
        <section className="ajax-section">  
          <div className="container">
            <div className="cityWeather">
              <Forecast 
                data={this.state.data} 
                icon={this.state.icon} 
                status={this.state.status} />
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default FormSection;


