import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminAvatar!: string;
  constructor(public fb: FormBuilder) { }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',
    [Validators.required, Validators.minLength(8)
    ] 
      ]
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }


  

  ngOnInit(): void {
    this.adminAvatar = "../assets/businessman.png"
  }

}
