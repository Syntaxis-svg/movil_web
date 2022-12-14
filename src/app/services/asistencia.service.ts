import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { Asistencia, Asistencias } from "../interfaces/asistencias";

@Injectable({
  providedIn: 'root'
})

export class AsistenciaService {
  public arrAsistencia: Asistencia[] = [];
  private arrAsistencias: Asistencias[] = []
  constructor(
    private storage: Storage,
  ) {}

  createAsistencia: Asistencia = {
    idAsistencia: '',
    fecha:  new Date(),
    estado: true, 
    asignatura: ''
  }
  async generateKey(): Promise<string> {
    let key = `asistencia${parseInt(`$Math.random()*100`)}`;
    let ret = await this.storage.get(key);
    while(ret){
      key = `asistencia${ parseInt(`${Math.random() * 100}`)}`;
      ret = await this.storage.get(key);
    }
    return key;
  };
  async read(): Promise<Asistencia[]> {
    let Arrasistencia: Array<Asistencia> = [];
    await this.storage.forEach((v, Key, i) => {
      if(Key.startsWith("asistencia")){
        this.arrAsistencia.push(v);
      }
    });
    return this.arrAsistencia;
  };
  async create(key: string, asistencia: Asistencia) {
    return await this.storage.set(key, asistencia);
  };


    // if (param !== null) {
    //   this.arrAsistencias.push(param);
    //   this.storage.set(param.idAsistencia, this.arrAsistencias);
    //   this.storage.get(param.idAsistencia).then((res => {
    //     console.log(param)
    //   }));
    // } else return this.arrAsistencia
  }
  // loadAsistencia() {
  //   const asisnteciaStorage = this.st.get(this.createAsistencia.idAsistencia).then((data =>
  //     {
  //       if(data === null) return this.arrAsistencia = []
  //       this.arrAsistencia.push(this.createAsistencia);
  //     }));
  // }

