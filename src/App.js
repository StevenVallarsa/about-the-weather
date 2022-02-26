import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import WeatherCardRow from "./components/WeatherCardRow";
import { theweather } from "./apikeys";
import { defaultWeatherCards } from "./defaultWeatherCards";

function App() {
  const [location, setLocation] = useState({ lat: 43.6532, long: -79.3832 });
  const [city, setCity] = useState("Toronto");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(defaultWeatherCards);

  useEffect(() => {
    setError("");
    getCityWeather();
  }, [location]);

  async function getCityWeather() {
    const weatherCardsData = [];

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lat}&exclude=minutely,hourly,alerts&appid=${theweather}`
    );
    if (!response.ok) {
      setError("Oops. Something went wrong. Sorry.");
    } else {
      const data = await response.json();
      if (Object.keys(data).length === 0) {
        setError("Oops. Something went wrong. Sorry.");
      } else {
        const daily = data.daily;
        for (let i = 0; i < 5; i++) {
          weatherCardsData.push({
            day: daily[i].dt,
            icon: daily[i].weather[0].icon,
            desc: daily[i].weather[0].main,
            temp: Math.round(daily[i].temp.max - 273),
          });
        }
      }
    }

    setWeather(weatherCardsData);
  }

  return (
    <>
      <div className="container">
        <h1>Just Thinking About the Weather</h1>
        <Input setLocation={setLocation} setError={setError} />
        <div className="weatherContainer">
          <WeatherCardRow displayWeather={weather} />
        </div>
        <div className="error">{error}</div>
        <div></div>
      </div>
    </>
  );
}

export default App;
