import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rarea',
  templateUrl: './rarea.component.html',
  styleUrls: ['./rarea.component.css']
})
export class RareaComponent implements OnInit {
  height:string=''
  width:string=''
  res:number=0

  constructor() {
    
  }

  calculate(){
    this.res= parseInt(this.height)* parseInt(this.width)
  }
  ngOnInit(): void {
  }

}
