import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_services/crud.service';
import { Observable, throwError } from 'rxjs';
import { Config } from '../_services/register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupAvatar!: string;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { }
  users: Config[] = [];
 
  
  form = this.fb.group({
    username: ['',
     [Validators.required, Validators.minLength(3)]
  ],
    name: ['', 
    [Validators.required, Validators.minLength(3)]
  ],
    email: ['',
     [Validators.required, Validators.email]
    ],
    password: ['',
    [
      Validators.required, 
    Validators.minLength(8)]
   ]
  });
   
  get f(){
    return this.form.controls;
  }
   
  
 

 

  ngOnInit(): void {
    this.signupAvatar = "../assets/signup.png"
  }

  submit() {
    this.crudService.AddUser(this.form.value)
    .subscribe(config => this.users.push(config));
    console.log('Post created successfully!');
    this.router.navigateByUrl('dashboard');
    
    
  }
    
  }
  

