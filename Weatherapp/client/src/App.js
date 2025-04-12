import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';
import videobg from './anime-train-at-sunset.1920x1080.mp4'
import './index.css'


function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}?city=${city}`);
      setWeather(response.data);
    } catch (err) {
      console.error("Error fetching weather data:", err); 
      setError(err.response?.data?.message || 'Error fetching data');
      setWeather(null);
    }
    
    setLoading(false);
  };

  return (
    
    <div className="App">
  <video src={videobg} autoPlay loop muted />
  <div className="content">
   <div className="overlay-box">
    <h1 className="heading">Weather Dashboard</h1>
    <SearchBar onSearch={fetchWeather} />
    </div>
    
  {loading && <p>Loading...</p>}
  {error && <p style={{ color: 'red' }}>{error}</p>}
  <WeatherCard weather={weather} />
  </div>
</div>
  );
}

export default App;
