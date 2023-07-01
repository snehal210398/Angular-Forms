import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  detailsReactiveForm!:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.detailsReactiveForm = this.fb.group({
      name: new FormControl("", {validators:[Validators.required]}),
      email:['', [Validators.required]],
      password: new FormControl("", {validators:[Validators.required]}),
      address1:["", [Validators.required]],
      address2:["", [Validators.required]],
      city:["", [Validators.required]],
      state:["", [Validators.required]],
      zip:["", [Validators.required]],
      check:["", [Validators.required]]
    })

  }

   addDetails(){
    console.log(this.detailsReactiveForm.getRawValue());
    this.detailsReactiveForm.reset();
  }

}
