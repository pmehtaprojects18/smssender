import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { IonicStorageModule } from '@ionic/storage';
import { DataStorageService } from '../services/data.storage';
import { EventListPage } from '../pages/event-list/event-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventListPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot({
      name: '__smssenderdb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    Contacts,
    DataStorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
