import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public scheduleDate:string;
  public scheduleTime:string;
  public contactNumber:string;
  public textMessage: string;
  
  constructor(private localNotifications: LocalNotifications,
              private contacts: Contacts) {
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      at: new Date(2017,10,18,1,52),
      led: 'FF0000',
      sound: null
    });
    
  }

  openContact = ()=>{
    this.contacts.pickContact().then(contact=>{
      if(contact.phoneNumbers.length>0){
        contact.phoneNumbers.forEach(element => {
          if(element.type === "mobile"){
            this.contactNumber = element.value;
          }
        });
      }
      console.log(contact);
    });
  }
}
