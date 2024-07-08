import React from 'react';
import './styles/CurrentWeather.css';

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <section className="current-weather">
      <h2>{weatherData.location.name}</h2>
      <p className="condition">{weatherData.current.condition.text}</p>
      <p className="temperature">{weatherData.current.temp_c}°C</p>
      <div className="details">
        <p>Humidity: {weatherData.current.humidity}%</p>
        <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
        <p>{new Date(weatherData.location.localtime).toLocaleString()}</p>
      </div>
    </section>
  );
};

export default CurrentWeather;
