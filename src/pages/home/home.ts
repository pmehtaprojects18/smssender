import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { DataStorageService, IEventRecord } from '../../services/data.storage';

import * as moment from 'moment';
import { EventListPage } from '../event-list/event-list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public scheduleDate:string;
  public scheduleTime:string;
  public contactNumber:string;
  public textMessage: string='';
  public eventTitle: string='';
  public eventId:number;
  public isAllDayEvent: boolean = false;
  
  constructor(private localNotifications: LocalNotifications,
              private contacts: Contacts,
              private nav:NavController,
              private ds: DataStorageService) {
    
    this.scheduleDate = moment().format();
    this.scheduleTime = moment().format();
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
  resetView = ()=>{
    this.scheduleDate = moment().format();
    this.scheduleTime = moment().format();
    this.eventTitle = '';
    this.contactNumber='';
    this.isAllDayEvent=false;
    this.textMessage='';
  }
  addToLocalNotification = ()=>{
    this.eventId = moment().unix();
    let eventObj:IEventRecord = {
      id: this.eventId,
      title: this.eventTitle,
      textMessage: this.textMessage,
      eventDate: this.scheduleDate,
      eventTime: this.scheduleTime,
      phoneNumber: this.contactNumber,
      isAllDay: this.isAllDayEvent,
      isComplete: false
    }
    /*this.localNotifications.schedule({
      id: this.eventId,
      title: this.eventTitle,
      text: this.textMessage,
      at: new Date(2017,10,18,1,52),
      led: 'FF0000',
      sound: null
    });*/
    this.ds.saveEvent(eventObj).subscribe(resultSaved=>{
      console.log("Record Saved");
      this.resetView();
      this.ds.getEvent(this.eventId.toString()).subscribe(resultEvent => {
        console.log(resultEvent);
      });
    });

  }
  openEventsList = ()=>{
    this.nav.push(EventListPage);
  }
}
