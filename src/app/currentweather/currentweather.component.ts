import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService, CurrentWeatherResponse } from '../weather.service'

@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.scss']
})
export class CurrentweatherComponent implements OnInit {

  weatherSubs: Subscription
  weather: CurrentWeatherResponse
  // wjson: string

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    // this.weatherSubs = this.weatherService.weather.subscribe(weather => {
    //   this.wjson = JSON.stringify(weather)
    // })
    this.weatherSubs = this.weatherService.fetchCurrentWeather().subscribe(weather => {
      this.weather = weather
    })
  }

}
