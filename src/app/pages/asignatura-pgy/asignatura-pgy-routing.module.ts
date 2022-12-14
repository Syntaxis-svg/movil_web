import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturaPGYPage } from './asignatura-pgy.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaPGYPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturaPGYPageRoutingModule {}
