import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_services/crud.service';
import { Reservation } from '../_services/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  
  signupAvatar!: string;
  reservations: Reservation[]= [];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { }
 
  
  form = this.fb.group({
    nbre_place_reserve: ['',
    [Validators.required]
 ],
   telephone: ['', 
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
  
    this.crudService.userLogin(this.form.value)
    .subscribe(() => {
        console.log('Data added successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/payment'))
      }, (err) => {
        console.log(err);
    });
    
  }

}
