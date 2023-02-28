import displayHandler from "./displayHandler";
import errorHandler from "./errorHandler";

const weather = (() => {
  async function getWeatherData(coordinates) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?${coordinates}&units=imperial&appid=80c1fe39bd8bfceea795667cbdc7652e`;
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) {
        errorHandler.toggleErrorMsg();
        throw new Error(`Location ${coordinates} not found`);
      }
      const weatherData = processData(await response.json());
      displayHandler.displayWeather(weatherData);
    } catch (error) {
      return null;
    }
  }

  function processData(data) {
    const myData = {
      condition: data.weather[0].description.toUpperCase(),
      currentTemp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed),
      location: data.name.toUpperCase(),
    };
    return myData;
  }

  return { getWeatherData };
})();

export default weather;
