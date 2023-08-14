# Weather App (TypeScript Version)

This is a simple Weather App that allows you to search for weather data of a specific city. It fetches the weather data from the [OpenWeather API](https://openweathermap.org/api).

## How to Use

1. Enter the name of the city you want to search for in the input field.
2. Click on the "Search" button to fetch the weather data for the entered city.
3. The app will display the city name, weather type, temperature, minimum temperature, and maximum temperature.

## Technologies Used

- HTML
- CSS (Bootstrap 4.3.1)
- TypeScript

## Code Files

### `index.html`

This HTML file contains the structure of the Weather App user interface. It has a search input field, a search button, and a card to display the weather data.

### `styles.css`

The CSS file is used to style the Weather App. It imports the Bootstrap 4.3.1 CSS for additional styling.

### `script.ts`

The TypeScript file contains the functionality to fetch weather data from the OpenWeather API and display it on the app. It uses the `fetch` API to make the HTTP request to the API and manipulates the DOM to show the weather data.

## API Key

Please note that the Weather App uses an API key to access the OpenWeather API. The API key is stored directly in the TypeScript code. For production use, it's recommended to handle API keys securely on the server-side.

## Live Demo

You can try out the Weather App [here](https://climatecaster.netlify.app/).

## Credits

- [OpenWeather API](https://openweathermap.org/api) - The Weather App fetches weather data from this API.

Feel free to explore the code and customize the app according to your needs. Happy weather forecasting! 🌦️🌧️🌤️🌞
