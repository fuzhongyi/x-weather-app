import {Component} from '@angular/core';
import {Weather} from '../../entity/Weather';
import {IonicPage, NavController, ActionSheetController} from 'ionic-angular';
import {CityListPage} from '../city-list/city-list';
import {WeatherServiceProvider} from '../../providers/weather-service/weather-service';

@IonicPage({
  name: 'city'
})
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
  providers: [WeatherServiceProvider]
})
export class CityPage {

  myCitys: object[];
  position: any;
  loadingText: string = "自动定位";
  isPos: boolean = false;

  constructor(public navCtrl: NavController,
              public actionSheet: ActionSheetController,
              public weatherService: WeatherServiceProvider) {
  }

  ionViewDidLoad() {
    let pos = localStorage.getItem("position");
    if (pos !== '{}') {
      this.isPos = true;
    }
    this.position = JSON.parse(pos);
    this.myCitys = JSON.parse(localStorage.getItem("myCitys"));
  }

  goCheck(city: string, province?: string) {
    localStorage.setItem("city", city);
    localStorage.setItem("province", province);
    this.navCtrl.pop();
  }

  cityList() {
    this.navCtrl.push(CityListPage);
  }

  removeCity(city: string, province) {
    let actionSheet = this.actionSheet.create({
      buttons: [
        {
          text: '删除',
          handler: () => {
            let my: any[] = JSON.parse(localStorage.getItem("myCitys"));
            this.myCitys = my.filter((v) => {
              return !(v.city === city && v.province === province);
            });
            localStorage.setItem("myCitys", JSON.stringify(this.myCitys));
          }
        },
        {
          text: '取消',
          role: 'cancel'
        }]
    });
    actionSheet.present();
  }

  togglePositon() {
    if (!this.isPos) {
      this.loadingText = "正在定位";
      this.weatherService.getIp()
        .then((data: string) => {
          return this.weatherService.qryWeatherByIp(data);
        })
        .then((data: Weather) => {
            let city: string = data.city;
            let province: string = data.province;
            localStorage.setItem("position", JSON.stringify({city, province}));
            this.isPos = true;
          }
        )
    } else {
      this.loadingText = "自动定位";
      localStorage.setItem("position", JSON.stringify({}));
      this.isPos = false;
    }
  }
}
