import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../environments/environment'
import { BehaviorSubject, Subscription } from 'rxjs'
import { Site } from './sites/sites.service'



export interface WeatherResponse {
    lat: string;
    lon: string;
    temp: TempResponse;
    cloud_cover: CloudCoverResponse;
    observation_time: ObservationTime;
    sunset: SunsetResponse;
    sunrise: SunriseResponse;
}

interface TempResponse {
    value: number;
    units: string;
}

interface CloudCoverResponse {
    value: number;
    units: string;
}

interface ObservationTime {
    value: string
}

interface SunsetResponse {
    value: string
}

interface SunriseResponse {
    value: string
}


@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private readonly url = 'https://api.climacell.co/v3/weather/realtime'
    locationSubs: Subscription
    weather = new BehaviorSubject<WeatherResponse>(null)

    constructor(
        private http: HttpClient
    ) { }

    fetchWeatherForSite(site: Site) {
        return this.http.get<WeatherResponse>(
            this.url,
            {
                params: new HttpParams({
                    fromObject: {
                        apikey: environment.climacellAPIKey,
                        lat: site.location.latitude.toString(),
                        lon: site.location.longitude.toString(),
                        unit_system: 'si',
                        fields: 'temp,cloud_cover,sunset,sunrise,visibility',
                    }
                })
            }
        )
    }

}