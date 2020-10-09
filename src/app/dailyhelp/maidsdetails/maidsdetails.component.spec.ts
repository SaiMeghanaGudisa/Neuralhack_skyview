import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidsdetailsComponent } from './maidsdetails.component';

describe('MaidsdetailsComponent', () => {
  let component: MaidsdetailsComponent;
  let fixture: ComponentFixture<MaidsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaidsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
