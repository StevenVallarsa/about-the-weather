import React, { useState } from "react";

export default function Input(props) {
  const [city, setCity] = useState("");
  const [local, setLocal] = useState(true);

  const myLocation = e => {
    e.preventDefault();
    if (navigator.geolocation) {
      console.log("HERE");
      navigator.geolocation.getCurrentPosition();
    }
  };

  return (
    <form action="weather">
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="eg: Toronto" />
      <button type="submit">Where To?</button>
      <button style={{ display: local ? "inline" : "none" }} className="my-weather" onClick={myLocation}>
        My Weather
      </button>
    </form>
  );
}
