import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaCADPageRoutingModule } from './asignatura-cad-routing.module';

import { AsignaturaCADPage } from './asignatura-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaCADPageRoutingModule
  ],
  declarations: [AsignaturaCADPage]
})
export class AsignaturaCADPageModule {}
