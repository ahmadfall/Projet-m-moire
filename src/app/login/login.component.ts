import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_services/crud.service';
import { Login } from '../_services/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  avatar!: string
  usersLogin: Login[]=[];
  constructor(private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) { }

  
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',
    [
      Validators.required, 
    Validators.minLength(8)
  ] )
  });
   
  get f(){
    return this.form.controls;
  }
  ngOnInit(): void {
    this.avatar ="../assets/programmer.png";
  }
  submit(){
    
 
      
    this.crudService.userLogin(this.form.value)
    .subscribe((res:any) => {
         console.log('Post created successfully!');
         console.log(this.form.value);
         this.router.navigateByUrl('dasboard');
    
  });



  }
}
