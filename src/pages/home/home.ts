import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: Array<any> = [
    {
      titulo: "Perro",
      color: "#444",
      name: "cart"
    },
    {
      titulo: "Gato",
      color: "#999",
      name: "cart"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
