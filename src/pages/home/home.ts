import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  getPos() {
    alert(JSON.stringify(navigator.geolocation));
    navigator.geolocation.getCurrentPosition(
      (resp) => {
        console.log(JSON.stringify(resp));
      },
      (error) => {
        console.log(JSON.stringify(error));
      })
  }

}
