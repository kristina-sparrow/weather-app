import weather from "./weather";
import geocode from "./geocode";
import errorHandler from "./errorHandler";

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
    errorHandler.checkErrorMsg();
    fetchWeather();
  }

  async function fetchWeather() {
    const location = document.querySelector("input").value;
    if (!location) {
      errorHandler.toggleErrorMsg();
      return;
    }
    weather.getWeatherData(await geocode.getCoordinates(location));
  }

  return { loadHomepage };
})();

export default ui;
