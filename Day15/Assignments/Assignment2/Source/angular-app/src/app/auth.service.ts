import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private routes:Router) { }

  users:any=[{username:'user',password:'user123'},{username:'admin',password:'admin123'}]

  logIn(username:string, password:String){
    let user = this.users.find((user:any)=> user.username===username && user.password===password)
    if(user){
      localStorage.setItem('username',user.username)
      return true
    }
    return false  
  }

  logOut(){

    if(this.getUser()){;  
      localStorage.removeItem('username')
      alert('user Logged out')
      this.routes.navigate(['/'])
    }else{
      alert('you are not logged in')
    }
  }
  
  getUser(){
    return localStorage.getItem('username') 
  }

  isSignedin(){
    if(this.getUser()){
      return true
    }else{
      return false
    }
  }

  }

