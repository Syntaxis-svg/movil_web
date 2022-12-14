import { Asistencia } from './../../interfaces/asistencias';
import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-asignatura-cad',
  templateUrl: './asignatura-cad.page.html',
  styleUrls: ['./asignatura-cad.page.scss'],
})
export class AsignaturaCADPage implements OnInit {
  lista: Asistencia[] = []
  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    console.log(this.lista)
    this.lista = this.getCad()
  }
  getCad(){
    const cad = "asignatura_CAD"
    const pgaObject: Object = this.storage.get(cad)
    let lista: Asistencia[] = []
    this.storage.forEach((value) => {
      if(pgaObject !== value && value.asignatura === cad) {
        lista.push(value)
        console.log(lista)
      }
    }); return lista
  }
}
