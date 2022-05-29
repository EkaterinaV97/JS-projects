/* weather-cities.js */

export default class WeatherCities {
    /** @param {array[]} cities */
    constructor(cities) {
      this.cities = cities
    }
    getFirst() {
      return this.cities[0];
    }

    getLast() {
      return this.cities[this.cities.length - 1];
    }

    exportCsv() {
      let result = this.cities.map(function (city) {
        return `${city.location.name} ${city.current.temperature}`
    })
      return result.join(', ')
    }
  }
  