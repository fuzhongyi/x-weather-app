import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HttpModule} from '@angular/http';
import {MyApp} from './app.component';

// 自定义组件
import {CustomIconComponent} from '../components/custom-icon/custom-icon';

// 页面
import {HomePage} from '../pages/home/home';

// 过滤器
import  {PipesModule}  from '../pipes/pipes.module'

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Network} from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CustomIconComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CustomIconComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network
  ]
})
export class AppModule {
}
