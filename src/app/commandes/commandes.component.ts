import { Component, OnInit } from '@angular/core';
import { Login } from '../_services/login';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {

  commandes: Login[] =[]
  constructor(  private userService: UserService,) { }

  ngOnInit(): void {
    this.getCommand()
  }
  getCommand(): void {
    this.userService.getCommands().subscribe((data: Login[])=>{
      this.commandes = data;
      console.log(this.commandes);
    })
    
  }

}
