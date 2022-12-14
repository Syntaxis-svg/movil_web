import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaPGYPageRoutingModule } from './asignatura-pgy-routing.module';

import { AsignaturaPGYPage } from './asignatura-pgy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaPGYPageRoutingModule
  ],
  declarations: [AsignaturaPGYPage]
})
export class AsignaturaPGYPageModule {}
