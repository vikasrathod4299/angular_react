import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1:number=0
  num2:number=0
  title = 'angular-app';

  get equal(){
    if(this.num1==this.num2) {
      return true
    }else{
      return false
    } 
  }
  get greater(){
    if(this.num1>this.num2) {
      return true
    }else{
      return false
    } 
  }
  
}
