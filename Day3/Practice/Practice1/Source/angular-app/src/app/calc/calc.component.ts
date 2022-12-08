import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  @Input() num1: any;
  @Input() num2: any;
  @Input() opr!: string;
  result:number=0
  constructor() {

   }

  ngOnInit(): void {
  } 


  caculate(){

    switch (this.opr){
      case '+':
        this.result= parseInt(this.num1) + parseInt(this.num2) 
        break;
      case '-':
        this.result= parseInt(this.num1) - parseInt(this.num2) 
        break;
      case '*':
        this.result= parseInt(this.num1) * parseInt(this.num2) 
        break;
      case '/':
        this.result= parseInt(this.num1) / parseInt(this.num2) 
        break;
      }
  }


}
