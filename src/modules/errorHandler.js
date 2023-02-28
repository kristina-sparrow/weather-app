const errorHandler = (() => {
  function toggleErrorMsg() {
    const error = document.querySelector(".error-msg");
    error.style.display = error.style.display === "block" ? "none" : "block";
    error.classList.toggle("fade-in-short");
  }

  function checkErrorMsg() {
    const error = document.querySelector(".error-msg");
    if (error.style.display === "block") error.style.display = "none";
  }
  return { toggleErrorMsg, checkErrorMsg };
})();

export default errorHandler;
