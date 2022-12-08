import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-toz',
  templateUrl: './a-toz.component.html',
  styleUrls: ['./a-toz.component.css']
})
export class ATozComponent implements OnInit {
  array:String[] 
  constructor() {
    let arr = [];
    for (let i=65;i<=90;i++){
        arr.push(String.fromCharCode(i))
    }
    this.array=arr;
   }

  ngOnInit(): void {
  }

}
