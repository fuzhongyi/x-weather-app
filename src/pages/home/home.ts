import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Weather} from '../../entity/Weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ip: string;
  weather: Weather;
  airColor: string;

  constructor(private http: Http) {
    this.getIp();
    this.getWeather();
  }

  getIp() {
    this.http.request('http://ipv4.myexternalip.com/json')
      .toPromise()
      .then((res: Response) => {
        this.ip = res.json().ip;
      })
      .catch(err => {
        console.error(err);
      });
  }

  getWeather() {
    this.http.request('https://bird.ioliu.cn/v1/?url=http://apicloud.mob.com/v1/weather/ip?key=223c4f4a12780&ip=125.71.28.231')
      .toPromise()
      .then((res: Response) => {
        this.weather = res.json().result[0];
        let airCondition = this.weather.airCondition;
        if (airCondition === '优') {
          this.airColor = "#4CB66E";
        } else if (airCondition === '轻度污染') {
          this.airColor = "#FEC921";
        } else {
          this.airColor = "#FF2525";
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

}
