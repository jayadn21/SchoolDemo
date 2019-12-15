import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicativeGradeComponent } from './indicative-grade.component';

describe('IndicativeGradeComponent', () => {
  let component: IndicativeGradeComponent;
  let fixture: ComponentFixture<IndicativeGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicativeGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicativeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
