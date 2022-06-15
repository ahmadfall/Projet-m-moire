import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
   h1Tes!: string;
        pTes!: string;
        h3!: string;
        h4!: string;
  constructor() { }

  ngOnInit(): void {
    this.h1Tes = " TEMOIGNAGE ";
    this.pTes ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet consequuntur non fuga doloremque earum, quibusdam enim adipisci voluptate,  ex sit omnis neque distinctio libero exercitationem? Neque aliquam necessitatibus cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus evenietconsequuntur non fuga doloremque earum, quibusdam enim adipisci voluptate,   ex sit omnis neque distinctio libero exercitationem? Neque aliquam necessitatibus  cupiditate?";
    this.h3 = "Nom";
    this.h4 = "Profession";
  }

}
