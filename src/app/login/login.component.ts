import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_services/crud.service';
import { Login } from '../_services/login';
import { TokenStorageService } from '../_services/token-storage.service';

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
    private tokenStorage: TokenStorageService,
    private crudService: CrudService) { }

  
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',
    [
      Validators.required, 
    Validators.minLength(8)
  ] )
  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
   
  get f(){
    return this.form.controls;
  }
  ngOnInit(): void {
    
    /*if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

    
  }*/
  this.avatar ="../assets/programmer.png";
}
  submit(){
    
 
      
    this.crudService.userLogin(this.form.value)
   
      
    };
  }

   

