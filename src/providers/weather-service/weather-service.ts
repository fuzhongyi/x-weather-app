import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ToastController} from "ionic-angular";

@Injectable()
export class WeatherServiceProvider {

  SUCCESS: string = '200';  // 成功

  constructor(public http: Http, private toast: ToastController) {
  }

  /**
   * 定位
   * @returns {Promise<T>}
   */
  getIp() {
    return this.http.get('http://ipv4.myexternalip.com/json')
      .toPromise()
      .then(resp => resp.json().ip)
      .catch(this.handleError);
  }

  /**
   * 根据IP地址查询天气
   *
   * @param ip
   * @returns {Promise<T>}
   */
  qryWeatherByIp(ip: string) {
    return this.http.get(`https://bird.ioliu.cn/v1/?url=http://apicloud.mob.com/v1/weather/ip?key=223c4f4a12780&ip=${ip}`)
      .toPromise()
      .then(resp => resp.json())
      .catch(this.handleError);
  }

  /**
   * 根据地市查询天气
   *
   * @param city     城市
   * @param province 省份
   * @returns {Promise<T>}
   */
  qryWeatherByCity(city: string, province?: string) {
    let url = `https://bird.ioliu.cn/v1/?url=http://apicloud.mob.com/v1/weather/query?key=223c4f4a12780&city=${city}`;
    if (province) {
      url += `&province=${province}`;
    }
    return this.http.get(url)
      .toPromise()
      .then(resp => resp.json())
      .catch(this.handleError);
  }

  /**
   * 城市列表
   * @returns {Promise<T>}
   */
  qryCitys() {
    let url = `https://bird.ioliu.cn/v1/?url=http://apicloud.mob.com/v1/weather/citys?key=223c4f4a12780`;
    return this.http.get(url)
      .toPromise()
      .then(resp => resp.json().result)
      .catch(this.handleError);
  }


  /**
   * 捕获异常并输出
   * @param error
   * @returns {Promise<never>}
   */
  private handleError(error: any): Promise<any> {
    this.toast.create({
      message: '网络异常，请稍后再试 😭',
      duration: 3000,
      position: 'bottom'
    }).present();
    return Promise.reject(error.message || error);
  }
}
