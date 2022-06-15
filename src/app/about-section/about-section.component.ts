import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

       h2txt!: string;
      aboutTxt!: string;
      aboutImg!: string;

  constructor() { }

  ngOnInit(): void {
        this.h2txt = "Qui Sommes Nous";
        this.aboutTxt = "Bienvenue sur SENEGAL TRAVEL, Lorsque nous nous sommes lancés dans ce projet, nous avions de grands rêves. Notre passion pour le Web implique que nous ne fournissions que le top du top à nos clients, afin de satisfaire pleinement leurs besoins.Avec notre équipe de passionnés, nous voulons être les esprits créatifs qui vous donnent le sourire. C’est pourquoi nous mettons tout en oeuvre cette application Web pour vous apporter le meilleur.";
        this.aboutImg = "../assets/d.jpg";
  }

}
