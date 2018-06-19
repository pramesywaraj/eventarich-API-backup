import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the VendorkamiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vendorkami',
  templateUrl: 'vendorkami.html',
})
export class VendorkamiPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorkamiPage');
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.close();
  }


}
