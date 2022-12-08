import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  Names= new FormGroup({
    firstName: new FormControl(''),
    lastName : new FormControl(''),
    gender: new FormControl(''),
    address:new FormGroup({
      city:new FormControl(''),
      state:new FormControl('')
    })
  })
  onSubmit(){
    console.warn(this.Names.value);
  }

}
