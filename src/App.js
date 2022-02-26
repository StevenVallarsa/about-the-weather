import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [location, setLocation] = useState("");
  return (
    <>
      <div className="container">
        <h1>Just Thinking About the Weather</h1>
        <Input />
        <div className="weatherContainer">
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      </div>
    </>
  );
}

export default App;
