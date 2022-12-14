import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAsistenciaPage } from './list-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: ListAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAsistenciaPageRoutingModule {}
