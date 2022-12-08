import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  constructor() { }

  greetngs(){
    return 'Hello, good morning!'
  }
}
