import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string=''
  password:string=''
  user:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    if(this.username.length>0 && this.password.length>0){
      this.user=true
    }else{
      this.user=false
    }
  }
}
