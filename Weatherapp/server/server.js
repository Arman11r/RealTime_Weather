const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const weatherRoute = require("./routes/weather");
app.use("/api/weather", weatherRoute);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
