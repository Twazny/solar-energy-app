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

  removeSite(id: string): void {
    let idx = this.sites.findIndex(site => site.id === id)
    this.sites.splice(idx, 1)
  }

  private notify(): void {
    this.sitesSubject.next(this.sites)
  }
}


const initSites: Site[] = [
  {
    id: '1',
    name: 'Farma fotowoltaiczna w Cieszanowie',
    address: '37-611 Cieszanów',
    location: {
      latitude: 50.24019272401028,
      longitude: 23.126714134486967
    },
    photo: 'https://elubaczow.com/wp-content/uploads/2014/10/DSC_9285.jpg'
  },
  {
    id: '2',
    name: 'Dom Nowaków (ref: 1123456)',
    address: 'ul. Zbożowa 123 37-611 Cieszanów',
    location: {
      latitude: 50.247095,
      longitude: 23.135425
    },
    photo: 'https://newscenter.lbl.gov/wp-content/uploads/sites/2/2011/09/solar-panels.jpg'
  },

]