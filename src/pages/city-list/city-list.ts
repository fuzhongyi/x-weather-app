import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {WeatherServiceProvider} from '../../providers/weather-service/weather-service';

@IonicPage()
@Component({
  selector: 'page-city-list',
  templateUrl: 'city-list.html',
  providers: [WeatherServiceProvider]
})
export class CityListPage {

  citys: object[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public weatherService: WeatherServiceProvider) {
    this.weatherService.qryCitys().then((data: object[]) => {
      this.citys = data;
    })
  }

}
