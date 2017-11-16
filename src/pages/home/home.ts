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
        this.airColor = this.pollutionColor(parseInt(this.weather.pollutionIndex));
        console.log(this.weather.future);
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
}
