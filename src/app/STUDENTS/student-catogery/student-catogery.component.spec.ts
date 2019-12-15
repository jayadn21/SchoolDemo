import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCatogeryComponent } from './student-catogery.component';

describe('StudentCatogeryComponent', () => {
  let component: StudentCatogeryComponent;
  let fixture: ComponentFixture<StudentCatogeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCatogeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCatogeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
