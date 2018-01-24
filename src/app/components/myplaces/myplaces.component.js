"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var urls_1 = require("../../../app/config/urls");
;
var MyPlacesComponent = (function () {
    function MyPlacesComponent(myPlacesService) {
        this.myPlacesService = myPlacesService;
        this.subwayStations = [];
        this.finalLimit = this.appLimit;
        console.log("BEGIN MyPlacesComponent Constructor");
        this.appLimit = urls_1.default.GOOGLE_LIMIT;
        console.log("myPlacesComponent Constructor BEGIN calling myPlacesService");
        this.theDataSource = myPlacesService.getSubwayStations();
        console.log("myPlacesComponent Constructor END calling myPlacesService");
        console.log("Subscribable theDataSource set in now set in MyPlacesComponent");
        console.log("END MyPlacesComponent Constructor");
    }
    MyPlacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("BEGIN MyPlacesComponent onInit");
        this.theDataSource.subscribe(function (data) {
            if (Array.isArray(data)) {
                console.log("data IS_ARRAY: " + JSON.stringify(data));
                _this.subwayStations = data;
            }
            else {
                _this.subwayStations.push(data);
                console.log("data isNotArray now IS_PUSH");
            }
        }, function (err) { return console.log("cannot get places. Error code is : %s, URL is %s ", err.status, err.url); }, function () { return console.log("COMPLETE"); });
        console.log("END MyPlacesComponent onInit");
    };
    MyPlacesComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log("BEGIN ngOnChanges of myPlaceComponent");
        console.log("MYCHANGE: " + JSON.stringify(changes, null, 2));
        this.finalLimit = this.rowNumber || this.appLimit;
        console.log("finalLimit: " + this.finalLimit);
        this.theDataSource = this.myPlacesService.getSubwayStations(this.finalLimit);
        this.theDataSource.subscribe(function (data) {
            if (Array.isArray(data)) {
                console.log("data IS_ARRAY: " + JSON.stringify(data));
                _this.subwayStations = data;
            }
            else {
                _this.subwayStations.push(data);
                console.log("data isNotArray now IS_PUSH");
            }
        }, function (err) { return console.log("cannot get places. Error code is : %s, URL is %s ", err.status, err.url); }, function () { return console.log("COMPLETE"); });
        console.log("END ngOnChanges of myPlaceComponent");
    };
    return MyPlacesComponent;
}());
__decorate([
    core_1.Input()
], MyPlacesComponent.prototype, "rowNumber", void 0);
MyPlacesComponent = __decorate([
    core_1.Component({
        selector: 'myplaces',
        templateUrl: 'app/components/myplaces/myplaces.html',
        styleUrls: ['app/components/myplaces/myplaces.css']
    })
], MyPlacesComponent);
exports.MyPlacesComponent = MyPlacesComponent;
