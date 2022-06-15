import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionTravelComponent } from './region-travel.component';

describe('RegionTravelComponent', () => {
  let component: RegionTravelComponent;
  let fixture: ComponentFixture<RegionTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
