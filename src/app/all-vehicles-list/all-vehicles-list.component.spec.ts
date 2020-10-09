import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVehiclesListComponent } from './all-vehicles-list.component';

describe('AllVehiclesListComponent', () => {
  let component: AllVehiclesListComponent;
  let fixture: ComponentFixture<AllVehiclesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVehiclesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVehiclesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
