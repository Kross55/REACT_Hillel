import React from "react";
import './Weather.css';
const Forecast = (props) => {

  return (
    <div>
      {props.status === 'loading' && (
        <div>
          Loading ...
        </div>
      )}
      {props.status === 'success' && (
        <div className="city">
          <h2 className="city-name">
            <span>{props.data.name}</span>
            <sup>{props.data.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(props.data.main.temp)}<sup>°C</sup>
          </div>
          <div className="city-pressure">
            {props.data.main.pressure} hPa
          </div>
          <div className="city-wind">
            Humidity: {props.data.main.humidity} %
          </div>
          <div className="city-wind">
            Wind: {props.data.wind.deg}<sup>°</sup> ${Math.round(props.data.wind.speed)} m/s,
          </div>
          <div className="city-wind">
            Gust: ${Math.round(props.data.wind.gust)} m/s
          </div>
          <figure>
            <img className="city-icon" src={props.icon} alt={props.data.weather[0]["description"]}></img>
            <figcaption>{props.data.weather[0]["description"]}</figcaption>
          </figure>
        </div>

      )}
      {props.status === 'failure' && (
        <div className="msg pCity">
          Please search for a valid city 😩
        </div>
      )}
    </div>
  )

}

export default Forecast;