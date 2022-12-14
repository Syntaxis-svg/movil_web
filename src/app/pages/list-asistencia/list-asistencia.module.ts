import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAsistenciaPageRoutingModule } from './list-asistencia-routing.module';

import { ListAsistenciaPage } from './list-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAsistenciaPageRoutingModule
  ],
  declarations: [ListAsistenciaPage]
})
export class ListAsistenciaPageModule {}
