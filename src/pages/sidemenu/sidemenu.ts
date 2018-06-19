import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  color: string;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {

  rootPage = 'HomePage';

  @ViewChild('nav') nav: NavController;

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage', color: 'eventarich', index: 0, icon: 'home'},
    { title: 'Vendor Kami', pageName: 'VendorPage', color: 'eventarich', index: 1, icon: 'body'},
    { title: 'Login', pageName: 'loginPage', color: 'eventarich', index: 2, icon: 'person'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openPage(page: PageInterface) {
    if(page.pageName === 'VendorPage') {
      this.nav.push(VendorkamiPage);
      this.menuCtrl.close();  
    }
  }

  isActive() {
    
  }


}
