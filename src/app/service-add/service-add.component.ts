import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { CrudService } from '../_services/crud.service';
import { postService } from '../_services/add-service';
import { UserService } from '../_services/user.service';

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
  services: postService[] =[];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private route: ActivatedRoute,
    private userService: UserService
  
  ) { }

  ngOnInit(): void {

    this.bus = "../assets/bus.jpg"
    this.bus1 = "../assets/Bus.png"
    this.bus2 = "../assets/bus2.png"
    this.bus3 = "../assets/bus3.png"
    
      this.getAlldata();
    
  }
  getAlldata(): void {
    this.userService.getServices().subscribe((data: postService[])=>{
      this.services = data;
      console.log(this.services);
    })
    
  }
  

}
