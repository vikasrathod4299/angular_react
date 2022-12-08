import { Component, OnInit } from '@angular/core';
import { emp } from './emp';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formData:emp = {
    EmployeeID:'',
    Name:'',
    Address:'',
    Gender:'',
    DOJ:'',
    Hobbies:''
  }

  empList:emp[]=[]
  constructor() { 
    
  }
  
  ngOnInit(): void {
  }

  fetchData(){
    this.empList.push({...this.formData})    
  }
  sort(){
    this.empList=this.empList.sort((a,b) => a.Name.localeCompare(b.Name))
  }
  curMonth(){
    this.empList=this.empList.filter((item)=> (parseInt(item.DOJ.split('-')[1]) == new Date().getMonth()+1))
  }

}
