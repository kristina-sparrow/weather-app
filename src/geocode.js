import ui from "./ui";

const geocode = (() => {
  async function getCoordinates(location) {
    const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=80c1fe39bd8bfceea795667cbdc7652e`;
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) {
        ui.toggleErrorMsg();
        throw new Error(`Location ${location} not found`);
      }
      const coordinates = processData(await response.json());
      return coordinates;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  function processData(data) {
    const lat = data[0].lat;
    const lon = data[0].lon;
    const result = `lat=${lat}&lon=${lon}`;
    return result;
  }
  return { getCoordinates };
})();

export default geocode;
