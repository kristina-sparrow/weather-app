const displayHandler = (() => {
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
    resetSearch();
  }

  function resetSearch() {
    const form = document.querySelector("form");
    form.reset();
  }

  return { displayWeather };
})();

export default displayHandler;
