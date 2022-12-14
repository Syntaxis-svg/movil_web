import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturaAPTPage } from './asignatura-apt.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaAPTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturaAPTPageRoutingModule {}
