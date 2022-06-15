import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_services/crud.service';
import { serviceUpdate } from '../_services/update-service';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.scss']
})
export class ServiceAddComponent implements OnInit { 
  bus!: string;
  bus1!: string;
  bus2!: string;
  bus3!: string;
  services: serviceUpdate[] =[];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.bus = "../assets/bus.jpg"
    this.bus1 = "../assets/Bus.png"
    this.bus2 = "../assets/bus2.png"
    this.bus3 = "../assets/bus3.png"
    
    this.crudService.getService().subscribe((data: serviceUpdate[])=> {
      this.services = data;
      console.log(this.services);
      
    }); 
      
    
  }
  getService(): void {
    this.crudService.getService()
    .subscribe(services => (this.services = services));
  }
  

}
