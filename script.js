const cityInput = document.getElementById("city-input");
const weatherType = document.getElementById("weather-type");
const temp = document.getElementById("temp");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");

const getWeatherData = (city) => {
  console.log(city);
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
    .then((data) => {
      const weatherData = data;
      showWeatherData(weatherData);
    })
    .catch((err) => console.error(err));
};

const searchCity = () => {
  const city = document.getElementById("city-name");
  getWeatherData(cityInput.value);
  city.innerHTML = `<h2>${cityInput.value}</h2>`;
};

const showWeatherData = (weatherData) => {
  weatherType.innerHTML = `<h2>${weatherData.weather[0].main}</h2>`;
  const Temp = fToC(weatherData.main.temp);
  temp.innerHTML = `<h3>${Temp}</h3>`;

  const min = fToC(weatherData.main.temp_min);
  minTemp.innerHTML = `<h4>${min}</h4>`;

  const max = fToC(weatherData.main.temp_max);
  maxTemp.innerHTML = `<h4>${max}</h4>`;
};

const fToC = (fTemp) => Math.floor(((fTemp - 32) * 5) / 9);
