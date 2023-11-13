import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { UsuarioComponent } from 'src/app/components/usuario/usuario.component';
import { GpsComponent } from 'src/app/components/gps/gps.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
      path:'inicio',
      component: InicioComponent
      },
      {
        path: 'usuario',
        component: UsuarioComponent
      },
      {
        path:'gps',
        component: GpsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
