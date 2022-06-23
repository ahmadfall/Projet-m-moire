import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap,Data, Router } from '@angular/router';
import { CrudService } from '../_services/crud.service';
import { Reservation } from '../_services/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  idService!: number
  
  signupAvatar!: string;
  reservations: Reservation[]= [];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private crudService: CrudService,
  ) { }
 
  
  form = this.fb.group({
    nbre_de_place_reserve: ['',
    [Validators.required]
 ],
   telephone: ['', 
   [Validators.required]
 ],
 idService:this.route.snapshot.params.idService
  });
   
  get f(){
    return this.form.controls;
  }
   
  
 

 

  ngOnInit(): void {
   
3
this.idService = this.route.snapshot.params.idService;
4
5/*
 
this.route.queryParams.subscribe(params => {
  this.idService = params['idService'];
});*/
    this.signupAvatar = "../assets/signup.png"
  }
    
  

  submit() {
    this.idService 
    
    this.crudService.userReservation(this.form.value)
  ;
    
  }

}
