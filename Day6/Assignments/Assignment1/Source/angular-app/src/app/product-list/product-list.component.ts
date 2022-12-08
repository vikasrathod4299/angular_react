import { Component, OnInit } from '@angular/core';
import { prodinterface } from '../product/pi';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  prod:prodinterface={
    name:'',
    quantity:'',
    price:''
  }
  list:prodinterface[]=[]
  constructor() { }

  onSubmit(){
    this.list.push({...this.prod})
  }
  ngOnInit(): void {
  }

}
