import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Component}  from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

// Root component
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  formModel: FormGroup;
  limit: string;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      'limit': new FormControl('', Validators.minLength(2))
    });
  }

  onSubmit() {
    console.log(this.formModel.value);
    this.limit = this.formModel.value.limit;
    console.log("limit = " + this.limit);
  }

  ngOnInit() {
    console.log("BEGIN AppComponent onInit");
    console.log("END AppComponent onInit");
  }
}
