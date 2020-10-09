import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversdetailsComponent } from './driversdetails.component';

describe('DriversdetailsComponent', () => {
  let component: DriversdetailsComponent;
  let fixture: ComponentFixture<DriversdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
