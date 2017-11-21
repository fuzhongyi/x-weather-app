import {Component} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Weather} from '../../entity/Weather';
import {NavController, LoadingController, ToastController} from 'ionic-angular';
import {CityPage} from '../../pages/city/city';
import {WeatherServiceProvider} from '../../providers/weather-service/weather-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WeatherServiceProvider]
})
export class HomePage {
  weather: Weather = new Weather(); // 天气信息
  airColor: string;                 // 空气质量颜色
  city: string;                     // 区县
  province: string;                 // 省份

  constructor(public navCtrl: NavController,
              public weatherService: WeatherServiceProvider,
              public loadingCtrl: LoadingController,
              private toast: ToastController) {
  }

  ionViewDidLoad() {
    if (this.city) {
      this.getWeatherByCity(this.city, this.province);
    } else {
      this.getWeatherByIp();
    }
  }

  ionViewDidEnter() {
    let city: string = localStorage.getItem("city");
    let province: string = localStorage.getItem("province");
    console.log(city, province);
    console.log(this.city, this.province);
    if (this.city !== city || this.province !== province) {
      this.city = city;
      this.province = province;
      this.getWeatherByCity(this.city, this.province);
    }
  }

  getWeatherByIp() {
    let loading = this.loadingCtrl.create({
      content: '定位中...'
    });
    loading.present();
    this.weatherService.qryWeatherByIp("125.71.28.231").then((data: Weather) => {
        this.city = data.city;
        this.province = data.province;
        this.weather = data;
        this.airColor = this.pollutionColor(parseInt(this.weather.pollutionIndex));
        loading.dismiss();
      }
    );
    // this.weatherService.getIp()
    //   .then((data: string) => {
    //     return this.weatherService.qryWeatherByIp(data);
    //   })
    //   .then((data: Weather) => {
    //       this.weather = data;
    //       this.airColor = this.pollutionColor(parseInt(this.weather.pollutionIndex));
    //       loading.dismiss();
    //     }
    //   )
  }

  getWeatherByCity(city: string, province?: string) {
    let loading = this.loadingCtrl.create({
      content: '数据加载中...'
    });
    loading.present();
    this.weatherService.qryWeatherByCity(city, province).then((data: Weather) => {
        // this.city = data.city;
        // this.province = data.province;
        console.log(data);
        this.weather = data;
        this.airColor = this.pollutionColor(parseInt(this.weather.pollutionIndex));
        loading.dismiss();
      }
    );
  }

  doRefresh(refresher) {
    let toast = this.toast.create({
      message: '刚刚更新 👻',
      duration: 3000,
      position: 'bottom'
    });
    this.weatherService.qryWeatherByCity(this.city, this.province).then((data: Weather) => {
        this.weather = data;
        this.airColor = this.pollutionColor(parseInt(this.weather.pollutionIndex));
        toast.present();
        refresher.complete();
      }
    );
  }

  pollutionColor(index) {
    let color: string;
    if (index <= 50) {
      color = "#0289C3";
    } else if (index > 50 && index <= 100) {
      color = "#76C0EF";
    } else if (index > 100 && index <= 150) {
      color = "#74C141";
    } else if (index > 150 && index <= 200) {
      color = "#EE9738";
    } else if (index > 200 && index <= 300) {
      color = "#F34000";
    } else {
      color = "#C01410";
    }
    return color;
  }

  goCity() {
    this.navCtrl.push(CityPage, {
      animation: 'ios-transition'
    });
  }

}
