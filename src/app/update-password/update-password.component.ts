import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_services/crud.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  constructor( public fb: FormBuilder, private router: Router, private crudService: CrudService) { }
id!:number;

    
  form = this.fb.group({
    
    password: ['',
    [
      Validators.required, 
    Validators.minLength(8)]
   ]
   ,
   passwordReset: ['',
   [
     Validators.required, 
   Validators.minLength(8)]
  ]

  })  
  get f(){
    return this.form.controls;
  }     
  
  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.value);
    this.crudService.updatePassword(this.id, this.form.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('post/index');
    })
  }

}
