import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss'],
})
export class GpsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = new mapboxgl.Map({
      container: 'map-container', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-71.533143,-33.033704], // starting position [lng, lat]
      zoom: 14, // starting zoom
      });
  }

}
