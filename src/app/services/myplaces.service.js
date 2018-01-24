"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var urls_1 = require("../config/urls");
var core_1 = require("@angular/core");
var MyPlacesService = (function () {
    function MyPlacesService(http) {
        this.http = http;
        console.log("BEGIN PlacesServices Constructor");
        this.appToken = urls_1.default.GOOGLE_TOKEN;
        this.appLimit = urls_1.default.GOOGLE_LIMIT;
        this.appUrl = urls_1.default.GOOGLE_URL;
        this.dynamicUrl = this.appUrl + "?$limit=" + this.appLimit + "&$$app_token=" + this.appToken;
        console.log("END PlacesServices Constructor");
    }
    MyPlacesService.prototype.setDynamicUrl = function (limit) {
        this.appLimit = limit;
        this.dynamicUrl = this.appUrl + "?$limit=" + this.appLimit + "&$$app_token=" + this.appToken;
    };
    MyPlacesService.prototype.resetDynamicUrl = function () {
        this.appLimit = urls_1.default.GOOGLE_LIMIT;
        this.dynamicUrl = this.appUrl + "?$limit=" + this.appLimit + "&$$app_token=" + this.appToken;
    };
    MyPlacesService.prototype.getSubwayStations = function () {
        this.resetDynamicUrl();
        this.theDataSource = this.http.get(this.dynamicUrl).map(function (res) { return res.json(); });
        return this.theDataSource;
    };
    MyPlacesService.prototype.getSubwayStations = function (limit) {
        this.setDynamicUrl(limit);
        this.theDataSource = this.http.get(this.dynamicUrl).map(function (res) { return res.json(); });
        return this.theDataSource;
    };
    return MyPlacesService;
}());
MyPlacesService = __decorate([
    core_1.Injectable()
], MyPlacesService);
exports.MyPlacesService = MyPlacesService;
