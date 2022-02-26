import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import WeatherCardRow from "./components/WeatherCardRow";

function App() {
  const [location, setLocation] = useState({ lat: 43.6532, long: -79.3832 });
  const [city, setCity] = useState("Toronto");
  return (
    <>
      <div className="container">
        <h1>Just Thinking About the Weather</h1>
        <Input />
        <div className="weatherContainer">
          <WeatherCardRow />
        </div>
      </div>
    </>
  );
}

export default App;
