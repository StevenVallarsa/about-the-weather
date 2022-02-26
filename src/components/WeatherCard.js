import React from "react";

export default function WeatherCard(props) {
  return (
    <div className="weatherCard">
      <div className="header">DAY</div>
      <div className="symbol">
        {" "}
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Weather Symbol" />
      </div>
      <div className="description">Sunny</div>
      <div className="temp">36°C | 122°F</div>
    </div>
  );
}
