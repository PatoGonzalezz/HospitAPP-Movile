import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss'],
})
export class GpsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = new mapboxgl.Map({
      container: 'map-container', // container ID
      style: 'mapbox://styles/pat1hno/clpa54zns003501p6008q57rj', // style URL
      center: [-71.533143, -33.033704], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        // Para sacar la ubicación del teléfono.
        trackUserLocation: true,
        // Orientación del teléfono (true activada.)
        showUserHeading: true
      })
    );
    //Zoom y control de orientación
    map.addControl(new mapboxgl.NavigationControl());

    
      
  }

}
