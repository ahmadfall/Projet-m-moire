import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_services/crud.service';
import { Config } from '../_services/register';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: Config[]=[];
  

  constructor(  public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getUsers().subscribe(res => {
      console.log(res);  
    
  });
}

  
}
