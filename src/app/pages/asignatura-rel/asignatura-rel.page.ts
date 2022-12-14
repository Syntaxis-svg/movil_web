import { Asistencia } from './../../interfaces/asistencias';
import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignatura-rel',
  templateUrl: './asignatura-rel.page.html',
  styleUrls: ['./asignatura-rel.page.scss'],
})
export class AsignaturaRELPage implements OnInit {
  asistencia: Asistencia[] = []
  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    console.log(this.asistencia)
    this.asistencia = this.getRel()
  }
  getRel(){
    const rel = "asignatura_REL"
    const pgaObject: Object = this.storage.get(rel)
    let lista: Asistencia[] = []
    this.storage.forEach((value) => {
      if(pgaObject !== value && value.asignatura === rel) {
        lista.push(value)
        console.log(lista)
      }
    }); return lista
  }

}
