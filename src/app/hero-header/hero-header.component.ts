import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {
  
  h2!: string;
  buttonText!: string;

  constructor() { }

  ngOnInit(): void {

    this.h2 = "Voyager Partout au  Sénégal";
    this.buttonText = "Découvrir";
  }

}
