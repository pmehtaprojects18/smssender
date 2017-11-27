import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataStorageService, IEventRecord } from '../../services/data.storage';

/**
 * Generated class for the EventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {
  public items:IEventRecord[]=[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private ds: DataStorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
    this.ds.getAllEvents().subscribe(resultEvent => {
      console.log(resultEvent);
      this.items = resultEvent;
    });
  }

}
