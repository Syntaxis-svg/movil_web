import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})

export class ResetpassPage implements OnInit {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  registrado: Usuario = null;

  usuario = {
    username: '',
    password: '',
    correo: '',
  };
  nuevapassword = {
    password: '',
  };

  constructor(private alertController: AlertController, private router: Router, private storage: Storage) { }
  ngOnInit() {
  }
  onSubmit() {
    this.reestablecer();
  }


  async reestablecer() {
    this.registrado = await this.storage.get(this.usuario.username);
    //console.log("entro a reestablecer", this.registrado);
    if (this.registrado != null) {

      if (this.usuario.username == this.registrado.username) {
        await this.cambiar(this.registrado);

      }else{

      }
    }
    else {
      this.presentAlert3();
    }
  }

  nuevousuario: Usuario = null;


  // async cambiar(usuarioantiguo) {
  //   this.nuevousuario = usuarioantiguo
  //   let nueva = this.nuevapassword.password
  //   this.nuevousuario.password = nueva
  //   await this.storage.set(this.usuario.username, this.nuevousuario)
  //   this.registrado = await this.storage.get(this.usuario.username)
  // }

  async cambiar(usuario_antiguo)
  {
    this.nuevousuario=usuario_antiguo
    console.log(this.nuevousuario)
    let nueva = this.nuevapassword.password
    console.log(nueva)
    this.registrado = await this.storage.get(this.usuario.username)
    this.registrado.password = nueva
    await this.storage.set(this.usuario.username, this.registrado)
    this.presentAlert4()
  }



  async presentAlert4() {
    const alert = await this.alertController.create({
      header: 'Reestablecer Contraseña',
      message: 'La contraseña ha sido cambiada',
      buttons: ['OK'],

    });
    await alert.present();
    this.router.navigate(['/login']);

    
  }

  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Usuario no encontrado',
      message: 'El usuario no esta registrado, porfavor verificar',
      buttons: ['OK'],

    });
    await alert.present();
  }



}

