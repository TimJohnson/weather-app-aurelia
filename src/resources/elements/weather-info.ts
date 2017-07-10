import {bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

let client = new HttpClient();
let apiKey = 'b7c5d6dbee3c70c65bd8aa79f3504aef';

export class WeatherInfoCustomElement {

  constructor(
    public city: string,
    public temperature: string,
    public isSearching: boolean) { }

  getUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getWeather() {
    this.isSearching = true;
    this.getUserLocation()
    .then(position => client.fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${(position as any).coords.latitude}&lon=${(position as any).coords.longitude}&APPID=${apiKey}&units=imperial`))
    .then(response => response.json())
    .then(data => {
      this.isSearching = false;
      this.city = data.name;
      this.temperature = `${data.main.temp}°F`;
    });
  }
}
