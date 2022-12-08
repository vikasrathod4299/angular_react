import { Component, OnInit } from '@angular/core';
import { signup } from './signUpform';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formData:signup={
    FirstName:'',
    LastName:'',
    Email:'',
    Address:'',
    PAN:'',
    Passwrod:''
  }
  data:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  signUp(){
    this.data=true;
  }
}
