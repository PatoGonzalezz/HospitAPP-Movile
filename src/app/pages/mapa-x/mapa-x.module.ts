import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaXPageRoutingModule } from './mapa-x-routing.module';

import { MapaXPage } from './mapa-x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaXPageRoutingModule
  ],
  declarations: [MapaXPage]
})
export class MapaXPageModule {}
