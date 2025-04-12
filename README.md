# Real-Time Weather Dashboard

A full-stack MERN application that displays real-time weather information for any city using the OpenWeatherMap API made by Arman Ahmed.

my github - https://github.com/Arman11r


## Features

- Search for weather by city name
- Display current weather conditions (temperature, humidity, wind speed, etc.)
- Toggle between Celsius and Fahrenheit
- Dark/Light mode toggle
- Search history using localStorage
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **API**: OpenWeatherMap API

## Project Structure

\`\`\`
weather-dashboard/
├── client/               # React Frontend
│   ├── src/
│   │   ├── components/   # WeatherCard, SearchBar, etc.
│   │   ├── App.jsx
│   │   └── index.jsx
│   └── package.json
├── server/               # Node.js Backend
│   ├── routes/
│   │   └── weather.js    # /weather endpoint logic
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
\`\`\`

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (get one at https://openweathermap.org/appid)

### Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   \`\`\`

2. Install backend dependencies:
   \`\`\`
   cd server
   npm install
   \`\`\`

3. Create a `.env` file in the server directory:
   \`\`\`
   OPENWEATHER_API_KEY=your_api_key_here
   PORT=5000
   \`\`\`

4. Install frontend dependencies:
   \`\`\`
   cd ../client
   npm install
   \`\`\`

### Running the Application

1. Start the backend server:
   \`\`\`
   cd server
   node server.js
   \`\`\`

2. In a new terminal, start the frontend development server:
   \`\`\`
   cd client
   npm start
   \`\`\`

3. Open your browser and navigate to `http://localhost:3000`

## Deployment

### Backend Deployment (Render/Heroku)

1. Create a new app on Render or Heroku
2. Connect your GitHub repository
3. Add environment variables (OPENWEATHER_API_KEY)
4. Deploy the application

### Frontend Deployment (Vercel/Netlify)

1. Create a new project on Vercel or Netlify
2. Connect your GitHub repository
3. Set the build command to `cd client && npm install && npm run build`
4. Set the publish directory to `client/build`
5. Add environment variable for the backend API URL


