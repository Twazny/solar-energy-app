import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../environments/environment.prod'
import { BehaviorSubject, Observable, Subscription } from 'rxjs'
import { switchMap} from 'rxjs/operators'
import { LocationService } from './location.service'



export interface CurrentWeatherResponse {
    lat: string;
    lon: string;
    temp: TempResponse;
    cloud_cover: CloudCoverResponse;
    observation_time: ObservationTime
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


@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private readonly url = 'https://api.climacell.co/v3/weather/realtime'
    locationSubs: Subscription
    weather = new BehaviorSubject<CurrentWeatherResponse>(null)

    constructor(
        private locationService: LocationService,
        private http: HttpClient
    ) {}

    fetchCurrentWeather() {
        return this.locationService.getCurrentLocation().pipe(
            switchMap(loc => {
                console.log(loc)
                return this.http.get<CurrentWeatherResponse>(
                    this.url,
                    {
                        params: new HttpParams({fromObject: {
                            apikey: environment.climacellAPIKey,
                            lat: loc.coords.latitude.toString(),
                            lon: loc.coords.longitude.toString(),
                            unit_system: 'si',
                            fields: 'temp'
                        }})
                    }
                )
            })
        )
    }

}