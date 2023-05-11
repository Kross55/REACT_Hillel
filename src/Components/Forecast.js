import React from "react";
import './Weather.css';
const Forecast = (props) => {
  const { name, sys, main, wind, weather } = props.data;
  const status = props.status;
  const icon  = props.icon;
  return (
    <div>
      {status === 'loading' && (
        <div>
          Loading ...
        </div>
      )}
      {status === 'success' && (
        <div className="city">
          <h2 className="city-name">
            <span>{name}</span>
            <sup>{sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(main.temp)}<sup>°C</sup>
          </div>
          <div className="city-pressure">
            {main.pressure} hPa
          </div>
          <div className="city-wind">
            Humidity: {main.humidity} %
          </div>
          <div className="city-wind">
            Wind: {wind.deg}<sup>°</sup> ${Math.round(wind.speed)} m/s,
          </div>
          <div className="city-wind">
            Gust: ${Math.round(wind.gust)} m/s
          </div>
          <figure>
            <img className="city-icon" src={icon} alt={weather[0]["description"]}></img>
            <figcaption>{weather[0]["description"]}</figcaption>
          </figure>
        </div>

      )}
      {status === 'failure' && (
        <div className="msg pCity">
          Please search for a valid city 😩
        </div>
      )}
    </div>
  )

}

export default Forecast;