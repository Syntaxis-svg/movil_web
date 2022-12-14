import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturaCADPage } from './asignatura-cad.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaCADPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturaCADPageRoutingModule {}
