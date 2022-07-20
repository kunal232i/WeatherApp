const cityInput = document.getElementById("city-input");
const search = document.getElementById("search");
const city = document.getElementById("city-name");
const weatherType = document.getElementById("weather-type");
const temp = document.getElementById("temp");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");

getWeatherData = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "876dc1017fmshc94c67230b769f0p1ee9a6jsne3aff138d32f",
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };
  const URL = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`;
  fetch(URL, options)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

getWeatherData(cityInput.value);
/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
// const searchCity = () => {
//   city.value;
// };

// /**
//  * Show the weather data in HTML
//  * HINT: make sure to console log the weatherData to see how the data looks like
//  */
// const showWeatherData = (weatherData) => {};
