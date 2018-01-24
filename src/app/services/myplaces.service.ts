
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import ServiceUrls from '../config/urls';
import {Injectable} from '@angular/core';

@Injectable()
export class MyPlacesService {
    appToken: string;
    appLimit: string;
    appUrl: string;
    dynamicUrl: string;
    theDataSource: Observable<any>;

    constructor(private http: Http) {
        console.log("BEGIN PlacesServices Constructor");
        this.appToken = ServiceUrls.GOOGLE_TOKEN;
        this.appLimit = ServiceUrls.GOOGLE_LIMIT;
        this.appUrl = ServiceUrls.GOOGLE_URL;
        this.dynamicUrl = this.appUrl +"?$limit="+this.appLimit+"&$$app_token="+this.appToken;
        console.log("END PlacesServices Constructor");
    }

    setDynamicUrl(limit: string){
        this.appLimit = limit;
        this.dynamicUrl = this.appUrl +"?$limit="+this.appLimit+"&$$app_token="+this.appToken;
    }

    resetDynamicUrl(){
        this.appLimit = ServiceUrls.GOOGLE_LIMIT;
        this.dynamicUrl = this.appUrl +"?$limit="+this.appLimit+"&$$app_token="+this.appToken;
    }

    getSubwayStations(limit?: string) : Observable<string> {
        console.log("BEGIN getSubwayStations limit = " + limit);
        if(limit){
          this.setDynamicUrl(limit);
        } else {
          this.resetDynamicUrl();
        }
        this.theDataSource = this.http.get(this.dynamicUrl).map(res=>res.json());
        return this.theDataSource;
    }
}

