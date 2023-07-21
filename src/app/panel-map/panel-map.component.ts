import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-panel-map',
  templateUrl: './panel-map.component.html',
  styleUrls: ['./panel-map.component.css'],
})
export class PanelMapComponent implements OnChanges {
  @Input() panelData: any;

  private map!: L.Map;
  private marker!: L.Marker;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['panelData'] && this.panelData) {
      this.updateMap();
    }
  }

  private updateMap(): void {
    if (!this.map) {
      this.initMap();
    }

    const latLng: L.LatLngExpression = [this.panelData.Lat, this.panelData.Lng];
    if (this.marker) {
      this.marker.remove();
    }

    this.marker = L.marker(latLng).addTo(this.map);

    // On marker click, display latitude and longitude in a popup
    this.marker.on('click', () => {
      this.marker.bindPopup(`Latitude: ${this.panelData.Lat}<br>Longitude: ${this.panelData.Lng}`);
      this.marker.openPopup();
    });

    this.map.setView(latLng, 13);
  }

  private initMap(): void {
    this.map = L.map('map').setView([0, 0], 1); // Center the map at the start

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }
}
