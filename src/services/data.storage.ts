import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

export interface IEventRecord{
    id:number,
    title:string,
    eventDate: string,
    eventTime: string,
    isAllDay: boolean,
    phoneNumber: string,
    textMessage: string,
    isComplete?: boolean
}
@Injectable()
export class DataStorageService{

    constructor(private storage: Storage) { }

    saveEvent = (eventRecord:IEventRecord):Observable<boolean>=>{
        return Observable.create(observer =>{
            let key:string = eventRecord.id.toString();
            let value = JSON.stringify(eventRecord);
    
            this.storage.set(key,value).then((result)=>{
                observer.next(true);
            }).catch((err)=>{
                observer.error(false);
            });
        });
    }

    getAllEvents = ():Observable<[IEventRecord]>=>{
        return Observable.create(observer =>{
            let records = [];
            this.storage.forEach((value, key, iterationNumber)=>{
            let obj = {EventId:key,EventData:JSON.parse(value)};
                records.push(obj);
            }).then((result)=>{
                observer.next(records);
            }).catch((err)=>{
                observer.error(err);
            });
        });
    }
    getEvent = (eventId:string):Observable<boolean>=>{
        return Observable.create(observer =>{
            this.storage.get(eventId).then((result)=>{
                observer.next(result);
            }).catch((err)=>{
                observer.error(err);
            });
        });
    }
}