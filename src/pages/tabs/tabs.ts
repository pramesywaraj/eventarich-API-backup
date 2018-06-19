import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetelahloginPage } from '../setelahlogin/setelahlogin';
import { TopeventPage } from '../topevent/topevent';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  setelahLoginPage = SetelahloginPage;
  topEvent = TopeventPage;

}
