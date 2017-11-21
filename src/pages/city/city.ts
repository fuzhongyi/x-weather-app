import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CityListPage} from '../city-list/city-list';

@IonicPage({
  name: 'city'
})
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
  }

  goCheck(city: string, province?: string) {
    localStorage.setItem("city", city);
    localStorage.setItem("province", province);
    this.navCtrl.pop();
  }

  cityList(){
    this.navCtrl.push(CityListPage);
  }
}
