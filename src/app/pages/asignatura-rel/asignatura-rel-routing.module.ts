import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturaRELPage } from './asignatura-rel.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaRELPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturaRELPageRoutingModule {}
