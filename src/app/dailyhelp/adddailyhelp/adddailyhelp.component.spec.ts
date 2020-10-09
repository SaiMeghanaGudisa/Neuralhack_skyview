import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddailyhelpComponent } from './adddailyhelp.component';

describe('AdddailyhelpComponent', () => {
  let component: AdddailyhelpComponent;
  let fixture: ComponentFixture<AdddailyhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddailyhelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddailyhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
