import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   brandImg!: string;
   home!: string;
   services!: string;
    about!: string;
   contact!: string;
   login!: string;

  

  constructor() { }

  ngOnInit(): void {
    
    $(document).ready(function(){
      $(window).scroll(function(){
        if(this.scrollY > 20){
          $(".navbar").addClass("navbarDark");
          $("#myBtn").fadeIn();
        }
        else{
          $(".navbar").removeClass("navbarDark");
          $("#myBtn").fadeOut();
        }
      });
      
      $("#myBtn").click(function(){scroll(0,0)});
      
      $('.navbar-toggler').click(function(){
        $(this).toggleClass("active");
        $(".collapse navbar-collapse").toggleClass("active");
      });
    })
      
    



    this.brandImg = "../assets/logo.png";
    this.home = "Accueil";
    this.services= "Services";
    this.about= "A propos";
    this.contact = "Contact";
   this.login = "Compte";
  }

}
