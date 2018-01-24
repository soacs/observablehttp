
import {Component, Input, OnChanges, SimpleChange}  from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import ServiceUrls from '../../../app/config/urls';
import {MyPlacesService} from 'app/services/myplaces.service';

interface IChanges{[key:string]: SimpleChange};

@Component({
  selector: 'myplaces',
  templateUrl: './myplaces.component.html',
  styleUrls: ['./myplaces.component.css']
})
export class MyPlacesComponent implements OnChanges {
  @Input() rowNumber: string;
  subwayStations: Array<string> = [];
  theDataSource: Observable<any>;
  appLimit: string;
  finalLimit: string = this.appLimit;

  constructor(private myPlacesService: MyPlacesService){
    console.log("BEGIN MyPlacesComponent Constructor");
    this.appLimit = ServiceUrls.GOOGLE_LIMIT;
    console.log("myPlacesComponent Constructor BEGIN calling myPlacesService");
    this.theDataSource = myPlacesService.getSubwayStations();
    console.log("myPlacesComponent Constructor END calling myPlacesService");
    console.log("Subscribable theDataSource set in now set in MyPlacesComponent");
    console.log("END MyPlacesComponent Constructor");
  }

  ngOnInit() {
    console.log("BEGIN MyPlacesComponent onInit");
    this.theDataSource.subscribe(
      data=>{
        if(Array.isArray(data)) {
          console.log("data IS_ARRAY: " + JSON.stringify(data));
          this.subwayStations =  data;
        } else {
          this.subwayStations.push(data);
          console.log("data isNotArray now IS_PUSH");
        }
      },
      err=> console.log("cannot get places. Error code is : %s, URL is %s ", err.status, err.url),
      ()=>console.log("COMPLETE")
    );
    console.log("END MyPlacesComponent onInit");
  }

  ngOnChanges(changes:IChanges){
    console.log("BEGIN ngOnChanges of myPlacesComponent");
    console.log("MYCHANGE: " + JSON.stringify(changes, null, 2));
    this.finalLimit = this.rowNumber || this.appLimit;
    console.log("finalLimit: " + this.finalLimit);
    this.theDataSource =  this.myPlacesService.getSubwayStations(this.finalLimit);

    this.theDataSource.subscribe(
      data=>{
        if(Array.isArray(data)) {
          console.log("data IS_ARRAY: " + JSON.stringify(data));
          this.subwayStations =  data;
        } else {
          this.subwayStations.push(data);
          console.log("data isNotArray now IS_PUSH");
        }
      },
      err=> console.log("cannot get places. Error code is : %s, URL is %s ", err.status, err.url),
      ()=>console.log("COMPLETE")
    );
    console.log("END ngOnChanges of myPlaceComponent");
  }
}
