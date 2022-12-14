import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaPGAPageRoutingModule } from './asignatura-pga-routing.module';

import { AsignaturaPGAPage } from './asignatura-pga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaPGAPageRoutingModule
  ],
  declarations: [AsignaturaPGAPage]
})
export class AsignaturaPGAPageModule {}
