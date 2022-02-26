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
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Center of the Universe" />
      <button type="submit">Weather There</button>
      <span style={{ display: local ? "inline" : "none" }}>OR</span>
      <button style={{ display: local ? "inline" : "none" }} className="my-weather" onClick={myLocation}>
        Weather Here
      </button>
    </form>
  );
}
