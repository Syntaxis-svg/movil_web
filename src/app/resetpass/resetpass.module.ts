import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { ResetpassPageRoutingModule } from './resetpass-routing.module';


import { ResetpassPage } from './resetpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetpassPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ResetpassPage]
})
export class ResetpassPageModule {}
