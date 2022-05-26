/* weather.js */

export default class Weather {
    /** @param {object} details */
    getLocation(data) {
        console.log(`${data.location.name}, ${data.location.country}`);
        return `${data.location.name}, ${data.location.country}`
    }

    getIcon() {
        return data.current.weather_icons
    }

    getTemperature() {

    }
   
  }