import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HttpModule} from '@angular/http';
import {MyApp} from './app.component';

// 自定义组件
import {CustomIconComponent} from '../components/custom-icon/custom-icon';

// 页面
import {HomePage} from '../pages/home/home';
import {CityPage} from '../pages/city/city';
import {CityListPage} from '../pages/city-list/city-list';

// 过滤器
import  {PipesModule}  from '../pipes/pipes.module'

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Network} from '@ionic-native/network';
import {WeatherServiceProvider} from '../providers/weather-service/weather-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CityPage,
    CityListPage,
    CustomIconComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      pageTransition: 'ios-transition'
    }),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CityPage,
    CityListPage,
    CustomIconComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    WeatherServiceProvider
  ]
})
export class AppModule {
}
