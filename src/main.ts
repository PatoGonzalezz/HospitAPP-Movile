import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoicGF0MWhubyIsImEiOiJjbG5naWgyOXIwYnF2Mm1vOXhueWFtbXM4In0.zfLtRF__vmCcRycCOuJbPw';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


// if (navigator.geolocation){
//   alert('Navegador no soporta la Geolocation');
//   throw new Error ('Navegador no soporta la Geolocation');
// }
