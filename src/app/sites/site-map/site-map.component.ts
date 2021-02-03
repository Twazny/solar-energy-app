import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import "leaflet/dist/images/marker-icon-2x.png";

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.scss']
})
export class SiteMapComponent implements OnInit {
  private map;

  constructor() { }

  ngOnInit(): void {
    this.initMap()
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [49.83, 19.60],
      zoom: 12
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    const marker = L.marker([49.83, 19.60], {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }).addTo(this.map);
  }

}
