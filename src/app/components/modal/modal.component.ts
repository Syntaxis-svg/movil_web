import { AsistenciaService } from './../../services/asistencia.service';
import { Storage } from '@ionic/storage-angular';
import { Asignatura, Asignaturas } from './../../interfaces/asignaturas';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent implements OnInit {
  asignatura: Asignatura[]=[];
  constructor(
    private modalCtrl: ModalController,
    public srvAsistencia: AsignaturasService,
    public service: AsistenciaService,
    private http: HttpClient,
    private storage: Storage,
    ) {}
  ngOnInit() {

  };

  getAsignaturasStorage(param) {
    let arrAsignatura = []
    let nameAsignatura = ''
    this.storage.forEach((value, key) => {
      if(key.startsWith('asignatura_')){
        //arrAsignatura.push(value);
        if(param === key) return nameAsignatura;
      }
    }); return nameAsignatura
  }

  getAsistencias() {
    let arrAsistencia = []
    this.storage.forEach((value, key) => {
      if(key.startsWith('asistencia')) {
        arrAsistencia.push(value);
      } 
    }); return arrAsistencia;
  }
 
  cancel() {
    return this.modalCtrl.dismiss(null, 'Cerrar');
  };
}

