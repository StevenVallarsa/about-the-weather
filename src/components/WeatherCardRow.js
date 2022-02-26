import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import { defaultWeatherCards } from "../defaultWeatherCards";

export default function WeatherCardRow(props) {
  const [weather, setWeather] = useState(null);

  if (weather === null) {
    const weatherCards = defaultWeatherCards.map(item => <WeatherCard key={item.day} stats={item} />);

    return weatherCards;
  } else {
    return <div>NOTHING TO SEE HERE</div>;
  }
}
