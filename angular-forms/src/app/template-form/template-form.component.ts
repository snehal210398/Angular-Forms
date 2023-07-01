import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  detailsForm:any = {
    name:"",
    email:"",
    password:"",
    address1:"",
    address2:"",
    city:"",
    state:"",
    zip:"",
    check:""
  }
  constructor() { }

  ngOnInit(): void {
  }

  addDetails(data:any){
    console.log(data.value);
    data.reset();
  }
}
