import React from 'react';
import './styles/HourlyForecast.css';

const HourlyForecast = ({ forecast }) => {
  if (!forecast) return null;

  const hourlyData = forecast.forecastday[0].hour.filter((_, index) => index % 2 === 0);

  return (
    <section className="hourly-forecast">
      <h2>Hourly Forecast</h2>
      <div className="hourly-data">
        {hourlyData.map((hour, index) => (
          <div key={index} className="hour">
            <p>{new Date(hour.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p className="condition">{hour.condition.text}</p>
            <p className="temperature">{hour.temp_c}°C</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourlyForecast;
