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
    let city: string = localStorage.getItem("city");
    let province: string = localStorage.getItem("province");
    if (!city || !province) {
      this.getWeatherByIp();
    }
  }

  ionViewDidEnter() {
    let city: string = localStorage.getItem("city");
    let province: string = localStorage.getItem("province");
    if ((city || province) && (this.city !== city || this.province !== province)) {
      this.getWeatherByCity(city, province);
    }
  }

  getWeatherByIp() {
    let loading = this.loadingCtrl.create({
      content: '定位中...'
    });
    loading.present();
    // this.weatherService.qryWeatherByIp("125.71.28.231").then(data => {
    //     loading.dismiss();
    //     if (data.retCode === this.weatherService.SUCCESS) {
    //       let result: Weather = data.result[0];
    //       localStorage.setItem("position", JSON.stringify({city: result.city, province: result.province}));
    //       this.city = result.city;
    //       this.province = result.province;
    //       this.weather = result;
    //       this.airColor = this.pollutionColor(parseInt(this.weather.pollutionIndex));
    //     } else {
    //       this.toast.create({
    //         message: `${data.msg} 😭`,
    //         duration: 3000,
    //         position: 'bottom'
    //       }).present();
    //     }
    //   }
    // ).catch(error => {
    //   loading.dismiss();
    // })
    this.weatherService.getIp()
      .then((data: string) => this.weatherService.qryWeatherByIp(data))
      .then(data => {
          loading.dismiss();
          if (data.retCode === this.weatherService.SUCCESS) {
            let result: Weather = data.result[0];
            localStorage.setItem("position", JSON.stringify({city: result.city, province: result.province}));
            this.city = result.city;
            this.province = result.province;
            this.weather = result;
            this.airColor = this.pollutionColor(parseInt(this.weather.pollutionIndex));
          } else {
            this.toast.create({
              message: `${data.msg} 😭`,
              duration: 3000,
              position: 'bottom'
            }).present();
          }
        }
      ).catch(error => {
      loading.dismiss();
    })
  }

  getWeatherByCity(city: string, province?: string) {
    let loading = this.loadingCtrl.create({
      content: '数据加载中...'
    });
    loading.present();
    this.weatherService.qryWeatherByCity(city, province).then(data => {
        loading.dismiss();
        if (data.retCode === this.weatherService.SUCCESS) {
          let result: Weather = data.result[0];
          this.city = result.city;
          this.province = result.province;
          this.weather = result;
          this.airColor = this.pollutionColor(parseInt(this.weather.pollutionIndex));
        } else {
          this.toast.create({
            message: `${data.msg} 😭`,
            duration: 3000,
            position: 'bottom'
          }).present();
        }
      }
    ).catch(() => {
      loading.dismiss();
    });
  }

  doRefresh(refresher) {
    this.weatherService.qryWeatherByCity(this.city, this.province).then(data => {
        refresher.complete();
        if (data.retCode === this.weatherService.SUCCESS) {
          let result: Weather = data.result[0];
          this.weather = result;
          this.airColor = this.pollutionColor(parseInt(this.weather.pollutionIndex));
          this.toast.create({
            message: '更新成功 👻',
            duration: 3000,
            position: 'bottom'
          }).present();

        } else {
          this.toast.create({
            message: `${data.msg} 😭`,
            duration: 3000,
            position: 'bottom'
          }).present();
        }
      }
    ).catch(() => {
      refresher.complete();
    });
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
    this.navCtrl.push(CityPage);
  }
}
