import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCombinationMappComponent } from './subject-combination-mapp.component';

describe('SubjectCombinationMappComponent', () => {
  let component: SubjectCombinationMappComponent;
  let fixture: ComponentFixture<SubjectCombinationMappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectCombinationMappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCombinationMappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
