import {Component} from '@angular/core';
import {Weather} from '../../entity/Weather';
import {IonicPage, NavController, ActionSheetController, ToastController} from 'ionic-angular';
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
  text: string;

  constructor(public navCtrl: NavController,
              public actionSheet: ActionSheetController,
              public weatherService: WeatherServiceProvider,
              private toast: ToastController) {
  }

  ionViewDidLoad() {
    let pos = localStorage.getItem("position");
    this.position = JSON.parse(pos);
    this.text = this.position.city + '（当前城市）';
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

  refresPos() {
    if (this.text === "正在定位") {
      this.toast.create({
        message: '定位中，请耐心等待',
        duration: 3000,
        position: 'bottom'
      }).present();
      return false;
    }
    this.text = "正在定位";
    this.weatherService.getIp()
      .then((data: string) => {
        return this.weatherService.qryWeatherByIp(data);
      })
      .then(data => {
          if (data.retCode === this.weatherService.SUCCESS) {
            let result: Weather = data.result[0];
            let city: string = result.city;
            let province: string = result.province;
            this.text = city + '（当前城市）';
            localStorage.setItem("position", JSON.stringify({city, province}));
          } else {
            this.text = "定位失败";
          }
        }
      )
      .catch(error => this.text = "定位失败")
  }
}
