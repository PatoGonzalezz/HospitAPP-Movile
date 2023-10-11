import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaXPage } from './mapa-x.page';

const routes: Routes = [
  {
    path: '',
    component: MapaXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaXPageRoutingModule {}
