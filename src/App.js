import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import ErrorMessage from './components/ErrorMessage';
import './components/styles/App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=43a703a9bdc64900abb134127240707&q=${location}&days=7`);
      setWeatherData(response.data);
      setForecastData(response.data.forecast);
      setError('');
    } catch (error) {
      setError('Failed to fetch weather data. Please try again.');
    }
  };

  useEffect(() => {
    fetchWeatherData('Kharagpur'); // Hard-coded current location
  }, []);

  return (
    <div className="app">
      <Header onSearch={fetchWeatherData} />
      {error && <ErrorMessage message={error} onClose={() => setError('')} />}
      <CurrentWeather weatherData={weatherData} />
      <HourlyForecast forecast={forecastData} />
      <DailyForecast forecast={forecastData} />
    </div>
  );
};

export default App;
