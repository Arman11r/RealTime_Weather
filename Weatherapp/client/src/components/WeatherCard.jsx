import React from 'react';

const getTemperatureColor = (temp) => {
    if (temp <= 10) return 'temp-cold';
    if (temp <= 25) return 'temp-mild';
    return 'temp-hot';
  };

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="card weather-card">
    <div className="card">
      <h2 className={getTemperatureColor(weather.temperature)}>Temperature: {weather.temperature}°C</h2>
      <p>{weather.condition}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.condition}
      />
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
    </div>
  );
};

export default WeatherCard;
