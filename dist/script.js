"use strict";
const cityInput = document.getElementById("city-input");
const weatherType = document.getElementById("weather-type");
const temp = document.getElementById("temp");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");
const API_KEY = "d66980c53124c1090a8e5a3ee07d1035";
const getWeatherData = (city) => {
    console.log(city);
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
        showWeatherData(data);
    })
        .catch((err) => console.error(err));
};
const searchCity = () => {
    const cityNameElement = document.getElementById("city-name");
    getWeatherData(cityInput.value);
    cityNameElement.innerHTML = `<h2>${cityInput.value}</h2>`;
};
const showWeatherData = (weatherData) => {
    if (weatherData.weather.length > 0) {
        weatherType.innerHTML = `<h2>${weatherData.weather[0].main}</h2>`;
    }
    const tempCelsius = weatherData.main.temp - 273.15;
    temp.innerHTML = `<h3>${tempCelsius.toFixed(1)}°C</h3>`;
    const minCelsius = weatherData.main.temp_min - 273.15;
    minTemp.innerHTML = `<h4>${minCelsius.toFixed(1)}°C</h4>`;
    const maxCelsius = weatherData.main.temp_max - 273.15;
    maxTemp.innerHTML = `<h4>${maxCelsius.toFixed(1)}°C</h4>`;
};
