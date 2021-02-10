import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet'
import "leaflet/dist/images/marker-icon-2x.png";
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
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

  selectedId: string
  selectedMarker: L.Marker
  selectedSite: Site

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
    }).on('click', this.onMapClick)
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
        icon: this.getMarkerIcon('var(--primary-color)')
      } as L.MarkerOptions).bindTooltip(site.name, { permanent: true })
      );
    }
    const group = L.featureGroup(markers)
      .on('click', this.onMarkerClick)
      .addTo(this.map)
    this.map.fitBounds(group.getBounds())
  }

  onMarkerClick = (event: L.LeafletMouseEvent): void => {
    if (this.selectedMarker) {
      this.selectedMarker.setIcon(this.getMarkerIcon('var(--primary-color)'))
    }

    this.selectedMarker = event.sourceTarget as L.Marker
    this.selectedMarker.setIcon(this.getMarkerIcon('var(--secondary-color)'))

    this.map.flyTo(this.selectedMarker.getLatLng())

    this.selectedId = this.selectedMarker.options['id']
    this.siteService.getSites().pipe(take(1)).subscribe(sites => {
      this.selectedSite = sites.find(site => site.id === this.selectedId)
    })
  }

  onMapClick = (): void => {
    this.selectedId = undefined
    this.selectedSite = undefined
    if (this.selectedMarker) {
      this.selectedMarker.setIcon(this.getMarkerIcon('var(--primary-color)'))
      this.selectedMarker = undefined
    }
  }

  private getMarkerIcon(color: string): L.DivIcon {
    return new L.DivIcon({
      className: '', iconSize: [40, 40], iconAnchor: [20, 40],
      html: `<span style="color:${color}; font-size: 2.5rem;" class="material-icons">place</span>`
    })
  }
}
