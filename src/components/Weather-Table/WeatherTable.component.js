import React from 'react';
import './weathertable.style.scss';

const WeatherTable = ({ data }) => {
  const { city, temperature, windspeed } = data;
  return (
    <div className="weather-display">
      <h2>{city}</h2>
      <div className="temperature">{temperature}&deg;C</div>
      <div className="condition">{windspeed}</div>
    </div>
  );
};

export default WeatherTable;
