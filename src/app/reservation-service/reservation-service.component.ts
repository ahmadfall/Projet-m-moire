import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_services/crud.service';

@Component({
  selector: 'app-reservation-service',
  templateUrl: './reservation-service.component.html',
  styleUrls: ['./reservation-service.component.scss']
})
export class ReservationServiceComponent implements OnInit {

  

  signupAvatar!: string;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { }
 
  
  form = this.fb.group({

 Name_Service: ['', 
   [Validators.required]
 ],
 Description_Service: ['', 
 [Validators.required]
],
Prix_du_service: ['', 
[Validators.required]
],
image: ['', 
[Validators.required]
],
nbre_place: ['', 
[Validators.required]
],
heure_depart: ['',
[Validators.required]
],
  });
   
  get f(){
    return this.form.controls;
  }
   
  
 

 

  ngOnInit(): void {
    this.signupAvatar = "../assets/signup.png"
  }

  submit() {
    this.crudService.addServices(this.form.value)
    .subscribe(data => 
      {
        console.log(data);
        
        
      },
      
      );
      console.log(this.form.value)
    console.log('Post created successfully!');
   // this.router.navigateByUrl('dashboard');
    
  }

}
