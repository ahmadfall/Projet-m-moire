import { Component,   OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

   /* Footer */
    footerImg!: string;
    footerP!: string;
    footerH4!: string;
    servicesL!: string;
    aboutF!: string;
    faq!: string;
    footerH41!: string;
    adress!: string;
    tel!: number;
    email!: string;
    footerH42!: string;
    subscribeTxt!: string;
   
   /* payement Logo */
    free!: string;
    om!: string;
    wave!: string;
  formNews!:FormGroup

  constructor(private fb: FormBuilder) { }

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
      
    
      });

    this.formNews = this.fb.group({
      newsletterSubscribe!:[true]

    });
     /* Footer */
     this.footerImg = "../assets/logo.png";
     this.footerP = "Sénégal Travel ,un site qui facilite le déplacement par Bus ici au Sénégal et Bientôt par les autres moyens de transport.Il vous apporte aussi d'autres sous-services telques la réservation d'un hotel et la location de voiture.";
     this.footerH4 = "Liens en Vedettes";
     this.servicesL = "Services";
     this.aboutF = "A propos";
     this.faq = "FAQ";
     this.footerH41 = "Information";
     this.adress = "Dakar, Sénégal";
     this.tel = 782565826,
     this.email ="project@gmail.com";
     this.footerH42 = "Newsletter",
     this.subscribeTxt = "Souscrire";

     /* payment logo */
     this.free ="../assets/freemoney.png";
     this.om ="../assets/om.png";
     this.wave ="../assets/wave.png";
  }
  onSubmit() {
    // TODO!: Use EventEmitter with form value
    console.warn('donné du formulaire',this.formNews.value);
  }
  
  

}
