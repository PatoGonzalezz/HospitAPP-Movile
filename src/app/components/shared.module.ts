import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginCustomComponent } from './login-custom/login-custom.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { GpsComponent } from './gps/gps.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    LoginCustomComponent,
    UsuarioComponent,
    GpsComponent,
    InicioComponent
  ],
  exports:[
    LoginCustomComponent,
    UsuarioComponent,
    GpsComponent,
    InicioComponent,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    IonicModule, 
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }