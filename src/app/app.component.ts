import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SetelahloginPage } from '../pages/setelahlogin/setelahlogin';
import { SearchPage } from '../pages/search/search';
import { FilterPage } from '../pages/filter/filter';
import { ProfilPage } from '../pages/profil/profil';
import { RegisterPage }from '../pages/register/register';
import { KebutuhaneventPage }from '../pages/kebutuhanevent/kebutuhanevent';
import { EventPage } from '../pages/event/event';
import { TambaheventPage }from '../pages/tambahevent/tambahevent';
import { VendorkamiPage } from '../pages/vendorkami/vendorkami';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // homePage = HomePage;
  // loginPage = LoginPage;
  // tabsPage = TabsPage;

  rootPage:any = LoginPage;
  // @ViewChild('nav') nav: NavController; 


  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();  
  }

  vendor() {
    this.nav.push(VendorkamiPage);
    this.menuCtrl.close();  
  }
}

