import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario = {
    username: '',
    password: '',
    correo: ''
  }
  
  constructor(private alertController: AlertController, private storage: Storage, private router:Router) { }

  ngOnInit() { 
  }


  onSubmit() {
    this.guardar();
  }

  async guardar() {
    let usr = await this.storage.get(this.usuario.username);

    if (usr == null) {
      await this.storage.set(this.usuario.username, this.usuario);
      this.presentAlert();
      this.router.navigate(['/login']);
      
    }
    else{
      this.presentAlert2();
      
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registrado correctamente',
      message: 'Inicie Sesion',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Usuario registrado',
      message: 'El usuario se encuentra anteriormente registrado',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
