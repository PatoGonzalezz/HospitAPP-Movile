import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { Geolocation } from '@capacitor/geolocation';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';



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
      style: 'mapbox://styles/pat1hno/clpa54zns003501p6008q57rj', // style URL
      center: [-71.533143,-33.033704], // starting position [lng, lat]
      zoom: 14, // starting zoom
      });
      map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );

            //Función para popups a los Markers.

      map.on('click', (event) => {
        // If the user clicked on one of your markers, get its information.
        const features = map.queryRenderedFeatures(event.point, {
          layers: ['hospitales'] // replace with your layer name
        });
        if (!features.length) {
          return;
        }
        const feature = features[0];
  
        // const popup = new mapboxgl.Popup({ offset: [0, -15] })
        //   .setLngLat(feature.geometry.coordinates)
        //   .setHTML(
        //     `<h3>${feature.properties.Nombre}</h3>`
        //   )
        //   .addTo(map);
        
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
    //pedir la autorización ANDROID.

    async getCurrentLocation(){
      try{
        const permissionStatus = await Geolocation.checkPermissions();
        console.log('Estado del permiso: ', permissionStatus.location);
        if (permissionStatus?.location != 'granted'){
          const requestStatus =  await  Geolocation.requestPermissions();
          if(requestStatus.location != 'granted'){
            // ir a las configuraciones de la ubicación
            return;
          }
        }
        let options: PositionOptions = {
          maximumAge: 3000,
          timeout: 10000,
          enableHighAccuracy: true
        };
        const position =  await Geolocation.getCurrentPosition(options)
        console.log(position)
      }catch(e){
        console.log(e);
      }
    }

}
