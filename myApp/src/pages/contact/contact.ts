import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Dataservice } from '../../service/dataservice';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public _dt: Dataservice) {

  }

  ionViewDidLoad() {
    if (this._dt.isLog) {
      let btnname = 'Logout'
      console.log(btnname);
    } else {
      let btnname = 'Login'
      console.log(btnname);
    }
  }

}
