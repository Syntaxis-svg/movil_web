import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  registrado:Usuario=null;
  usuario:Usuario={
    username:'',
    password:'',
    correo:''
  }
  constructor(
    private alertController: AlertController,
    private storage:Storage,
    private router:Router 
  ){}
  //datos de asignatura
    listaDeAsignaturas = [
      {idAsignatura:"asignatura_APT",nameAsignatura:"Portafolio IV", urlAsignatura:"../assets/apis/media/portafolio.jpg", asistencia: []},
      {idAsignatura:"asignatura_CAD",nameAsignatura:"Calidad de software", urlAsignatura:"../assets/apis/media/calidad_software.jpg", asistencia: []},
      {idAsignatura:"asignatura_PGA",nameAsignatura:"Programación II", urlAsignatura:"../assets/apis/media/programing.jpg", asistencia: []},
      {idAsignatura:"asignatura_PGY",nameAsignatura:"Programación de base de datos", urlAsignatura:"../assets/apis/media/database-1.jpg", asistencia: []},
      {idAsignatura:"asignatura_REL",nameAsignatura:"Religión", urlAsignatura:"../assets/apis/media/religion.jpg", asistencia: []}
    ];
  ngOnInit() {//agregar los datos cuando se inicia la aplicacion 
    if(this.storage.length) {
      console.log(this.storage.length)
      this.listaDeAsignaturas.forEach((value) => {
        this.storage.set(value.idAsignatura, value);
        console.log(value.idAsignatura, value);
      });
    }
  }
  //logeo
  onSubmit()
  {
    this.logear();
  }
  async logear()
  {
    this.registrado =await this.storage.get(this.usuario.username);
    if (this.registrado!=null)
    {
      if(this.usuario.username==this.registrado.username && this.usuario.password==this.registrado.password)
      {
        await this.storage.set('session',this.registrado.username);
        console.log(this.storage.get(this.usuario.username));
        this.router.navigate(['/tabs/tab2']);
      }
      else{
        this.presentAlert2();
      }
    }
    else{
      this.presentAlert2()
    }
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Datos Incorrectos',
      message: 'Intente nuevamente',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
