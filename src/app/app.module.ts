import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from '../app/components/modal/modal.component';




@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [BrowserModule,
    FormsModule, 
    IonicModule.forRoot(), AppRoutingModule, 
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
