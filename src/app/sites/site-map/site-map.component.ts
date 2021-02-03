import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet'
import "leaflet/dist/images/marker-icon-2x.png";
import { Subscription } from 'rxjs';
import { Site, SitesService } from '../sites.service';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.scss']
})
export class SiteMapComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly opsmURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  private readonly attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  
  private siteSubs: Subscription
  private map: L.Map

  constructor(
    private siteService: SitesService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.siteSubs = this.siteService.getSites().subscribe(sites => {
      this.initMap(sites)
    })
  }

  ngOnDestroy(): void {
    this.siteSubs.unsubscribe()
  }

  private initMap(sites: Site[]): void {
    this.map = L.map('map', {
      center: [0, 0],
      zoom: 12
    });
    const tiles = L.tileLayer(this.opsmURL, {
      maxZoom: 19,
      attribution: this.attribution
    });
    tiles.addTo(this.map);
    
    if (sites.length === 0) {
      return
    }
    const markers = []
    for (const site of sites) {
      const { latitude, longitude } = site.location
      markers.push(L.marker([latitude, longitude], {
        id: site.id,
        ...this.getMarkerOptions()
      } as L.MarkerOptions));
    }
    const group = L.featureGroup(markers)
      .on('click', this.onMarkerClick)
      .addTo(this.map)
    this.map.fitBounds(group.getBounds())
  }

  onMarkerClick = (event: L.LeafletMouseEvent): void => {
    const targetMarker = event.sourceTarget as L.Marker
    // console.log(targetMarker.options['id'])
  }

  private getMarkerOptions(): L.MarkerOptions {
    return {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }
  }
}
