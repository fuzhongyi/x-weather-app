import {Component} from '@angular/core';
import {Platform, ToastController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Network} from '@ionic-native/network';

import {HomePage} from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, network: Network, toast: ToastController) {
    network.onDisconnect().subscribe(() => {
      toast.create({
        message: '网络不在了 😭',
        duration: 3000,
        position: 'bottom'
      }).present();
    });
    network.onConnect().subscribe(() => {
      toast.create({
        message: '网络又回来了 😍',
        duration: 3000,
        position: 'bottom'
      }).present();
    });
    let myCitys: any[] = localStorage.getItem("myCitys") ? JSON.parse(localStorage.getItem("myCitys")) : [];
    localStorage.setItem("myCitys", JSON.stringify(myCitys));
    let position: any[] = localStorage.getItem("position") ? JSON.parse(localStorage.getItem("position")) : {};
    localStorage.setItem("position", JSON.stringify(position));
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
    });
  }
}
