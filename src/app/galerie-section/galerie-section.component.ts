import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerie-section',
  templateUrl: './galerie-section.component.html',
  styleUrls: ['./galerie-section.component.scss']
})
export class GalerieSectionComponent implements OnInit {
      

        animImg!: string;
        img1!: string;
        img2!: string;
        img3!: string;
        img4!: string;
        img5!: string;
        img6!: string;
        img7!: string;
        img8!: string;
        img9!: string;
        img10!: string;
        img11!: string;
        img12!: string;


  constructor() { }

  ngOnInit(): void {
    this.animImg = "../assets/animate.gif";
    this.img1 = "../assets/casa.jpg";
    this.img2 = "../assets/dagana.jpg";
    this.img3 = "../assets/velingara.jpg";
    this.img4 = "../assets/louga.jpg";
    this.img5 = "../assets/fatick1.jpg";
    this.img6 = "../assets/medina.jpg";
    this.img7 = "../assets/kdou.jpg";
    this.img8 = "../assets/joal.jpg";
    this.img9 = "../assets/slt.jpg";
    this.img10 = "../assets/touba.jpg";
    this.img11 = "../assets/tamba.jpg";
    this.img12 = "../assets/saly.jpg";
  

}
}
