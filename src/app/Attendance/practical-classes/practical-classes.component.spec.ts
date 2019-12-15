import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalClassesComponent } from './practical-classes.component';

describe('PracticalClassesComponent', () => {
  let component: PracticalClassesComponent;
  let fixture: ComponentFixture<PracticalClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticalClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
