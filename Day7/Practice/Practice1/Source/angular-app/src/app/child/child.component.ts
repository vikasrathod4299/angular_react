import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() name = new EventEmitter<string>();
  inputName:string ='' 
  
  constructor() {
  }
  
  fireEvent() {
    this.name.emit(this.inputName)
  }
  ngOnInit(): void {
  }

}
