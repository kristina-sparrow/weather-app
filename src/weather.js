import ui from "./ui";

const weather = (() => {
  async function getWeatherData(location) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=80c1fe39bd8bfceea795667cbdc7652e`;
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) throwErrorMsg();
      const data = await response.json();
      const weatherData = processData(data);
      ui.displayWeather(weatherData);
      ui.resetSearch();
    } catch (error) {
      alert(error);
      return null;
    }
  }

  function processData(data) {
    const myData = {
      condition: data.weather.description,
      currentTemp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed),
      location: data.name,
    };
    return myData;
  }

  return { getWeatherData };
})();

export default weather;
