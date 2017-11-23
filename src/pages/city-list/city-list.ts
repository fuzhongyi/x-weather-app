import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {WeatherServiceProvider} from '../../providers/weather-service/weather-service';

@IonicPage()
@Component({
  selector: 'page-city-list',
  templateUrl: 'city-list.html',
  providers: [WeatherServiceProvider]
})
export class CityListPage {

  citys: object[] = [];
  filter: object[] = [];

  constructor(public navCtrl: NavController,
              public weatherService: WeatherServiceProvider) {
  }

  ionViewDidLoad() {
    let citys: string = sessionStorage.getItem("citys");
    if (citys) {
      this.citys = JSON.parse(citys);
    } else {
      this.weatherService.qryCitys().then((data: object[]) => {
        let handleData: any[] = [];
        data.forEach((v: any) => {
          let city: any = {province: "", district: []};
          city.province = v.province;
          let district: object[] = [];
          v.city.forEach((vv) => {
            vv.district.forEach((vvv) => {
              district.push(vvv.district);
            })
          });
          city.district = district;
          handleData.push(city);
        });
        sessionStorage.setItem("citys", JSON.stringify(handleData));
        this.citys = handleData;
      })
    }
  }

  search(ev: any) {
    let searchText = ev.target.value;
    if (searchText && searchText.trim() != '') {
      let cityCopy = JSON.parse(JSON.stringify(this.citys));
      this.filter = cityCopy.filter((item: any) => {
        if (item.province.indexOf(searchText) != -1) {
          return true;
        } else {
          let flag: boolean = false;
          let newDistrict: any[] = [];
          item.district.forEach((v: any) => {
            if (v.indexOf(searchText) != -1) {
              flag = true;
              newDistrict.push(v);
            }
          });
          if (flag) {
            item.district = newDistrict;
          }
          return flag;
        }
      })
    } else {
      this.filter = [];
      return false;
    }
  }

  addToMyCitys(city: string, province?: string) {
    localStorage.setItem("city", city);
    localStorage.setItem("province", province);
    let myCitys: any[] = JSON.parse(localStorage.getItem("myCitys"));
    console.log(myCitys)
    myCitys.push({city, province});
    localStorage.setItem("myCitys", JSON.stringify(myCitys));
    this.navCtrl.popToRoot();
  }
}
