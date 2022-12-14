import { Asistencia } from './../../interfaces/asistencias';
import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-asignatura-pga',
  templateUrl: './asignatura-pga.page.html',
  styleUrls: ['./asignatura-pga.page.scss'],
})
export class AsignaturaPGAPage implements OnInit {
  asistencia: Asistencia[] = []
  constructor(
    private storage: Storage,
  ) { }

  ngOnInit() {
    console.log(this.asistencia)
    this.asistencia = this.getPga()
  }
  getPga(){
    const pga = "asignatura_PGA"
    const pgaObject: Object = this.storage.get(pga)
    let lista: Asistencia[] = []
    this.storage.forEach((value) => {
      if(pgaObject !== value && value.asignatura === pga) {
        lista.push(value)
        console.log(lista)
      }
    }); return lista
  }
}
