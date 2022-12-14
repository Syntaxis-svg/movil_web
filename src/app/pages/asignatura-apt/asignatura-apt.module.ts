import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaAPTPageRoutingModule } from './asignatura-apt-routing.module';

import { AsignaturaAPTPage } from './asignatura-apt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaAPTPageRoutingModule
  ],
  declarations: [AsignaturaAPTPage]
})
export class AsignaturaAPTPageModule {}
