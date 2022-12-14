import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaRELPageRoutingModule } from './asignatura-rel-routing.module';

import { AsignaturaRELPage } from './asignatura-rel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaRELPageRoutingModule
  ],
  declarations: [AsignaturaRELPage]
})
export class AsignaturaRELPageModule {}
