import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'


export interface GeolocationCoordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}

export interface GeolocationPosition {
    readonly coords: GeolocationCoordinates;
    readonly timestamp: number;
}


@Injectable({
    providedIn: 'root'
})
export class LocationService {
    getCurrentLocation(): Observable<GeolocationPosition> {
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
}