import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_services/crud.service';

@Component({
  selector: 'app-testimonial-post',
  templateUrl: './testimonial-post.component.html',
  styleUrls: ['./testimonial-post.component.scss']
})
export class TestimonialPostComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private crudService: CrudService,
    private router:Router

  ) { }
  
  form = this.fb.group({
    nbre_place_reserve: ['',
    [Validators.required]
 ],
 
  });
   
  get f(){
    return this.form.controls;
  }

  ngOnInit(): void {
  }
  submit() {
  
    this.crudService.Testimonial(this.form.value)
    .subscribe(data => 
      {
        console.log(data);
        
      },
      );
    console.log('Post created successfully!');
    this.router.navigateByUrl('dashboard');
    
    
    
  }

}
