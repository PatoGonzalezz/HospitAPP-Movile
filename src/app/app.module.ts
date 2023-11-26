import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { ServicerestService } from './services/servicerest.service';
// === Firebase ===
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
// === Email ===

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig)], 
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  ServicerestService],
  bootstrap: [AppComponent],
})
export class AppModule {}