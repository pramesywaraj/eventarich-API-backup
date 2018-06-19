import { Component } from '@angular/core';
import { App, NavController, MenuController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {SearchPage} from '../search/search';
import {EventPage} from '../event/event';
import {VendorkamiPage} from'../vendorkami/vendorkami';
import { EditprofilePage } from '../editprofile/editprofile';
import { OrderlogistikPage } from '../orderlogistik/orderlogistik';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl : MenuController) {

  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  searchPage()
  {
    this.navCtrl.push(SearchPage);
  }
  lihatEvent(){
    this.navCtrl.push(EventPage);
  }
  vendorkami()
  {
    this.navCtrl.push(VendorkamiPage);
  }
  lihatprofil()
  {
    this.navCtrl.push(EditprofilePage);
  }
  oderlogistik()
  {
    this.navCtrl.push(OrderlogistikPage);
  }

}