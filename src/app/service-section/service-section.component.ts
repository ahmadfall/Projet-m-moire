import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss']
})
export class ServiceSectionComponent implements OnInit {

  h1!: string;
  cardServiceText1!: string;
  cardServiceText2!: string;
  cardServiceText3!: string;
  sImg1!: string;
  sImg2!: string;
  sImg3!: string;
  serviceImg!: string;

  constructor() { }

  ngOnInit(): void {
    this.h1 = "Services";
    this.cardServiceText1 = "Vous avez envie, de vous détendtre dans  des hôtels au meilleur prix à  travers le Sénégal cliquez sur la photo pour découvrir. ";
    this.cardServiceText2 =  "Sénégal Travel vous permet de de réserver votre billet en ligne et même de le payer sans se déplacer.";
    this.cardServiceText3 =  "Sénégal Travel vous propose un service de location de voiture, qui offre aux clients la possibilité d'effectuer des déplacements professionnels ou promenade en famille.";
    this.sImg1 = "../assets/hotel.png";
    this.sImg2 = "../assets/reservation.jpg";
    this.sImg3 = "../assets/location voiture.png";
    this.serviceImg ="../assets/service.jpg";
    
  }

}
