import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { v4 as uuidv4 } from 'uuid'

export interface Site {
  id: string;
  name?: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  }
  photo?: string;
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
    site.id = uuidv4()
    this.sites.push(site)
    this.notify()
  }

  updateSite(id: string, updatedSite: Site): void {
    let idx = this.sites.findIndex(site => site.id === id)
    this.sites[idx] = { ...this.sites[idx], ...updatedSite }
    this.notify()
  }

  private notify(): void {
    this.sitesSubject.next(this.sites)
  }
}


const initSites: Site[] = [
  {
    id: '1',
    name: 'Production C',
    address: 'Baker str 1/34 London',
    location: {
      latitude: 50.40,
      longitude: 20.35
    },
    photo: 'https://www.oferty-biznesowe.pl/media/thumbnail/company/10294039.jpg'
  }

]