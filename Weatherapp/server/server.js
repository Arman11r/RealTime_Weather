const express = require('express');
const cors = require('cors');
require('dotenv').config();

const weatherRoute = require('./routes/weather');

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:3000","https://real-time-weather-ndwd.vercel.app/"],
  methods: ["GET", "POST"],
};

app.use(cors(corsOptions));
app.use('/weather', weatherRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
