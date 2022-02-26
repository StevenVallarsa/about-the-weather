import React from "react";

export default function WeatherCard(props) {
  const { day, icon, desc, temp } = props.stats;
  let tempF = Math.round((temp * 9) / 5 + 32);

  return (
    <div className="weatherCard">
      <div className="header">DAY</div>
      <div className="symbol">
        {" "}
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Symbol" />
      </div>
      <div className="description">{desc}</div>
      <div className="temp">{temp}°C</div>
      <div className="tempF">{tempF}°F</div>
    </div>
  );
}
