import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidateAssessmentComponent } from './consolidate-assessment.component';

describe('ConsolidateAssessmentComponent', () => {
  let component: ConsolidateAssessmentComponent;
  let fixture: ComponentFixture<ConsolidateAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidateAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidateAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
