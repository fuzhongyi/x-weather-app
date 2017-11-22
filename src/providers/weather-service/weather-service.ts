import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Weather} from '../../entity/Weather';

@Injectable()
export class WeatherServiceProvider {

  ip: string;        // IP
  weather: Weather;  // 天气数据
  citys: object[];   // 城市列表

  constructor(public http: Http) {
  }

  /**
   * 定位
   * @returns {Promise<T>}
   */
  getIp() {
    return new Promise(resolve => {
      let url: string = 'http://ipv4.myexternalip.com/json';
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.ip = data.ip;
          resolve(this.ip);
        })
    });
  }

  /**
   * 根据IP地址查询天气
   *
   * @param ip
   * @returns {Promise<T>}
   */
  qryWeatherByIp(ip: string) {
    return new Promise(resolve => {
      this.http.get(`https://bird.ioliu.cn/v1/?url=http://apicloud.mob.com/v1/weather/ip?key=223c4f4a12780&ip=${ip}`)
        .map(res => res.json())
        .subscribe(data => {
          this.weather = data.result[0];
          resolve(this.weather);
        })
    });
  }

  /**
   * 根据地市查询天气
   *
   * @param city     城市
   * @param province 省份
   * @returns {Promise<T>}
   */
  qryWeatherByCity(city: string, province?: string) {
    return new Promise(resolve => {
      let url = `https://bird.ioliu.cn/v1/?url=http://apicloud.mob.com/v1/weather/query?key=223c4f4a12780&city=${city}`;
      if (province) {
        url += `&province=${province}`;
      }
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.weather = data.result[0];
          resolve(this.weather);
        })
    });
  }

  /**
   * 城市列表
   * @returns {Promise<T>}
   */
  qryCitys() {
    return new Promise(resolve => {
      let url = `https://bird.ioliu.cn/v1/?url=http://apicloud.mob.com/v1/weather/citys?key=223c4f4a12780`;
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.citys = data.result;
          resolve(this.citys);
        })
    });
  }
}
