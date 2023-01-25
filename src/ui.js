import weather from "./weather";
import geocode from "./geocode";

const ui = (() => {
  function loadHomepage() {
    const form = document.querySelector("form");
    const submitBtn = document.querySelector(".button-submit");
    form.addEventListener("submit", handleSubmit);
    submitBtn.addEventListener("click", handleSubmit);
    weather.getWeatherData(Denver);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchWeather();
  }

  function fetchWeather() {
    const input = document.querySelector("input");
    const location = input.value;
    const coordinates = geocode.getCoordinates(location);
    weather.getWeatherData(coordinates);
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
  return { loadHomepage, displayWeather, resetSearch };
})();

export default ui;
