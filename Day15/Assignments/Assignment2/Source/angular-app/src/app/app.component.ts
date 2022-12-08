import { Component } from '@angular/core';
import { audit } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  username:string=''
  password:string=''
  constructor(private auth:AuthService){}
  logIn() {
    if(this.auth.logIn(this.username,this.password)){
      alert('Login succesfull')
    }else{
      alert('wrong credentials')
    } 
  }
  logOut() {
    this.auth.logOut()
  }
}
