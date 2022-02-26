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
    props.setLocation({ lat: latLong.lat, long: latLong.long });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!city.trim() === "") {
      findCityLatLong(city);
    }
  };

  async function findCityLatLong(city) {
    const response = await fetch(gitApi + user);
    if (!response.ok) {
      setSV({ name: "NO SUCH USER" });
    } else {
      const data = await response.json();
      setSV(data);
    }
  }

  return (
    <form action="weather">
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Center of the Universe" />
      <button type="submit" onClick={handleSubmit}>
        Weather There
      </button>
      <span style={{ display: local ? "inline" : "none" }}>OR</span>
      <button style={{ display: local ? "inline" : "none" }} className="my-weather" onClick={myLocation}>
        Weather Here
      </button>
    </form>
  );
}
