import { Component } from '@angular/core';
import { GreetingsService } from './greetings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  greeting:string=this.greetings.greetngs()
  constructor(private greetings:GreetingsService){}

}
