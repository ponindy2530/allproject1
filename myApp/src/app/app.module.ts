import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
import { ProductService } from '../service/service';
import { Dataservice } from '../service/dataservice';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDoDjtVEY1gSPgXXi0pZu87AM1lWEF6qWM",
  authDomain: "matrial-38e21.firebaseapp.com",
  databaseURL: "https://matrial-38e21.firebaseio.com",
  storageBucket: "matrial-38e21.appspot.com",
  messagingSenderId: "728281856950"
};
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ProductService, Dataservice]
})
export class AppModule { }
