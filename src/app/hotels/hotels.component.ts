import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  img1!: string;
  img2!: string;
  img3!: string;
  img4!: string;
  img5!: string;
  img6!: string;
  p1!: string;

  img7!: string;
  img8!: string;
  img9!: string;
  img10!: string;
  img11!: string;
  img12!: string;
  p2!: string;

  img13!: string;
  img14!: string;
  img15!: string;
  img16!: string;
  img17!: string;
  img18!: string;
  p3!: string;

  img19!: string;
  img20!: string;
  img21!: string;
  img22!: string;
  img23!: string;
  img24!: string;
  p4!: string;

  img25!: string;
  img26!: string;
  img27!: string;
  img28!: string;
  img29!: string;
  img30!: string;
  p5!: string;

  img31!: string;
  img32!: string;
  img33!: string;
  img34!: string;
  img35!: string;
  img36!: string;
  p6!: string;

  img37!: string;
  img38!: string;
  img39!: string;
  img40!: string;
  img41!: string;
  img42!: string;
  p7!: string;

  img43!: string;
  img44!: string;
  img45!: string;
  img46!: string;
  img47!: string;
  img48!: string;
  p8!: string;



  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
      $("#hide").click(function(){
        $(".p1").hide();
      });
      $("#show").click(function(){
        $(".p1").show();
      });
    });

    this.img1 = "../assets/hotels/nianing1.jpg";
    this.img2 = "../assets/hotels/nianing2.jpg";
    this.img3 = "../assets/hotels/nianing3.jpg";
    this.img4 = "../assets/hotels/nianing4.jpg";
    this.img5 = "../assets/hotels/nianing5.jpg";
    this.img6 = "../assets/hotels/nianing6.jpg";
    this.p1 = "situé à Nianing, l'établissement Le baobab de nianing possède un restaurant, une piscine extérieure, un bar et un salon commun. Il possède également un jardin et une terrasse."

    this.img7 = "../assets/hotels/teranga.jpg";
    this.img8 = "../assets/hotels/teranga2.jpg";
    this.img9 = "../assets/hotels/teranga3.jpg";
    this.img10 = "../assets/hotels/teranga4.jpg";
    this.img11 = "../assets/hotels/teranga5.jpg";
    this.img12 = "../assets/hotels/teranga6.jpg";
    this.p2 = "LES JARDINS DU FLAMBOYANT 3 étoiles Hôtel à Ziguinchor Doté d'un bar et d'un jardin, l'établissement LES JARDINS DU FLAMBOYANT est situé à Ziguinchor, à 400 mètres du port d'où part le ferry."

    
    this.img13 = "../assets/hotels/radisson1.jpg";
    this.img14 = "../assets/hotels/radisson2.jpg";
    this.img15 = "../assets/hotels/radisson3.jpg";
    this.img16 = "../assets/hotels/radisson4.jpg";
    this.img17 = "../assets/hotels/radisson5.jpg";
    this.img18 = "../assets/hotels/radisson6.jpg";
    this.p3 = "Faites-vous chouchouter comme une star en profitant du service exclusif de l'établissement Radisson Blu Hotel, Dakar Sea PlazaVous pouvez bénéficier d'une réduction Genius dans l'établissement Radisson Blu Hotel, Dakar Sea Plaza "
  
    this.img19 = "../assets/hotels/sl1.jpg";
    this.img20 = "../assets/hotels/sl2.jpg";
    this.img21 = "../assets/hotels/sl3.jpg";
    this.img22 = "../assets/hotels/sl4.jpg";
    this.img23 = "../assets/hotels/sl5.jpg";
    this.img24 = "../assets/hotels/sl6.jpg";
    this.p4 = "Vous pouvez bénéficier d'une réduction Genius dans l'établissement Hôtel La Résidence ! Connectez-vous pour économiser.Doté d'un restaurant, l'Hôtel La Résidence est situé à Saint-Louis."
    
    
    this.img25 = "../assets/hotels/calaos.jpg";
    this.img26 = "../assets/hotels/calaos2.jpg";
    this.img27 = "../assets/hotels/calaos3.jpg";
    this.img28 = "../assets/hotels/calaos4.jpg";
    this.img29 = "../assets/hotels/calaos5.jpg";
    this.img30 = "../assets/hotels/calaos5.jpg";
    this.p5 = "Les Calaos du Saloum Hôtel à Sokone Situé à Sokone, l'établissement Les Calaos du Saloum propose un restaurant, un bar, un salon commun et un jardin. Il propose des chambres familiales et une terrasse bien exposée.  "

    this.img31 = "../assets/hotels/lagon1.jpg";
    this.img32 = "../assets/hotels/lagon2.jpg";
    this.img33 = "../assets/hotels/lagon3.jpg";
    this.img34 = "../assets/hotels/lagon4.jpg";
    this.img35 = "../assets/hotels/lagon5.jpg";
    this.img36 = "../assets/hotels/lagon6.jpg";
    this.p6 = "Cet établissement est à 1 minute à pied de la plage. Situé juste en face de la mer, l'Hotel Lagon 2 se trouve dans le centre de Dakar. Elle a Une connexion Wi-Fi gratuite, une réception ouverte 24h/24 et un bar spacieux avec des lumières colorées etc."

    this.img37 = "../assets/hotels/nopalou1.jpg";
    this.img38 = "../assets/hotels/nopalou2.jpg";
    this.img39 = "../assets/hotels/nopalou3.jpg";
    this.img40 = "../assets/hotels/nopalou4.jpg";
    this.img41 = "../assets/hotels/nopalou5.jpg";
    this.img42 = "../assets/hotels/nopalou6.jpg";
    this.p7 = "Situé à Somone, le Sama Nopalu Kaï propose un restaurant, une piscine extérieure, un bar et un salon commun. Il possède un jardin et une terrasse. Vous profiterez d'un service d'étage et d'une connexion Wi-Fi gratuite dans l'ensemble des locaux. "

    this.img43 = "../assets/hotels/git.jpg";
    this.img44 = "../assets/hotels/git2.jpg";
    this.img45 = "../assets/hotels/git3.jpg";
    this.img46 = "../assets/hotels/git4.jpg";
    this.img47 = "../assets/hotels/git5.jpg";
    this.img48 = "../assets/hotels/git6.jpg";
    this.p8 = "Cet établissement est à 11 minutes à pied de la plage. Situé à Niaga, à 2,7 km du Dakar Rally Finish, le Gîte du Lac propose un restaurant, un parking privé gratuit, un bar et un jardin. Le bureau d'excursions pourra vous aider à organiser vos sorties."
  }


}
