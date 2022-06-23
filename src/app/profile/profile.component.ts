import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_services/crud.service';
import { Login } from '../_services/login';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile=[]
  id!: number;

  constructor(
    private userService: UserService,
    private crudService: CrudService,
    private router: Router) { }
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
    this.getProfile()
  }
  getProfile(): void {
    this.userService.getProfile().subscribe((data)=>{
      this.profile = data;
      console.log(typeof(data))
      console.log(typeof(this.profile))
      console.log(this.profile);
    })
    
  }


}
