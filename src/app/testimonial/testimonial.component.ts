import { Component, OnInit } from '@angular/core';
import { CrudService } from '../_services/crud.service';
import { PostTestimonial } from '../_services/post-testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  testimonials: PostTestimonial[] =[];
   h1Tes!: string;
        pTes!: string;
        h3!: string;
  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
   // this.getTestimonial()
    this.h1Tes = " TEMOIGNAGE ";
    this.pTes ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet consequuntur non fuga doloremque earum, quibusdam enim adipisci voluptate,  ex sit omnis neque distinctio libero exercitationem? Neque aliquam necessitatibus cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus evenietconsequuntur non fuga doloremque earum, quibusdam enim adipisci voluptate,   ex sit omnis neque distinctio libero exercitationem? Neque aliquam necessitatibus  cupiditate?";
    this.h3 = "Nom";
  }
  
   getTestimonial(): void {
    this.crudService.getTestimonial().subscribe((data: PostTestimonial[])=>{
      this.testimonials = data;
      console.log(this.testimonials);
    })

}
}
