import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyhelpComponent } from './dailyhelp.component';

describe('DailyhelpComponent', () => {
  let component: DailyhelpComponent;
  let fixture: ComponentFixture<DailyhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyhelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
