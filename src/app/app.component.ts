import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'ion-Button',
      url: '/ionbutton',
      icon: 'list'
    },
    {
      title: 'ion-ActionSheet',
      url: '/ionActionSheet',
      icon: 'list'
    },
    {
      title: 'ion-Alert',
      url: '/ionAlert',
      icon: 'list'
    },
    {
      title: 'ion-card',
      url: '/ion-card',
      icon: 'list'
    },
    {
      title: 'ion-badge',
      url: '/ion-badge',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
