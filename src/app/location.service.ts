import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'


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
    private locationSubject: BehaviorSubject<GeolocationPosition>

    getCurrentLocation(): Promise<BehaviorSubject<GeolocationPosition>> {
        return new Promise((resolve, reject) => {
            if (this.locationSubject) {
                resolve(this.locationSubject)
                return
            }
            navigator.geolocation.watchPosition(
                (position) => {
                    if (this.locationSubject) {
                        this.locationSubject.next(position)
                    } else {
                        this.locationSubject = new BehaviorSubject(position)
                        resolve(this.locationSubject)
                    }
                },
                (error) => {
                    if (this.locationSubject) {
                        this.locationSubject.error(error)
                    } else {
                        reject(error)
                    }
                }
            )
        })
    }
}