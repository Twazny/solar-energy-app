import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet'
import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'app-site-map-selection',
  templateUrl: './site-map-selection.component.html',
  styleUrls: ['./site-map-selection.component.scss']
})
export class SiteMapSelectionComponent implements OnInit {
  @Input('coordinates') input = { lat: 0, lng: 0 }
  @Output() coordinatesSelected = new EventEmitter<L.LatLng>()

  private readonly opsmURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  private readonly attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

  private map: L.Map
  center: L.LatLng

  constructor() { }

  ngOnInit(): void {
    this.initMap()
  }

  private initMap(): void {
    this.map = L.map('map-selection', {
      center: [
        this.input.lat || 0,
        this.input.lng || 0,
      ],
      zoom: 8
    })

    this.center = this.map.getCenter()
    const tiles = L.tileLayer(this.opsmURL, {
      maxZoom: 19,
      attribution: this.attribution
    });
    tiles.addTo(this.map);

    fromEvent(this.map, 'move').pipe(
      throttle(() => interval(50), { trailing: true })
    ).subscribe(() => {
      this.onMove()
    })
  }

  onMove = (): void => {
    const center = this.map.getCenter()
    center.lat = +center.lat.toFixed(6)
    center.lng = +center.lng.toFixed(6)
    this.center = center
  }

  onCoordinatesSelect(): void {
    this.coordinatesSelected.emit(this.center)
  }

}
