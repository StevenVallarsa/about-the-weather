import React, { useState, useEffect } from "react";
import { theweather } from "../apikeys";

export default function Input(props) {
  const [city, setCity] = useState("");
  const [local, setLocal] = useState(true);
  const [latLong, setLatLong] = useState({ lat: 0, long: 0 });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocal(false);
    } else {
      navigator.geolocation.getCurrentPosition(setPosition);
    }
  }, []);

  const setPosition = position => {
    setLatLong({ lat: position.coords.latitude, long: position.coords.longitude });
  };

  const myLocation = e => {
    e.preventDefault();
    props.setLocation({ lat: latLong.lat, long: latLong.long });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (city.trim() !== "") {
      findCityLatLong(city);
    }
  };

  async function findCityLatLong(city) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${theweather}`);
    if (!response.ok) {
      props.setError("Oops. I can't find your city. Sorry.");
    } else {
      const data = await response.json();
      if (!data.length) {
        props.setError("Oops. I can't find your city. Sorry.");
      } else {
        console.log(data[0].lat, data[0].lon);
        setLatLong({ lat: data[0].lat, long: data[0].lon });
      }
    }
  }

  return (
    <form action="">
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Center of the Universe" />
      <button onClick={handleSubmit}>Weather There</button>
      <span style={{ display: local ? "inline" : "none" }}>OR</span>
      <button style={{ display: local ? "inline" : "none" }} className="my-weather" onClick={myLocation}>
        Weather Here
      </button>
    </form>
  );
}
