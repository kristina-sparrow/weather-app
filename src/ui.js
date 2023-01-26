import weather from "./weather";
import geocode from "./geocode";

const ui = (() => {
  function loadHomepage() {
    const form = document.querySelector("form");
    const submitBtn = document.querySelector(".button-submit");
    form.addEventListener("submit", handleSubmit);
    submitBtn.addEventListener("click", handleSubmit);
    // load Denver first
    weather.getWeatherData("lat=39.742043&lon=-104.991531");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchWeather();
  }

  async function fetchWeather() {
    const location = document.querySelector("input").value;
    if (!location) {
      toggleErrorMsg();
      return;
    }
    weather.getWeatherData(await geocode.getCoordinates(location));
  }

  function displayWeather(data) {
    const weatherInfo = document.querySelectorAll(".info");
    Array.from(weatherInfo).forEach((div) => {
      div.classList.toggle("fade-in-long");
    });
    document.querySelector(".condition").textContent = data.condition;
    document.querySelector(".location").textContent = data.location;
    document.querySelector(".degrees").textContent = data.currentTemp;
    document.querySelector(
      ".feels"
    ).textContent = `FEELS LIKE: ${data.feelsLike}`;
    document.querySelector(".wind").textContent = `WIND: ${data.wind} MPH`;
    document.querySelector(
      ".humidity"
    ).textContent = `HUMIDITY: ${data.humidity}`;
  }

  function resetSearch() {
    const form = document.querySelector("form");
    form.reset();
  }

  function toggleErrorMsg() {
    const error = document.querySelector(".error-msg");
    error.style.display = error.style.display === "block" ? "none" : "block";
    element.classList.toggle("fade-in-short");
  }

  return { loadHomepage, displayWeather, resetSearch, toggleErrorMsg };
})();

export default ui;
