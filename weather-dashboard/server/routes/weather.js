const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const apiKey = 'd5bb065f2070cf4b6ed9dc24bffdec1a'; 
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = response.data;
    const weatherData = {
      temperature: data.main.temp,
      condition: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };

    res.json(weatherData);
  } catch (err) {
    res.status(404).json({ error: 'City not found' });
  }
});

module.exports = router;
