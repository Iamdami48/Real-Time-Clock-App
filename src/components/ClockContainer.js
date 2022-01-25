import React, { useEffect, useState } from "react";
import { WatchContainer } from "./WatchContainer";
export function ClockContainer({ WatchContainerStyle, borderStyle }) {
  const [getSeconds, setGetSeconds] = useState(
    new Date().getSeconds().toString()
  );
  const [getMinutes, setGetMinutes] = useState(
    new Date().getMinutes().toString()
  );
  const [fullTimeAndDate, setFullTimeAndDate] = useState(
    new Date().toDateString()
  );
  const [getHours, setGetHours] = useState(new Date().getHours().toString());
  const [country, setCountry] = useState(null);
  useEffect(() => {
    setInterval(() => {
      setGetSeconds(new Date().getSeconds().toString());
      setGetMinutes(new Date().getMinutes().toString());
      setGetHours(new Date().getHours() % 12 || 12);
      setFullTimeAndDate(new Date().toDateString());
    }, 1000);
  }, []);
  useEffect(() => {
    fetch(
      "https://api.geoapify.com/v1/ipinfo?apiKey=2498584ccac948f69e36375009ed1a49",
      {
        method: "GET"
      }
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country.name));
  }, []);
  return (
    <div className="clock-container">
      <h1 className="logo">Dami Realtime Clock App</h1>
      <div className="phone-case">
        <WatchContainer
          WatchContainerStyle={WatchContainerStyle}
          borderStyle={borderStyle}
          getSeconds={getSeconds}
          getMinutes={getMinutes}
          getHours={getHours}
        />
        <div className="digital-time-container">
          <h1>
            {getHours}:{getMinutes}:{getSeconds}
          </h1>
          {!country && <p className="fetch">Fetching your country</p>}
          {country && <p className="country-Name">Nigeria</p>}
          <p>{fullTimeAndDate}</p>
        </div>
      </div>
    </div>
  );
}
