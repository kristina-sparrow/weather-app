import ui from "./ui";

const form = document.querySelector("form");
const submitBtn = document.querySelector(".button-submit");
form.addEventListener("submit", handleSubmit);
submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  ui.fetchWeather();
}

document.addEventListener("DOMContentLoaded", ui.loadHomepage);
