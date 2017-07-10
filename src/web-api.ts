import {HttpClient} from 'aurelia-fetch-client';

let client = new HttpClient();
let apiKey = 'b7c5d6dbee3c70c65bd8aa79f3504aef';

export class WebAPI {

  getWeatherWithCoords(position) {
    return client.fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${(position as any).coords.latitude}&lon=${(position as any).coords.longitude}&APPID=${apiKey}&units=imperial`)
      .then(response => response.json());
  }  
}
