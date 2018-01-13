webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_weather_service_weather_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityListPage = (function () {
    function CityListPage(navCtrl, weatherService, toast) {
        this.navCtrl = navCtrl;
        this.weatherService = weatherService;
        this.toast = toast;
        this.citys = [];
        this.filter = [];
    }
    CityListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var citys = sessionStorage.getItem("citys");
        if (citys) {
            this.citys = JSON.parse(citys);
        }
        else {
            this.weatherService.qryCitys().then(function (data) {
                var handleData = [];
                data.forEach(function (v) {
                    var city = { province: "", district: [] };
                    city.province = v.province;
                    var district = [];
                    v.city.forEach(function (vv) {
                        vv.district.forEach(function (vvv) {
                            district.push(vvv.district);
                        });
                    });
                    city.district = district;
                    handleData.push(city);
                });
                sessionStorage.setItem("citys", JSON.stringify(handleData));
                _this.citys = handleData;
            }).catch(function (error) {
                _this.toast.create({
                    message: "\u57CE\u5E02\u5217\u8868\u4FE1\u606F\u52A0\u8F7D\u5931\u8D25 \uD83D\uDE2D",
                    duration: 3000,
                    position: 'bottom'
                }).present();
            });
        }
    };
    CityListPage.prototype.search = function (ev) {
        var searchText = ev.target.value;
        if (searchText && searchText.trim() != '') {
            var cityCopy = JSON.parse(JSON.stringify(this.citys));
            this.filter = cityCopy.filter(function (item) {
                if (item.province.indexOf(searchText) != -1) {
                    return true;
                }
                else {
                    var flag_1 = false;
                    var newDistrict_1 = [];
                    item.district.forEach(function (v) {
                        if (v.indexOf(searchText) != -1) {
                            flag_1 = true;
                            newDistrict_1.push(v);
                        }
                    });
                    if (flag_1) {
                        item.district = newDistrict_1;
                    }
                    return flag_1;
                }
            });
        }
        else {
            this.filter = [];
            return false;
        }
    };
    CityListPage.prototype.addToMyCitys = function (city, province) {
        localStorage.setItem("city", city);
        localStorage.setItem("province", province);
        var myCitys = JSON.parse(localStorage.getItem("myCitys"));
        myCitys.push({ city: city, province: province });
        localStorage.setItem("myCitys", JSON.stringify(myCitys));
        this.navCtrl.popToRoot({ animate: true, animation: 'md-transition' });
    };
    return CityListPage;
}());
CityListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-city-list',template:/*ion-inline-start:"D:\Workspaces\WeatherApp\src\pages\city-list\city-list.html"*/'<ion-header>\n  <ion-navbar color="lightblue">\n    <ion-searchbar placeholder="输入城市名查询"\n      (ionInput)="search($event)">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-group *ngFor="let city of filter">\n      <ion-item-divider color="light">{{city.province}}</ion-item-divider>\n      <ion-item *ngFor="let district of city.district" (click)="addToMyCitys(district,city.province)">\n        {{district}}\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Workspaces\WeatherApp\src\pages\city-list\city-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], CityListPage);

//# sourceMappingURL=city-list.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__city_list_city_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weather_service_weather_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CityPage = (function () {
    function CityPage(navCtrl, platform, actionSheet, weatherService, toast) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.actionSheet = actionSheet;
        this.weatherService = weatherService;
        this.toast = toast;
    }
    CityPage.prototype.ionViewDidLoad = function () {
        var pos = localStorage.getItem("position");
        this.position = JSON.parse(pos);
        this.text = this.position.city + '（当前城市）';
        this.myCitys = JSON.parse(localStorage.getItem("myCitys"));
    };
    CityPage.prototype.goCheck = function (city, province) {
        localStorage.setItem("city", city);
        localStorage.setItem("province", province);
        this.navCtrl.pop();
    };
    CityPage.prototype.cityList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__city_list_city_list__["a" /* CityListPage */]);
    };
    CityPage.prototype.removeCity = function (city, province) {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                {
                    text: '删除',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        var my = JSON.parse(localStorage.getItem("myCitys"));
                        _this.myCitys = my.filter(function (v) {
                            return !(v.city === city && v.province === province);
                        });
                        localStorage.setItem("myCitys", JSON.stringify(_this.myCitys));
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null
                }
            ]
        });
        actionSheet.present();
    };
    CityPage.prototype.refresPos = function () {
        var _this = this;
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
            .then(function (data) {
            return _this.weatherService.qryWeatherByIp(data);
        })
            .then(function (data) {
            if (data.retCode === _this.weatherService.SUCCESS) {
                var result = data.result[0];
                var city = result.city;
                var province = result.province;
                _this.text = city + '（当前城市）';
                localStorage.setItem("position", JSON.stringify({ city: city, province: province }));
            }
            else {
                _this.text = "定位失败";
            }
        })
            .catch(function (error) { return _this.text = "定位失败"; });
    };
    return CityPage;
}());
CityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-city',template:/*ion-inline-start:"D:\Workspaces\WeatherApp\src\pages\city\city.html"*/'<ion-header>\n  <ion-navbar color="lightblue">\n    <ion-title>城市管理</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item (click)="goCheck(position.city,position.province)">\n      <ion-label>\n        {{text}}\n      </ion-label>\n      <button ion-button icon-only item-end small round outline color="secondary"\n              (click)="$event.stopPropagation();refresPos()" [ngClass]="{\'animate-circle\':text===\'正在定位\'}">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item (press)="removeCity(city.city,city.province)"\n              (click)="goCheck(city.city,city.province)"\n              *ngFor="let city of myCitys">\n      <ion-label>{{city.city}}</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-fab right bottom (click)="cityList()">\n    <button ion-fab mini color="secondary">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"D:\Workspaces\WeatherApp\src\pages\city\city.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], CityPage);

//# sourceMappingURL=city.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/city-list/city-list.module": [
		274,
		1
	],
	"../pages/city/city.module": [
		275,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_Weather__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_city_city__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_weather_service_weather_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, weatherService, loadingCtrl, toast) {
        this.navCtrl = navCtrl;
        this.weatherService = weatherService;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.weather = new __WEBPACK_IMPORTED_MODULE_2__entity_Weather__["a" /* Weather */](); // 天气信息
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var city = localStorage.getItem("city");
        var province = localStorage.getItem("province");
        if (!city || !province) {
            this.getWeatherByIp();
        }
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var city = localStorage.getItem("city");
        var province = localStorage.getItem("province");
        if ((city || province) && (this.city !== city || this.province !== province)) {
            this.getWeatherByCity(city, province);
        }
    };
    HomePage.prototype.getWeatherByIp = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
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
            .then(function (data) { return _this.weatherService.qryWeatherByIp(data); })
            .then(function (data) {
            loading.dismiss();
            if (data.retCode === _this.weatherService.SUCCESS) {
                var result = data.result[0];
                localStorage.setItem("position", JSON.stringify({ city: result.city, province: result.province }));
                _this.city = result.city;
                _this.province = result.province;
                _this.weather = result;
                _this.airColor = _this.pollutionColor(parseInt(_this.weather.pollutionIndex));
            }
            else {
                _this.toast.create({
                    message: data.msg + " \uD83D\uDE2D",
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
        }).catch(function (error) {
            loading.dismiss();
        });
    };
    HomePage.prototype.getWeatherByCity = function (city, province) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '数据加载中...'
        });
        loading.present();
        this.weatherService.qryWeatherByCity(city, province).then(function (data) {
            loading.dismiss();
            if (data.retCode === _this.weatherService.SUCCESS) {
                var result = data.result[0];
                _this.city = result.city;
                _this.province = result.province;
                _this.weather = result;
                _this.airColor = _this.pollutionColor(parseInt(_this.weather.pollutionIndex));
            }
            else {
                _this.toast.create({
                    message: data.msg + " \uD83D\uDE2D",
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
        }).catch(function () {
            loading.dismiss();
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.weatherService.qryWeatherByCity(this.city, this.province).then(function (data) {
            refresher.complete();
            if (data.retCode === _this.weatherService.SUCCESS) {
                var result = data.result[0];
                _this.weather = result;
                _this.airColor = _this.pollutionColor(parseInt(_this.weather.pollutionIndex));
                _this.toast.create({
                    message: '更新成功 👻',
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
            else {
                _this.toast.create({
                    message: data.msg + " \uD83D\uDE2D",
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
        }).catch(function () {
            refresher.complete();
        });
    };
    HomePage.prototype.pollutionColor = function (index) {
        var color;
        if (index <= 50) {
            color = "#0289C3";
        }
        else if (index > 50 && index <= 100) {
            color = "#76C0EF";
        }
        else if (index > 100 && index <= 150) {
            color = "#74C141";
        }
        else if (index > 150 && index <= 200) {
            color = "#EE9738";
        }
        else if (index > 200 && index <= 300) {
            color = "#F34000";
        }
        else {
            color = "#C01410";
        }
        return color;
    };
    HomePage.prototype.goCity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_city_city__["a" /* CityPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Workspaces\WeatherApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color=\'lightblue\'>\n    <ion-buttons text-center>\n      <button ion-button (click)="goCity()">\n        <ion-icon name="pin"></ion-icon>\n        {{weather&&weather.city}}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingText="松手刷新"\n      refreshingText="正在刷新">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row class="mid">\n      <ion-col col-7>\n        <custom-icon [text]="weather.weather|iconFormat" size="10rem"></custom-icon>\n      </ion-col>\n      <ion-col col-5>\n        <div class="mid-right">\n          <div class="temperature">\n            <span>{{weather.temperature&&weather.temperature.replace("℃","")}}</span>\n            <span>℃</span>\n          </div>\n          <div class="weather">{{weather.weather}}</div>\n          <div class="week">{{weather.week}}</div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="airCondition border-b-1px">\n      <ion-col>\n        <custom-icon text="icon-huanjingxinxi-" [color]="airColor"></custom-icon>\n        <span>{{weather.pollutionIndex +\' · \'+ weather.airCondition}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class="index wind-wen">\n      <ion-col col-6>\n        <custom-icon text="icon-fengxiang" size="3rem"></custom-icon>\n        <div>{{weather.wind}}</div>\n      </ion-col>\n      <ion-col col-6>\n        <custom-icon text="icon-wenshidu" size="3rem"></custom-icon>\n        <div>{{weather.humidity}}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="index">\n      <ion-col col-6>\n        <custom-icon text="icon-chuanyizhishu" size="3rem"></custom-icon>\n        <div>{{weather.dressingIndex}}</div>\n      </ion-col>\n      <ion-col col-6>\n        <custom-icon text="icon-yundong" size="3rem"></custom-icon>\n        <div>{{weather.exerciseIndex}}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list class="future">\n    <ion-item *ngFor="let item of weather.future">\n      <span class="data">{{item.date.substr(5)+\' \'+item.week}}</span>\n      <custom-icon class="day-time" [text]="item.dayTime|iconFormat"></custom-icon>\n      <span class="temperature">{{item.temperature}}</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Workspaces\WeatherApp\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(218);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_custom_icon_custom_icon__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_city_city__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_city_list_city_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_pipes_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_weather_service_weather_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// 自定义组件

// 页面



// 过滤器





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_city_city__["a" /* CityPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_city_list_city_list__["a" /* CityListPage */],
            __WEBPACK_IMPORTED_MODULE_5__components_custom_icon_custom_icon__["a" /* CustomIconComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                backButtonText: '',
                backButtonIcon: 'ios-arrow-back',
                pageTransition: 'ios-transition'
            }, {
                links: [
                    { loadChildren: '../pages/city-list/city-list.module#CityListPageModule', name: 'CityListPage', segment: 'city-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/city/city.module#CityPageModule', name: 'city', segment: 'city', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__pipes_pipes_module__["a" /* PipesModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_city_city__["a" /* CityPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_city_list_city_list__["a" /* CityListPage */],
            __WEBPACK_IMPORTED_MODULE_5__components_custom_icon_custom_icon__["a" /* CustomIconComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_13__providers_weather_service_weather_service__["a" /* WeatherServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, network, toast) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        network.onDisconnect().subscribe(function () {
            toast.create({
                message: '网络不在了 😭',
                duration: 3000,
                position: 'top'
            }).present();
        });
        network.onConnect().subscribe(function () {
            toast.create({
                message: '网络又回来了 😍',
                duration: 3000,
                position: 'top'
            }).present();
        });
        var myCitys = localStorage.getItem("myCitys") ? JSON.parse(localStorage.getItem("myCitys")) : [];
        localStorage.setItem("myCitys", JSON.stringify(myCitys));
        var position = localStorage.getItem("position") ? JSON.parse(localStorage.getItem("position")) : {};
        localStorage.setItem("position", JSON.stringify(position));
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleLightContent();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Workspaces\WeatherApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Workspaces\WeatherApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Weather; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Weather = (function () {
    function Weather() {
        this._airCondition = "0"; // 空气指数
        this._coldIndex = "0"; // 感冒指数
        this._dressingIndex = "——"; // 穿衣指数
        this._humidity = "——"; // 湿度
        this._pollutionIndex = "—"; // 空气质量指数
        this._temperature = "0"; // 温度
        this._time = "——"; // 时间
        this._wind = "__"; // 风向
        this._exerciseIndex = "——"; // 运动指数
    }
    Object.defineProperty(Weather.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "airCondition", {
        get: function () {
            return this._airCondition;
        },
        set: function (value) {
            this._airCondition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "coldIndex", {
        get: function () {
            return this._coldIndex;
        },
        set: function (value) {
            this._coldIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "updateTime", {
        get: function () {
            return this._updateTime;
        },
        set: function (value) {
            this._updateTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "distrct", {
        get: function () {
            return this._distrct;
        },
        set: function (value) {
            this._distrct = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "dressingIndex", {
        get: function () {
            return this._dressingIndex;
        },
        set: function (value) {
            this._dressingIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "humidity", {
        get: function () {
            return this._humidity;
        },
        set: function (value) {
            this._humidity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "pollutionIndex", {
        get: function () {
            return this._pollutionIndex;
        },
        set: function (value) {
            this._pollutionIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "province", {
        get: function () {
            return this._province;
        },
        set: function (value) {
            this._province = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "sunset", {
        get: function () {
            return this._sunset;
        },
        set: function (value) {
            this._sunset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "sunrise", {
        get: function () {
            return this._sunrise;
        },
        set: function (value) {
            this._sunrise = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "temperature", {
        get: function () {
            return this._temperature;
        },
        set: function (value) {
            this._temperature = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "washIndex", {
        get: function () {
            return this._washIndex;
        },
        set: function (value) {
            this._washIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "weather", {
        get: function () {
            return this._weather;
        },
        set: function (value) {
            this._weather = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "week", {
        get: function () {
            return this._week;
        },
        set: function (value) {
            this._week = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "wind", {
        get: function () {
            return this._wind;
        },
        set: function (value) {
            this._wind = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "exerciseIndex", {
        get: function () {
            return this._exerciseIndex;
        },
        set: function (value) {
            this._exerciseIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "dayTime", {
        get: function () {
            return this._dayTime;
        },
        set: function (value) {
            this._dayTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "night", {
        get: function () {
            return this._night;
        },
        set: function (value) {
            this._night = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "future", {
        get: function () {
            return this._future;
        },
        set: function (value) {
            this._future = value;
        },
        enumerable: true,
        configurable: true
    });
    return Weather;
}());
Weather = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], Weather);

//# sourceMappingURL=Weather.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CustomIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomIconComponent = (function () {
    function CustomIconComponent() {
    }
    return CustomIconComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('text'),
    __metadata("design:type", String)
], CustomIconComponent.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('color'),
    __metadata("design:type", String)
], CustomIconComponent.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('size'),
    __metadata("design:type", String)
], CustomIconComponent.prototype, "size", void 0);
CustomIconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'custom-icon',template:/*ion-inline-start:"D:\Workspaces\WeatherApp\src\components\custom-icon\custom-icon.html"*/'<i class="iconfont" [ngClass]="text" [ngStyle]="{\'color\':color,\'font-size\':size}"></i>\n'/*ion-inline-end:"D:\Workspaces\WeatherApp\src\components\custom-icon\custom-icon.html"*/
    }),
    __metadata("design:paramtypes", [])
], CustomIconComponent);

//# sourceMappingURL=custom-icon.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_format_icon_format__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__icon_format_icon_format__["a" /* IconFormatPipe */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__icon_format_icon_format__["a" /* IconFormatPipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the IconFormatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var IconFormatPipe = (function () {
    function IconFormatPipe() {
        this.describe = {
            "多云": "icon-icon-test1",
            "少云": "icon-icon-test",
            "晴": "icon-sun",
            "阴": "icon-yintian",
            "小雨": "icon-icon-test3",
            "雨": "icon-icon-test4",
            "雷阵雨": "icon-icon-test5",
            "中雨": "icon-icon-test2",
            "阵雨": "icon-icon-test4",
            "零散阵雨": "icon-icon-test8",
            "零散雷雨": "icon-icon-test7",
            "小雪": "icon-icon-test9",
            "雨夹雪": "icon-icon-test11",
            "阵雪": "icon-icon-test15",
            "霾": "icon-icon-test17",
            "运动": "icon-yundong",
            "日出": "icon-tianqi-richu",
            "日落": "icon-tianqi-rila",
            "穿衣指数": "icon-chuanyizhishu",
            "感冒指数": "icon-ganmaozhishu",
            "风向": "icon-fengxiang",
            "空气质量": "icon-huanjingxinxi-"
        };
    }
    /**
     * Takes a value and makes it lowercase.
     */
    IconFormatPipe.prototype.transform = function (value) {
        var icon = this.describe[value];
        if (!icon) {
            icon = "icon-icon-test22";
        }
        return icon;
    };
    return IconFormatPipe;
}());
IconFormatPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'iconFormat',
    })
], IconFormatPipe);

//# sourceMappingURL=icon-format.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeatherServiceProvider = (function () {
    function WeatherServiceProvider(http, toast) {
        this.http = http;
        this.toast = toast;
        this.SUCCESS = '200'; // 成功
    }
    /**
     * 定位
     * @returns {Promise<T>}
     */
    WeatherServiceProvider.prototype.getIp = function () {
        return this.http.get('//ipv4.myexternalip.com/json')
            .toPromise()
            .then(function (resp) { return resp.json().ip; })
            .catch(this.handleError);
    };
    /**
     * 根据IP地址查询天气
     *
     * @param ip
     * @returns {Promise<T>}
     */
    WeatherServiceProvider.prototype.qryWeatherByIp = function (ip) {
        return this.http.get("https://bird.ioliu.cn/v1/?url=http://apicloud.mob.com/v1/weather/ip?key=223c4f4a12780&ip=" + ip)
            .toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    /**
     * 根据地市查询天气
     *
     * @param city     城市
     * @param province 省份
     * @returns {Promise<T>}
     */
    WeatherServiceProvider.prototype.qryWeatherByCity = function (city, province) {
        var url = "https://bird.ioliu.cn/v1/?url=http://apicloud.mob.com/v1/weather/query?key=223c4f4a12780&city=" + city;
        if (province) {
            url += "&province=" + province;
        }
        return this.http.get(url)
            .toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    /**
     * 城市列表
     * @returns {Promise<T>}
     */
    WeatherServiceProvider.prototype.qryCitys = function () {
        var _this = this;
        var url = "https://bird.ioliu.cn/v1/?url=http://apicloud.mob.com/v1/weather/citys?key=223c4f4a12780";
        return this.http.get(url)
            .toPromise()
            .then(function (resp) { return resp.json().result; })
            .catch(function (error) {
            return _this.handleError(error, _this.toast);
        });
    };
    /**
     * 捕获异常并输出
     * @param error
     * @returns {Promise<never>}
     */
    WeatherServiceProvider.prototype.handleError = function (error, toast) {
        console.log(error);
        toast.create({
            message: '网络异常，请稍后再试 😭',
            duration: 3000,
            position: 'top'
        }).present();
        return Promise.reject(error.message || error);
    };
    return WeatherServiceProvider;
}());
WeatherServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */]])
], WeatherServiceProvider);

//# sourceMappingURL=weather-service.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map
