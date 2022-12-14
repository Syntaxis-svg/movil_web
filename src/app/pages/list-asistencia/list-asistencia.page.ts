import { Router } from '@angular/router';
import { Asistencia } from './../../interfaces/asistencias';
import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list-asistencia',
  templateUrl: './list-asistencia.page.html',
  styleUrls: ['./list-asistencia.page.scss'],

})
export class ListAsistenciaPage implements OnInit {
  filter: Asistencia[] = [];
  codigo = '{ "result":true, "count":42 }'
  id: string;
  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {

    
   //detail.value
   //$event
  }
   

  async dataId(param){
    let asignatura = JSON.stringify(param);
    let dataObject: Object = await this.storage.get(asignatura);
    let listAsistencias: Asistencia[] = []
      this.storage.forEach((value) => {
        if(dataObject !== value && value.asignatura == param){
          listAsistencias.push(value)
          this.filter = listAsistencias
          console.log('filter dentro de la funcion',this.filter)
      }
    }); return this.filter
  }
}
