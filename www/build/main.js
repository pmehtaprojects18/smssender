webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_storage__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_list_event_list__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(localNotifications, contacts, nav, ds) {
        var _this = this;
        this.localNotifications = localNotifications;
        this.contacts = contacts;
        this.nav = nav;
        this.ds = ds;
        this.textMessage = '';
        this.eventTitle = '';
        this.isAllDayEvent = false;
        this.openContact = function () {
            _this.contacts.pickContact().then(function (contact) {
                if (contact.phoneNumbers.length > 0) {
                    contact.phoneNumbers.forEach(function (element) {
                        if (element.type === "mobile") {
                            _this.contactNumber = element.value;
                        }
                    });
                }
                console.log(contact);
            });
        };
        this.resetView = function () {
            _this.scheduleDate = __WEBPACK_IMPORTED_MODULE_5_moment__().format();
            _this.scheduleTime = __WEBPACK_IMPORTED_MODULE_5_moment__().format();
            _this.eventTitle = '';
            _this.contactNumber = '';
            _this.isAllDayEvent = false;
            _this.textMessage = '';
        };
        this.addToLocalNotification = function () {
            _this.eventId = __WEBPACK_IMPORTED_MODULE_5_moment__().unix();
            var eventObj = {
                id: _this.eventId,
                title: _this.eventTitle,
                textMessage: _this.textMessage,
                eventDate: _this.scheduleDate,
                eventTime: _this.scheduleTime,
                phoneNumber: _this.contactNumber,
                isAllDay: _this.isAllDayEvent,
                isComplete: false
            };
            /*this.localNotifications.schedule({
              id: this.eventId,
              title: this.eventTitle,
              text: this.textMessage,
              at: new Date(2017,10,18,1,52),
              led: 'FF0000',
              sound: null
            });*/
            _this.ds.saveEvent(eventObj).subscribe(function (resultSaved) {
                console.log("Record Saved");
                _this.resetView();
                _this.ds.getEvent(_this.eventId.toString()).subscribe(function (resultEvent) {
                    console.log(resultEvent);
                });
            });
        };
        this.openEventsList = function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__event_list_event_list__["a" /* EventListPage */]);
        };
        this.scheduleDate = __WEBPACK_IMPORTED_MODULE_5_moment__().format();
        this.scheduleTime = __WEBPACK_IMPORTED_MODULE_5_moment__().format();
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/pmehta/Documents/smssender/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Schedule Event\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openEventsList()">\n        <ion-icon name="list-box"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-list>\n    <ion-item>\n      <ion-label color="dark">Title :</ion-label>\n      <ion-input type="text" placeholder="Enter Event Title" [(ngModel)]="eventTitle" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">Date :</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="scheduleDate" placeholder="Select Date"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">All Day :</ion-label>\n      <ion-toggle checked="false" [(ngModel)]="isAllDayEvent"></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="!isAllDayEvent">\n      <ion-label color="dark">Time :</ion-label>\n      <ion-datetime displayFormat="hh:mm A" [(ngModel)]="scheduleTime"  placeholder="Select Time"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">To :</ion-label>\n      <ion-input type="text" placeholder="Enter Phone Number" [(ngModel)]="contactNumber" ></ion-input>\n      <button ion-button icon-only item-end (click)="openContact()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">Message :</ion-label>\n      <ion-textarea placeholder="Enter a message" [(ngModel)]="textMessage" ></ion-textarea>\n    </ion-item>  \n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button large full color="secondary" [disabled]="textMessage.length <= 5 && eventTitle.length <=5" (click)="addToLocalNotification()">Save Event</button>\n  </ion-toolbar>\n</ion-footer>`/*ion-inline-end:"/Users/pmehta/Documents/smssender/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__["a" /* Contacts */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__["a" /* Contacts */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_storage__["a" /* DataStorageService */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataStorageService = (function () {
    function DataStorageService(storage) {
        var _this = this;
        this.storage = storage;
        this.saveEvent = function (eventRecord) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                var key = eventRecord.id.toString();
                var value = JSON.stringify(eventRecord);
                _this.storage.set(key, value).then(function (result) {
                    observer.next(true);
                }).catch(function (err) {
                    observer.error(false);
                });
            });
        };
        this.getAllEvents = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                var records = [];
                _this.storage.forEach(function (value, key, iterationNumber) {
                    var obj = { EventId: key, EventData: JSON.parse(value) };
                    records.push(obj);
                }).then(function (result) {
                    observer.next(records);
                }).catch(function (err) {
                    observer.error(err);
                });
            });
        };
        this.getEvent = function (eventId) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.storage.get(eventId).then(function (result) {
                    observer.next(result);
                }).catch(function (err) {
                    observer.error(err);
                });
            });
        };
    }
    DataStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _a || Object])
    ], DataStorageService);
    return DataStorageService;
    var _a;
}());

//# sourceMappingURL=data.storage.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(342);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_contacts__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_data_storage__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_event_list_event_list__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_list_event_list__["a" /* EventListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__smssenderdb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_list_event_list__["a" /* EventListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_contacts__["a" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_10__services_data_storage__["a" /* DataStorageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pmehta/Documents/smssender/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/pmehta/Documents/smssender/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 200,
	"./af.js": 200,
	"./ar": 201,
	"./ar-dz": 202,
	"./ar-dz.js": 202,
	"./ar-kw": 203,
	"./ar-kw.js": 203,
	"./ar-ly": 204,
	"./ar-ly.js": 204,
	"./ar-ma": 205,
	"./ar-ma.js": 205,
	"./ar-sa": 206,
	"./ar-sa.js": 206,
	"./ar-tn": 207,
	"./ar-tn.js": 207,
	"./ar.js": 201,
	"./az": 208,
	"./az.js": 208,
	"./be": 209,
	"./be.js": 209,
	"./bg": 210,
	"./bg.js": 210,
	"./bm": 211,
	"./bm.js": 211,
	"./bn": 212,
	"./bn.js": 212,
	"./bo": 213,
	"./bo.js": 213,
	"./br": 214,
	"./br.js": 214,
	"./bs": 215,
	"./bs.js": 215,
	"./ca": 216,
	"./ca.js": 216,
	"./cs": 217,
	"./cs.js": 217,
	"./cv": 218,
	"./cv.js": 218,
	"./cy": 219,
	"./cy.js": 219,
	"./da": 220,
	"./da.js": 220,
	"./de": 221,
	"./de-at": 222,
	"./de-at.js": 222,
	"./de-ch": 223,
	"./de-ch.js": 223,
	"./de.js": 221,
	"./dv": 224,
	"./dv.js": 224,
	"./el": 225,
	"./el.js": 225,
	"./en-au": 226,
	"./en-au.js": 226,
	"./en-ca": 227,
	"./en-ca.js": 227,
	"./en-gb": 228,
	"./en-gb.js": 228,
	"./en-ie": 229,
	"./en-ie.js": 229,
	"./en-nz": 230,
	"./en-nz.js": 230,
	"./eo": 231,
	"./eo.js": 231,
	"./es": 232,
	"./es-do": 233,
	"./es-do.js": 233,
	"./es-us": 234,
	"./es-us.js": 234,
	"./es.js": 232,
	"./et": 235,
	"./et.js": 235,
	"./eu": 236,
	"./eu.js": 236,
	"./fa": 237,
	"./fa.js": 237,
	"./fi": 238,
	"./fi.js": 238,
	"./fo": 239,
	"./fo.js": 239,
	"./fr": 240,
	"./fr-ca": 241,
	"./fr-ca.js": 241,
	"./fr-ch": 242,
	"./fr-ch.js": 242,
	"./fr.js": 240,
	"./fy": 243,
	"./fy.js": 243,
	"./gd": 244,
	"./gd.js": 244,
	"./gl": 245,
	"./gl.js": 245,
	"./gom-latn": 246,
	"./gom-latn.js": 246,
	"./gu": 247,
	"./gu.js": 247,
	"./he": 248,
	"./he.js": 248,
	"./hi": 249,
	"./hi.js": 249,
	"./hr": 250,
	"./hr.js": 250,
	"./hu": 251,
	"./hu.js": 251,
	"./hy-am": 252,
	"./hy-am.js": 252,
	"./id": 253,
	"./id.js": 253,
	"./is": 254,
	"./is.js": 254,
	"./it": 255,
	"./it.js": 255,
	"./ja": 256,
	"./ja.js": 256,
	"./jv": 257,
	"./jv.js": 257,
	"./ka": 258,
	"./ka.js": 258,
	"./kk": 259,
	"./kk.js": 259,
	"./km": 260,
	"./km.js": 260,
	"./kn": 261,
	"./kn.js": 261,
	"./ko": 262,
	"./ko.js": 262,
	"./ky": 263,
	"./ky.js": 263,
	"./lb": 264,
	"./lb.js": 264,
	"./lo": 265,
	"./lo.js": 265,
	"./lt": 266,
	"./lt.js": 266,
	"./lv": 267,
	"./lv.js": 267,
	"./me": 268,
	"./me.js": 268,
	"./mi": 269,
	"./mi.js": 269,
	"./mk": 270,
	"./mk.js": 270,
	"./ml": 271,
	"./ml.js": 271,
	"./mr": 272,
	"./mr.js": 272,
	"./ms": 273,
	"./ms-my": 274,
	"./ms-my.js": 274,
	"./ms.js": 273,
	"./my": 275,
	"./my.js": 275,
	"./nb": 276,
	"./nb.js": 276,
	"./ne": 277,
	"./ne.js": 277,
	"./nl": 278,
	"./nl-be": 279,
	"./nl-be.js": 279,
	"./nl.js": 278,
	"./nn": 280,
	"./nn.js": 280,
	"./pa-in": 281,
	"./pa-in.js": 281,
	"./pl": 282,
	"./pl.js": 282,
	"./pt": 283,
	"./pt-br": 284,
	"./pt-br.js": 284,
	"./pt.js": 283,
	"./ro": 285,
	"./ro.js": 285,
	"./ru": 286,
	"./ru.js": 286,
	"./sd": 287,
	"./sd.js": 287,
	"./se": 288,
	"./se.js": 288,
	"./si": 289,
	"./si.js": 289,
	"./sk": 290,
	"./sk.js": 290,
	"./sl": 291,
	"./sl.js": 291,
	"./sq": 292,
	"./sq.js": 292,
	"./sr": 293,
	"./sr-cyrl": 294,
	"./sr-cyrl.js": 294,
	"./sr.js": 293,
	"./ss": 295,
	"./ss.js": 295,
	"./sv": 296,
	"./sv.js": 296,
	"./sw": 297,
	"./sw.js": 297,
	"./ta": 298,
	"./ta.js": 298,
	"./te": 299,
	"./te.js": 299,
	"./tet": 300,
	"./tet.js": 300,
	"./th": 301,
	"./th.js": 301,
	"./tl-ph": 302,
	"./tl-ph.js": 302,
	"./tlh": 303,
	"./tlh.js": 303,
	"./tr": 304,
	"./tr.js": 304,
	"./tzl": 305,
	"./tzl.js": 305,
	"./tzm": 306,
	"./tzm-latn": 307,
	"./tzm-latn.js": 307,
	"./tzm.js": 306,
	"./uk": 308,
	"./uk.js": 308,
	"./ur": 309,
	"./ur.js": 309,
	"./uz": 310,
	"./uz-latn": 311,
	"./uz-latn.js": 311,
	"./uz.js": 310,
	"./vi": 312,
	"./vi.js": 312,
	"./x-pseudo": 313,
	"./x-pseudo.js": 313,
	"./yo": 314,
	"./yo.js": 314,
	"./zh-cn": 315,
	"./zh-cn.js": 315,
	"./zh-hk": 316,
	"./zh-hk.js": 316,
	"./zh-tw": 317,
	"./zh-tw.js": 317
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 398;

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_storage__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventListPage = (function () {
    function EventListPage(navCtrl, navParams, ds) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ds = ds;
        this.items = [];
    }
    EventListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EventListPage');
        this.ds.getAllEvents().subscribe(function (resultEvent) {
            console.log(resultEvent);
            _this.items = resultEvent;
        });
    };
    EventListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-list',template:/*ion-inline-start:"/Users/pmehta/Documents/smssender/src/pages/event-list/event-list.html"*/`<!--\n  Generated template for the EventListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="primary">\n\n  <ion-navbar>\n    <ion-title>EventList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item.EventId)">\n      {{ item[\'EventData\'].title }}\n    </button>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/pmehta/Documents/smssender/src/pages/event-list/event-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_storage__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_storage__["a" /* DataStorageService */]) === "function" && _c || Object])
    ], EventListPage);
    return EventListPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=event-list.js.map

/***/ })

},[318]);
//# sourceMappingURL=main.js.map