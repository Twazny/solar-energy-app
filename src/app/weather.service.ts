import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../environments/environment.prod'
import { BehaviorSubject, Observable, Subscription } from 'rxjs'
import { switchMap} from 'rxjs/operators'



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

interface GeolocationCoordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}

interface GeolocationPosition {
    readonly coords: GeolocationCoordinates;
    readonly timestamp: number;
}


@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private readonly url = 'https://api.climacell.co/v3/weather/realtime'
    locationSubs: Subscription
    // location: GeolocationCoordinates
    location
    weather = new BehaviorSubject<CurrentWeatherResponse>(null)

    constructor(private http: HttpClient) {
        // this.locationSubs = this.getCurrentLocation().subscribe((position)=> {
        //     this.location = position.coords
        //     // this.fetchCurrentWeather()
        // })
    }

    private getCurrentLocation(): Observable<GeolocationPosition> {
        return new Observable(obs => {
            navigator.geolocation.watchPosition(
                (position) => {
                    obs.next(position)
                },
                (error) => {
                    obs.error(error)
                }
            )
        })
    }

    fetchCurrentWeather() {
        return this.getCurrentLocation().pipe(
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