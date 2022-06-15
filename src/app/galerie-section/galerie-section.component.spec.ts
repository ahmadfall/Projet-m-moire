import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieSectionComponent } from './galerie-section.component';

describe('GalerieSectionComponent', () => {
  let component: GalerieSectionComponent;
  let fixture: ComponentFixture<GalerieSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalerieSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
