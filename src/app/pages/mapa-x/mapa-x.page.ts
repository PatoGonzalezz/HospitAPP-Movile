import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { Geolocation } from '@capacitor/geolocation';

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

  // async getCurrentLocation(){
  //   try{
  //     const permissionStatus = await Geolocation.checkPermissions();
  //     console.log('Estado del permiso: ', permissionStatus.location);
  //     if (permissionStatus?.location != 'granted'){
  //       const requestStatus =  await  Geolocation.requestPermissions();
  //       if(requestStatus.location != 'granted'){
  //         // ir a las configuraciones de la ubicación
  //         return;
  //       }
  //     }
  //     let options: PositionOptions = {
  //       maximumAge: 3000,
  //       timeout: 10000,
  //       enableHighAccuracy: true
  //     };
  //     const position =  await Geolocation.getCurrentPosition(options)
  //     console.log(position)
  //   }catch(e){
  //     console.log(e);
  //   }
  // }
}
