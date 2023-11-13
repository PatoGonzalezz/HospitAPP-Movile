import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { GpsComponent } from 'src/app/components/gps/gps.component';
import { UsuarioComponent } from 'src/app/components/usuario/usuario.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, InicioComponent, GpsComponent, UsuarioComponent]
})
export class HomePageModule {}
