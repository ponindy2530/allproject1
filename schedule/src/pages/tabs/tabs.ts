import { Component } from '@angular/core';
import { Dataservice } from '../../service/dataservice';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = LoginPage;
  id: any = localStorage.getItem('tokenHeader');
  btnname: any;
  constructor(public _dt: Dataservice) {

  }

  ionViewDidLoad() {
    if (this.id == 1) {
      this.btnname = 'Logout'
    } else {
      this.btnname = 'Login'
    }
    console.log(this.id);
  }
}
