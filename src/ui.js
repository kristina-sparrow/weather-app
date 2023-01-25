import weather from "./weather";

const ui = (() => {
  function loadHomepage() {
    weather.getWeatherData(Denver);
  }

  function fetchWeather() {
    const input = document.querySelector("input");
    const location = input.value;
    weather.getWeatherData(location);
  }

  function displayWeather(data) {
    document.querySelector(".condition").textContent = data.condition;
    document.querySelector(".location").textContent = data.location;
    document.querySelector(".degrees").textContent = data.currentTemp;
    document.querySelector(
      ".feels"
    ).textContent = `Feels like: ${data.feelsLike}`;
    document.querySelector(".wind").textContent = `Wind: ${data.wind} mph`;
    document.querySelector(
      ".humidity"
    ).textContent = `Humidity: ${data.humidity}`;
  }

  function resetSearch() {
    const form = document.querySelector("form");
    form.reset();
  }
  return { loadHomepage, fetchWeather, displayWeather, resetSearch };
})();

export default ui;