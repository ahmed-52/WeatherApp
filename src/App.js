// App.js
import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search'; 
import WeatherDisplay from './WeatherDisplay'; 
import './style.css'

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');


  const fetchWeatherData = async () => {
      const apiKey = 'cbf6e841d37e46e4a3ced38a02332ff5'; // Replace with your actual API key
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`; // Change 'metric' to 'imperial' for Fahrenheit
    
      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching the weather data', error);
        // You can add more detailed error logging here if needed
      }
    };

  return (
    <div className='app-container'>
      <Search
        city={city}
        onCityChange={setCity}
        onSearchSubmit={fetchWeatherData}
      />
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default App;
