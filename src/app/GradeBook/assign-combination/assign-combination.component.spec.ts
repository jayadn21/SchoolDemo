import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCombinationComponent } from './assign-combination.component';

describe('AssignCombinationComponent', () => {
  let component: AssignCombinationComponent;
  let fixture: ComponentFixture<AssignCombinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignCombinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
