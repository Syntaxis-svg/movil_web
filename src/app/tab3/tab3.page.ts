import { Router } from '@angular/router';
import { ListAsistenciaPage } from './../pages/list-asistencia/list-asistencia.page';
import { ModalComponent } from './../components/modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Asignaturas, Asignatura } from '../interfaces/asignaturas';
import { Asistencias, Asistencia } from '../interfaces/asistencias';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [ListAsistenciaPage, ModalComponent]
})
export class Tab3Page implements OnInit{
  asignaturas: Asignaturas[]=[];
  asignatura: Asignatura[]=[];
  asistencias: Asistencias[]=[];
  asistencia: Asistencia[]=[];
  dataTest: any[]
  constructor(
    private storage: Storage,
    private modalCtrl: ModalController,
    public modal: ModalComponent,
    private router: Router,
    public listA: ListAsistenciaPage,
    ) { }
    newAsis = {
      'id_asignatura': 'asignatura_CAD',
      'nameAsignatura': 'Calidad de software',
      'url': '../assets/apis/media/calidad_software.jpg',
      'asistencia': []
    }
  ngOnInit() { 
    this.dataTest = this.getAsignaturas2();
  };

  
  getArrAsistencia() {
    this.storage.forEach((value, key) => {
      if(key.startsWith('asistencia')){
      }
    })
  }
  getAsignaturas2(){
    let arrAsignatura = new Array
    this.storage.forEach((value, key) => {
      if(key.startsWith('asignatura')){
        arrAsignatura.push(value)
      }
    }); return arrAsignatura;
  }
  
  onClick(param) {
    this.listA.dataId(param)
    this.router.navigate(['/list-asistencia'])
  }
  async open_modal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });
    modal.present();
  }
}