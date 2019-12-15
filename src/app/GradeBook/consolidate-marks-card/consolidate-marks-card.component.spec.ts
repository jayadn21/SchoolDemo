import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidateMarksCardComponent } from './consolidate-marks-card.component';

describe('ConsolidateMarksCardComponent', () => {
  let component: ConsolidateMarksCardComponent;
  let fixture: ComponentFixture<ConsolidateMarksCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidateMarksCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidateMarksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
