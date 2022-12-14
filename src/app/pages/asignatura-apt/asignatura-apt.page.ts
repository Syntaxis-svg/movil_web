import { Storage } from '@ionic/storage-angular';
import { Asistencia } from './../../interfaces/asistencias';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignatura-apt',
  templateUrl: './asignatura-apt.page.html',
  styleUrls: ['./asignatura-apt.page.scss'],
})
export class AsignaturaAPTPage implements OnInit {
  asistencia: Asistencia[] = []
  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    console.log(this.asistencia)
    this.asistencia = this.getApt()
  }
  getApt(){
    const apt = "asignatura_APT"
    const pgaObject: Object = this.storage.get(apt)
    let lista: Asistencia[] = []
    this.storage.forEach((value) => {
      if(pgaObject !== value && value.asignatura === apt) {
        lista.push(value)
        console.log(lista)
      }
    }); return lista
  }
}
