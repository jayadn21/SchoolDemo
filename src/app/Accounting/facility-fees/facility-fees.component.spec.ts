import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityFeesComponent } from './facility-fees.component';

describe('FacilityFeesComponent', () => {
  let component: FacilityFeesComponent;
  let fixture: ComponentFixture<FacilityFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
