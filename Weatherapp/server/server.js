const express = require('express');
const cors = require('cors');
require('dotenv').config();

const weatherRoute = require('./routes/weather');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/weather', weatherRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
