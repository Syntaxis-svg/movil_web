import { Storage } from '@ionic/storage-angular';
import { Asistencia } from './../../interfaces/asistencias';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignatura-pgy',
  templateUrl: './asignatura-pgy.page.html',
  styleUrls: ['./asignatura-pgy.page.scss'],
})
export class AsignaturaPGYPage implements OnInit {
  asistencia: Asistencia[] = []
  constructor(
    private storage: Storage
  ) { }
  
  ngOnInit() {
    console.log(this.asistencia)
    this.asistencia = this.getPgy()
  }
  getPgy(){
    const pgy = "asignatura_PGY"
    const pgaObject: Object = this.storage.get(pgy)
    let lista: Asistencia[] = []
    this.storage.forEach((value) => {
      if(pgaObject !== value && value.asignatura === pgy) {
        lista.push(value)
        console.log(lista)
      }
    }); return lista
  }
}
