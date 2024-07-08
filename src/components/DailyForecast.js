import React from 'react';
import './styles/DailyForecast.css';

const DailyForecast = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <section className="daily-forecast">
      <h2>Daily Forecast</h2>
      <div className="daily-data">
        {forecast.forecastday.map((day, index) => (
          <div key={index} className="day">
            <p>{new Date(day.date).toLocaleDateString()}</p>
            <p className="condition">{day.day.condition.text}</p>
            <p className="temperature">{day.day.maxtemp_c}°C / {day.day.mintemp_c}°C</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyForecast;
