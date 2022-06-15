import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudService } from '../_services/crud.service';
import { PostTestimonial } from '../_services/post-testimonial';

@Component({
  selector: 'app-post-testimonial',
  templateUrl: './post-testimonial.component.html',
  styleUrls: ['./post-testimonial.component.scss']
})
export class PostTestimonialComponent implements OnInit {
  posts: PostTestimonial[]= [];

  constructor(private crudService: CrudService) { }
  
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
   
  
  });
   
  get f(){
    return this.form.controls;
  }
  ngOnInit(): void {
  }
  submit(){
    
      this.crudService.Testimonial(this.form.value)
      .subscribe(PostTestimonial => this.posts.push(PostTestimonial));
      console.log('Post created successfully!');
     
      
      
    



}
}
