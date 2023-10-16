import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa-x',
  templateUrl: './mapa-x.page.html',
  styleUrls: ['./mapa-x.page.scss'],
})


export class MapaXPage implements OnInit {
  constructor() { 
  }

  ngOnInit() {
    const map = new mapboxgl.Map({
      container: 'map-container', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-71.533143,-33.033704], // starting position [lng, lat]
      zoom: 14, // starting zoom
      });

      
  }
}
