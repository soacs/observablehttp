
import {BrowserModule} from '@angular/platform-browser'
import {NgModule}  from '@angular/core';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MyPlacesService} from 'app/services/myplaces.service';
import {AppComponent} from 'app/components/application/app.component';
import {MyPlacesComponent} from 'app/components/myplaces/myplaces.component';


@NgModule({
  imports: [BrowserModule, HttpModule, ReactiveFormsModule],
  declarations: [AppComponent, MyPlacesComponent],
  providers: [MyPlacesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
