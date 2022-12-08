import { Component, Input, OnInit } from '@angular/core';
import { prodinterface } from './pi';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() prod!:prodinterface


  constructor() {
       }

   get total(){
    return parseInt(this.prod.price) * parseInt(this.prod.quantity);
   }
   get discount(){
    return this.total * 0.05;
   }



  ngOnInit(): void {
  }

}
