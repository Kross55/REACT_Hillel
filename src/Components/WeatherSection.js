import React from "react";
import './Weather.css';
import Forecast from "./Forecast";

class WeatherSection extends React.Component {
  render() {
    return (
      <section className="ajax-section">
        <div className="container">
          <div className="cityWeather">
            <Forecast />
          </div>
        </div>
      </section>
    )
  }
}

export default WeatherSection;


