import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private st: Storage,
    private rt:Router,
    ) {}

  cerrarSesion(){
    this.logout();
    this.rt.navigate(['/login']);
  }
  async logout()
  {
    await this.st.set('session',null);
  }

}
