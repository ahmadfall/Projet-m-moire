import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   id!:any;
  admiLogin!: string;
  userSignUp!: string;
  userlogin!: string;
  brandImg!: string;
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.admiLogin = "ADMIN LOGIN";
    this.userSignUp ="USER SIGNUP";
    this.userlogin = "USER LOGIN";
    this.brandImg = "../assets/logo.png"
  }


}
