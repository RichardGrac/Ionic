import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: Array<any> = [
    {
      titulo: "Energía Eléctrica",
      color: "green",
      name: "md-flash"
    },
    {
      titulo: "Entretenimiento",
      color: "#465099",
      name: "ios-easel"
    },
    {
      titulo: "Electrodomesticos",
      color: "#648f99",
      name: "md-outlet"
    },
    {
      titulo: "Temperatura",
      color: "#99583a",
      name: "md-flame"
    },
    {
      titulo: "Seguridad",
      color: "#000",
      name: "md-lock"
    },
    {
      titulo: "Vigilancia",
      color: "#000000",
      name: "ios-videocam-outline"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
