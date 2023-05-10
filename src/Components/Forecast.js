import React from "react";
import './Weather.css';

const API_ENDPOINT = "http://api.openweathermap.org/data/2.5/weather";
const API_ICON = "http://openweathermap.org/img/w/";

function urlHandler() {
  //const input = document.querySelector(".inputCity");
  //let textInput = React.createRef();
  //input.ref = textInput;


  const params = {
    q: "Mexico",//event.target.value?
    units: "metric",
    APPID: "5d066958a60d315387d9492393935c19" 
  };
  
  const query = Object
          .keys(params)
          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
          .join('&');
      
  const url = `${API_ENDPOINT}?${query}`;
  return url
}

class Forecast extends React.Component {

  constructor() {
    super();
    this.state = {
      data: null,
      icon: null,
      status: 'loading'
    };
  }

  componentDidMount() {
    fetch(urlHandler())
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
      <div>
        {this.state.status === 'loading' && (
          <div>
            Loading ...
          </div>
        )}
        {this.state.status === 'success' && (
          <div className="city">
            <h2 className="city-name">
              <span>{this.state.data.name}</span>
              <sup>{this.state.data.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(this.state.data.main.temp)}<sup>°C</sup>
            </div>
            <div className="city-pressure">
              {this.state.data.main.pressure} hPa
            </div>              
            <div className="city-wind">
              Humidity: {this.state.data.main.humidity} %
            </div>
            <div className="city-wind">
              Wind: {this.state.data.wind.deg}<sup>°</sup> ${Math.round(this.state.data.wind.speed)} m/s,
            </div>
            <div className="city-wind">
              Gust: ${Math.round(this.state.data.wind.gust)} m/s
            </div>
            <figure>
              <img className="city-icon" src={this.state.icon} alt={this.state.data.weather[0]["description"]}></img>
              <figcaption>{this.state.data.weather[0]["description"]}</figcaption>
            </figure> 
          </div>
          
        )}
        {this.state.status === 'failure' && (
          <div className="msg">
            Please search for a valid city 😩
          </div>
        )}
      </div>
    )
  }
}

export default Forecast;