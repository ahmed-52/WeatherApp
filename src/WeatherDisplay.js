import React from 'react';
import windIcon from './images/wind.png'; 
import humidityIcon from './images/humidity.png'; 
import clearIcon from './images/clear.png'; 
import cloudsIcon from './images/clouds.png'; 
import drizzleIcon from './images/drizzle.png'; 
import mistIcon from './images/mist.png'; 
import rainIcon from './images/rain.png'; 
import snowIcon from './images/snow.png'; 
import defaultWeatherIcon from './images/default.png'; 


const weatherImages = {
  Clear: clearIcon,
  Clouds: cloudsIcon,
  Drizzle: drizzleIcon,
  Mist: mistIcon,
  Rain: rainIcon,
  Snow: snowIcon,

};


const getWeatherImage = (weatherCondition) => {
  return weatherImages[weatherCondition] || defaultWeatherIcon;
};


const WeatherDisplay = ({ data }) => {
  const weatherConditionImage = getWeatherImage(data.weather[0].main);

  return (
    <div className="weather-box">
      <h2>Weather in {data.name}</h2>
      <img src={weatherConditionImage} alt={data.weather[0].main} />
      <p className="temperature">Temperature: {data.main.temp}°C</p>
      <p className="details">
        <img src={humidityIcon} alt="Humidity" /> Humidity: {data.main.humidity}%
      </p>
      <p className="details">
        <img src={windIcon} alt="Wind" /> Wind Speed: {data.wind.speed} m/s
      </p>
    
    </div>
  );
};

export default WeatherDisplay;
