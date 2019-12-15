import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentHeadComponent } from './assessment-head.component';

describe('AssessmentHeadComponent', () => {
  let component: AssessmentHeadComponent;
  let fixture: ComponentFixture<AssessmentHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
