import errorHandler from "./errorHandler";

const geocode = (() => {
  async function getCoordinates(location) {
    const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=80c1fe39bd8bfceea795667cbdc7652e`;
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) {
        errorHandler.toggleErrorMsg();
        throw new Error(`Location ${location} not found`);
      }
      const coordinates = processData(await response.json());
      return coordinates;
    } catch (error) {
      return null;
    }
  }

  function processData(data) {
    const { lat } = data[0];
    const { lon } = data[0];
    const result = `lat=${lat}&lon=${lon}`;
    return result;
  }
  return { getCoordinates };
})();

export default geocode;
