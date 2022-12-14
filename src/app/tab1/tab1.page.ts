import { Storage } from '@ionic/storage-angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Asignatura } from "./../interfaces/asignaturas";
import { AsistenciaService } from "./../services/asistencia.service";
import { AlertController } from "@ionic/angular";
import { Asistencia } from "./../interfaces/asistencias";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit{
  scanActive: boolean = false;
  arrAsistencias: Array<Asistencia> = [];
  arrAsignaturas: Array<Asignatura> = [];
  content_visibility = '';
  scannedResult:string;
  content: string = '{"idAsistencia": "asistencia999","fecha": null, "estado": true, "asignatura": "asignatura_PGA" }'
  constructor(
    private alertController: AlertController,
    private srvAsistencia: AsistenciaService,
    private storage: Storage
  ) {}
  ngOnInit() {
    //this.saveAsistencia(this.content)
  }
//qrScanner
async checkPermission() {
  try {
    // check or request permission
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (status.granted) {
      // the user granted permission
      return true;
    }
    return false;
  } catch(e) {
    console.log(e);
  }
}
async startScan() {
  try {
    const permission = await this.checkPermission();
    if(!permission) {
      return;
    }
    await BarcodeScanner.hideBackground();
    document.querySelector('body').classList.add('scanner-active');
    this.content_visibility = 'hidden';
    const result = await BarcodeScanner.startScan();
    console.log(result);
    BarcodeScanner.showBackground();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
    if(result?.hasContent) {
      this.scannedResult = result.content;
      let data:string = result.content
      let ObjectAsistencia = JSON.parse(data);
      if(ObjectAsistencia.fecha === null) {
        ObjectAsistencia.fecha = new Date() //toma la fecha null y la convierte en la nueva fecha
        let msg: string = 'Asistencia guardada correctamente' //manda mensage a la alerta
        let title: string = 'Guardado' //manda el title de la alerta
        this.storage.set(ObjectAsistencia.idAsistencia, ObjectAsistencia); //guarda en el storage
        this.presentAlert(msg, title)
      }
    }else {
      let msg: string = 'Ha ocurrido un error durante el proceso'
      let title: string = 'Upss'
      this.presentAlert(msg, title)
    }
  } catch(e) {
    let msg: string = e
    let title: string = 'Error'
    this.presentAlert(msg, title)
    this.stopScan();
  }
}
stopScan() {
  BarcodeScanner.showBackground();
  BarcodeScanner.stopScan();
  document.querySelector('body').classList.remove('scanner-active');
  this.content_visibility = '';
}
ngOnDestroy(): void {
    this.stopScan();
}
//FORMATO QR
/*
  '{
    "ATRIBUTO": INFORMACION
    "ATRIBUTO 2": INFORMACION 2
  }'
*/
//Asistencias
  async createAsistencia() {
    let key = await this.srvAsistencia.generateKey();
    let asistencia = {
      idAsistencia: `${key}`,
      fecha: new Date(),
      estado: true,
      asignatura: "asignatura_CAD",
    };
    await this.srvAsistencia.create(key, asistencia);
    console.log(this.srvAsistencia.read());
    this.arrAsistencias = await this.srvAsistencia.read();
  }
  async presentAlert(msg: string, title: string) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ["OK"],
    });
    await alert.present();
  }
}
