import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService, WeatherResponse } from '../weather.service'

@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.scss']
})
export class CurrentweatherComponent implements OnInit {

  weatherSubs: Subscription
  weather: WeatherResponse
  // wjson: string

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    // this.weatherSubs = this.weatherService.weather.subscribe(weather => {
    //   this.wjson = JSON.stringify(weather)
    // })
    this.weatherService.fetchCurrentWeather().then(obs => {
      this.weatherSubs = obs.subscribe(weather => {
        return this.weather = weather
      })
    })
  }

}
