import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'


export interface Site {
    id: string;
    name?: string;
    address: string;
    location: {
        latitude: number;
        longitude: number;
    }
}

@Injectable({
    providedIn: 'root'
})
export class SitesService {
    sites = initSites
    sitesSubject = new BehaviorSubject<Site[]>(this.sites)

    getSites(): Observable<Site[]> {
      return this.sitesSubject
    }

    addSite(site: Site): void {
      this.sites.push(site)
      this.notify()
    }

    private notify(): void {
      this.sitesSubject.next(this.sites)
    }
}


const initSites: Site[] = [
    {
      id: 'fsdgdsg',
      name: 'Production C',
      address: 'Baker str 1/34 London',
      location: {
        latitude: 50.40,
        longitude: 20.35
      }
    },
    {
      id: 'fsdgdsg',
      name: 'Production C',
      address: 'Baker str 1/34 London',
      location: {
        latitude: 50.40,
        longitude: 20.35
      }
    },
    {
      id: 'fsdgdsg',
      name: 'Production C',
      address: 'Baker str 1/34 London',
      location: {
        latitude: 50.40,
        longitude: 20.35
      }
    },
    {
      id: 'fsdgdsg',
      name: 'Production C',
      address: 'Baker str 1/34 London',
      location: {
        latitude: 50.40,
        longitude: 20.35
      }
    },
    {
      id: 'fsdgdsg',
      name: 'Production C',
      address: 'Baker str 1/34 London',
      location: {
        latitude: 50.40,
        longitude: 20.35
      }
    },
    {
      id: 'fsdgdsg',
      name: 'Production C',
      address: 'Baker str 1/34 London',
      location: {
        latitude: 50.40,
        longitude: 20.35
      }
    },
    {
      id: 'fsdgdsg',
      name: 'Production C',
      address: 'Baker str 1/34 London',
      location: {
        latitude: 50.40,
        longitude: 20.35
      }
    },
    {
      id: 'fsdgdsg',
      name: 'Production C',
      address: 'Baker str 1/34 London',
      location: {
        latitude: 50.40,
        longitude: 20.35
      }
    },
    {
      id: 'fsdgdsg',
      name: 'Production C',
      address: 'Baker str 1/34 London',
      location: {
        latitude: 50.40,
        longitude: 20.35
      }
    },
    {
      id: 'fsdgdsg',
      name: 'Production C',
      address: 'Baker str 1/34 London',
      location: {
        latitude: 50.40,
        longitude: 20.35
      }
    }
  ]