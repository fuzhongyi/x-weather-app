import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../../pages/home/home';

/**
 * Generated class for the CityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'city'
})
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
  }

  goCheck(city: string, province?: string) {
    this.navCtrl.push(
      HomePage,
      {
        city: city,
        province: province
      }, {
        direction: 'back'
      })
  }
}
