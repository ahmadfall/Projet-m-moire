import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {
 
  adminProfile!: FormGroup;
  titleOptions2 = ['à deux étages','Standard','midibus'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.adminProfile = this.fb.group({
      firstame: [''],
      name: ['user',Validators.required],
      tel: [],
      placeNumber:[],
      starTime: [],
      title2:['standard'],
     
  });


  }

  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn('donné du formulaire',this.adminProfile.value);
  }

}
