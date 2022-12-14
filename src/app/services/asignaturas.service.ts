import { Storage } from "@ionic/storage-angular";
import { Injectable } from "@angular/core";
import { Asignatura } from "../interfaces/asignaturas";

@Injectable({
  providedIn: "root",
})
export class AsignaturasService {
  public arrAsignatura: Asignatura[] = [];
  private storage: Storage;
  constructor() {
  }
  asignatura: Asignatura = {
    idAsignatura: "",
    nameAsignatura: "",
    urlAsignatura: "",
    asistencia: [],
  };

  

  // async read(): Promise<Asignatura>{
  //   //let ArrAsignatura = Array<Asignatura> = [];
  //   await this.storage.forEach((v, Key, i) => {
  //     if(Key.startsWith("asignatura")) {
  //       this.arrAsignatura.push(v);
  //     }
  //   });
  //   //return this.arrAsignatura;
  // };
    // let asignaturas: Array<Asignatura> = [];
    // await this.storage.forEach((v, key) => {
    //   if(key.startsWith('asignatura_')) {
    //     asignaturas.push(v);
    //   }
    // });
    // return asignaturas
}
//   createlistAsistencia(p_idAsistencia: number) {
//     //here edit date of asistencia format
//     // let newAistencia = new Asistencia(param)
//     let dataAsistencia = {
//       //<- delete this
//       idAsistencia: p_idAsistencia,
//       dia: new Date().getDay(),
//       mes: new Date().getMonth(),
//       anio: new Date().getFullYear(),
//       //fecha: new Date(),
//       estado: true,
//       idAsignatura: "2",
//     };
//     //this.arrAsistencia.push(newAsistencia)
//     this.arrAsistencia.push(dataAsistencia);
//     this.saveAsistencia();
//   }
//   saveAsistencia() {
//     let stringAsistencia: string = JSON.stringify(this.arrAsistencia);
//     localStorage.setItem("idAsistencia", stringAsistencia);
//   }
//   loadAsistencia() {
//     const asistenciaStorage = localStorage.getItem("idAsistencia");
//     if (asistenciaStorage === null) {
//       return (this.arrAsistencia = []);
//     }
//     let objAsistencia = JSON.parse(asistenciaStorage);
//     this.arrAsistencia = objAsistencia;
//   }

