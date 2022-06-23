import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialPostComponent } from './testimonial-post.component';

describe('TestimonialPostComponent', () => {
  let component: TestimonialPostComponent;
  let fixture: ComponentFixture<TestimonialPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
