const cityInput = document.getElementById("city-input") as HTMLInputElement;
const weatherType = document.getElementById("weather-type") as HTMLElement;
const temp = document.getElementById("temp") as HTMLElement;
const minTemp = document.getElementById("min-temp") as HTMLElement;
const maxTemp = document.getElementById("max-temp") as HTMLElement;

const API_KEY: string = "d66980c53124c1090a8e5a3ee07d1035";

const getWeatherData = (city: string): void => {
  console.log(city);
  const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data: any) => {
      showWeatherData(data);
    })
    .catch((err: any) => console.error(err));
};

const searchCity = (): void => {
  const cityNameElement = document.getElementById("city-name") as HTMLElement;
  getWeatherData(cityInput.value);
  cityNameElement.innerHTML = `<h2>${cityInput.value}</h2>`;
};

interface WeatherData {
  weather: { main: string }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}

const showWeatherData = (weatherData: WeatherData): void => {
  if (weatherData.weather.length > 0) {
    weatherType.innerHTML = `<h2>${weatherData.weather[0].main}</h2>`;
  }

  const Temp = fToC(weatherData.main.temp);
  temp.innerHTML = `<h3>${Temp}</h3>`;

  const min = fToC(weatherData.main.temp_min);
  minTemp.innerHTML = `<h4>${min}</h4>`;

  const max = fToC(weatherData.main.temp_max);
  maxTemp.innerHTML = `<h4>${max}</h4>`;
};

const fToC = (fTemp: number): number => Math.floor(((fTemp - 32) * 5) / 9);
